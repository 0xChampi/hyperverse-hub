import { Shield, Twitter, Github, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-bold gradient-text">THE HYPERVERSE</span>
            </div>
            <p className="text-gray-400 text-sm">
              Fighting for digital freedom, one character at a time.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Powered by Mithril ⚡
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hyperverse" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Hyperverse
                </Link>
              </li>
              <li>
                <Link href="/roster" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Character Roster
                </Link>
              </li>
              <li>
                <Link href="/lore" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Lore
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/attnmoney"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/attnmoney"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@attn.money"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-4">
              For questions or collaboration
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} ATTN.MONEY. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm italic">
              "At least we have mithril" - Stanley Earl Leeroy Jenkins Jr
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
