# UnderbossHQ — Launch Checklist (Section L)

Use this checklist when deploying to Render. Check off each item as you complete it.

**Repos:** push latest `backend` and `dashboard` to GitHub before deploying.

---

## 1. Production database

- [ ] Create a PostgreSQL database on Render (or use the `underbosshq-db` entry in [render.yaml](./render.yaml))
- [ ] Copy the **Internal Database URL** (or external if required) into backend env as `DATABASE_URL`
- [ ] Confirm migrations run on deploy (`npm run start:deploy` runs `prisma migrate deploy`)

**Verify:**

```bash
curl https://<backend-host>/api/health
```

Expect `"database": "connected"`.

---

## 2. Backend deployment

- [ ] Render **Web Service** → root directory: `backend`
- [ ] **Build command:** `npm install && npx prisma generate`
- [ ] **Start command:** `npm run start:deploy`
- [ ] **Health check path:** `/api/health`

**Required environment variables:**

| Variable | Value |
|----------|--------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `DATABASE_URL` | PostgreSQL connection string |
| `SESSION_SECRET` | 32+ random characters |
| `FRONTEND_URL` | `https://tgm-dashboard.onrender.com` (or your dashboard URL) |
| `DISCORD_CLIENT_ID` | Discord Developer Portal |
| `DISCORD_CLIENT_SECRET` | Discord Developer Portal |
| `DISCORD_CALLBACK_URL` | `https://<backend-host>/api/auth/callback` |
| `DISCORD_TOKEN` | Bot token (enables bot worker) |
| `DISCORD_GUILD_ID` | Your server ID |
| `ADMIN_DISCORD_IDS` | Your Discord user ID |

**Verify:**

```bash
cd backend && npm run verify-env
curl https://<backend-host>/api/health
curl https://<backend-host>/
```

---

## 3. Dashboard deployment

- [ ] Render **Static Site** → root directory: `dashboard`
- [ ] **Build command:** `npm install && npm run build`
- [ ] **Publish directory:** `dist`

**Build environment:**

| Variable | Value |
|----------|--------|
| `VITE_API_URL` | `https://<backend-host>` (no trailing slash) |

SPA routing is handled by `dashboard/public/_redirects` and Render rewrite rules in [render.yaml](./render.yaml).

**Verify:** open dashboard URL → login with Discord → select guild → member home loads.

---

## 4. Bot deployment

The bot **runs inside the backend process** when `DISCORD_TOKEN` is set. No separate Render service is required.

- [ ] `DISCORD_TOKEN` set on backend service
- [ ] Bot invited to your Discord server with required permissions (Manage Server for invites, Kick/Ban for moderation)
- [ ] **Message Content Intent** enabled in Discord Developer Portal (if using message handlers)
- [ ] Register slash commands after first deploy:

```bash
cd backend
# Set DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID in .env locally
npm run deploy-commands
```

**Verify:** Admin Dashboard → Bot Status shows **Online**; run `/ping` in Discord.

---

## 5. Discord OAuth

In [Discord Developer Portal](https://discord.com/developers/applications) → OAuth2 → Redirects, add:

```
https://<backend-host>/api/auth/callback
```

**Not** the dashboard URL. OAuth hits the backend only.

**Verify:** log in from the dashboard production URL; session persists after refresh.

---

## 6. Domain + SSL

Render provides free SSL for `*.onrender.com` automatically.

**Optional custom domain:**

- [ ] Dashboard: Render → Static Site → Settings → Custom Domains → add domain → follow DNS instructions
- [ ] Backend: Render → Web Service → Settings → Custom Domains (if exposing API on custom domain)
- [ ] Update `FRONTEND_URL`, `DISCORD_CALLBACK_URL`, and `VITE_API_URL` to match new URLs
- [ ] Rebuild dashboard after changing `VITE_API_URL`
- [ ] Update Discord OAuth redirect URI

SSL certificates are issued automatically once DNS validates.

---

## 7. Launch checklist (final smoke test)

- [ ] `/api/health` returns `"status": "healthy"`
- [ ] Discord login works
- [ ] Guild selection works
- [ ] Member home loads profile
- [ ] Guides list and view render styled content
- [ ] Announcements list loads
- [ ] Moderator tools accessible (if mod/admin)
- [ ] Admin → Users, Invites, Settings, System Logs load
- [ ] Sync Roles on Admin Dashboard completes
- [ ] Bot responds to `/ping`

---

## 8. Post-launch monitoring

**Manual health check:**

```bash
curl https://<backend-host>/api/health
```

**Automated monitor (run locally or on a cron job):**

```bash
node scripts/monitor-health.js https://<backend-host>
```

**In-dashboard:**

- Admin → **System Logs** shows health summary and persisted system errors
- Render Dashboard → each service → **Logs** for runtime output

**Render alerts (recommended):**

- [ ] Enable deploy notifications (email/Slack)
- [ ] Watch for failed health checks on the backend service

---

## Quick reference URLs

| Service | Default Render URL |
|---------|-------------------|
| Dashboard | https://tgm-dashboard.onrender.com |
| Backend | https://tgm-backend.onrender.com |
| Health | https://tgm-backend.onrender.com/api/health |

Replace with your actual service URLs if renamed.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Login redirects but session lost | Check `FRONTEND_URL`, `NODE_ENV=production`, cookies (`SameSite=None`, `Secure`) |
| CORS errors | Backend `FRONTEND_URL` must exactly match dashboard origin |
| Bot offline | Set `DISCORD_TOKEN`; check Render logs for bot startup errors |
| Database errors | Verify `DATABASE_URL`; run migrations; check `/api/health` |
| 404 on dashboard routes | Confirm SPA rewrite / `_redirects` |
| Build fails on dashboard | Run `npm run verify-env`; set `VITE_API_URL` in Render build env |

---

**Section L complete when all items above are checked.**
