# UnderbossHQ

Parent repository for the **UnderbossHQ** platform — Discord OAuth dashboard, Express API, and bot integration.

This repo holds **planning docs**, **docker-compose**, and workspace config. Application code lives in separate repositories (cloned into `backend/` and `dashboard/` locally).

## Repositories

| Component | Repository | Deploy |
|-----------|------------|--------|
| **Parent (this repo)** | [UnderbossHQ](https://github.com/bjtoy/UnderbossHQ) | Docs & orchestration |
| **Backend API** | [UnderbossHQ-backend](https://github.com/bjtoy/UnderbossHQ-backend) | [underbosshq-backend.onrender.com](https://underbosshq-api-hp8b.onrender.com) |
| **Dashboard (React)** | [UnderbossHQ-dashboard](https://github.com/bjtoy/UnderbossHQ-dashboard) | [underbosshq-two.vercel.app](https://underbosshq-two.vercel.app) |

## Local development

### Prerequisites

- Node.js 20+
- PostgreSQL (or Neon) for the backend `DATABASE_URL`
- Discord application with OAuth2 redirect configured

### 1. Clone all three repos

```bash
git clone https://github.com/bjtoy/UnderbossHQ.git
cd UnderbossHQ

git clone https://github.com/bjtoy/UnderbossHQ-backend.git backend
git clone https://github.com/bjtoy/UnderbossHQ-dashboard.git dashboard
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

Production: set `FRONTEND_URL=https://underbosshq-two.vercel.app` on the backend and `VITE_API_URL=https://underbosshq-api-hp8b.onrender.com` on the dashboard build.

See [render.yaml](./render.yaml) for the Render blueprint and **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)** for the full Section L deployment guide.

Quick production checklist:

1. Push latest `backend` and `dashboard` to GitHub
2. Render: backend `startCommand` → `npm run start:deploy`, health check `/api/health`
3. Render: dashboard build env `VITE_API_URL=https://<backend-host>`
4. Set all backend secrets (see LAUNCH_CHECKLIST.md)
5. Discord OAuth redirect: `https://<backend-host>/api/auth/callback`
6. After deploy: `cd backend && npm run deploy-commands`
7. Monitor: `node scripts/monitor-health.js https://<backend-host> --watch`

### Discord bot worker

The bot starts automatically with the backend when `DISCORD_TOKEN` is set. It handles:

- Slash commands (`/ping`, `/kick`, `/ban`, `/warn`, etc.)
- Role sync on join, leave, and role changes
- Startup full sync when `DISCORD_GUILD_ID` is set

Register slash commands once after deploy:

```bash
cd backend
npm run deploy-commands
```

Use `DISCORD_GUILD_ID` in `.env` for fast guild-scoped command registration during development.

Enable the optional translate button handler with `BOT_ENABLE_TRANSLATE=true` (off by default).

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
UnderbossHQ/                  ← parent repo (open this folder in Cursor)
├── README.md
├── LAUNCH_CHECKLIST.md       ← Section L deploy checklist
├── DEPLOYMENT_GUIDE.md
├── docker-compose.yml
├── render.yaml
├── scripts/monitor-health.js
├── backend/                  ← separate git repo (API + bot)
└── dashboard/                ← separate git repo (React UI)
```

`docker-compose.yml` and `backend.code-workspace` expect the subfolders to be named **`backend`** and **`dashboard`**. If you renamed them locally, either rename back to match or update those config files.

## Security

Never commit `.env` files. They are gitignored in all repos.

## Roadmap status

See [Roadmap ext.txt](./Roadmap%20ext.txt) for section-by-section progress (auth, roles, bot integration, deployment).
