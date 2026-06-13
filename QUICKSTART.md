# Grand Mafia Bot - Quick Start Guide

Get your Discord bot running in **5 minutes**.

## Prerequisites

- Node.js 18+ installed
- Discord Bot Token
- Discord Server ID (Guild ID)

## Step 1: Get Your Discord Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name it "Grand Mafia Bot"
3. Go to "Bot" section and click "Add Bot"
4. Under "TOKEN", click "Copy"
5. **Save this token safely** - you'll need it in Step 3

### Enable Required Intents

In the Developer Portal, under your bot's "Bot" section:
- Toggle ON: **Message Content Intent**
- Toggle ON: **Server Members Intent**

## Step 2: Add Bot to Your Server

1. In Developer Portal, go to "OAuth2" → "URL Generator"
2. Select scopes: `bot`
3. Select permissions:
   - Send Messages
   - Manage Messages
   - Kick Members
   - Ban Members
   - Moderate Members
   - Read Message History
4. Copy the generated URL and open it in your browser
5. Select your server and authorize

## Step 3: Setup and Run

```bash
# 1. Navigate to bot directory
cd grand-mafia-bot

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env

# 4. Edit .env with your credentials
nano .env
# Add:
# DISCORD_TOKEN=your_token_from_step_1
# GUILD_ID=your_server_id
# OWNER_ID=your_user_id

# 5. Start the bot
npm start
```

You should see:
```
✅ Bot logged in as YourBotName#0000
🎮 Grand Mafia Bot is ready to serve!
```

## Step 4: Test Your Bot

In your Discord server, try these commands:

```
/help                           # See all commands
/ping                          # Check bot latency
/translate text:hello language:es  # Translate to Spanish
/serverinfo                    # View server info
```

## Common Issues

### "Bot is not responding"
- Check bot is running: `npm start`
- Verify bot token is correct in `.env`
- Ensure bot has permissions in your server
- Check Message Content Intent is enabled

### "Invalid token"
- Copy token again from Developer Portal
- Don't include quotes in `.env`
- Token should look like: `abc123def456ghi789`

### "Bot can't see messages"
- Enable Message Content Intent in Developer Portal
- Restart bot after enabling

## Next Steps

1. **Customize the bot**: Edit commands in `src/commands/`
2. **Deploy to cloud**: Follow [DEPLOYMENT.md](DEPLOYMENT.md)
3. **Access web dashboard**: Open `web/index.html` in a browser
4. **Add more commands**: Create new files in `src/commands/`

## Web Dashboard

The bot includes a web control panel for moderators:

1. Open `web/index.html` in your browser
2. Manage announcements, moderation, and members
3. View server statistics and activity logs

## Commands Reference

| Command | Description | Usage |
|---------|-------------|-------|
| `/help` | Show all commands | `/help` |
| `/ping` | Check bot latency | `/ping` |
| `/serverinfo` | Server information | `/serverinfo` |
| `/translate` | Translate text | `/translate text:hello language:es` |
| `/announce` | Post announcement | `/announce title:Update message:Content` |
| `/kick` | Kick user | `/kick user:@User reason:Reason` |
| `/ban` | Ban user | `/ban user:@User reason:Reason` |
| `/mute` | Mute user | `/mute user:@User duration:300` |
| `/warn` | Warn user | `/warn user:@User reason:Reason` |

## Support

- **README.md**: Full documentation
- **DEPLOYMENT.md**: Cloud deployment guide
- **src/commands/**: Command source code
- **web/**: Web dashboard files

## Troubleshooting

```bash
# View bot logs
npm start

# Stop bot
Ctrl + C

# Restart bot
npm start

# Check Node.js version
node --version
```

---

**You're all set!** Your Grand Mafia Bot is now running. 🎮⚔️

For more details, see [README.md](README.md)
