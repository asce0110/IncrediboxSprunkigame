'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function KinoSprunked20MiniRemakePage() {
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
            <h1 className="text-2xl font-bold text-white">Kino Sprunked 2.0 Mini Remake</h1>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12327519/index.html"
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
                About Kino Sprunked 2.0 Mini Remake
              </h2>
              <p className="text-gray-300 mb-4">
                Experience the reimagined version of Kino Sprunked with this compact yet powerful 2.0 Mini Remake. This edition brings back the beloved features of the original while introducing modern improvements and a streamlined experience perfect for quick music creation sessions.
              </p>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Kino Sprunked 2.0 Mini Remake?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Compact Design</h3>
                  <p className="text-gray-400">Enjoy a streamlined interface that maintains all essential features in a more accessible format.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Modern Updates</h3>
                  <p className="text-gray-400">Experience updated graphics and improved performance while maintaining the classic feel.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Quick Sessions</h3>
                  <p className="text-gray-400">Perfect for short bursts of creativity with optimized loading times and simplified controls.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Classic Feel</h3>
                  <p className="text-gray-400">Rediscover the magic of the original Kino Sprunked with modern enhancements and quality-of-life improvements.</p>
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