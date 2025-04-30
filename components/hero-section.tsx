'use client'

import Link from 'next/link'
import { ArrowRight, Headphones, PlayCircle, PlusCircle } from 'lucide-react'
import { GradientButton } from '@/components/ui/gradient-button'
import { useEffect, useState } from 'react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { useScroll } from '@/hooks/use-scroll'
import { Button } from '@/components/ui/button'
import { Gamepad2, Music, Users } from 'lucide-react'

export function HeroSection() {
  const { isScrolled } = useScroll()
  
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0" />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        {/* 标题和副标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Create Amazing Music with
            <span className="text-[#2EE59D]"> IncrediboxSprunkiMod</span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <TypewriterEffect
              words={[
                {
                  text: "Create",
                },
                {
                  text: "amazing",
                },
                {
                  text: "music",
                },
                {
                  text: "with",
                },
                {
                  text: "our",
                },
                {
                  text: "interactive",
                },
                {
                  text: "online",
                },
                {
                  text: "games.",
                },
              ]}
              className="text-xl md:text-2xl text-gray-300"
            />
          </div>
        </div>
        
        {/* 游戏特性 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/30 p-6 rounded-xl border border-[#2EE59D]/10">
            <div className="bg-[#2EE59D]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-[#2EE59D]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Beat Mixing</h3>
            <p className="text-gray-300">Create unique beats by mixing different sounds and rhythms</p>
          </div>
          
          <div className="bg-black/30 p-6 rounded-xl border border-[#2EE59D]/10">
            <div className="bg-[#2EE59D]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-[#2EE59D]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Musical Creation</h3>
            <p className="text-gray-300">Express yourself through interactive music creation</p>
          </div>
          
          <div className="bg-black/30 p-6 rounded-xl border border-[#2EE59D]/10">
            <div className="bg-[#2EE59D]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#2EE59D]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-300">Share your creations with a vibrant community</p>
          </div>
        </div>
        
        {/* CTA区域 */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sprunked">
              <Button
                size="lg"
                className="bg-[#2EE59D] hover:bg-[#2EE59D]/90 text-black"
              >
                Play Sprunked
              </Button>
            </Link>
            
            <Link href="/sprunked-games">
              <Button
                size="lg"
                variant="outline"
                className="border-[#2EE59D] text-[#2EE59D] hover:bg-[#2EE59D]/10"
              >
                Explore More Games
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}