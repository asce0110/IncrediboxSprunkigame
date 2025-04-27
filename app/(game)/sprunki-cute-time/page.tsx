'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiCuteTimePage() {
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
    <div className="min-h-screen bg-black/90">
      <GameNav title="Sprunki Cute Time" />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* 杩斿洖鎸夐挳鍜屾爣棰?*/}
          <div className="flex items-center space-x-4">
            <Link
              href="/sprunked-games"
              className="flex items-center text-[#2EE59D] hover:text-[#2EE59D]/80 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back to Games
            </Link>
            <h1 className="text-2xl font-bold text-white">Sprunki Cute Time</h1>
          </div>

          {/* 娓告垙鍖哄煙 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://wowtbc.net/sprunkin/sprunki-cutetime/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px'
              }}
              title="Sprunki Cute Time"
              loading="lazy"
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              allowTransparency
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 娓告垙浠嬬粛鍜孲EO鍐呭 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Sprunki Cute Time
              </h2>
              <p className="text-gray-300 mb-4">
                Enter the adorable world of Sprunki Cute Time, where music meets cuteness in a delightful fusion. This charming edition of Sprunki brings a fresh, kawaii aesthetic to the beloved music creation experience, featuring cute characters and sweet melodies.
              </p>
            </div>

            {/* 娓告垙鐗圭偣 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Sprunki Cute Time?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Adorable Design</h3>
                  <p className="text-gray-400">Immerse yourself in a cute and charming visual experience with kawaii-inspired graphics and animations.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Sweet Melodies</h3>
                  <p className="text-gray-400">Create music with a collection of sweet and upbeat sounds perfect for crafting cheerful tunes.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Unique Atmosphere</h3>
                  <p className="text-gray-400">Experience a fresh take on the Sprunki series with a delightful and heartwarming atmosphere.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Fun Features</h3>
                  <p className="text-gray-400">Discover cute characters and playful elements that add an extra layer of charm to your music creation.</p>
                </div>
              </div>
            </div>

            {/* 璇勮鍖?*/}
            <div className="bg-black/50 rounded-xl">
              <div className="p-6 border-b border-[#2EE59D]/10">
                <h2 className="text-2xl font-semibold text-[#2EE59D]">Comments</h2>
              </div>
              <div className="h-[400px] overflow-y-auto custom-scrollbar">
                <div className="p-6">
                  <CommentsMock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

