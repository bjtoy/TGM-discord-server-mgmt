# TGM Discord Server Management

Parent repository for the **UnderbossHQ** control panel — Discord OAuth dashboard, Express API, and (future) bot integration for The Grand Mafia server management.

This repo holds **planning docs**, **docker-compose**, and workspace config. Application code lives in separate repositories (cloned into `backend/` and `dashboard/` locally).

## Repositories

| Component | Repository | Deploy |
|-----------|------------|--------|
| **Parent (this repo)** | [TGM-discord-server-mgmt](https://github.com/bjtoy/TGM-discord-server-mgmt) | Docs & orchestration |
| **Backend API** | [backend](https://github.com/bjtoy/backend) | Render / Railway / Docker |
| **Dashboard (React)** | [tgm-dashboard](https://github.com/bjtoy/tgm-dashboard) | [tgm-dashboard.onrender.com](https://tgm-dashboard.onrender.com) |

## Local development

### Prerequisites

- Node.js 20+
- PostgreSQL (or Neon) for the backend `DATABASE_URL`
- Discord application with OAuth2 redirect configured

### 1. Clone all three repos

```bash
git clone https://github.com/bjtoy/TGM-discord-server-mgmt.git
cd TGM-discord-server-mgmt

git clone https://github.com/bjtoy/backend.git backend
git clone https://github.com/bjtoy/tgm-dashboard.git dashboard
```

### 2. Backend

```bash
cd backend
cp .env.example .env
# Edit .env — see below
npm install
npm run dev
```

Runs on **http://localhost:3000**

### 3. Dashboard

```bash
cd dashboard
cp .env.example .env
# VITE_API_URL=http://localhost:3000
npm install
npm run dev
```

Runs on **http://localhost:5173**

### 4. Discord OAuth redirect URIs

Add these in the [Discord Developer Portal](https://discord.com/developers/applications) → OAuth2 → Redirects:

- Local: `http://localhost:3000/api/auth/callback`
- Production: your backend callback URL (not the dashboard URL)

### Environment variables (minimum)

**Backend** (`backend/.env`):

| Variable | Example |
|----------|---------|
| `PORT` | `3000` |
| `FRONTEND_URL` | `http://localhost:5173` |
| `DISCORD_CLIENT_ID` | from Discord portal |
| `DISCORD_CLIENT_SECRET` | from Discord portal |
| `DISCORD_CALLBACK_URL` | `http://localhost:3000/api/auth/callback` |
| `SESSION_SECRET` | random string |
| `DATABASE_URL` | PostgreSQL connection string |
| `ADMIN_DISCORD_IDS` | your Discord user ID |
| `DISCORD_TOKEN` | bot token (optional; enables live guild stats) |

**Dashboard** (`dashboard/.env`):

| Variable | Example |
|----------|---------|
| `VITE_API_URL` | `http://localhost:3000` |

Production: set `FRONTEND_URL=https://tgm-dashboard.onrender.com` on the backend and `VITE_API_URL` to your backend URL on the dashboard build.

### Docker (optional)

From this directory:

```bash
docker compose up --build
```

- Backend: http://localhost:3000  
- Dashboard: http://localhost:8080  

Ensure `backend/.env` exists before running compose.

## Project layout

```
TGM-discord-server-mgmt/
├── README.md                 ← you are here
├── docker-compose.yml
├── UnderbossHQ roadmap.txt   ← full task list
├── Roadmap ext.txt           ← alphabetical progress tracker
├── backend/                  ← separate git repo
└── dashboard/                ← separate git repo
```

## Roadmap status

See [Roadmap ext.txt](./Roadmap%20ext.txt) for section-by-section progress (auth, roles, bot integration, deployment).

## Security

Never commit `.env` files. They are gitignored in all repos.
