'use client'

import { useState } from 'react'
import { getAllCharacters } from '@/data/characters'
import {
  generateCharacterPrompt,
  characterPromptTemplates,
  generateVariations,
  generateBatchPrompts,
  StylePreset,
  stylePresets
} from '@/lib/midjourney'
import { Copy, Check, Sparkles, Wand2, Image as ImageIcon, Send, Zap, Download } from 'lucide-react'

export default function StudioPage() {
  const characters = getAllCharacters()
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0].id)
  const [selectedStyle, setSelectedStyle] = useState<StylePreset>('neochibi')
  const [customPrompt, setCustomPrompt] = useState('')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [variations, setVariations] = useState<string[]>([])
  const [batchPrompts, setBatchPrompts] = useState<Record<string, string>>({})
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [webhookUrl, setWebhookUrl] = useState('')
  const [sending, setSending] = useState(false)
  const [sendStatus, setSendStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const character = characters.find(c => c.id === selectedCharacter)!

  const handleGenerate = () => {
    const template = characterPromptTemplates[selectedCharacter as keyof typeof characterPromptTemplates]
    const prompt = template
      ? template(selectedStyle)
      : generateCharacterPrompt(character, selectedStyle, customPrompt)

    setGeneratedPrompt(prompt)
    setVariations(generateVariations(prompt, 4))
  }

  const handleBatchGenerate = () => {
    const prompts = generateBatchPrompts(characters, selectedStyle)
    setBatchPrompts(prompts)
  }

  const copyToClipboard = async (text: string, index?: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index ?? -1)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const sendToDiscord = async (prompt: string) => {
    if (!webhookUrl) {
      setSendStatus({ success: false, message: 'Please set Discord webhook URL first' })
      return
    }

    setSending(true)
    setSendStatus(null)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `/imagine prompt: ${prompt}`,
          username: 'Hyperverse Studio',
        }),
      })

      if (response.ok) {
        setSendStatus({ success: true, message: 'Sent to Discord! Check your server.' })
      } else {
        setSendStatus({ success: false, message: 'Failed to send. Check your webhook URL.' })
      }
    } catch (error) {
      setSendStatus({ success: false, message: 'Error sending to Discord' })
    } finally {
      setSending(false)
      setTimeout(() => setSendStatus(null), 5000)
    }
  }

  const sendBatchToDiscord = async () => {
    if (!webhookUrl) {
      setSendStatus({ success: false, message: 'Please set Discord webhook URL first' })
      return
    }

    setSending(true)
    setSendStatus({ success: false, message: 'Sending batch prompts...' })

    let successCount = 0
    for (const [charId, prompt] of Object.entries(batchPrompts)) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: `/imagine prompt: ${prompt}`,
            username: `Hyperverse Studio - ${charId}`,
          }),
        })
        successCount++
        // Wait 2 seconds between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (error) {
        console.error(`Failed to send ${charId}:`, error)
      }
    }

    setSending(false)
    setSendStatus({
      success: true,
      message: `Sent ${successCount}/${Object.keys(batchPrompts).length} prompts to Discord!`
    })
    setTimeout(() => setSendStatus(null), 5000)
  }

  return (
    <div className="min-h-screen px-4 py-20 mt-16">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-semibold">AI Art Generator</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Midjourney Studio
          </h1>
          <p className="text-xl text-gray-400">
            Generate optimized prompts and send directly to Discord
          </p>
        </div>

        {/* Discord Webhook Setup */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-blue-400" />
            Discord Auto-Send (Optional)
          </h3>
          <div className="flex gap-3">
            <input
              type="password"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="Paste your Discord webhook URL here..."
              className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-blue-500 focus:outline-none"
            />
            {webhookUrl && (
              <div className="px-4 py-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm flex items-center">
                <Check className="w-4 h-4 mr-2" />
                Connected
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Get webhook: Discord Server Settings → Integrations → Webhooks → New Webhook
          </p>
        </div>

        {/* Status Message */}
        {sendStatus && (
          <div className={`mb-8 p-4 rounded-lg border-2 ${
            sendStatus.success
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}>
            {sendStatus.message}
          </div>
        )}

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-white/10">
          <button
            onClick={() => setBatchPrompts({})}
            className={`px-6 py-3 font-semibold border-b-2 transition-all ${
              Object.keys(batchPrompts).length === 0
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            Single Character
          </button>
          <button
            onClick={handleBatchGenerate}
            className={`px-6 py-3 font-semibold border-b-2 transition-all flex items-center gap-2 ${
              Object.keys(batchPrompts).length > 0
                ? 'border-purple-500 text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <Zap className="w-4 h-4" />
            Batch All Characters
          </button>
        </div>

        {/* Batch Mode */}
        {Object.keys(batchPrompts).length > 0 ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Characters - {selectedStyle} Style</h2>
              {webhookUrl && (
                <button
                  onClick={sendBatchToDiscord}
                  disabled={sending}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {sending ? 'Sending...' : 'Send All to Discord'}
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(batchPrompts).map(([charId, prompt]) => {
                const char = characters.find(c => c.id === charId)!
                return (
                  <div key={charId} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{char.avatar}</div>
                      <div className="flex-1">
                        <h3 className="font-bold">{char.name}</h3>
                        <p className="text-xs text-gray-500">{char.class}</p>
                      </div>
                      <div className="flex gap-2">
                        {webhookUrl && (
                          <button
                            onClick={() => sendToDiscord(prompt)}
                            disabled={sending}
                            className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all disabled:opacity-50"
                          >
                            <Send className="w-4 h-4 text-blue-400" />
                          </button>
                        )}
                        <button
                          onClick={() => copyToClipboard(prompt, parseInt(charId))}
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                        >
                          {copiedIndex === parseInt(charId) ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 font-mono bg-black/30 p-3 rounded break-words">
                      {prompt}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          /* Single Character Mode */
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Panel - Configuration */}
            <div className="space-y-6">
              {/* Character Selection */}
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-purple-400" />
                  Select Character
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {characters.map(char => (
                    <button
                      key={char.id}
                      onClick={() => setSelectedCharacter(char.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedCharacter === char.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="text-3xl mb-2">{char.avatar}</div>
                      <div className="text-sm font-semibold">{char.name}</div>
                      <div className="text-xs text-gray-500">{char.class}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Selection */}
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-pink-400" />
                  Art Style
                </h3>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value as StylePreset)}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-purple-500 focus:outline-none"
                >
                  {Object.keys(stylePresets).map(style => (
                    <option key={style} value={style}>
                      {style.charAt(0).toUpperCase() + style.slice(1)}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-2">
                  {stylePresets[selectedStyle]}
                </p>
              </div>

              {/* Custom Details */}
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-bold mb-4">Custom Details (Optional)</h3>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Add specific details, poses, or modifications..."
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-purple-500 focus:outline-none min-h-[100px] resize-none"
                />
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Generate Prompts
              </button>
            </div>

            {/* Right Panel - Results */}
            <div className="space-y-6">
              {/* Main Prompt */}
              {generatedPrompt && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-purple-400">Main Prompt</h3>
                    <div className="flex gap-2">
                      {webhookUrl && (
                        <button
                          onClick={() => sendToDiscord(generatedPrompt)}
                          disabled={sending}
                          className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all disabled:opacity-50"
                        >
                          <Send className="w-4 h-4 text-blue-400" />
                        </button>
                      )}
                      <button
                        onClick={() => copyToClipboard(generatedPrompt, -1)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                      >
                        {copiedIndex === -1 ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 font-mono bg-black/30 p-4 rounded-lg break-words">
                    {generatedPrompt}
                  </p>
                </div>
              )}

              {/* Variations */}
              {variations.length > 0 && (
                <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-bold mb-4">Variations</h3>
                  <div className="space-y-3">
                    {variations.map((variation, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-black/30 border border-white/10 hover:border-purple-500/50 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-xs text-gray-400 font-mono flex-1 break-words">
                            {variation}
                          </p>
                          <div className="flex gap-2 flex-shrink-0">
                            {webhookUrl && (
                              <button
                                onClick={() => sendToDiscord(variation)}
                                disabled={sending}
                                className="p-2 rounded hover:bg-blue-500/20 transition-all disabled:opacity-50"
                              >
                                <Send className="w-4 h-4 text-blue-400" />
                              </button>
                            )}
                            <button
                              onClick={() => copyToClipboard(variation, index)}
                              className="p-2 rounded hover:bg-white/10 transition-all"
                            >
                              {copiedIndex === index ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructions */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
                <h3 className="text-lg font-bold mb-3 text-yellow-400">How to Use</h3>
                <ol className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">1.</span>
                    <span>Paste Discord webhook URL above (optional for auto-send)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">2.</span>
                    <span>Select character and art style, then generate</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">3.</span>
                    <span>Click Send icon to auto-send, or Copy to manually paste</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400 font-bold">4.</span>
                    <span>Save Midjourney results to <code className="bg-black/50 px-2 py-1 rounded">public/characters/</code></span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
