'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getCharacter, getAllCharacters } from '@/data/characters'
import { ArrowLeft, RotateCw } from 'lucide-react'

export default function CharacterDetail() {
  const params = useParams()
  const character = getCharacter(params.id as string)
  const [isFlipped, setIsFlipped] = useState(false)
  const [activeTab, setActiveTab] = useState<'lore' | 'abilities' | 'connections'>('lore')

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20 mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-400">Character Not Found</h1>
          <Link href="/roster" className="text-yellow-400 hover:text-yellow-300">
            ← Back to Roster
          </Link>
        </div>
      </div>
    )
  }

  const rarityColors: Record<string, string> = {
    LEGENDARY: 'from-yellow-400 to-orange-500',
    EPIC: 'from-purple-400 to-pink-500',
    RARE: 'from-blue-400 to-cyan-500',
    COMMON: 'from-gray-400 to-gray-500',
  }

  const rarityBorderColors: Record<string, string> = {
    LEGENDARY: 'border-yellow-500/50',
    EPIC: 'border-purple-500/50',
    RARE: 'border-blue-500/50',
    COMMON: 'border-gray-500/50',
  }

  const connectedCharacters = getAllCharacters().filter(char =>
    character.connections.includes(char.id)
  )

  return (
    <div className="min-h-screen px-4 py-20 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/roster"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Roster
        </Link>

        {/* Character Card */}
        <div className={`card-flip mb-12 ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-flip-inner relative min-h-[600px]">
            {/* Front of Card */}
            <div className="card-front">
              <div className={`relative p-8 rounded-xl bg-gradient-to-br from-black via-gray-900 to-black border-4 ${rarityBorderColors[character.rarity]} shadow-2xl`}>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${rarityColors[character.rarity]} text-black text-sm font-bold mb-4`}>
                      {character.rarity}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                      {character.name}
                    </h1>
                    <p className="text-xl text-gray-400">{character.title}</p>
                  </div>
                  <div className="text-6xl float-animation">{character.avatar}</div>
                </div>

                {/* Level and Class */}
                <div className="flex gap-6 mb-6">
                  <div className="px-4 py-2 bg-white/10 rounded-lg">
                    <span className="text-gray-400 text-sm">Level</span>
                    <div className="text-2xl font-bold text-yellow-400">{character.level}</div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg flex-1">
                    <span className="text-gray-400 text-sm">Class</span>
                    <div className="text-xl font-bold">{character.class}</div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg">
                    <span className="text-gray-400 text-sm">Alignment</span>
                    <div className="text-lg font-bold text-purple-400">{character.alignment}</div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                  {Object.entries(character.stats).map(([stat, value]) => (
                    <div key={stat} className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-xs text-gray-400 uppercase mb-1">{stat}</div>
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="w-full h-2 bg-black/50 rounded-full mt-2">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${rarityColors[character.rarity]}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Elements and Equipment */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-yellow-400">Elements</h3>
                    <div className="flex flex-wrap gap-2">
                      {character.elements.map((element) => (
                        <span
                          key={element}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300"
                        >
                          {element}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-purple-400">Special Traits</h3>
                    <div className="space-y-2">
                      {character.specialTraits.slice(0, 2).map((trait) => (
                        <div key={trait.name} className="text-sm">
                          <span className="text-purple-400 font-semibold">{trait.name}:</span>{' '}
                          <span className="text-gray-400">{trait.effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signature Moves */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3 text-orange-400">Signature Moves</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {character.signatureMoves.map((move) => (
                      <div key={move.name} className="p-3 rounded-lg bg-white/5">
                        <div className="font-semibold text-orange-400">{move.name}</div>
                        <div className="text-xs text-gray-500">{move.type}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Catchphrases */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-yellow-400">Legendary Catchphrases</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {character.catchphrases.slice(0, 5).map((phrase, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/5">
                        <div className="text-xs text-gray-500 mb-1">{phrase.situation}</div>
                        <div className="text-sm italic text-gray-300">"{phrase.line}"</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flip Button */}
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCw className="w-5 h-5" />
                  Flip Card - View Details
                </button>
              </div>
            </div>

            {/* Back of Card */}
            <div className="card-back">
              <div className={`relative p-8 rounded-xl bg-gradient-to-br from-black via-gray-900 to-black border-4 ${rarityBorderColors[character.rarity]} shadow-2xl h-full`}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold gradient-text">{character.name}</h2>
                  <div className="text-4xl">{character.avatar}</div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('lore')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === 'lore'
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    Lore
                  </button>
                  <button
                    onClick={() => setActiveTab('abilities')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === 'abilities'
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    Abilities
                  </button>
                  <button
                    onClick={() => setActiveTab('connections')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === 'connections'
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-white/10 text-gray-400 hover:bg-white/20'
                    }`}
                  >
                    Network
                  </button>
                </div>

                {/* Tab Content */}
                <div className="max-h-96 overflow-y-auto pr-2">
                  {activeTab === 'lore' && (
                    <div className="space-y-4">
                      {character.lore.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-yellow-400 mb-2">Backstory</h4>
                        <p className="text-gray-300 leading-relaxed">{character.backstory}</p>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-green-400 mb-2">Strengths</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {character.strengths.map((strength, idx) => (
                            <li key={idx}>{strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-red-400 mb-2">Weaknesses</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {character.weaknesses.map((weakness, idx) => (
                            <li key={idx}>{weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'abilities' && (
                    <div className="space-y-6">
                      {Object.entries(character.abilityCategories).map(([category, abilities]) => (
                        <div key={category}>
                          <h4 className="text-lg font-bold text-yellow-400 mb-3">{category}</h4>
                          <ul className="space-y-2">
                            {abilities.map((ability, idx) => (
                              <li key={idx} className="p-3 rounded-lg bg-white/5 text-gray-300">
                                {ability}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <h4 className="text-lg font-bold text-purple-400 mb-3">All Special Traits</h4>
                        <div className="space-y-2">
                          {character.specialTraits.map((trait) => (
                            <div key={trait.name} className="p-3 rounded-lg bg-white/5">
                              <div className="font-semibold text-purple-400">{trait.name}</div>
                              <div className="text-sm text-gray-400">{trait.effect}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'connections' && (
                    <div>
                      <p className="text-gray-400 mb-6">
                        {character.name} is connected to these characters in the hyperverse:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {connectedCharacters.map((connChar) => (
                          <Link
                            key={connChar.id}
                            href={`/character/${connChar.id}`}
                            className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-3xl">{connChar.avatar}</div>
                              <div>
                                <div className="font-bold">{connChar.name}</div>
                                <div className="text-xs text-gray-500">{connChar.class}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Flip Back Button */}
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-black font-bold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCw className="w-5 h-5" />
                  Flip Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
