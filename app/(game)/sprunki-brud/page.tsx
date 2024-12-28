'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function SprunkiBrudPage() {
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
    <>
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
                  Sprunki Brud - Ultimate Music Creation Experience on IncrediboxSprunkiMod
                </h1>
                <p className="text-gray-400 text-lg">
                  Create Amazing Music with Sprunki Brud - The Latest Addition to IncrediboxSprunkiMod Music Games
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12176614/index.html"
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
                allowTransparency
                allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
            </div>

            {/* 游戏介绍和SEO内容 */}
            <div className="mt-8 space-y-6">
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Sprunki Brud on IncrediboxSprunkiMod
                </h2>
                <p className="text-gray-300 mb-4">
                  Welcome to Sprunki Brud, an innovative music creation game exclusively on IncrediboxSprunkiMod.com. Experience a unique blend of rhythm-based gameplay and creative music making with our latest addition to the IncrediboxSprunkiMod series.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Create Music</span>
                    <span className="text-gray-400 text-center">Mix and match different beats and sounds</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Interactive</span>
                    <span className="text-gray-400 text-center">Enjoy real-time music creation</span>
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
                  Why Play Sprunki Brud?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Revolutionary Music Creation</h3>
                    <p className="text-gray-400">Experience music creation like never before with Sprunki Brud's innovative interface and intuitive controls on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Modern Sound Library</h3>
                    <p className="text-gray-400">Access a vast collection of modern sounds, beats, and effects to create your unique compositions.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Interactive Experience</h3>
                    <p className="text-gray-400">Enjoy a fully interactive music creation experience with real-time feedback and visual effects.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Unique Gameplay</h3>
                    <p className="text-gray-400">Discover new ways to create music with innovative gameplay mechanics exclusive to IncrediboxSprunkiMod.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Sprunki Brud?</h3>
                    <p className="text-gray-400">Sprunki Brud is an exclusive music creation game on IncrediboxSprunkiMod that lets you create and mix music using an intuitive interface.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I start creating music in Sprunki Brud?</h3>
                    <p className="text-gray-400">Simply drag and drop sound elements onto the stage to start creating your beats. Experiment with different combinations to create unique sounds.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Sprunki Brud free to play?</h3>
                    <p className="text-gray-400">Yes, Sprunki Brud is completely free to play on IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes Sprunki Brud special?</h3>
                    <p className="text-gray-400">Sprunki Brud offers a unique combination of intuitive controls, modern sound library, and interactive features that make music creation fun and accessible on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Do I need musical experience to play Sprunki Brud?</h3>
                    <p className="text-gray-400">No musical experience is required! Sprunki Brud is designed to be intuitive and fun for everyone on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What devices can I play Sprunki Brud on?</h3>
                    <p className="text-gray-400">Sprunki Brud works on any modern web browser on desktop and mobile devices through IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there tutorials available?</h3>
                    <p className="text-gray-400">Yes, Sprunki Brud includes in-game tutorials and guides to help you get started on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How often is new content added?</h3>
                    <p className="text-gray-400">We regularly update Sprunki Brud with new sounds, features, and improvements to enhance your music creation experience on IncrediboxSprunkiMod.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 