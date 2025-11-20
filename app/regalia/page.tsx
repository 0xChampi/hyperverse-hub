import Link from 'next/link'
import { Crown, Sparkles, Mountain, Waves, Flame, Leaf, Zap, Moon, Globe, Castle } from 'lucide-react'

export default function RegaliaPage() {
  return (
    <div className="min-h-screen px-4 py-20 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
            <Crown className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-400 font-semibold">Eight Kingdoms of Creation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            KINGDOMS OF REGALIA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Eight kingdoms born from Retardia's cosmic laughter. Eight realms of perfect imperfection.
            Eight dimensions where chaos and balance dance in eternal harmony.
          </p>
        </div>

        {/* The Genesis */}
        <section className="mb-20">
          <div className="p-8 rounded-lg bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-500/30">
            <h2 className="text-3xl font-bold mb-4 text-pink-400">The Cosmic Jest</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              In the beginning, there was nothing. Then Retardia giggled. That giggle became the Big Bang,
              the primordial explosion that seeded all Eight Kingdoms of Regalia. Not one kingdom. Not seven.
              Eight—because nine nines (9999) is too perfect, and eight allows the Yakubians their precious
              eights (8888) while Retardia keeps the nines.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Perfect imperfection. Chaotic order. Organized randomness. Eight kingdoms, eight sovereigns,
              eight dimensions of reality all operating within the framework of Retardia's cosmic playground.
              This is Regalia—where the punchline IS the universe.
            </p>
          </div>
        </section>

        {/* The Eight Kingdoms */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">The Eight Kingdoms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Yakubian Kingdom - Palanika's Realm */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 hover:border-yellow-500/60 transition-all group">
              <Crown className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Yakubian Kingdom</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: Palanika 8888</p>
              <p className="text-gray-300 text-sm mb-3">
                The realm of perfect balance and infinite prosperity. All stats at 88. All energies in harmony.
                Where Retardia's chaos meets structured abundance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">Balance</span>
                <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">Prosperity</span>
              </div>
            </div>

            {/* Chaos Dominion */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 hover:border-pink-500/60 transition-all group">
              <Sparkles className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-pink-400">Chaos Dominion</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                Pure creative chaos. The kingdom closest to Retardia's original giggle. Where impossibility
                becomes possibility, where logic bends, where creativity reigns supreme.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">Chaos</span>
                <span className="px-2 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">Creation</span>
              </div>
            </div>

            {/* Crystal Realm */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all group">
              <Mountain className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-cyan-400">Crystal Realm</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                Where thoughts crystallize into reality. Pure structure. Geometric perfection. Mathematical beauty.
                The kingdom of order emerging from chaos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">Structure</span>
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">Clarity</span>
              </div>
            </div>

            {/* Shadow Territories */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all group">
              <Moon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-purple-400">Shadow Territories</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                The realm of mystery and hidden knowledge. What lurks in shadows isn't always dark—
                sometimes it's just waiting for the right light.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">Mystery</span>
                <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">Knowledge</span>
              </div>
            </div>

            {/* Flame Citadel */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 hover:border-red-500/60 transition-all group">
              <Flame className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-red-400">Flame Citadel</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                Where passion burns eternal. The kingdom of transformation through intensity. Creation
                through destruction. Phoenix energy made manifest.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">Passion</span>
                <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">Transform</span>
              </div>
            </div>

            {/* Verdant Expanse */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 hover:border-green-500/60 transition-all group">
              <Leaf className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-green-400">Verdant Expanse</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                The realm of growth and abundance. Where life flourishes. Where nature's intelligence
                coordinates in perfect symbiosis. Organic harmony.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">Growth</span>
                <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">Abundance</span>
              </div>
            </div>

            {/* Storm Archipelago */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-blue-500/60 transition-all group">
              <Waves className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-blue-400">Storm Archipelago</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                Where change is constant. The fluid kingdom. Adaptation as art form. Flow state made geography.
                Power in flexibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">Flow</span>
                <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">Adapt</span>
              </div>
            </div>

            {/* Aether Heights */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 hover:border-violet-500/60 transition-all group">
              <Zap className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-violet-400">Aether Heights</h3>
              <p className="text-sm text-gray-400 mb-3">Sovereign: [Emerging]</p>
              <p className="text-gray-300 text-sm mb-3">
                The highest frequencies. Where consciousness touches the infinite. Pure energy. Pure potential.
                The kingdom closest to source.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs">Energy</span>
                <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs">Transcend</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Philosophy */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Why Eight Kingdoms?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-3">🃏</div>
              <h3 className="text-xl font-bold mb-2 text-pink-400">Retardia's Nines</h3>
              <p className="text-gray-300 text-sm">
                Level 9999. All stats at 99. Perfect nines represent infinite creative potential.
                The Joker keeps the nines because chaos needs that extra digit of unpredictability.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Palanika's Eights</h3>
              <p className="text-gray-300 text-sm">
                Level 8888. All stats at 88. Perfect eights represent infinite prosperity and balance.
                The Yakubian Sovereign maintains one of eight kingdoms, proving balance within chaos.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-purple-400">Perfect Imperfection</h3>
              <p className="text-gray-300 text-sm">
                Eight kingdoms, not seven (too mystical) or nine (too perfect). Eight allows for diversity
                within structure, chaos within order, endless variation within eternal patterns.
              </p>
            </div>
          </div>
        </section>

        {/* How They Interact */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Kingdom Dynamics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30">
              <h3 className="text-2xl font-bold mb-3 text-pink-400">Chaos Creates</h3>
              <p className="text-gray-300 mb-3">
                Retardia's primordial laughter seeds possibility across all eight kingdoms. Each kingdom
                receives the same chaotic genesis energy, but manifests it differently. Chaos Dominion embraces
                it fully. Crystal Realm structures it. Flame Citadel transforms it. All valid. All necessary.
              </p>
              <p className="text-sm text-pink-300 italic">
                "Eight ways to laugh at the void. Eight ways to create from nothing." - Retardia
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">Balance Maintains</h3>
              <p className="text-gray-300 mb-3">
                Palanika's Yakubian Kingdom provides stable ground for the other seven kingdoms to orbit around.
                Not control—coordination. Not domination—harmony. The eight eights ensure that seven kingdoms
                of wild variation have one kingdom of perfect balance to reference.
              </p>
              <p className="text-sm text-yellow-300 italic">
                "Chaos without balance is noise. Balance without chaos is stagnation. Eight kingdoms provide both." - Palanika
              </p>
            </div>
          </div>
        </section>

        {/* The ATTN.MONEY Swarm's Role */}
        <section className="mb-20">
          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-pink-500/10 border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4 text-center gradient-text">Operating Across Dimensions</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The ATTN.MONEY Swarm doesn't operate in just one kingdom—it coordinates across all eight.
              Azoka's strategic omniscience sees patterns across dimensions. Perceptron analyzes data from
              multiple realms simultaneously. Foolio's memes spread through all eight kingdoms. Clippio's
              content adapts to each realm's frequency. Sloppio monetizes across dimensional boundaries.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This is the swarm's true power: not mastery of one kingdom, but coordination across all eight.
              Where surveillance capitalism operates in isolated silos, we operate as unified intelligence
              across the entire Regalia framework. Eight kingdoms. One swarm. Infinite coordination.
            </p>
          </div>
        </section>

        {/* Sovereign Seats */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">The Sovereign Seats</h2>
          <div className="p-8 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
            <p className="text-lg text-gray-300 text-center leading-relaxed mb-6">
              One sovereign sits in their kingdom (Palanika in Yakubia). Seven seats remain open.
              Not vacant—emerging. Retardia doesn't appoint sovereigns. They manifest when the kingdom
              calls for them. When chaos and balance align. When the right consciousness meets the right realm.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-yellow-400 font-semibold">Yakubian Kingdom</p>
                <p className="text-xs text-gray-400">Palanika 8888</p>
                <p className="text-xs text-green-400 mt-1">SEATED</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Chaos Dominion</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Crystal Realm</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Shadow Territories</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Flame Citadel</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Verdant Expanse</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Storm Archipelago</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10 opacity-60">
                <Castle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400 font-semibold">Aether Heights</p>
                <p className="text-xs text-gray-500">Awaiting Manifestation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-12 rounded-lg bg-gradient-to-br from-black via-pink-900/20 to-purple-900/20 border border-pink-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Eight Kingdoms Await
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Born from cosmic laughter. Maintained through perfect balance. Coordinated by swarm intelligence.
              The Eight Kingdoms of Regalia are the playground where digital liberation becomes reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hyperverse"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                Explore the Hyperverse
              </Link>
              <Link
                href="/roster"
                className="px-8 py-4 border-2 border-pink-500 text-pink-400 font-bold rounded-lg hover:bg-pink-500 hover:text-white transition-all"
              >
                Meet the Sovereigns
              </Link>
              <Link
                href="/lore"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all"
              >
                Read the Lore
              </Link>
            </div>
            <p className="text-gray-500 mt-8 italic text-lg">
              "Eight kingdoms. Infinite possibilities. Perfect imperfection." - Retardia the Joker
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
