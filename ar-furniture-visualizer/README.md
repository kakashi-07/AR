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
