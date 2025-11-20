'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAllCharacters } from '@/data/characters'
import { Character } from '@/types/character'

export default function CharacterRoster() {
  const allCharacters = getAllCharacters()
  const [filter, setFilter] = useState<string>('all')

  const filteredCharacters = filter === 'all'
    ? allCharacters
    : allCharacters.filter(char => char.series === filter)

  const rarityColors: Record<string, string> = {
    LEGENDARY: 'from-yellow-400 to-orange-500',
    EPIC: 'from-purple-400 to-pink-500',
    RARE: 'from-blue-400 to-cyan-500',
    COMMON: 'from-gray-400 to-gray-500',
  }

  const rarityBorderColors: Record<string, string> = {
    LEGENDARY: 'border-yellow-500/50 hover:border-yellow-500 hover:shadow-yellow-500/50',
    EPIC: 'border-purple-500/50 hover:border-purple-500 hover:shadow-purple-500/50',
    RARE: 'border-blue-500/50 hover:border-blue-500 hover:shadow-blue-500/50',
    COMMON: 'border-gray-500/50 hover:border-gray-500 hover:shadow-gray-500/50',
  }

  return (
    <div className="min-h-screen px-4 py-20 mt-16">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Character Roster
          </h1>
          <p className="text-xl text-gray-400">
            Explore all legendary warriors of The Hyperverse
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/50'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            All Characters
          </button>
          <button
            onClick={() => setFilter('Memetic Warriors')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              filter === 'Memetic Warriors'
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/50'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Memetic Warriors
          </button>
          <button
            onClick={() => setFilter('ATTN.MONEY Swarm')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              filter === 'ATTN.MONEY Swarm'
                ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-black shadow-lg shadow-purple-500/50'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            ATTN.MONEY Swarm
          </button>
        </div>

        {/* Character Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((character: Character) => (
            <Link
              key={character.id}
              href={`/character/${character.id}`}
              className={`group relative overflow-hidden rounded-xl bg-black border-2 transition-all transform hover:scale-105 hover:shadow-2xl ${
                rarityBorderColors[character.rarity]
              }`}
            >
              {/* Background Image */}
              {character.backgroundImage && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  {character.backgroundImage.endsWith('.mp4') ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={character.backgroundImage} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={character.backgroundImage}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
              )}

              <div className="relative p-6">
                {/* Rarity Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${rarityColors[character.rarity]} text-black text-xs font-bold shadow-lg`}>
                  {character.rarity}
                </div>

                {/* Character Image or Avatar */}
                <div className="mb-4 relative h-48 flex items-center justify-center">
                  {character.image ? (
                    character.image.endsWith('.mp4') ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover rounded-lg"
                      >
                        <source src={character.image} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={character.image}
                        alt={character.name}
                        width={200}
                        height={200}
                        className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    )
                  ) : (
                    <div className="text-8xl float-animation">{character.avatar}</div>
                  )}
                </div>

                {/* Name and Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all">
                  {character.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {character.title}
                </p>

                {/* Level and Class */}
                <div className="flex gap-4 mb-4">
                  <div className="text-sm">
                    <span className="text-gray-500">Level:</span>{' '}
                    <span className="text-yellow-400 font-bold">{character.level}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Class:</span>{' '}
                    <span className="text-purple-400">{character.class}</span>
                  </div>
                </div>

                {/* Top Stats Preview */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 rounded bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30">
                    <div className="text-xs text-gray-500">POWER</div>
                    <div className="text-lg font-bold text-red-400">{character.stats.power}</div>
                  </div>
                  <div className="text-center p-2 rounded bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                    <div className="text-xs text-gray-500">INTEL</div>
                    <div className="text-lg font-bold text-blue-400">{character.stats.intelligence}</div>
                  </div>
                  <div className="text-center p-2 rounded bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                    <div className="text-xs text-gray-500">SPEED</div>
                    <div className="text-lg font-bold text-green-400">{character.stats.speed}</div>
                  </div>
                </div>

                {/* Elements */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {character.elements.map((element) => (
                    <span
                      key={element}
                      className="px-2 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `linear-gradient(to right, ${character.primaryColor}20, ${character.secondaryColor}20)`,
                        borderColor: character.primaryColor + '50',
                        borderWidth: '1px',
                        color: character.primaryColor,
                      }}
                    >
                      {element}
                    </span>
                  ))}
                </div>

                {/* Hover prompt */}
                <div className="text-center text-sm text-gray-500 group-hover:text-yellow-400 transition-colors font-semibold">
                  Click to view full card →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No characters found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
