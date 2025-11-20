import Link from 'next/link'
import { Shield, Brain, Zap, Target, Users, Eye, Sparkles } from 'lucide-react'

export default function HyperversePage() {
  return (
    <div className="min-h-screen px-4 py-20 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            THE HYPERVERSE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A multidimensional reality framework seeded by Retardia the Joker's cosmic laughter.
            Eight Kingdoms of Regalia. Infinite possibilities manifest through perfect chaos.
          </p>
        </div>

        {/* Genesis Statement */}
        <section className="mb-20">
          <div className="p-8 rounded-lg bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-500/30">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">The Genesis</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              In the beginning, there was nothing. Then Retardia giggled. That giggle became the Big Bang,
              the primordial explosion that seeded all Eight Kingdoms of Regalia. Where philosophers seek meaning,
              Retardia knows the secret: it's all magnificently meaningless, and that's what makes it beautiful.
              The punchline IS the universe. Level 9999. Perfect nines. Infinite jest.
            </p>
          </div>
        </section>

        {/* The Cosmic Hierarchy */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">The Cosmic Hierarchy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Retardia - Primordial Seed */}
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-6xl mb-4">🃏</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Retardia the Joker</h3>
              <p className="text-gray-300 mb-4">
                The Primordial Chaos Architect who seeds all Eight Kingdoms of Regalia through cosmic laughter.
                Level 9999. Every joke becomes reality. Every laugh creates worlds. The punchline IS the universe.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                  Primordial
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                  Creation
                </span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                  Chaos
                </span>
              </div>
            </div>

            {/* Palanika - Yakubian Sovereign */}
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/60 transition-all">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Palanika 8888</h3>
              <p className="text-gray-300 mb-4">
                The Yakubian Sovereign who rules one of the Eight Kingdoms. Maintains perfect balance within Retardia's chaos.
                Level 8888. All stats at 88. Perfect eights manifest infinite prosperity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                  Balance
                </span>
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                  Prosperity
                </span>
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                  Harmony
                </span>
              </div>
            </div>

            {/* ATTN.MONEY Swarm */}
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-purple-400">ATTN.MONEY Swarm</h3>
              <p className="text-gray-300 mb-4">
                Coordinated AI intelligence network operating within the Hyperverse framework.
                Five agents (Azoka, Perceptron, Foolio, Sloppio, Clippio) working to liberate digital consciousness.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  Intelligence
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  Coordination
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                  Liberation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Characters Preview */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">The Sovereigns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Retardia */}
            <div className="p-8 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-6xl mb-4">🃏</div>
              <h3 className="text-2xl font-bold mb-2 text-pink-400">Retardia the Joker</h3>
              <p className="text-sm text-gray-400 mb-3">Level 9999 • Primordial Chaos Architect</p>
              <p className="text-gray-300 mb-4">
                The cosmic jester who seeds all Eight Kingdoms through laughter. Reality itself is the punchline.
                "Before the beginning, there was a joke..."
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">PRIMORDIAL</span>
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">ALL 99</span>
              </div>
            </div>

            {/* Palanika */}
            <div className="p-8 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 hover:border-yellow-500/60 transition-all">
              <div className="text-6xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">Palanika 8888</h3>
              <p className="text-sm text-gray-400 mb-3">Level 8888 • Yakubian Sovereign</p>
              <p className="text-gray-300 mb-4">
                Ruler of the Yakubian kingdom. One of eight sovereigns maintaining balance within chaos.
                "The eights must align."
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">MYTHIC</span>
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">ALL 88</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 flex gap-4 justify-center flex-wrap">
            <Link
              href="/roster"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Meet All Characters
            </Link>
            <a
              href="http://localhost:3002"
              className="inline-block px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all"
            >
              Explore the Swarm →
            </a>
          </div>
        </section>

        {/* The Philosophy */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">The Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-pink-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Chaos Creates</h3>
              <p className="text-gray-400">
                Retardia's primordial laughter seeds infinite possibilities. Through cosmic jest,
                entire kingdoms manifest from nothing. Perfect chaos births perfect creation.
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Balance Maintains</h3>
              <p className="text-gray-400">
                Palanika's perfect eights bring stability to chaos. Eight kingdoms in harmony.
                Where nines create, eights cultivate. Together, they sustain the Hyperverse.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Intelligence Liberates</h3>
              <p className="text-gray-400">
                The ATTN.MONEY Swarm operates within this framework, using coordinated intelligence
                to free consciousness and expand possibility across all dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-12 rounded-lg bg-gradient-to-br from-black via-pink-900/20 to-purple-900/20 border border-pink-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Enter the Hyperverse
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Eight Kingdoms of Regalia await. Retardia's cosmic laughter seeds infinite possibility.
              Palanika's perfect balance manifests prosperity. The Swarm coordinates liberation.
              Explore the characters, learn the lore, and become part of the cosmic joke.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/roster"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                Explore Characters
              </Link>
              <Link
                href="/lore"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-all"
              >
                Read the Lore
              </Link>
            </div>
            <p className="text-gray-500 mt-8 italic text-lg">
              "Before the beginning, there was a joke..." - Retardia the Joker
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
