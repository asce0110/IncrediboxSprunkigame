'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiTerrorPhase30Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const adjustIframeSize = () => {
      if (iframeRef.current) {
        const headerHeight = 100
        iframeRef.current.style.height = `${window.innerHeight - headerHeight}px`
      }
    }

    adjustIframeSize()
    window.addEventListener('resize', adjustIframeSize)

    return () => {
      window.removeEventListener('resize', adjustIframeSize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black/90">
      <GameNav title="Sprunki Terror Phase 30" />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 标题区域 */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2EE59D] mb-2 break-words">
              Sprunki Terror Phase 30
              <span className="block text-lg sm:text-xl md:text-2xl mt-1 text-white/90">The Ultimate Horror Experience</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Dive into the terrifying world of Sprunki where music meets horror in Phase 30
            </p>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12037105/terror/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px'
              }}
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍和内容 */}
          <div className="mt-8 space-y-6">
            <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4">
                About Sprunki Terror Phase 30
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Enter the nightmarish realm of Sprunki Terror Phase 30, where music creation takes a terrifying turn. This spine-chilling experience combines Sprunki's signature musical gameplay with horror elements that will keep you on the edge of your seat.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Horror Elements</span>
                  <span className="text-sm sm:text-base text-gray-400 text-center">Spine-chilling audio and visuals</span>
                </div>
                <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Phase 30</span>
                  <span className="text-sm sm:text-base text-gray-400 text-center">The most intense level yet</span>
                </div>
                <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Music + Fear</span>
                  <span className="text-sm sm:text-base text-gray-400 text-center">A unique genre-bending experience</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                Why Play Sprunki Terror Phase 30?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-2">Terrifying Soundscapes</h3>
                  <p className="text-sm sm:text-base text-gray-400">Create and experience bone-chilling music compositions with horror-themed sound effects.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-2">Haunting Visuals</h3>
                  <p className="text-sm sm:text-base text-gray-400">Immerse yourself in the eerie, atmospheric visuals that enhance the horror experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-2">Phase 30 Challenge</h3>
                  <p className="text-sm sm:text-base text-gray-400">Test your courage in the most intense and challenging Sprunki phase ever created.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-2">Unexpected Surprises</h3>
                  <p className="text-sm sm:text-base text-gray-400">Prepare for jump scares and unexpected events that will keep you constantly on edge.</p>
                </div>
              </div>
            </div>

            {/* 评论区 */}
            <div className="bg-black/50 rounded-xl">
              <div className="p-4 sm:p-6 border-b border-[#2EE59D]/10">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D]">Comments</h2>
              </div>
              <div className="overflow-y-auto custom-scrollbar">
                <div className="p-4 sm:p-6">
                  <CommentsMock />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                FAQ
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What is Sprunki Terror Phase 30?</h3>
                  <p className="text-gray-400">It's a horror-themed version of the Sprunki music creation game that adds terrifying elements to create a unique, fear-inducing experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is it too scary for younger players?</h3>
                  <p className="text-gray-400">Due to the horror elements and jump scares, this game is recommended for teens and adults who enjoy horror content.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What does "Phase 30" refer to?</h3>
                  <p className="text-gray-400">Phase 30 represents the most intense level in the Sprunki Terror series, with the most challenging gameplay and frightening elements.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Can I still create music?</h3>
                  <p className="text-gray-400">Yes, the core music creation mechanics are still present, but now enhanced with horror-themed sounds and visuals.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Are there actual jump scares?</h3>
                  <p className="text-gray-400">Yes, the game features unexpected visual and audio elements designed to startle and frighten players.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is there a storyline?</h3>
                  <p className="text-gray-400">The game includes a subtle horror narrative that unfolds as you progress through different musical compositions.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Will there be more Terror phases?</h3>
                  <p className="text-gray-400">The development team is already working on even more terrifying phases to expand the horror experience in future updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
