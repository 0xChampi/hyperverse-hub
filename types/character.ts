export interface CharacterStats {
  power: number
  defense: number
  speed: number
  charisma: number
  intelligence: number
  luck: number
}

export interface SpecialTrait {
  name: string
  effect: string
}

export interface SignatureMove {
  name: string
  type: string
  description?: string
}

export interface Catchphrase {
  situation: string
  line: string
}

export type Rarity = 'LEGENDARY' | 'EPIC' | 'RARE' | 'COMMON'
export type Status = 'active' | 'inactive' | 'coming-soon'

export interface Character {
  id: string
  name: string
  title: string
  avatar: string
  image?: string
  backgroundImage?: string
  level: number
  class: string
  alignment: string
  rarity: Rarity
  stats: CharacterStats
  specialTraits: SpecialTrait[]
  equipment: string[]
  elements: string[]
  signatureMoves: SignatureMove[]
  catchphrases: Catchphrase[]
  abilityCategories: Record<string, string[]>
  lore: string[]
  origins: string[]
  strengths: string[]
  weaknesses: string[]
  backstory: string
  connections: string[]
  status: Status
  series?: string
  primaryColor?: string
  secondaryColor?: string
}

export type Characters = Record<string, Character>
