# The Grand Mafia Bot & Dashboard Deployment Guide

## Backend Setup
1. Copy `.env.example` to `.env`
2. Fill in Discord bot credentials and database settings
3. Run:
   npm install
   npm start

## Frontend Setup
1. Copy `.env.example` to `.env`
2. Run:
   npm install
   npm run build

## Docker Deployment
Run:
docker compose up --build -d

## Production Recommendations
- Use PostgreSQL in production
- Add HTTPS using Cloudflare or Nginx Proxy Manager
- Store secrets securely
- Enable Discord privileged intents
- Use PM2 or Docker restart policies
