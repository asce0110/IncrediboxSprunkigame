'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiRetakePage() {
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
    <div className="min-h-screen bg-gray-100 dark:bg-black/90 transition-colors duration-300">
      <GameNav title="Sprunki Retake" />
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#1D9E6F] dark:text-[#2EE59D] mb-2">
              Sprunki Retake - Strategic Gameplay on IncrediboxSprunkiMod
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Play Sprunki Retake Online - The Ultimate Tactical Experience on IncrediboxSprunkiMod
            </p>
          </div>

          {/* Game area */}
          <div className="relative bg-white dark:bg-black/50 rounded-xl overflow-hidden shadow-md dark:shadow-lg dark:shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12203599/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'white',
                height: '600px',
                marginTop: '40px'
              }}
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              allowTransparency
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/95 dark:from-black dark:via-black/95 to-transparent z-10" />
          </div>

          {/* Game introduction and SEO content */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-4">
                About Sprunki Retake on IncrediboxSprunkiMod
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dive into Sprunki Retake, an exclusive tactical gaming experience on IncrediboxSprunkiMod.com. This innovative game combines strategic planning with fast-paced action, creating a challenging and rewarding gameplay experience available only on our platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Strategic Depth</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Complex tactical gameplay</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Competitive Play</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Test your skills against others</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Unique Maps</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Diverse challenging environments</span>
                </div>
              </div>
            </div>

            {/* Game features */}
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-6">
                Why Play Sprunki Retake?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Strategic Gameplay</h3>
                  <p className="text-gray-600 dark:text-gray-400">Master the art of tactical planning and strategic execution in this challenging game on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Competitive Environment</h3>
                  <p className="text-gray-600 dark:text-gray-400">Test your skills against other players in a competitive setting that rewards skill and strategy on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Diverse Map Pool</h3>
                  <p className="text-gray-600 dark:text-gray-400">Experience a variety of unique maps, each offering different challenges and strategic opportunities on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Skill Progression</h3>
                  <p className="text-gray-600 dark:text-gray-400">Develop your tactical abilities and see your skills improve over time as you master the game on IncrediboxSprunkiMod.</p>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div className="bg-white dark:bg-black/50 rounded-xl shadow-sm dark:shadow-none">
              <div className="p-6 border-b border-gray-200 dark:border-[#2EE59D]/10">
                <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D]">Comments</h2>
              </div>
              <div className="h-[400px] overflow-y-auto custom-scrollbar">
                <div className="p-6">
                  <CommentsMock />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">What is Sprunki Retake?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sprunki Retake is an exclusive tactical game on IncrediboxSprunkiMod that challenges players with strategic gameplay and competitive scenarios.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">How do I play Sprunki Retake?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Use your keyboard and mouse to navigate the game environment, strategically approach objectives, and outplay your opponents.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Is Sprunki Retake free to play?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki Retake is completely free to play on IncrediboxSprunkiMod.com.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">What makes Sprunki Retake special?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sprunki Retake offers a unique combination of tactical gameplay, competitive scenarios, and diverse maps that create a challenging and rewarding experience on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Can beginners enjoy Sprunki Retake?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes! While Sprunki Retake offers depth for experienced players, it's designed with tutorials and progression systems that make it accessible for beginners on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Is it available on mobile devices?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki Retake is optimized for both desktop and mobile play on IncrediboxSprunkiMod.com.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">How often are new maps added?</h3>
                  <p className="text-gray-600 dark:text-gray-400">We regularly update Sprunki Retake with new maps and gameplay features to keep the experience fresh and challenging on IncrediboxSprunkiMod.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Can I play with friends?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki Retake supports multiplayer functionality, allowing you to play with friends and test your tactical skills together on IncrediboxSprunkiMod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

