'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { GlowContainer } from './ui/effects/glow-container'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <GlowContainer intensity="low">
      <Button
        variant="ghost"
        size="icon"
        className="relative w-9 h-9 text-gray-300 hover:text-[#2EE59D]"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </GlowContainer>
  )
}