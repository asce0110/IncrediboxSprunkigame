'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function CoolAsIcePage() {
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
                  Cool As Ice - Winter Music Creation on IncrediboxSprunkiMod
                </h1>
                <p className="text-gray-400 text-lg">
                  Create Chill Winter Beats with Cool As Ice - The Ultimate Winter Music Game on IncrediboxSprunkiMod
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12304091/index.html"
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
                  About Cool As Ice on IncrediboxSprunkiMod
                </h2>
                <p className="text-gray-300 mb-4">
                  Step into the winter wonderland of Cool As Ice, exclusively available on IncrediboxSprunkiMod.com. This unique music creation game brings the serene beauty of winter to life through an immersive musical experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Winter Vibes</span>
                    <span className="text-gray-400 text-center">Create winter-themed music</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Chill Beats</span>
                    <span className="text-gray-400 text-center">Relaxing sound library</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Unique Style</span>
                    <span className="text-gray-400 text-center">Winter-inspired visuals</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Why Play Cool As Ice?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Winter-Themed Music Creation</h3>
                    <p className="text-gray-400">Create beautiful winter melodies with our specially curated sound library on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Relaxing Atmosphere</h3>
                    <p className="text-gray-400">Immerse yourself in a calming winter environment while creating music on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Unique Sound Library</h3>
                    <p className="text-gray-400">Access exclusive winter-themed sounds and effects only available in Cool As Ice on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Visual Experience</h3>
                    <p className="text-gray-400">Enjoy stunning winter visuals that complement your musical creation on IncrediboxSprunkiMod.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Cool As Ice?</h3>
                    <p className="text-gray-400">Cool As Ice is a winter-themed music creation game available exclusively on IncrediboxSprunkiMod, featuring unique winter sounds and visuals.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I create music in Cool As Ice?</h3>
                    <p className="text-gray-400">Simply combine different winter-themed sounds and beats to create your own unique winter melodies on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Cool As Ice free to play?</h3>
                    <p className="text-gray-400">Yes, Cool As Ice is completely free to play on IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes Cool As Ice special?</h3>
                    <p className="text-gray-400">Cool As Ice offers a unique winter-themed music creation experience with exclusive sounds and visuals on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Do I need musical experience?</h3>
                    <p className="text-gray-400">No musical experience is required! Cool As Ice is designed to be intuitive and enjoyable for everyone on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I play on mobile devices?</h3>
                    <p className="text-gray-400">Yes, Cool As Ice is fully optimized for both desktop and mobile devices on IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there tutorials available?</h3>
                    <p className="text-gray-400">Yes, Cool As Ice includes helpful tutorials and guides to help you get started on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How often is new content added?</h3>
                    <p className="text-gray-400">We regularly update Cool As Ice with new winter-themed sounds and features to enhance your music creation experience on IncrediboxSprunkiMod.</p>
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