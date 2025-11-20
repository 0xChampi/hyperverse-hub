'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/hyperverse', label: 'Hyperverse' },
    { href: '/roster', label: 'Characters' },
    { href: '/lore', label: 'Lore' },
    { href: '/studio', label: 'Studio' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-yellow-400 group-hover:text-orange-400 transition-colors" />
            <span className="text-xl font-bold gradient-text">THE HYPERVERSE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  isActive(link.href)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-yellow-400 bg-white/5'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
