'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRef, useEffect } from 'react'
import Head from 'next/head'
import { Comments } from '@/components/comments'

export default function SprunckiPhase8Page() {
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
      <Head>
        <title>Sprunki Phase 8 (Phase eight) - Play the Latest Evolution of Music Creation Game</title>
        <meta name="description" content="Play Sprunki Phase 8 (Phase eight) online - Experience the next evolution of music creation with enhanced visuals, modern beats, and innovative features. Create, mix, and share your Phase eight masterpieces!" />
        <meta name="keywords" content="Sprunki Phase 8, Phase eight, music creation game, online music game, Sprunki Phase eight, Phase 8 game" />
      </Head>
      
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
                  Sprunki Phase 8 - The Ultimate Music Creation Experience
                </h1>
                <p className="text-gray-400 text-lg">
                  Experience Phase eight, the next evolution of music creation with enhanced features and modern beats
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12179361/index.html"
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

            {/* SEO优化的游戏介绍 */}
            <div className="mt-8 space-y-6">
              {/* 评论区 */}
              <div className="bg-black/50 rounded-xl">
                <div className="p-6 border-b border-[#2EE59D]/10">
                  <h2 className="text-2xl font-semibold text-[#2EE59D]">Comments</h2>
                </div>
                <div className="h-[600px] overflow-y-auto custom-scrollbar">
                  <div className="p-6">
                    <Comments />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Sprunki Phase 8 (Phase eight)
                </h2>
                <p className="text-gray-300 mb-4">
                  Welcome to Sprunki Phase 8, also known as Phase eight, the latest evolution in online music creation. This groundbreaking release brings together cutting-edge sound design, enhanced visuals, and innovative music creation features. Phase eight introduces unique electronic elements and modern beats that push the boundaries of what's possible in browser-based music creation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Phase 8 Sounds</span>
                    <span className="text-gray-400 text-center">Fresh electronic beats and modern Phase eight samples</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Phase 8 Visuals</span>
                    <span className="text-gray-400 text-center">Enhanced Phase eight animations and effects</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Phase 8 Features</span>
                    <span className="text-gray-400 text-center">Advanced Phase eight mixing tools</span>
                  </div>
                </div>
              </div>

              {/* SEO优化的游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Key Features of Sprunki Phase 8
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Phase eight Sound Library</h3>
                    <p className="text-gray-400">Sprunki Phase 8 introduces a cutting-edge collection of electronic sounds, beats, and effects that reflect contemporary music trends in Phase eight.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Phase 8 Visual Experience</h3>
                    <p className="text-gray-400">Experience improved Phase eight animations, dynamic visual effects, and a refined user interface that makes music creation more intuitive than ever in Sprunki Phase 8.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Phase eight Mixing Tools</h3>
                    <p className="text-gray-400">Take advantage of new Phase 8 mixing capabilities and sound manipulation features to create more complex and nuanced musical compositions.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Share Your Phase 8 Creations</h3>
                    <p className="text-gray-400">Save and share your Sprunki Phase 8 masterpieces with the Phase eight community, and discover what others are creating with these innovative tools.</p>
                  </div>
                </div>
              </div>

              {/* SEO优化的FAQ部分 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Frequently Asked Questions About Phase eight
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What's new in Sprunki Phase 8?</h3>
                    <p className="text-gray-400">Phase eight introduces new electronic sounds, improved visual effects, and enhanced mixing capabilities, offering a fresh take on the music creation experience.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I get started with Phase 8?</h3>
                    <p className="text-gray-400">Simply drag and drop characters onto the stage to start creating music in Phase eight. Each character adds a unique sound to your mix, allowing you to build complex arrangements in Sprunki Phase 8.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my Phase eight creations?</h3>
                    <p className="text-gray-400">Yes! You can save your Sprunki Phase 8 musical creations and share them with the Phase eight community. Join now and showcase your unique compositions!</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Sprunki Phase 8 free to play?</h3>
                    <p className="text-gray-400">Yes, Phase eight is free to play online. Start creating your own electronic masterpieces in Sprunki Phase 8 right away!</p>
                  </div>
                </div>
              </div>

              {/* SEO优化的社区部分 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Join the Phase eight Community
                </h2>
                <p className="text-gray-300">
                  Become part of the growing Sprunki Phase 8 community! Create, share, and discover amazing Phase eight musical creations with players from around the world. Whether you're a beginner or an experienced music creator, Phase 8 provides the perfect platform to express your creativity and make unique music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 