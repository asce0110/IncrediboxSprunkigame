'use client'

import Link from 'next/link'
import { Navigation } from './navigation'
import { GlowContainer } from './ui/effects/glow-container'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  // 检查是否在游戏相关页面
  const isGamePage = pathname.includes('/coolasice') || 
                    pathname.includes('/incrediboxsprunkimod') || 
                    pathname.includes('/dropgame') ||
                    pathname.includes('/game/') ||
                    pathname.includes('/gameincredibox')

  if (isGamePage) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 羽化边框效果 */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#2EE59D]/10">
        {/* 主边框 */}
        <div className="absolute inset-0 bg-[#2EE59D]/20" />
        
        {/* 发光效果 */}
        <div className="absolute inset-0 bg-[#2EE59D] blur-[1px] opacity-10" />
        <div className="absolute -inset-[1px] bg-[#2EE59D] blur-[2px] opacity-5" />
        
        {/* 渐变效果 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2EE59D]/20 to-transparent" />
      </div>

      <div className="relative bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="cursor-pointer">
              <Link 
                href="/"
                className="block text-2xl font-bold text-[#2EE59D] hover:opacity-80 transition-all duration-300 hover:scale-105"
                title="Return to Homepage"
              >
                Incredibox<span className="text-white">Sprunki</span>Mod
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}