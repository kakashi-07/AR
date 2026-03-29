"""
app.py  ─  AR Furniture Visualizer  ·  Flask + SQLite backend
─────────────────────────────────────────────────────────────
Run:
    pip install -r requirements.txt
    python app.py

Database: SQLite  (ar_furniture.db is created automatically)
Auth:     JWT via flask-jwt-extended
CORS:     Enabled for localhost:5173 (Vite dev server)
─────────────────────────────────────────────────────────────
"""

import os
import json
import sqlite3
from datetime import timedelta, datetime

from dotenv import load_dotenv
from flask import Flask, request, jsonify, g, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from werkzeug.security import generate_password_hash, check_password_hash

# ── Load .env ──────────────────────────────────────────────────────────
load_dotenv()

BASE_DIR = os.path.dirname(__file__)
FRONTEND_DIST_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "frontend", "dist"))

# ── App setup ──────────────────────────────────────────────────────────
app = Flask(
    __name__,
    static_folder=FRONTEND_DIST_DIR if os.path.isdir(FRONTEND_DIST_DIR) else None,
    static_url_path="",
)

app.config["JWT_SECRET_KEY"]         = os.getenv("JWT_SECRET_KEY", "dev-secret-please-change")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=7)

jwt  = JWTManager(app)

cors_origins = os.getenv("CORS_ORIGINS", "*")
allowed_origins = "*" if cors_origins == "*" else [
    origin.strip() for origin in cors_origins.split(",") if origin.strip()
]
CORS(app, resources={r"/api/*": {"origins": allowed_origins}})

# ── SQLite helpers ─────────────────────────────────────────────────────
DB_PATH = os.path.join(BASE_DIR, "ar_furniture.db")

def get_db():
    """Return a per-request SQLite connection (stored on flask g)."""
    if "db" not in g:
        g.db = sqlite3.connect(DB_PATH, detect_types=sqlite3.PARSE_DECLTYPES)
        g.db.row_factory = sqlite3.Row   # rows behave like dicts
    return g.db

@app.teardown_appcontext
def close_db(exc=None):
    db = g.pop("db", None)
    if db:
        db.close()

def init_db():
    """Create tables if they don't exist and seed demo account."""
    with sqlite3.connect(DB_PATH) as db:
        db.executescript("""
            CREATE TABLE IF NOT EXISTS users (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                name       TEXT    NOT NULL,
                email      TEXT    NOT NULL UNIQUE,
                password   TEXT    NOT NULL,
                created_at TEXT    DEFAULT (datetime('now'))
            );

            CREATE TABLE IF NOT EXISTS scenes (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id    INTEGER NOT NULL,
                name       TEXT    NOT NULL DEFAULT 'My Room',
                objects    TEXT    NOT NULL DEFAULT '[]',
                created_at TEXT    DEFAULT (datetime('now')),
                updated_at TEXT    DEFAULT (datetime('now')),
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        """)

        # Seed demo account if not present
        existing = db.execute(
            "SELECT id FROM users WHERE email = ?", ("demo@arfurniture.com",)
        ).fetchone()

        if not existing:
            db.execute(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                (
                    "Demo User",
                    "demo@arfurniture.com",
                    generate_password_hash("demo123"),
                ),
            )
            db.commit()
            print("Demo account created -> demo@arfurniture.com / demo123")
        else:
            print("Database ready")


init_db()


# ── Helpers ────────────────────────────────────────────────────────────
def user_row_to_dict(row) -> dict:
    return {"id": row["id"], "name": row["name"], "email": row["email"]}

def bad(msg: str, code: int = 400):
    return jsonify({"detail": msg}), code

def ok(data: dict, code: int = 200):
    return jsonify(data), code


# ════════════════════════════════════════════════════════════════════════
#  AUTH ROUTES   /api/auth/*
# ════════════════════════════════════════════════════════════════════════

# ── POST /api/auth/register ────────────────────────────────────────────
@app.route("/api/auth/register", methods=["POST"])
def register():
    data = request.get_json(silent=True) or {}

    name     = (data.get("name") or "").strip()
    email    = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""

    # Validate
    if len(name) < 2:
        return bad("Name must be at least 2 characters.")
    if "@" not in email:
        return bad("Please provide a valid email address.")
    if len(password) < 6:
        return bad("Password must be at least 6 characters.")

    db = get_db()

    # Check duplicate
    if db.execute("SELECT id FROM users WHERE email = ?", (email,)).fetchone():
        return bad("An account with this email already exists.", 409)

    # Insert user
    db.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        (name, email, generate_password_hash(password)),
    )
    db.commit()

    user = db.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
    token = create_access_token(identity=str(user["id"]))

    return ok({"token": token, "user": user_row_to_dict(user)}, 201)


# ── POST /api/auth/login ───────────────────────────────────────────────
@app.route("/api/auth/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}

    email    = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""

    db   = get_db()
    user = db.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()

    if not user or not check_password_hash(user["password"], password):
        return bad("Incorrect email or password.", 401)

    token = create_access_token(identity=str(user["id"]))
    return ok({"token": token, "user": user_row_to_dict(user)})


# ── GET /api/auth/me ───────────────────────────────────────────────────
@app.route("/api/auth/me", methods=["GET"])
@jwt_required()
def me():
    user_id = int(get_jwt_identity())
    db      = get_db()
    user    = db.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    if not user:
        return bad("User not found.", 404)
    return ok(user_row_to_dict(user))


# ════════════════════════════════════════════════════════════════════════
#  SCENE ROUTES   /api/scenes/*
# ════════════════════════════════════════════════════════════════════════

# ── GET /api/scenes   (list user's saved scenes) ───────────────────────
@app.route("/api/scenes", methods=["GET"])
@jwt_required()
def list_scenes():
    user_id = int(get_jwt_identity())
    db      = get_db()
    rows    = db.execute(
        "SELECT * FROM scenes WHERE user_id = ? ORDER BY updated_at DESC",
        (user_id,),
    ).fetchall()

    scenes = [
        {
            "id":         row["id"],
            "name":       row["name"],
            "objects":    json.loads(row["objects"]),
            "created_at": row["created_at"],
            "updated_at": row["updated_at"],
        }
        for row in rows
    ]
    return ok({"scenes": scenes})


# ── POST /api/scenes   (save / create a scene) ────────────────────────
@app.route("/api/scenes", methods=["POST"])
@jwt_required()
def save_scene():
    user_id = int(get_jwt_identity())
    data    = request.get_json(silent=True) or {}

    name    = (data.get("name") or "My Room").strip()
    objects = data.get("objects") or []
    now     = datetime.utcnow().isoformat()

    db = get_db()
    cursor = db.execute(
        "INSERT INTO scenes (user_id, name, objects, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
        (user_id, name, json.dumps(objects), now, now),
    )
    db.commit()

    scene_id = cursor.lastrowid
    return ok(
        {
            "id":         scene_id,
            "name":       name,
            "objects":    objects,
            "created_at": now,
            "updated_at": now,
        },
        201,
    )


# ── DELETE /api/scenes/<id> ────────────────────────────────────────────
@app.route("/api/scenes/<int:scene_id>", methods=["DELETE"])
@jwt_required()
def delete_scene(scene_id):
    user_id = int(get_jwt_identity())
    db      = get_db()
    result  = db.execute(
        "DELETE FROM scenes WHERE id = ? AND user_id = ?",
        (scene_id, user_id),
    )
    db.commit()
    if result.rowcount == 0:
        return bad("Scene not found or not yours.", 404)
    return ok({"message": "Scene deleted."})


# ════════════════════════════════════════════════════════════════════════
#  CATALOG ROUTE   /api/catalog
# ════════════════════════════════════════════════════════════════════════
CATALOG = [
    {"id": "sofa_3seater", "name": "3-Seater Sofa",  "category": "seating",  "emoji": "🛋️", "description": "Classic 3-seat sofa with deep cushions.",    "colors": ["wood","gray","navy","beige","black"], "dimensions": {"w":1.8,"h":0.85,"d":0.85}, "price": "₹45,000", "popular": True},
    {"id": "loveseat",     "name": "Loveseat",         "category": "seating",  "emoji": "💑", "description": "Compact 2-seater for cozy corners.",          "colors": ["wood","gray","beige","navy","sage"],  "dimensions": {"w":1.3,"h":0.85,"d":0.82}, "price": "₹28,000", "popular": False},
    {"id": "armchair",     "name": "Armchair",          "category": "seating",  "emoji": "🪑", "description": "Elegant armchair with padded arms.",           "colors": ["wood","gray","walnut","navy","black"], "dimensions": {"w":0.75,"h":0.9,"d":0.8}, "price": "₹15,000", "popular": False},
    {"id": "coffee_table", "name": "Coffee Table",      "category": "tables",   "emoji": "🧋", "description": "Low table with shelf underneath.",             "colors": ["wood","walnut","white","black"],      "dimensions": {"w":1.1,"h":0.42,"d":0.55}, "price": "₹8,500",  "popular": True},
    {"id": "dining_table", "name": "Dining Table",      "category": "tables",   "emoji": "🍽️","description": "6-person solid wood dining table.",            "colors": ["wood","walnut","white","black"],      "dimensions": {"w":1.8,"h":0.76,"d":0.9},  "price": "₹32,000", "popular": True},
    {"id": "dining_chair", "name": "Dining Chair",      "category": "seating",  "emoji": "🪑", "description": "Modern chair with upholstered seat pad.",      "colors": ["wood","walnut","white","black","gray"], "dimensions": {"w":0.45,"h":0.9,"d":0.48}, "price": "₹4,500",  "popular": False},
    {"id": "bed_queen",    "name": "Queen Bed",          "category": "bedroom",  "emoji": "🛏️","description": "Queen-size platform bed + headboard.",         "colors": ["wood","walnut","gray","beige","black"], "dimensions": {"w":1.6,"h":0.9,"d":2.1},  "price": "₹55,000", "popular": True},
    {"id": "wardrobe",     "name": "Wardrobe",            "category": "storage",  "emoji": "🚪", "description": "3-door wardrobe with mirror panel.",           "colors": ["wood","walnut","white","black"],      "dimensions": {"w":1.5,"h":2.0,"d":0.55}, "price": "₹38,000", "popular": False},
    {"id": "bookshelf",    "name": "Bookshelf",           "category": "storage",  "emoji": "📚", "description": "5-tier open bookshelf.",                       "colors": ["wood","walnut","white","black"],      "dimensions": {"w":0.8,"h":1.8,"d":0.3},  "price": "₹12,000", "popular": False},
    {"id": "office_desk",  "name": "Office Desk",         "category": "work",     "emoji": "💻", "description": "Spacious L-shaped desk.",                      "colors": ["wood","walnut","white","black"],      "dimensions": {"w":1.4,"h":0.75,"d":0.7}, "price": "₹18,000", "popular": True},
    {"id": "tv_stand",     "name": "TV Stand",            "category": "storage",  "emoji": "📺", "description": "Media console with two door cabinets.",        "colors": ["wood","walnut","white","black"],      "dimensions": {"w":1.5,"h":0.5,"d":0.4},  "price": "₹14,000", "popular": False},
    {"id": "side_table",   "name": "Side Table",          "category": "tables",   "emoji": "🕯️","description": "Round bedside table with drawer.",             "colors": ["wood","walnut","white","black"],      "dimensions": {"w":0.45,"h":0.58,"d":0.45}, "price": "₹3,800", "popular": False},
]

@app.route("/api/catalog", methods=["GET"])
def catalog():
    category = request.args.get("category")
    items = CATALOG if not category or category == "all" else [
        i for i in CATALOG if i["category"] == category
    ]
    return ok({"items": items})


# ════════════════════════════════════════════════════════════════════════
#  HEALTH CHECK
# ════════════════════════════════════════════════════════════════════════
@app.route("/api/health", methods=["GET"])
def health():
    return ok({"status": "ok", "backend": "Flask + SQLite"})


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path.startswith("api/"):
        return bad("Not found.", 404)

    if not app.static_folder or not os.path.isdir(app.static_folder):
        return bad("Frontend build not found.", 404)

    requested_path = os.path.join(app.static_folder, path)
    if path and os.path.exists(requested_path):
        return send_from_directory(app.static_folder, path)

    return send_from_directory(app.static_folder, "index.html")


# ════════════════════════════════════════════════════════════════════════
#  JWT error handlers
# ════════════════════════════════════════════════════════════════════════
@jwt.unauthorized_loader
def unauthorized_callback(reason):
    return bad("Missing or invalid token. Please log in.", 401)

@jwt.expired_token_loader
def expired_callback(jwt_header, jwt_payload):
    return bad("Your session has expired. Please log in again.", 401)

@jwt.invalid_token_loader
def invalid_callback(reason):
    return bad("Invalid token.", 401)


# ════════════════════════════════════════════════════════════════════════
#  ENTRY POINT
# ════════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    print("Starting AR Furniture Visualizer Flask backend")
    port = int(os.getenv("PORT", os.getenv("FLASK_PORT", 8000)))
    debug = os.getenv("FLASK_ENV", "").lower() == "development"
    app.run(host="0.0.0.0", port=port, debug=debug)
