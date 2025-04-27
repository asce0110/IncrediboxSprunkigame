'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiSMG4Page() {
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
      <GameNav title="Sprunki Smg4" />
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#1D9E6F] dark:text-[#2EE59D] mb-2">
              Sprunki SMG4 - Ultimate Gaming Experience on IncrediboxSprunkiMod
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Play Sprunki SMG4 Online - The Most Engaging SMG4-Style Game on IncrediboxSprunkiMod
            </p>
          </div>

          {/* Game area */}
          <div className="relative bg-white dark:bg-black/50 rounded-xl overflow-hidden shadow-md dark:shadow-lg dark:shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12116689/index.html"
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
                About Sprunki SMG4 on IncrediboxSprunkiMod
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Welcome to Sprunki SMG4, an exclusive gaming experience on IncrediboxSprunkiMod.com. This unique game combines the beloved SMG4 style with innovative gameplay mechanics, creating an unforgettable gaming adventure that you can only find on our platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">SMG4 Style</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Authentic SMG4 experience</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Dynamic Action</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Engaging gameplay mechanics</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Unique Content</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Exclusive game features</span>
                </div>
              </div>
            </div>

            {/* Game features */}
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-6">
                Why Play Sprunki SMG4?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Authentic SMG4 Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">Immerse yourself in the unique SMG4 universe with authentic style and gameplay on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Dynamic Gameplay</h3>
                  <p className="text-gray-600 dark:text-gray-400">Experience fast-paced action and engaging mechanics that keep you coming back for more on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Exclusive Features</h3>
                  <p className="text-gray-600 dark:text-gray-400">Discover unique game elements and features available only in Sprunki SMG4 on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Regular Updates</h3>
                  <p className="text-gray-600 dark:text-gray-400">Enjoy frequent content updates and new features that enhance your gaming experience on IncrediboxSprunkiMod.</p>
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
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">What is Sprunki SMG4?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sprunki SMG4 is an exclusive game on IncrediboxSprunkiMod that brings the SMG4 universe to life with unique gameplay mechanics and features.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">How do I play Sprunki SMG4?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Simply use your keyboard and mouse to control your character and interact with the game world. The controls are intuitive and easy to learn.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Is Sprunki SMG4 free to play?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki SMG4 is completely free to play on IncrediboxSprunkiMod.com.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">What makes Sprunki SMG4 special?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sprunki SMG4 offers a unique combination of SMG4-style gameplay, exclusive features, and regular content updates on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Can anyone play Sprunki SMG4?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes! Sprunki SMG4 is designed to be enjoyable for players of all skill levels on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Is it available on mobile devices?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki SMG4 is fully optimized for both desktop and mobile devices on IncrediboxSprunkiMod.com.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Are there tutorials available?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki SMG4 includes comprehensive tutorials and guides to help you get started on IncrediboxSprunkiMod.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">How often is the game updated?</h3>
                  <p className="text-gray-600 dark:text-gray-400">We regularly update Sprunki SMG4 with new content, features, and improvements to enhance your gaming experience on IncrediboxSprunkiMod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

