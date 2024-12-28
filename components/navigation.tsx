'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-[#2EE59D]' : 'text-gray-400 hover:text-[#2EE59D]'
  }

  return (
    <nav className="flex gap-6">
      <Link 
        href="/" 
        className={`${isActive('/')} transition-colors relative group`}
      >
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
      </Link>
      <Link 
        href="/sprunked-games" 
        className={`${isActive('/sprunked-games')} transition-colors relative group`}
        title="Play Sprunked Music Games - Free Online Music Creation Games"
        aria-label="Browse Sprunked Music Games Collection"
      >
        Sprunked Games
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
      </Link>
      <Link 
        href="/about" 
        className={`${isActive('/about')} transition-colors relative group`}
        title="Learn About Sprunked Music Games and IncrediboxSprunkiMod"
        aria-label="About Sprunked Music Creation Platform"
      >
        About Sprunked
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
      </Link>
    </nav>
  )
}