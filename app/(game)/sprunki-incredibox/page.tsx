'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiIncrediboxPage() {
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
      <GameNav title="Sprunki Incredibox" />
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#1D9E6F] dark:text-[#2EE59D] mb-2">
              Sprunki Incredibox - Music Creation Experience on IncrediboxSprunkiMod
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Play Sprunki Incredibox Online - Create Amazing Music with this Innovative Game on IncrediboxSprunkiMod
            </p>
          </div>

          {/* Game area */}
          <div className="relative bg-white dark:bg-black/50 rounded-xl overflow-hidden shadow-md dark:shadow-lg dark:shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12231567/index.html"
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

          {/* Game introduction and content */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-md dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-4">
                About Sprunki Incredibox on IncrediboxSprunkiMod
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Welcome to Sprunki Incredibox, an innovative music creation experience on IncrediboxSprunkiMod.com. This unique game allows you to create amazing beats and melodies by combining different sounds and characters, providing an intuitive and fun way to make music without any prior experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Music Creation</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Create unique beats and melodies</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Interactive</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Engaging musical experience</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-black/30 rounded-lg border border-gray-200 dark:border-transparent">
                  <span className="text-[#1D9E6F] dark:text-[#2EE59D] font-bold text-lg mb-2">Creative</span>
                  <span className="text-gray-600 dark:text-gray-400 text-center">Express yourself through sound</span>
                </div>
              </div>
            </div>

            {/* Game features */}
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-md dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-6">
                Why Play Sprunki Incredibox?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Intuitive Music Creation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Create beautiful music without any musical training through the simple drag-and-drop interface on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Diverse Sound Library</h3>
                  <p className="text-gray-600 dark:text-gray-400">Access a wide range of sounds, beats, and musical elements to craft your unique compositions on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Visual Music Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">Watch your music come to life with animated characters that represent each sound in your mix on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Shareable Creations</h3>
                  <p className="text-gray-600 dark:text-gray-400">Save and share your musical compositions with friends and the community on IncrediboxSprunkiMod.</p>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div className="bg-white dark:bg-black/50 rounded-xl shadow-md dark:shadow-none">
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
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-md dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-6">
                Frequently Asked Questions About Sprunki Incredibox
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">What is Sprunki Incredibox?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sprunki Incredibox is an innovative music creation game that combines the unique features of Sprunki with the beloved mechanics of Incredibox, creating a fresh and engaging musical experience.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">How do I play Sprunki Incredibox?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Simply drag and drop characters onto the stage to create your music. Each character adds a unique sound to your mix, allowing you to create complex musical arrangements easily.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Do I need musical experience to play?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Not at all! Sprunki Incredibox is designed to be accessible to everyone, regardless of musical experience. The intuitive interface makes music creation fun and easy.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">What makes Sprunki Incredibox special?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Sprunki Incredibox offers a unique combination of visual music creation, interactive animation, and an extensive sound library, making it stand out in the world of music games.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Can I share my Sprunki Incredibox creations?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes! You can save and share your musical creations with friends and the Sprunki Incredibox community, showcasing your unique musical style.</p>
                </div>

                <div className="border-b border-gray-200 dark:border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Is Sprunki Incredibox free to play online?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, you can play Sprunki Incredibox for free right here in your browser. Start creating amazing music instantly!</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Is Sprunki Incredibox available on mobile devices?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Yes, Sprunki Incredibox is fully optimized for both desktop and mobile devices on IncrediboxSprunkiMod.com.</p>
                </div>
              </div>
            </div>

            {/* Join community section */}
            <div className="p-6 bg-white dark:bg-black/50 rounded-xl shadow-md dark:shadow-none">
              <h2 className="text-2xl font-semibold text-[#1D9E6F] dark:text-[#2EE59D] mb-6">
                Join the Sprunki Incredibox Community
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Become part of the vibrant Sprunki Incredibox community! Share your musical creations, discover new mixing techniques, and connect with other music creators from around the world. Whether you're a beginner or an experienced musician, Sprunki Incredibox offers endless possibilities for musical expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
