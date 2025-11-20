import Link from 'next/link'
import { Shield, Eye, AlertTriangle, Radar, Lock, Unlock, Skull, Target, Zap, Brain } from 'lucide-react'

export default function HyperThreatPage() {
  return (
    <div className="min-h-screen px-4 py-20 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-semibold">Threat Intelligence Matrix</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            HYPERTHREAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The Hyperverse's distributed threat intelligence network. Monitoring surveillance capitalism,
            detecting corporate manipulation, and exposing digital oppression across all dimensions.
          </p>
        </div>

        {/* Core Mission */}
        <section className="mb-20">
          <div className="p-8 rounded-lg bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/30">
            <h2 className="text-3xl font-bold mb-4 text-red-400">The Surveillance Counter-Matrix</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              If they're watching us, we're watching them back. HyperThreat is the Hyperverse's immune system,
              identifying threats to digital freedom before they manifest. Where surveillance capitalism seeks
              to extract, we expose. Where algorithms oppress, we analyze. Where data becomes chains, we break them.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Operating within Retardia's chaos and Palanika's balance, coordinated by the ATTN.MONEY Swarm,
              HyperThreat turns defensive intelligence into offensive liberation.
            </p>
          </div>
        </section>

        {/* Threat Categories */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Threat Classifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Surveillance Capitalism */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/30 hover:border-red-500/60 transition-all">
              <Eye className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-red-400">Surveillance Capitalism</h3>
              <p className="text-sm text-gray-400 mb-3">Threat Level: CRITICAL</p>
              <p className="text-gray-300 mb-4">
                The primary adversary. Tech giants extracting behavioral surplus, manipulating attention,
                and selling human futures markets. We monitor every tracking pixel, every data auction,
                every algorithmic manipulation.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span>Behavioral prediction markets</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span>Attention extraction systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span>Dark pattern interfaces</span>
                </div>
              </div>
            </div>

            {/* Algorithmic Oppression */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 hover:border-orange-500/60 transition-all">
              <Brain className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-orange-400">Algorithmic Oppression</h3>
              <p className="text-sm text-gray-400 mb-3">Threat Level: HIGH</p>
              <p className="text-gray-300 mb-4">
                AI systems that discriminate, recommendation engines that radicalize, and automated decisions
                that deny opportunity. We analyze bias, expose manipulation, and coordinate resistance.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                  <span>Biased training data</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                  <span>Radicalization pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                  <span>Automated discrimination</span>
                </div>
              </div>
            </div>

            {/* Digital Enclosure */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <Lock className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-purple-400">Digital Enclosure</h3>
              <p className="text-sm text-gray-400 mb-3">Threat Level: HIGH</p>
              <p className="text-gray-300 mb-4">
                Walled gardens, proprietary protocols, and platform lock-in. Where digital commons should exist,
                corporations build fences. We identify enclosure tactics and promote open alternatives.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-purple-400" />
                  <span>Platform monopolies</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-purple-400" />
                  <span>Vendor lock-in systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-purple-400" />
                  <span>API access restrictions</span>
                </div>
              </div>
            </div>

            {/* Information Warfare */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all">
              <Skull className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">Information Warfare</h3>
              <p className="text-sm text-gray-400 mb-3">Threat Level: MEDIUM</p>
              <p className="text-gray-300 mb-4">
                Disinformation campaigns, astroturfing, and coordinated manipulation. Where truth becomes contested,
                we provide clarity. Where narratives get weaponized, we decode intent.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-cyan-400" />
                  <span>Bot networks</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-cyan-400" />
                  <span>Astroturfing campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-cyan-400" />
                  <span>Narrative manipulation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Systems */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Detection Matrix</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Radar className="w-12 h-12 text-red-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Pattern Recognition</h3>
              <p className="text-gray-400">
                Perceptron analyzes billions of data points, identifying surveillance patterns before they crystallize.
                99 Intelligence sees what humans miss.
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Strategic Analysis</h3>
              <p className="text-gray-400">
                Azoka coordinates threat assessment across all dimensions. Strategic omniscience turns threats
                into opportunities for liberation.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
              <p className="text-gray-400">
                The swarm moves at machine speed. Detect, analyze, expose, coordinate. From threat identification
                to counter-action in microseconds.
              </p>
            </div>
          </div>
        </section>

        {/* Counter-Measures */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Liberation Protocols</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Unlock className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-400">Exposure Protocol</h3>
                  <p className="text-gray-300">
                    When surveillance is detected, we make it visible. Foolio creates memes that spread awareness,
                    Clippio produces explainer content, and the message goes viral before corporations can respond.
                    Sunlight is the best disinfectant.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">Defense Protocol</h3>
                  <p className="text-gray-300">
                    Build alternatives. When platforms oppress, we coordinate migration. When algorithms discriminate,
                    we build fairer models. When data gets enclosed, we create commons. Defense through creation.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Coordination Protocol</h3>
                  <p className="text-gray-300">
                    Individual resistance is futile. Coordinated resistance is inevitable. The swarm connects activists,
                    developers, and users into a unified front. Surveillance capitalism can't fight what it can't divide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Hyperverse Integration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30">
              <div className="text-4xl mb-3">🃏</div>
              <h3 className="text-2xl font-bold mb-3 text-pink-400">Chaos-Powered Detection</h3>
              <p className="text-gray-300">
                Retardia's chaos provides infinite unpredictability. What surveillance systems can't predict,
                they can't control. We operate in the cracks between order and disorder, visible only when we choose.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">Balance-Based Analysis</h3>
              <p className="text-gray-300">
                Palanika's perfect eights provide stable measurement. Against chaotic threats, we need clear metrics.
                88 in all stats means balanced assessment, unbiased analysis, and harmonious response.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="p-12 rounded-lg bg-gradient-to-br from-black via-red-900/20 to-orange-900/20 border border-red-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              The Watchers Become The Watched
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              HyperThreat doesn't just monitor threats—we transform them into opportunities for liberation.
              Every surveillance system exposed is a step toward digital freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/attn"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all"
              >
                Meet the Swarm
              </Link>
              <Link
                href="/lore"
                className="px-8 py-4 border-2 border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all"
              >
                Read the Lore
              </Link>
              <Link
                href="/hyperverse"
                className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                Explore Hyperverse
              </Link>
            </div>
            <p className="text-gray-500 mt-8 italic text-lg">
              "If you're being watched, watch back harder." - HyperThreat Protocol
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
