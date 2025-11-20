# 🤖 Midjourney Auto-Download Bot

Automatically monitors your Discord channel and downloads Midjourney-generated images to your project.

## 🎯 What It Does

1. **Monitors Discord** - Watches a specific channel for Midjourney bot messages
2. **Detects Images** - Identifies when Midjourney generates new images
3. **Auto-Downloads** - Saves images to `public/characters/midjourney/`
4. **Smart Naming** - Detects character names from prompts and organizes files
5. **Logs Everything** - Keeps track of all downloads in `downloads.json`

## 📋 Setup Instructions

### Step 1: Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"**
3. Name it "Hyperverse MJ Downloader" (or anything you like)
4. Go to **"Bot"** tab in the left sidebar
5. Click **"Add Bot"** → Confirm
6. Under **"Privileged Gateway Intents"**, enable:
   - ✅ Message Content Intent
   - ✅ Guild Messages
7. Click **"Reset Token"** and copy your bot token
   - ⚠️ **IMPORTANT**: Keep this token secret!

### Step 2: Invite Bot to Your Server

1. In Developer Portal, go to **"OAuth2"** → **"URL Generator"**
2. Select scopes:
   - ✅ `bot`
3. Select bot permissions:
   - ✅ Read Messages/View Channels
   - ✅ Read Message History
4. Copy the generated URL at the bottom
5. Open URL in browser and invite bot to your server
6. Select the server where you'll use Midjourney

### Step 3: Get Your Channel ID

1. In Discord, enable Developer Mode:
   - Settings → Advanced → Developer Mode (turn ON)
2. Right-click the channel where you'll use Midjourney
3. Click **"Copy Channel ID"**
4. Save this ID for the next step

### Step 4: Configure Environment Variables

1. In the project root, create a `.env` file:

```bash
# Copy the example file
cp .env.example .env
```

2. Edit `.env` and add your credentials:

```env
DISCORD_BOT_TOKEN=your_bot_token_here
MIDJOURNEY_CHANNEL_ID=your_channel_id_here
```

Replace:
- `your_bot_token_here` with the token from Step 1
- `your_channel_id_here` with the ID from Step 3

### Step 5: Start the Bot

```bash
npm run bot
```

You should see:
```
✅ Midjourney Auto-Download Bot is ready!
📱 Logged in as Hyperverse MJ Downloader#1234
👀 Monitoring channel: 1234567890
💾 Saving images to: /path/to/hyperverse/public/characters/midjourney
🎨 Waiting for Midjourney images...
```

## 🎨 Usage Workflow

### Full Automated Workflow

1. **Start the bot** in one terminal:
   ```bash
   npm run bot
   ```

2. **Start the dev server** in another terminal:
   ```bash
   npm run dev
   ```

3. **Go to Studio page**: http://localhost:3001/studio

4. **Generate prompts** for a character (e.g., Stanley)

5. **Go to Discord** and paste the prompt:
   ```
   /imagine prompt: legendary black dwarf paladin warrior with golden armor...
   ```

6. **Wait for Midjourney** to generate (30-60 seconds)

7. **Bot automatically downloads** the image to:
   ```
   public/characters/midjourney/stanley_1731850000_0.png
   ```

8. **Check the downloads** in the folder or `downloads.json` log

### Character Detection

The bot automatically detects which character an image is for based on keywords in the prompt:

- **stanley** → Keywords: stanley, paladin, dwarf, mithril
- **azoka** → Keywords: azoka, oracle, feminine ai, veil
- **perceptron** → Keywords: perceptron, neural, pattern recognition
- **foolio** → Keywords: foolio, jester, one eyed
- **sloppio** → Keywords: sloppio, blob, green
- **clippio** → Keywords: clippio, paperclip, assistant

If no character is detected, images are saved with prefix `unknown_`.

## 📁 File Structure

```
bot/
├── midjourney-bot.js       # Main bot script
└── README.md               # This file

public/
└── characters/
    └── midjourney/         # Downloaded images go here
        ├── stanley_1731850000_0.png
        ├── azoka_1731850123_0.png
        ├── downloads.json   # Log of all downloads
        └── ...
```

## 📊 Download Log Format

`downloads.json` tracks every download:

```json
[
  {
    "characterId": "stanley",
    "filename": "stanley_1731850000_0.png",
    "prompt": "legendary black dwarf paladin warrior...",
    "timestamp": "2025-11-17T10:30:00.000Z"
  }
]
```

## 🔧 Troubleshooting

### Bot won't start

**Error**: "DISCORD_BOT_TOKEN not found"
- Solution: Make sure `.env` file exists with your bot token

**Error**: "Failed to login: Invalid token"
- Solution: Reset your bot token in Discord Developer Portal

### Bot doesn't see messages

**Problem**: Bot online but not detecting Midjourney images
- Check that bot has permissions in the channel
- Verify **Message Content Intent** is enabled in Developer Portal
- Make sure you're using Midjourney in the correct channel

### Images not downloading

**Problem**: Bot detects images but download fails
- Check internet connection
- Verify write permissions for `public/characters/midjourney/`
- Check console for error messages

### Wrong character detection

**Problem**: Images saved with wrong character name
- Update the prompt to include character-specific keywords
- Edit `characterKeywords` in `bot/midjourney-bot.js` to add more keywords

## ⚙️ Advanced Configuration

### Monitor All Channels

Remove or comment out the channel ID check in `.env`:
```env
# MIDJOURNEY_CHANNEL_ID=  (leave blank or remove)
```

Bot will monitor all channels it has access to.

### Custom Download Location

Edit `midjourney-bot.js` line 31:
```javascript
const downloadDir = path.join(__dirname, '..', 'public', 'your-custom-folder');
```

### Add More Character Keywords

Edit `midjourney-bot.js` lines 16-23:
```javascript
const characterKeywords = {
  stanley: ['stanley', 'paladin', 'dwarf', 'mithril', 'your-keyword'],
  // ... add more characters or keywords
};
```

## 🛡️ Security Notes

- Never commit `.env` file to Git (already in `.gitignore`)
- Keep your bot token secret
- Don't share your token in Discord messages or screenshots
- If token is exposed, reset it immediately in Developer Portal

## 📝 Next Steps

After downloading images:

1. **Review images** in `public/characters/midjourney/`
2. **Select the best ones** for each character
3. **Update character data** in `data/characters.ts`:
   ```typescript
   stanley: {
     image: '/characters/midjourney/stanley_1731850000_0.png',
     // ...
   }
   ```
4. **Refresh the site** to see new images

## 🎉 Tips

- Generate multiple variations and pick the best
- Use consistent style presets across all characters
- Keep the bot running while generating multiple characters
- Check `downloads.json` to review all generated images
- Save favorites and delete unwanted images to save space

---

Need help? Check the main project README or create an issue.
