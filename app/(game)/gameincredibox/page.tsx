'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function GameIncrediboxPage() {
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
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* SEO优化的标题区域 */}
          <div className="mb-4 flex items-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
              </div>
            </Link>

            <div>
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                Game Incredibox - Create Your Own Music
              </h1>
              <p className="text-gray-400 text-lg">
                Mix different sounds, beats, and melodies to create unique musical compositions
              </p>
            </div>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/11932819/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px'
              }}
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Game Incredibox
              </h2>
              <p className="text-gray-300 mb-4">
                Game Incredibox is an award-winning online music creation game that lets you create your own music. Mix different sounds, beats, and melodies to create unique musical compositions. Perfect for both music enthusiasts and casual players who want to explore their creativity through music.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Create Music</span>
                  <span className="text-gray-400 text-center">Mix and match different beats and sounds</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Interactive</span>
                  <span className="text-gray-400 text-center">Real-time music creation</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Have Fun</span>
                  <span className="text-gray-400 text-center">Enjoy creating music in a fun way</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Game Incredibox?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Unique Music Creation Experience</h3>
                  <p className="text-gray-400">Game Incredibox offers an intuitive and fun way to create music. No musical experience required - just drag, drop, and mix to create amazing beats!</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Multiple Sound Styles</h3>
                  <p className="text-gray-400">Explore different musical styles and genres. From hip-hop to electronic, Game Incredibox has a wide variety of sounds to choose from.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Interactive Gameplay</h3>
                  <p className="text-gray-400">Create your own musical arrangements by combining different beats, melodies, and effects. Watch your music come to life with animated characters!</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Unique Features</h3>
                  <p className="text-gray-400">Discover special combinations and unlock animated performances with unique sound effects.</p>
                </div>
              </div>
            </div>

            {/* 评论区 */}
            <div className="bg-black/50 rounded-xl">
              <div className="p-6 border-b border-[#2EE59D]/10">
                <h2 className="text-2xl font-semibold text-[#2EE59D]">Comments</h2>
              </div>
              <div className="h-[400px] overflow-y-auto custom-scrollbar">
                <div className="p-6">
                  <Comments />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What is Game Incredibox?</h3>
                  <p className="text-gray-400">Game Incredibox is an award-winning music creation game that lets you create unique beats and melodies through an intuitive interface.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I play Game Incredibox?</h3>
                  <p className="text-gray-400">Simply drag and drop characters onto the stage to add different sounds. Mix and match to create your unique musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is Game Incredibox free to play?</h3>
                  <p className="text-gray-400">Yes, Game Incredibox is completely free to play in your web browser.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Do I need musical experience?</h3>
                  <p className="text-gray-400">No musical experience is required! Game Incredibox is designed to be intuitive and fun for everyone.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What makes Game Incredibox unique?</h3>
                  <p className="text-gray-400">Game Incredibox combines intuitive music creation with animated characters and special effects, creating a unique and engaging experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What devices can I play on?</h3>
                  <p className="text-gray-400">Game Incredibox works on any modern web browser on desktop and mobile devices.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Are there tutorials available?</h3>
                  <p className="text-gray-400">Yes, Game Incredibox includes in-game tutorials and guides to help you get started.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How often is new content added?</h3>
                  <p className="text-gray-400">We regularly update Game Incredibox with new sounds, features, and improvements to enhance your music creation experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 