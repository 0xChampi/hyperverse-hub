# 🎨 Midjourney Integration - Quick Setup

Complete automation pipeline to generate and download character art from Midjourney.

## 🚀 Quick Start (5 Minutes)

### 1. Create Discord Bot (2 min)

1. Go to https://discord.com/developers/applications
2. Create New Application → "Hyperverse Bot"
3. Go to "Bot" → Add Bot → Copy Token
4. Enable these intents:
   - ✅ Message Content Intent
   - ✅ Guild Messages

### 2. Invite Bot to Server (1 min)

1. OAuth2 → URL Generator
2. Select: `bot` scope
3. Permissions: Read Messages, Read Message History
4. Open generated URL → Invite to your server

### 3. Configure (1 min)

```bash
# Copy example env
cp .env.example .env

# Edit .env and add:
# DISCORD_BOT_TOKEN=your_token_here
# MIDJOURNEY_CHANNEL_ID=your_channel_id
```

Get Channel ID: Right-click Discord channel → Copy Channel ID

### 4. Start (1 min)

```bash
# Terminal 1: Start bot
npm run bot

# Terminal 2: Start website
npm run dev
```

## 🎯 Full Workflow

### Generate → Download → Use

1. **Studio Page** → Generate prompts
   - Visit: http://localhost:3001/studio
   - Select character and style
   - Copy prompt

2. **Discord** → Create images
   - Go to your Midjourney channel
   - `/imagine prompt: [paste prompt]`
   - Wait 30-60 seconds

3. **Bot** → Auto-downloads
   - Detects Midjourney images
   - Saves to `public/characters/midjourney/`
   - Names by character: `stanley_timestamp.png`

4. **Update Site** → Use new images
   - Edit `data/characters.ts`
   - Update `image` path to new file
   - Refresh browser

## 📁 Where Images Go

```
public/
└── characters/
    └── midjourney/
        ├── stanley_1731850000_0.png
        ├── azoka_1731850123_0.png
        ├── perceptron_1731850234_0.png
        └── downloads.json  (log)
```

## 🔑 Character Detection

Bot automatically detects characters from prompt keywords:

| Character | Keywords |
|-----------|----------|
| Stanley | stanley, paladin, dwarf, mithril |
| Azoka | azoka, oracle, feminine ai, veil |
| Perceptron | perceptron, neural, pattern |
| Foolio | foolio, jester, one eyed |
| Sloppio | sloppio, blob, green |
| Clippio | clippio, paperclip, assistant |

## 📊 Console Output

When working correctly, you'll see:

```bash
✅ Midjourney Auto-Download Bot is ready!
📱 Logged in as Hyperverse Bot#1234
👀 Monitoring channel: 123456789
💾 Saving images to: /path/to/public/characters/midjourney

🎨 Waiting for Midjourney images...

🎨 New Midjourney image detected!
📝 Prompt: legendary black dwarf paladin warrior...
🎭 Detected character: stanley
⬇️  Downloading: stanley_1731850000_0.png...
✅ Saved: /path/to/stanley_1731850000_0.png
✨ Downloaded 1 image(s)
```

## 🛠️ Troubleshooting

### Bot won't connect
- Check token in `.env` is correct
- Verify intents are enabled in Developer Portal

### Bot doesn't see messages
- Enable Message Content Intent
- Verify bot has channel permissions
- Check CHANNEL_ID matches

### Images not downloading
- Check internet connection
- Verify folder write permissions
- Look for error messages in console

## 📚 Detailed Docs

For complete setup instructions, see:
- **Bot Setup**: `bot/README.md`
- **Project Overview**: `README.md`
- **Deployment**: `DEPLOYMENT-GUIDE.md`

## 💡 Pro Tips

1. **Generate in batches** - Use "Batch All Characters" for consistency
2. **Same style preset** - Keep visual coherence across characters
3. **Multiple variations** - Generate 4 variations, pick the best
4. **Review downloads.json** - Track all generated images
5. **Keep bot running** - Let it capture everything while you work

## 🎉 Ready to Go!

You now have:
- ✅ Prompt generator UI
- ✅ Discord bot for auto-download
- ✅ Automatic character detection
- ✅ Organized file structure
- ✅ Complete logging

Start generating your character art! 🚀

---

**Next Steps:**
1. `npm run bot` - Start the auto-downloader
2. Visit Studio - Generate your first prompt
3. Use Midjourney - Create the image
4. Watch the magic - Bot downloads automatically
