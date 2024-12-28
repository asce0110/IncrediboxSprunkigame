'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function AmazingDigitalCircusPage() {
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
                  Amazing Digital Circus - Immersive Gaming Experience on IncrediboxSprunkiMod
                </h1>
                <p className="text-gray-400 text-lg">
                  Play Amazing Digital Circus Online - The Most Engaging Digital Circus Game on IncrediboxSprunkiMod
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game-frame"
                src="https://html-classic.itch.zone/html/12053340/index.html?v=1732312436"
                className="w-full"
                style={{ 
                  border: 'none',
                  backgroundColor: 'black',
                  height: '600px',
                  marginTop: '20px'
                }}
                allowFullScreen={true}
                allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
            </div>

            {/* 游戏介绍和SEO内容 */}
            <div className="mt-8 space-y-6">
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Amazing Digital Circus on IncrediboxSprunkiMod
                </h2>
                <p className="text-gray-300 mb-4">
                  Step into the extraordinary world of Amazing Digital Circus, exclusively available on IncrediboxSprunkiMod.com. This captivating digital circus experience combines stunning visuals with interactive entertainment, bringing the magic of the circus to your screen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Digital Magic</span>
                    <span className="text-gray-400 text-center">Experience circus magic digitally</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Interactive Fun</span>
                    <span className="text-gray-400 text-center">Engage with circus elements</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Visual Spectacle</span>
                    <span className="text-gray-400 text-center">Stunning circus visuals</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Why Play Amazing Digital Circus?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Immersive Digital Experience</h3>
                    <p className="text-gray-400">Step into a vibrant digital circus world with stunning visuals and engaging interactions on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Interactive Entertainment</h3>
                    <p className="text-gray-400">Engage with various circus elements and create your own spectacular show on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Visual Excellence</h3>
                    <p className="text-gray-400">Experience high-quality graphics and animations that bring the circus to life on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Unique Gameplay</h3>
                    <p className="text-gray-400">Discover innovative gameplay mechanics that make Amazing Digital Circus stand out on IncrediboxSprunkiMod.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Amazing Digital Circus?</h3>
                    <p className="text-gray-400">Amazing Digital Circus is an interactive digital circus experience available exclusively on IncrediboxSprunkiMod, combining stunning visuals with engaging gameplay.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I play Amazing Digital Circus?</h3>
                    <p className="text-gray-400">Simply interact with the various circus elements using your mouse or touch controls. The game is designed to be intuitive and fun for all ages.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Amazing Digital Circus free to play?</h3>
                    <p className="text-gray-400">Yes, Amazing Digital Circus is completely free to play on IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes Amazing Digital Circus special?</h3>
                    <p className="text-gray-400">Amazing Digital Circus offers a unique combination of stunning visuals, interactive entertainment, and engaging gameplay mechanics on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can anyone play Amazing Digital Circus?</h3>
                    <p className="text-gray-400">Yes! Amazing Digital Circus is designed to be enjoyable for players of all ages and skill levels on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it available on mobile devices?</h3>
                    <p className="text-gray-400">Yes, Amazing Digital Circus is fully optimized for both desktop and mobile devices on IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there tutorials available?</h3>
                    <p className="text-gray-400">Yes, Amazing Digital Circus includes helpful tutorials and guides to help you get started on IncrediboxSprunkiMod.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How often is the game updated?</h3>
                    <p className="text-gray-400">We regularly update Amazing Digital Circus with new features and content to enhance your circus experience on IncrediboxSprunkiMod.</p>
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