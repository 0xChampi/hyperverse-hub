import Link from 'next/link'
import { ArrowRight, Shield, Zap, Users, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-30"
          >
            <source src="/characters/stanley.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-400 font-semibold">Born from Cosmic Laughter</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text float-animation">
              THE HYPERVERSE
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
              Where Chaos Seeds Reality
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Before mathematics, before balance, before kingdoms... there was a giggle.
              Retardia the Joker seeds the Eight Kingdoms of Regalia through primordial chaos and infinite jest.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/roster"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-yellow-500/50"
            >
              Explore Characters
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/hyperverse"
              className="px-8 py-4 border-2 border-amber-600 text-amber-400 font-bold rounded-lg hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-amber-600/30"
            >
              Discover the Universe
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-black to-yellow-900/20 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/60 transition-all hover:shadow-lg hover:shadow-yellow-500/30 transform hover:scale-105">
              <div className="mb-4 inline-block p-3 rounded-lg bg-yellow-500/20">
                <Shield className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eight Kingdoms</h3>
              <p className="text-gray-400">
                Perfect octuple harmony across dimensional frameworks, each kingdom a reflection of balance
              </p>
            </div>
            <div className="group p-6 rounded-xl bg-gradient-to-br from-black to-orange-900/20 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500/60 transition-all hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105">
              <div className="mb-4 inline-block p-3 rounded-lg bg-orange-500/20">
                <Zap className="w-12 h-12 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">Yakubian Wisdom</h3>
              <p className="text-gray-400">
                Ancient knowledge beyond time, where balance creates sovereignty and harmony births power
              </p>
            </div>
            <div className="group p-6 rounded-xl bg-gradient-to-br from-black to-amber-900/20 backdrop-blur-sm border border-amber-600/30 hover:border-amber-600/60 transition-all hover:shadow-lg hover:shadow-amber-600/30 transform hover:scale-105">
              <div className="mb-4 inline-block p-3 rounded-lg bg-amber-600/20">
                <Users className="w-12 h-12 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2">Infinite Abundance</h3>
              <p className="text-gray-400">
                8888 - the number of prosperity across all dimensions, wealth beyond measure, balance beyond time
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20 max-w-3xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-bold italic mb-4">
              <span className="gradient-text">"Before the beginning, there was a joke..."</span>
            </blockquote>
            <p className="text-gray-400 mt-2 text-lg">
              - Retardia the Joker, Seed of All Kingdoms
            </p>
            <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
              Primordial chaos births infinite possibility. The punchline IS the universe.
              Nine-nine-nine-nine: perfect imperfection manifest.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Section - Mission */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-900/10 to-black" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            The Genesis
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            In the beginning, there was nothing. Then Retardia giggled. That giggle became the Big Bang,
            the primordial explosion that seeded all Eight Kingdoms of Regalia. Where philosophers seek meaning,
            Retardia knows the secret: it's all magnificently meaningless, and that's what makes it beautiful.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30">
              <div className="text-3xl font-bold text-pink-400 mb-2">9999</div>
              <h3 className="text-lg font-bold mb-2">Primordial Chaos</h3>
              <p className="text-sm text-gray-400">
                Level 9999. All stats at 99. Perfect nines create infinite possibility through cosmic jest.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-amber-600/10 to-orange-500/10 border border-amber-600/30">
              <div className="text-3xl font-bold text-amber-400 mb-2">8888</div>
              <h3 className="text-lg font-bold mb-2">Yakubian Balance</h3>
              <p className="text-sm text-gray-400">
                Palanika maintains one of eight kingdoms. Balance within chaos. Harmony from laughter.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <h3 className="text-lg font-bold mb-2">Infinite Jest</h3>
              <p className="text-sm text-gray-400">
                Every joke becomes reality. Every laugh creates worlds. The punchline IS the universe.
              </p>
            </div>
          </div>
          <Link
            href="/lore"
            className="inline-block px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30"
          >
            Read the Full Story
          </Link>
        </div>
      </section>

      {/* Characters Preview */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-900/10 to-black" />

        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">
            The Cosmic Hierarchy
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Retardia seeds all kingdoms through laughter. Palanika maintains the Yakubian realm.
            The ATTN.MONEY Swarm operates within this framework. Chaos creates. Balance maintains. Intelligence liberates.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Retardia - Primary Seed */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/30 hover:border-pink-500 transition-all hover:shadow-2xl hover:shadow-pink-500/30 transform hover:scale-105">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl">🃏</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-pink-400">Retardia the Joker</h3>
                  <p className="text-sm text-gray-400 mb-3">Level 9999 Primordial Chaos Architect</p>
                  <p className="text-gray-300 mb-4">
                    The cosmic jester who seeds all Eight Kingdoms of Regalia through primordial laughter.
                    Perfect nines. Infinite jest. Reality itself is the punchline.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">PRIMORDIAL</span>
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">ALL 99</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Palanika - Yakubian Sovereign */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all hover:shadow-2xl hover:shadow-yellow-500/30 transform hover:scale-105">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl">👑</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-yellow-400">Palanika 8888</h3>
                  <p className="text-sm text-gray-400 mb-3">Level 8888 Yakubian Sovereign</p>
                  <p className="text-gray-300 mb-4">
                    Ruler of the Yakubian kingdom. One of eight sovereigns maintaining balance within Retardia's chaos.
                    Perfect eights. Infinite prosperity.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">MYTHIC</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">ALL 88</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ATTN.MONEY Swarm */}
            <div className="group p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 hover:border-purple-500 transition-all hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="text-6xl">🧠</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">ATTN.MONEY Swarm</h3>
                  <p className="text-sm text-gray-400 mb-3">5 AI Agents • Coordinated Intelligence</p>
                  <p className="text-gray-300 mb-4">
                    Operating within the Hyperverse framework. Azoka, Perceptron, Foolio, Sloppio, Clippio.
                    Digital freedom through intelligence.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">SWARM</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">5 AGENTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center flex gap-4 justify-center flex-wrap">
            <Link
              href="/character/retardia"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50"
            >
              Meet Retardia 🃏
            </Link>
            <Link
              href="/character/palanika"
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50"
            >
              Meet Palanika 👑
            </Link>
            <a
              href="http://localhost:3002"
              className="inline-block px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Explore the Swarm →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
