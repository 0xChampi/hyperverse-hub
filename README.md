# 🛡️ THE HYPERVERSE

An interconnected digital universe of character collectibles fighting for digital freedom.

## 🌟 Overview

The Hyperverse is a React-based character showcase platform featuring:
- **Interactive Character Cards** - Trading card-style profiles with stats, abilities, and lore
- **Universe Lore** - Deep backstory connecting all characters
- **Character Roster** - Browse and filter legendary warriors
- **Network Visualization** - See how characters connect
- **Responsive Design** - Works beautifully on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd hyperverse-site

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
hyperverse-site/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Main navigation bar
│   │   └── Footer.jsx           # Site footer
│   ├── pages/
│   │   ├── HomePage.jsx         # Landing page
│   │   ├── HyperversePage.jsx   # Universe overview
│   │   ├── CharacterRoster.jsx  # Character grid
│   │   ├── CharacterDetail.jsx  # Individual character cards
│   │   └── LorePage.jsx         # Universe backstory
│   ├── data/
│   │   └── characters.js        # Character database
│   ├── App.jsx                  # Main app component
│   └── App.css                  # Global styles
├── package.json
└── README.md
```

## 🎨 Features

### Character Cards
- **Flippable 3D cards** with front/back views
- **Animated stats** with progress bars
- **Interactive tabs** for Lore, Abilities, Connections
- **Catchphrases** with situational context
- **Rarity-based styling** (Legendary, Epic, Rare, etc.)

### Character Database
All characters are defined in `src/data/characters.js`:
- Stanley Earl Leeroy Jenkins Jr - The legendary paladin
- Perceptron - Pattern recognition AI
- Azoka - AGI strategic coordinator
- Foolio - Meme generation master
- Sloppio - Monetization specialist
- Clippio - Video editing automator

### Navigation
- **Home** - Epic landing page with hero section
- **Hyperverse** - Universe overview and philosophy
- **Characters** - Filterable character roster
- **Lore** - Complete backstory and prophecy
- **Individual Character Pages** - Full collectible cards

## 🎯 Character Structure

Each character has:
```javascript
{
  id: 'unique-id',
  name: 'CHARACTER NAME',
  title: 'Role • Description',
  avatar: '🛡️', // emoji placeholder
  level: 99,
  class: 'Character Class',
  alignment: 'Chaotic Good',
  rarity: 'LEGENDARY',
  stats: { power, defense, speed, charisma, intelligence, luck },
  specialTraits: [{ name, effect }],
  equipment: ['item1', 'item2'],
  elements: ['Holy', 'Digital'],
  signatureMoves: [{ name, type }],
  catchphrases: [{ situation, line }],
  abilityCategories: { 'Category': ['ability1', 'ability2'] },
  lore: ['paragraph1', 'paragraph2'],
  origins: ['influence1', 'influence2'],
  strengths: ['strength1'],
  weaknesses: ['weakness1'],
  backstory: 'Full backstory text',
  connections: ['character-id-1', 'character-id-2']
}
```

## ➕ Adding New Characters

1. Open `src/data/characters.js`
2. Add new character object following the structure above
3. Character automatically appears in roster and can be navigated to via `/character/your-character-id`

Example:
```javascript
export const characters = {
  // ... existing characters
  
  newCharacter: {
    id: 'newcharacter',
    name: "NEW CHARACTER",
    title: "Role Description",
    avatar: "💎",
    // ... fill in all required fields
    status: "active"
  }
};
```

## 🎨 Customization

### Colors
Main theme colors in `App.css`:
```css
:root {
  --yellow-primary: #fbbf24;
  --orange-primary: #f97316;
  --purple-primary: #a855f7;
  --black-primary: #000000;
}
```

### Rarity Colors
Edit rarity styling in `CharacterRoster.jsx` and `CharacterDetail.jsx`:
```javascript
const rarityColors = {
  LEGENDARY: 'from-yellow-400 to-orange-500',
  EPIC: 'from-purple-400 to-pink-500',
  RARE: 'from-blue-400 to-cyan-500'
};
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

All character cards and navigation adapt to screen size.

## 🔧 Technologies

- **React 18** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 🚢 Deployment

### Static Hosting (Vercel, Netlify, etc.)
```bash
npm run build
# Deploy the 'dist' folder
```

### Environment Variables
Create `.env` file if needed:
```
VITE_APP_TITLE=The Hyperverse
VITE_API_URL=your-api-url
```

## 🎭 Character Series

### Memetic Warriors
Front-line fighters against surveillance capitalism
- Stanley Earl Leeroy Jenkins Jr (Legendary)

### ATTN.MONEY Swarm
Coordinated AI intelligence network
- Perceptron (Epic) - Pattern Recognition
- Azoka (Legendary) - AGI Coordinator
- Foolio (Rare) - Meme Master
- Sloppio (Epic) - Monetizer
- Clippio (Rare) - Video Editor

## 📜 Lore Integration

The site includes a complete lore system:
- **Genesis Story** - How the hyperverse began
- **Character Origins** - Individual backstories
- **The Mission** - Digital freedom philosophy
- **The Prophecy** - Future vision
- **Interconnections** - How characters relate

## 🤝 Contributing

To add your own character:
1. Follow the character structure in `characters.js`
2. Add character data
3. Optionally add connections to existing characters
4. Character appears automatically in roster

## 📄 License

MIT License - Feel free to use and modify

## 🙏 Credits

Created for **ATTN.MONEY**  
Powered by **Mithril** ⚡  

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Email: contact@attn.money
- Twitter: @attnmoney

---

**"At least we have mithril"** - Stanley Earl Leeroy Jenkins Jr the 4th of his name

🛡️ **Join the fight for digital freedom** 🛡️
