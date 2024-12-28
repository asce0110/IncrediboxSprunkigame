'use client'

import { GameNavigation } from './game-navigation'
import { useEffect, useState } from 'react'

interface GameLayoutProps {
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black relative">
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative">
      <GameNavigation />
      {children}
    </div>
  )
}