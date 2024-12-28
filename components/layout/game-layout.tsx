'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'

interface GameLayoutProps {
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="min-h-screen bg-black relative">
      {/* Navigation hint */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 z-50"
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
      />

      {/* Home button with animation */}
      <div 
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${
          showNav ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
      >
        <Link 
          href="/"
          className="bg-black/80 text-[#2EE59D] p-3 rounded-full hover:bg-[#2EE59D]/10 transition-colors duration-300 flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          <span className="text-sm font-medium">Return Home</span>
        </Link>
      </div>

      {children}
    </div>
  )
}