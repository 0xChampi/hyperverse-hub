const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.MIDJOURNEY_CHANNEL_ID;
const MIDJOURNEY_BOT_ID = '936929561302675456'; // Official Midjourney bot ID

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Character name mapping for auto-detection
const characterKeywords = {
  stanley: ['stanley', 'paladin', 'dwarf', 'mithril'],
  azoka: ['azoka', 'oracle', 'feminine ai', 'veil'],
  perceptron: ['perceptron', 'neural', 'pattern recognition'],
  foolio: ['foolio', 'jester', 'one eyed', 'one-eyed'],
  sloppio: ['sloppio', 'blob', 'green'],
  clippio: ['clippio', 'paperclip', 'assistant'],
};

// Ensure download directory exists
const downloadDir = path.join(__dirname, '..', 'public', 'characters', 'midjourney');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

// Download image from URL
async function downloadImage(url, filename) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    const filepath = path.join(downloadDir, filename);
    const writer = fs.createWriteStream(filepath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve(filepath));
      writer.on('error', reject);
    });
  } catch (error) {
    console.error('Error downloading image:', error.message);
    throw error;
  }
}

// Detect character from prompt
function detectCharacter(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  for (const [charId, keywords] of Object.entries(characterKeywords)) {
    if (keywords.some(keyword => lowerPrompt.includes(keyword))) {
      return charId;
    }
  }

  return 'unknown';
}

// Log downloaded images to a JSON file for tracking
function logDownload(characterId, filename, prompt) {
  const logFile = path.join(downloadDir, 'downloads.json');
  let logs = [];

  if (fs.existsSync(logFile)) {
    logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
  }

  logs.push({
    characterId,
    filename,
    prompt,
    timestamp: new Date().toISOString(),
  });

  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
}

// Bot ready event
client.once('ready', () => {
  console.log('✅ Midjourney Auto-Download Bot is ready!');
  console.log(`📱 Logged in as ${client.user.tag}`);
  console.log(`👀 Monitoring channel: ${CHANNEL_ID}`);
  console.log(`💾 Saving images to: ${downloadDir}`);
  console.log('\n🎨 Waiting for Midjourney images...\n');
});

// Monitor messages
client.on('messageCreate', async (message) => {
  // Only process messages from Midjourney bot in the specified channel
  if (message.author.id !== MIDJOURNEY_BOT_ID) return;
  if (CHANNEL_ID && message.channel.id !== CHANNEL_ID) return;

  // Check if message has attachments (images)
  if (message.attachments.size === 0) return;

  // Get the prompt from the message content or embeds
  let prompt = message.content;
  if (!prompt && message.embeds.length > 0) {
    prompt = message.embeds[0].description || message.embeds[0].title || '';
  }

  console.log('🎨 New Midjourney image detected!');
  console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);

  // Detect which character this is for
  const characterId = detectCharacter(prompt);
  console.log(`🎭 Detected character: ${characterId}`);

  // Download all attachments
  let downloadCount = 0;
  for (const [, attachment] of message.attachments) {
    if (!attachment.contentType?.startsWith('image/')) continue;

    const timestamp = Date.now();
    const ext = path.extname(attachment.name) || '.png';
    const filename = `${characterId}_${timestamp}_${downloadCount}${ext}`;

    try {
      console.log(`⬇️  Downloading: ${filename}...`);
      const filepath = await downloadImage(attachment.url, filename);
      console.log(`✅ Saved: ${filepath}`);

      // Log the download
      logDownload(characterId, filename, prompt);

      downloadCount++;
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error.message);
    }
  }

  console.log(`✨ Downloaded ${downloadCount} image(s)\n`);
});

// Error handling
client.on('error', (error) => {
  console.error('Discord client error:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});

// Login to Discord
if (!BOT_TOKEN) {
  console.error('❌ Error: DISCORD_BOT_TOKEN not found in .env file');
  console.error('Please add your bot token to the .env file');
  process.exit(1);
}

client.login(BOT_TOKEN).catch((error) => {
  console.error('❌ Failed to login:', error.message);
  console.error('Please check your DISCORD_BOT_TOKEN in .env');
  process.exit(1);
});
