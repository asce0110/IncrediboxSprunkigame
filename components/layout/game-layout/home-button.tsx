'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HomeButtonProps {
  isVisible: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function HomeButton({ isVisible, onMouseEnter, onMouseLeave }: HomeButtonProps) {
  return (
    <div 
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50",
        isVisible ? 'translate-y-4 opacity-100' : '-translate-y-full opacity-0'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link 
        href="/"
        className="bg-black/90 text-[#2EE59D] px-4 py-2 rounded-full 
                 hover:bg-[#2EE59D]/10 transition-colors duration-300 
                 flex items-center gap-2 shadow-lg backdrop-blur-sm"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Return Home</span>
      </Link>
    </div>
  )
}