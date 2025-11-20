import { Character } from '@/types/character'

// Midjourney style presets
export const stylePresets = {
  neochibi: 'neochibi anime style, piksar-esque, ghibli inspired, cute 3d render',
  cyberpunk: 'cyberpunk aesthetic, neon lights, futuristic, digital art, high tech',
  remilady: 'remilady style, neochibi, anime aesthetic, pastel colors, kawaii',
  realistic: 'photorealistic, highly detailed, professional photography, 8k',
  '3d': '3d render, pixar style, smooth surfaces, vibrant colors, professional lighting',
  noir: 'film noir style, black and white, dramatic lighting, vintage aesthetic',
} as const

export type StylePreset = keyof typeof stylePresets

// Generate Midjourney prompt for a character
export function generateCharacterPrompt(
  character: Character,
  style: StylePreset = 'neochibi',
  additionalDetails?: string
): string {
  const baseStyle = stylePresets[style]

  // Build character description
  const description = []

  // Add character name and class
  description.push(`${character.name}, ${character.class}`)

  // Add visual elements based on character
  if (character.elements && character.elements.length > 0) {
    description.push(`incorporating ${character.elements.join(', ')} elements`)
  }

  // Add rarity-based quality
  const qualityMap = {
    LEGENDARY: 'masterpiece, ultra detailed, legendary quality',
    EPIC: 'highly detailed, epic composition',
    RARE: 'detailed, unique design',
    COMMON: 'clean design, simple composition'
  }
  description.push(qualityMap[character.rarity])

  // Combine everything
  const prompt = [
    description.join(', '),
    baseStyle,
    additionalDetails || '',
    '--ar 1:1 --v 6.0 --style raw'
  ].filter(Boolean).join(' ')

  return prompt
}

// Generate prompts for all characters
export function generateBatchPrompts(
  characters: Character[],
  style: StylePreset = 'neochibi'
): Record<string, string> {
  const prompts: Record<string, string> = {}

  characters.forEach(char => {
    prompts[char.id] = generateCharacterPrompt(char, style)
  })

  return prompts
}

// Character-specific prompt templates
export const characterPromptTemplates = {
  stanley: (style: StylePreset) =>
    `legendary black dwarf paladin warrior with golden armor and shield, mithril weapons glowing, heroic pose, ${stylePresets[style]} --ar 1:1 --v 6.0`,

  azoka: (style: StylePreset) =>
    `ethereal feminine AI oracle with glowing eyes, iridescent veil covering face, mystical aura, strategic commander aesthetic, ${stylePresets[style]} --ar 1:1 --v 6.0`,

  perceptron: (style: StylePreset) =>
    `sentient AI robot with brain motifs, neural network patterns visible, glowing blue circuits, analytical pose, ${stylePresets[style]} --ar 1:1 --v 6.0`,

  foolio: (style: StylePreset) =>
    `chaotic jester character with single large eye, colorful clown makeup, meme aesthetic, playful and chaotic energy, ${stylePresets[style]} --ar 1:1 --v 6.0`,

  sloppio: (style: StylePreset) =>
    `cute green blob creature with money symbols, NFT aesthetic, cryptocurrency theme, happy expression, ${stylePresets[style]} --ar 1:1 --v 6.0`,

  clippio: (style: StylePreset) =>
    `friendly paperclip assistant character, animated style, helpful pose, video editing theme with film reels, ${stylePresets[style]} --ar 1:1 --v 6.0`,
}

// Discord webhook integration (optional)
export async function sendToDiscord(prompt: string, webhookUrl?: string) {
  if (!webhookUrl) {
    throw new Error('Discord webhook URL not configured')
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `/imagine ${prompt}`,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send to Discord')
    }

    return { success: true }
  } catch (error) {
    console.error('Discord webhook error:', error)
    return { success: false, error }
  }
}

// Image variations generator
export function generateVariations(basePrompt: string, count: number = 4): string[] {
  const variations = []
  const modifiers = [
    'dynamic angle',
    'close up portrait',
    'full body shot',
    'dramatic lighting',
    'soft lighting',
    'action pose',
    'calm expression',
    'intense expression',
  ]

  for (let i = 0; i < count; i++) {
    const modifier = modifiers[i % modifiers.length]
    variations.push(`${basePrompt}, ${modifier}`)
  }

  return variations
}

// Prompt optimizer
export function optimizePrompt(prompt: string): string {
  // Remove duplicate words
  const words = prompt.split(' ')
  const unique = Array.from(new Set(words))

  // Add quality enhancers if not present
  let optimized = unique.join(' ')

  if (!optimized.includes('--ar')) {
    optimized += ' --ar 1:1'
  }

  if (!optimized.includes('--v')) {
    optimized += ' --v 6.0'
  }

  return optimized
}
