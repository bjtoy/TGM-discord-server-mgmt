# UnderbossHQ

Parent repository for the **UnderbossHQ** platform — Discord OAuth dashboard, Express API, and bot integration.

This repo holds **planning docs**, **docker-compose**, and workspace config. Application code lives in separate repositories (cloned into `backend/` and `dashboard/` locally).

## Repositories

| Component | Repository | Deploy |
|-----------|------------|--------|
| **Parent (this repo)** | [UnderbossHQ](https://github.com/bjtoy/UnderbossHQ) | Docs & orchestration |
| **Backend API** | [backend](https://github.com/bjtoy/backend) | Render / Railway / Docker |
| **Dashboard (React)** | [tgm-dashboard](https://github.com/bjtoy/tgm-dashboard) | [tgm-dashboard.onrender.com](https://tgm-dashboard.onrender.com) |

> **Note:** If GitHub still shows the old name `TGM-discord-server-mgmt`, rename it under **Settings → Repository name → `UnderbossHQ`**. GitHub redirects the old URL automatically.

## Local development

### Prerequisites

- Node.js 20+
- PostgreSQL (or Neon) for the backend `DATABASE_URL`
- Discord application with OAuth2 redirect configured

### 1. Clone all three repos

```bash
git clone https://github.com/bjtoy/UnderbossHQ.git
cd UnderbossHQ

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

See [render.yaml](./render.yaml) for a Render blueprint. Production checklist:

1. Backend `NODE_ENV=production` (required for cross-origin cookies)
2. Backend `startCommand`: `npx prisma migrate deploy && npm start`
3. Dashboard build env: `VITE_API_URL=https://<backend-host>`
4. Discord OAuth redirect: `https://<backend-host>/api/auth/callback`
5. Backend `DISCORD_TOKEN` for live kick/ban, guild stats, and the bot worker
6. Dashboard static site: SPA fallback via `dashboard/public/_redirects`

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
UnderbossHQ/
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
