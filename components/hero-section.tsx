'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GradientButton } from '@/components/ui/gradient-button'

export function HeroSection() {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white text-shadow-lg">
          IncrediboxSprunkiMod - Sprunked Music Games
        </h1>
        <p className="text-2xl mb-8 text-gray-200 font-medium text-shadow-md">
          Play Sprunked and Other Music Creation Games on IncrediboxSprunkiMod - Free Browser-Based Music Games
        </p>
        <Link href="/sprunked-games">
          <GradientButton 
            size="lg" 
            className="text-lg px-8 py-6"
          >
            Play Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </GradientButton>
        </Link>
      </div>
    </div>
  )
}