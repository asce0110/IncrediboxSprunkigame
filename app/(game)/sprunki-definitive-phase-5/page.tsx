'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'
import Head from 'next/head'

export default function SprunckiDefinitivePhase5Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const updateIframeHeight = () => {
      if (iframeRef.current) {
        const windowHeight = window.innerHeight
        const minHeight = 600
        const newHeight = Math.max(minHeight, windowHeight - 200)
        iframeRef.current.style.height = `${newHeight}px`
      }
    }

    window.addEventListener('resize', updateIframeHeight)
    updateIframeHeight()

    return () => window.removeEventListener('resize', updateIframeHeight)
  }, [])

  return (
    <>
      <Head>
        <title>Sprunki Definitive Phase 5 - The Ultimate Music Creation Experience</title>
        <meta name="description" content="Play Sprunki Definitive Phase 5, the ultimate refined version of the Sprunki series. Experience enhanced sound libraries, improved mechanics, and new features in this definitive music creation game." />
        <meta name="keywords" content="Sprunki Definitive Phase 5, music creation game, rhythm game, Sprunki series, online game, browser game" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sprunki Definitive Phase 5 - The Ultimate Music Creation Experience" />
        <meta property="og:description" content="Play Sprunki Definitive Phase 5, the ultimate refined version of the Sprunki series. Experience enhanced sound libraries, improved mechanics, and new features in this definitive music creation game." />
        <meta property="og:image" content="https://s.incrediboxsprunkimod.com/public/sprunki-definitive-phase-5.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sprunki Definitive Phase 5 - The Ultimate Music Creation Experience" />
        <meta name="twitter:description" content="Play Sprunki Definitive Phase 5, the ultimate refined version of the Sprunki series. Experience enhanced sound libraries, improved mechanics, and new features in this definitive music creation game." />
        <meta name="twitter:image" content="https://s.incrediboxsprunkimod.com/public/sprunki-definitive-phase-5.jpg" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* 返回按钮和标题 */}
          <div className="flex items-center space-x-4">
            <Link
              href="/sprunked-games"
              className="flex items-center text-[#2EE59D] hover:text-[#2EE59D]/80 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back to Games
            </Link>
            <h1 className="text-2xl font-bold text-white">Sprunki Definitive Phase 5</h1>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://wowtbc.net/sprunkin/definitive-phase5/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px'
              }}
              title="Sprunki Definitive Phase 5"
              loading="lazy"
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
                About Sprunki Definitive Phase 5
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Sprunki Definitive Phase 5, the ultimate refined version of the Sprunki series. This definitive edition brings together the best elements of previous phases while introducing new features and improvements that take the music creation experience to the next level.
              </p>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Sprunki Definitive Phase 5?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Refined Gameplay</h3>
                  <p className="text-gray-400">Experience the most polished version of Sprunki with improved mechanics and smoother performance.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Enhanced Sound Library</h3>
                  <p className="text-gray-400">Access an expanded collection of sounds and beats, carefully curated for the definitive edition.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">New Features</h3>
                  <p className="text-gray-400">Discover exclusive features and improvements that enhance your music creation experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Ultimate Experience</h3>
                  <p className="text-gray-400">Enjoy the definitive Sprunki experience with all the best features in one package.</p>
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
          </div>
        </div>
      </div>
    </>
  )
} 