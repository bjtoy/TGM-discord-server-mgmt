# UnderbossHQ Deployment Guide

Primary platform: **Render** (see [render.yaml](./render.yaml)).

Full step-by-step checklist: **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)**

## Architecture

| Component | Render type | Notes |
|-----------|-------------|--------|
| Backend API | Web Service (`backend/`) | Express + sessions + Prisma |
| Discord bot | Same backend process | Starts when `DISCORD_TOKEN` is set |
| Dashboard | Static Site (`dashboard/`) | Vite React SPA |
| Database | PostgreSQL | `DATABASE_URL` via Render database |

## One-time setup

1. Connect GitHub repos to Render (or use Blueprint from parent repo)
2. Create PostgreSQL database → link `DATABASE_URL` to backend
3. Set backend secrets (see LAUNCH_CHECKLIST.md)
4. Set dashboard build env: `VITE_API_URL`
5. Add Discord OAuth redirect to backend callback URL

## Deploy commands

**Backend** (automatic on git push if connected):

```bash
npm run start:deploy   # verify-env → migrate → start
```

**Dashboard** (build on push):

```bash
npm run build          # verify-env → vite build
```

**Slash commands** (run once after backend is live):

```bash
cd backend
npm run deploy-commands
```

## Health & monitoring

```bash
curl https://<backend-host>/api/health
node scripts/monitor-health.js https://<backend-host> --watch
```

Admin dashboard → **System Logs** for health summary and error records.

## Docker (local / self-hosted)

```bash
docker compose up --build
```

- Backend: http://localhost:3000
- Dashboard: http://localhost:8080

Requires `backend/.env` before running.

## Custom domain + SSL

Render issues free SSL for `*.onrender.com` and custom domains. See LAUNCH_CHECKLIST.md §6.
