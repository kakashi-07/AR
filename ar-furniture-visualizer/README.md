# 🛋️ AR Furniture Visualizer — Complete Project

A production-grade **Augmented Reality** furniture visualization web app.
Place 3D furniture models in your real room — live via phone camera (WebXR) or overlay on an uploaded room photo (desktop).

---

## ⚡ Quick Start

### 1 — Backend (Flask + SQLite)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

✅ Server starts at `http://localhost:8000`
✅ `ar_furniture.db` is **auto-created** on first run — no setup needed
✅ Demo account auto-created → `demo@arfurniture.com` / `demo123`

### 2 — Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

✅ App opens at `http://localhost:5173`

### 3 — Render Deploy

Local development works because Vite proxies `frontend -> backend` at `/api`.
On Render, that proxy does not exist unless both are served from the same backend service.

If you deploy **frontend and backend as separate Render services**:

1. Deploy the backend service from `backend/`
2. Set backend env vars:
   - `JWT_SECRET_KEY`
   - `PORT` is provided automatically by Render
   - `CORS_ORIGINS=https://your-frontend-site.onrender.com`
3. Deploy the frontend service from `frontend/`
4. Set frontend env var:
   - `VITE_API_BASE_URL=https://your-backend-service.onrender.com/api`
5. Keep the SPA rewrite file in `frontend/public/_redirects` so refreshing `/app` routes works on Render

If you deploy **a single backend service**:

1. Build the frontend first with `npm install && npm run build` inside `frontend/`
2. Deploy the backend from `backend/`
3. The Flask app will serve `frontend/dist` and `/api/*` from the same origin

---

## 🗂️ Project Structure

```
ar-furniture-visualizer/
├── frontend/                     React + Vite
│   └── src/
│       ├── components/ar/        DesktopARViewer + MobileARViewer
│       ├── components/furniture/ FurnitureCard + FurnitureCatalog
│       ├── components/ui/        ColorPicker, ScenePanel, Navbar, Cart
│       ├── contexts/             AuthContext (JWT) + SceneContext (AR state)
│       ├── data/                 furnitureData.js (12 items, 8 colors)
│       ├── pages/                LoginPage, TutorialPage, ARPage
│       └── utils/                furnitureBuilder.js (Three.js 3D models)
│
└── backend/                      Flask + SQLite
    ├── app.py                    Entire backend in ONE file ✅
    ├── requirements.txt          Only 5 packages
    └── .env.example
```

---

## ✨ Features

- 🔐 JWT Login & Signup
- 📖 6-step tutorial onboarding
- 🛋️ 12 furniture items with search & category filter
- 📷 Desktop: upload room photo + drag 3D models on top
- 📱 Mobile: WebXR live AR with floor detection + tap to place
- 🔄 Multi-object scene (unlimited items at once)
- 🎨 8 color finishes per item
- ↔️ Drag · Scale · Rotate · Delete each item
- 🛒 Cart simulation with mock order
- 💾 Save/load room layouts

## 🔗 API

| Method | URL | Auth |
|--------|-----|------|
| POST | `/api/auth/register` | ❌ |
| POST | `/api/auth/login` | ❌ |
| GET  | `/api/auth/me` | ✅ |
| GET  | `/api/catalog` | ❌ |
| GET/POST/DELETE | `/api/scenes` | ✅ |

**Tech:** React · Three.js · WebXR · Tailwind CSS · Flask · SQLite
