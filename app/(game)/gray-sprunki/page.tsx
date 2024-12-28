'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { Comments } from '@/components/comments'

export default function GraySprunki() {
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
                Gray Sprunki - Unique Music Creation Experience
              </h1>
              <p className="text-gray-400 text-lg">
                Create amazing beats with Gray Sprunki on IncrediboxSprunkiMod
              </p>
            </div>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="//s.sprunkiincredibox.com/game/sprunki/gray.html"
              className="w-[98%] mx-auto"
              style={{ 
                border: 'none',
                backgroundColor: '#eeeeee',
                height: '600px',
                marginTop: '40px',
                borderRadius: '15px'
              }}
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads allow-presentation allow-pointer-lock allow-top-navigation allow-storage-access-by-user-activation allow-clipboard-write allow-web-share allow-orientation-lock allow-screen-wake-lock allow-downloads-without-user-activation allow-payment allow-encrypted-media allow-autoplay"
              referrerPolicy="unsafe-url"
              tabIndex={0}
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              allowTransparency
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍和评论区布局 */}
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

            {/* 游戏介绍 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Gray Sprunki
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Gray Sprunki, an innovative addition to the IncrediboxSprunkiMod family. This unique music creation game combines sleek visuals with intuitive controls, allowing you to create amazing beats and melodies in a whole new way.
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
                Why Play Gray Sprunki?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Dynamic Music Creation</h3>
                  <p className="text-gray-400">Experience real-time music generation with Gray Sprunki's innovative system on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Exclusive Sound Library</h3>
                  <p className="text-gray-400">Access a unique collection of sounds and beats created specifically for Gray Sprunki on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Intuitive Interface</h3>
                  <p className="text-gray-400">Enjoy a user-friendly interface that makes music creation accessible to everyone on IncrediboxSprunkiMod.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Live Performance</h3>
                  <p className="text-gray-400">Create and perform music in real-time with responsive controls and instant feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 