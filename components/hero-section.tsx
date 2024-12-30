'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GradientButton } from '@/components/ui/gradient-button'

export function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white text-shadow-lg leading-tight">
          IncrediboxSprunki<wbr/>Mod
          <span className="block text-xl sm:text-2xl md:text-3xl mt-2 text-[#2EE59D]">
            Sprunked Music Games
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 font-medium text-shadow-md max-w-2xl mx-auto leading-relaxed">
          Play Sprunked and Other Music Creation Games - Free Browser-Based Music Games
        </p>
        <Link href="/sprunked-games">
          <GradientButton 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
          >
            Play Now
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </GradientButton>
        </Link>
      </div>
    </div>
  )
}