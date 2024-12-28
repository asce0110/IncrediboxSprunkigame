'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function NeesterversalV3IncrediboxPage() {
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
                Neesterversal V3 Incredibox - Enhanced Music Creation Experience
              </h1>
              <p className="text-gray-400 text-lg">
                Create amazing music with this enhanced version of Incredibox on IncrediboxSprunkiMod
              </p>
            </div>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="//s.sprunkiincredibox.com/game/neesterversal/v3/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '802px',
                marginTop: '40px'
              }}
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              allowTransparency
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Neesterversal V3 Incredibox on IncrediboxSprunkiMod
              </h2>
              <p className="text-gray-300 mb-4">
                Discover Neesterversal V3 Incredibox, the latest evolution in music creation games exclusively on IncrediboxSprunkiMod.com. This innovative addition to our platform brings a fresh perspective to interactive music making, combining intuitive controls with dynamic sound generation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Dynamic Music</span>
                  <span className="text-gray-400 text-center">Create evolving musical compositions</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Live Creation</span>
                  <span className="text-gray-400 text-center">Real-time music generation</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Unique Sounds</span>
                  <span className="text-gray-400 text-center">Exclusive sound library</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Neesterversal V3 Incredibox?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Enhanced Music Creation</h3>
                  <p className="text-gray-400">Experience an improved music creation system with new sounds and features on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Modern Interface</h3>
                  <p className="text-gray-400">Enjoy a sleek and intuitive interface designed for seamless music creation.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Interactive Experience</h3>
                  <p className="text-gray-400">Create music through an engaging visual interface that makes music production fun and accessible.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Exclusive Features</h3>
                  <p className="text-gray-400">Access unique features and sound combinations only available in Neesterversal V3.</p>
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
                  <h3 className="text-lg font-medium text-white mb-2">What is Neesterversal V3 Incredibox?</h3>
                  <p className="text-gray-400">Neesterversal V3 Incredibox is an enhanced version of the music creation game, featuring new sounds and improved gameplay mechanics on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I play?</h3>
                  <p className="text-gray-400">Simply interact with the interface to create and combine different musical elements. The game responds to your input in real-time, creating dynamic musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is it free to play?</h3>
                  <p className="text-gray-400">Yes, Neesterversal V3 Incredibox is completely free to play on IncrediboxSprunkiMod.com.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What makes it unique?</h3>
                  <p className="text-gray-400">Neesterversal V3 Incredibox features enhanced music creation mechanics, new sound combinations, and improved visual feedback, creating a unique experience on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                  <p className="text-gray-400">Yes, you can save and replay your musical creations directly in the game.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What devices are supported?</h3>
                  <p className="text-gray-400">Neesterversal V3 Incredibox works on any modern web browser on desktop and mobile devices.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Are there tutorials?</h3>
                  <p className="text-gray-400">Yes, the game includes helpful tutorials and guides to get you started with music creation.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Will there be updates?</h3>
                  <p className="text-gray-400">We regularly update the game with new features and improvements to enhance your music creation experience on IncrediboxSprunkiMod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 