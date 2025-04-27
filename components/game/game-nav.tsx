'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Gamepad } from 'lucide-react'

interface GameNavProps {
  title?: string;
}

export function GameNav({ title = 'IncrediboxSprunkiMod' }: GameNavProps) {
  return (
    <div className="sticky top-0 z-50 bg-white/90 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-[#2EE59D]/10">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-[#1D9E6F] dark:text-[#2EE59D] hover:text-[#168a5f] dark:hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">{title}</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/sprunked-games" 
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-[#1D9E6F] dark:hover:text-[#2EE59D] text-sm transition-colors"
            >
              <Gamepad className="w-4 h-4" />
              <span>More Games</span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#1D9E6F] dark:hover:text-[#2EE59D] text-sm transition-colors"
            >
              About
            </Link>
            <Link 
              href="/" 
              className="border border-[#1D9E6F]/20 dark:border-[#2EE59D]/20 bg-[#1D9E6F]/10 dark:bg-[#2EE59D]/10 text-[#1D9E6F] dark:text-[#2EE59D] px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-[#1D9E6F]/20 dark:hover:bg-[#2EE59D]/20 transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 