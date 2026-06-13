# Grand Mafia Bot - Deployment Guide

This guide covers deploying the Grand Mafia Bot to various cloud platforms for 24/7 uptime.

## Table of Contents

1. [Manus Cloud Computer (Recommended)](#manus-cloud-computer-recommended)
2. [Docker Deployment](#docker-deployment)
3. [Railway.app](#railwayapp)
4. [Heroku](#heroku)
5. [DigitalOcean](#digitalocean)
6. [AWS EC2](#aws-ec2)
7. [Troubleshooting](#troubleshooting)

---

## Manus Cloud Computer (Recommended)

Manus Cloud Computer provides a managed Ubuntu server perfect for running Discord bots 24/7.

### Prerequisites
- Manus account
- Discord bot token
- SSH access to cloud computer

### Deployment Steps

1. **Connect to your cloud computer:**
   ```bash
   ssh ubuntu@your-cloud-computer-ip
   ```

2. **Clone the bot repository:**
   ```bash
   git clone https://github.com/yourusername/grand-mafia-bot.git
   cd grand-mafia-bot
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create .env file:**
   ```bash
   cp .env.example .env
   # Edit .env with your Discord credentials
   nano .env
   ```

5. **Install PM2 for process management:**
   ```bash
   npm install -g pm2
   ```

6. **Start the bot with PM2:**
   ```bash
   pm2 start src/index.js --name "grand-mafia-bot"
   pm2 startup
   pm2 save
   ```

7. **Verify the bot is running:**
   ```bash
   pm2 status
   pm2 logs grand-mafia-bot
   ```

### Updating the Bot

```bash
cd grand-mafia-bot
git pull origin main
npm install
pm2 restart grand-mafia-bot
```

### Monitoring

```bash
# View logs
pm2 logs grand-mafia-bot

# Monitor resource usage
pm2 monit

# Restart on crash
pm2 restart grand-mafia-bot
```

---

## Docker Deployment

Deploy the bot using Docker for consistency across environments.

### Prerequisites
- Docker installed
- Docker Hub account (optional, for image hosting)

### Step 1: Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY src ./src

# Run the bot
CMD ["node", "src/index.js"]
```

### Step 2: Build Docker Image

```bash
docker build -t grand-mafia-bot:latest .
```

### Step 3: Run Docker Container

```bash
docker run -d \
  --name grand-mafia-bot \
  --env-file .env \
  --restart unless-stopped \
  grand-mafia-bot:latest
```

### Step 4: Verify Container

```bash
docker ps
docker logs grand-mafia-bot
```

### Docker Compose (Optional)

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  bot:
    build: .
    container_name: grand-mafia-bot
    env_file: .env
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
```

Run with:
```bash
docker-compose up -d
```

---

## Railway.app

Railway provides simple cloud deployment with GitHub integration.

### Step 1: Connect GitHub

1. Go to [Railway.app](https://railway.app)
2. Sign up or log in
3. Click "New Project"
4. Select "Deploy from GitHub"
5. Connect your GitHub account and select the bot repository

### Step 2: Configure Environment Variables

1. In Railway dashboard, go to "Variables"
2. Add all variables from `.env.example`:
   - `DISCORD_TOKEN`
   - `GUILD_ID`
   - `OWNER_ID`
   - etc.

### Step 3: Create Procfile

Create a `Procfile` in your project root:

```
worker: node src/index.js
```

### Step 4: Deploy

Push to GitHub:
```bash
git push origin main
```

Railway will automatically deploy on push.

---

## Heroku

Deploy to Heroku with automatic deployments from GitHub.

### Step 1: Create Heroku App

```bash
heroku create grand-mafia-bot
```

### Step 2: Set Environment Variables

```bash
heroku config:set DISCORD_TOKEN=your_token
heroku config:set GUILD_ID=your_guild_id
heroku config:set OWNER_ID=your_user_id
# ... set other variables
```

### Step 3: Create Procfile

```
worker: node src/index.js
```

### Step 4: Deploy

```bash
git push heroku main
```

### Step 5: View Logs

```bash
heroku logs --tail
```

---

## DigitalOcean

Deploy on a DigitalOcean Droplet for full control.

### Step 1: Create Droplet

1. Go to DigitalOcean and create a new Droplet
2. Select Ubuntu 22.04 LTS
3. Choose appropriate size (2GB RAM minimum)
4. Add SSH key
5. Create droplet

### Step 2: Connect and Setup

```bash
ssh root@your_droplet_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install PM2
npm install -g pm2
```

### Step 3: Deploy Bot

```bash
cd /opt
git clone https://github.com/yourusername/grand-mafia-bot.git
cd grand-mafia-bot
npm install

# Create .env file
cp .env.example .env
nano .env
```

### Step 4: Start with PM2

```bash
pm2 start src/index.js --name "grand-mafia-bot"
pm2 startup
pm2 save
```

### Step 5: Setup Firewall

```bash
ufw allow 22/tcp
ufw enable
```

---

## AWS EC2

Deploy on AWS EC2 for enterprise-grade hosting.

### Step 1: Launch EC2 Instance

1. Go to AWS Console
2. Launch new EC2 instance
3. Select Ubuntu 22.04 LTS AMI
4. Choose t3.micro or larger
5. Configure security group to allow SSH (port 22)
6. Create/use existing key pair
7. Launch instance

### Step 2: Connect to Instance

```bash
ssh -i your-key.pem ubuntu@your-instance-public-ip
```

### Step 3: Install Dependencies

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

### Step 4: Deploy Bot

```bash
git clone https://github.com/yourusername/grand-mafia-bot.git
cd grand-mafia-bot
npm install
cp .env.example .env
# Edit .env with your credentials
nano .env
```

### Step 5: Start Bot

```bash
pm2 start src/index.js --name "grand-mafia-bot"
pm2 startup
pm2 save
```

### Step 6: Configure Security Group

In AWS Console:
1. Go to Security Groups
2. Edit inbound rules
3. Allow SSH (port 22) from your IP

---

## Troubleshooting

### Bot Not Starting

```bash
# Check logs
pm2 logs grand-mafia-bot

# Check if port is in use
lsof -i :3000

# Restart bot
pm2 restart grand-mafia-bot
```

### Discord Connection Issues

- Verify bot token is correct
- Check Discord Developer Portal for bot permissions
- Ensure Message Content Intent is enabled
- Verify bot has proper server permissions

### High Memory Usage

```bash
# Monitor memory
pm2 monit

# Check Node.js processes
ps aux | grep node

# Restart bot
pm2 restart grand-mafia-bot
```

### Environment Variables Not Loading

```bash
# Verify .env file exists
cat .env

# Check PM2 environment
pm2 show grand-mafia-bot

# Restart with env file
pm2 restart grand-mafia-bot --update-env
```

### Logs Not Appearing

```bash
# View PM2 logs
pm2 logs grand-mafia-bot

# View system logs
journalctl -u pm2-ubuntu -n 50

# Check Node.js error output
pm2 show grand-mafia-bot
```

---

## Monitoring and Maintenance

### Regular Updates

```bash
# Update Node.js dependencies
npm update

# Update PM2
npm install -g pm2@latest

# Restart bot
pm2 restart grand-mafia-bot
```

### Backup Configuration

```bash
# Backup .env file
cp .env .env.backup

# Backup logs
tar -czf logs-backup.tar.gz ~/.pm2/logs/
```

### Health Checks

```bash
# Verify bot is running
pm2 status

# Check system resources
top

# Monitor network
netstat -an | grep ESTABLISHED
```

---

## Support

For deployment issues:
1. Check the troubleshooting section above
2. Review bot logs: `pm2 logs grand-mafia-bot`
3. Check Discord bot permissions in Developer Portal
4. Verify all environment variables are set correctly
5. Ensure your hosting provider allows outbound connections to Discord API

---

**Last Updated:** May 2026
**Bot Version:** 1.0.0
