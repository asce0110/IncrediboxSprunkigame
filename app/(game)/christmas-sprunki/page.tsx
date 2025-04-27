'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'
import { GameNav } from '@/components/game/game-nav'

export default function ChristmasSprunkiPage() {
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
      <GameNav title="Christmas Sprunki" />
      <div className="min-h-screen bg-black/90">
        <div className="container mx-auto py-4 px-4">
          <div className="max-w-4xl mx-auto">
            {/* 标题区域 */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link 
                href="/" 
                className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300 shrink-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#2EE59D] relative z-10" />
                </div>
              </Link>

              <div className="w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2EE59D] mb-2 break-words">
                  Christmas Sprunki
                  <span className="block text-lg sm:text-xl md:text-2xl mt-1 text-white/90">Holiday Music Creation</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                  Experience the festive joy of Christmas with Sprunki music creation
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12037105/christmas/index.html"
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
                allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
            </div>

            {/* 游戏介绍和内容 */}
            <div className="mt-8 space-y-6">
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Christmas Sprunki
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Celebrate the holiday season with Christmas Sprunki, a festive version of the popular music creation game. Create joyful holiday tunes with special Christmas-themed sounds, visuals, and characters that bring the spirit of the season to life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Festive Sounds</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Holiday-themed music samples</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Christmas Joy</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Spread holiday cheer with music</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Winter Fun</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Seasonal visuals and effects</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                  Why Play Christmas Sprunki?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Holiday Spirit</h3>
                    <p className="text-sm sm:text-base text-gray-400">Immerse yourself in the festive atmosphere with Christmas-themed music creation.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Seasonal Sounds</h3>
                    <p className="text-sm sm:text-base text-gray-400">Access unique holiday sound effects and musical samples not available in the regular version.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Festive Characters</h3>
                    <p className="text-sm sm:text-base text-gray-400">Enjoy special Christmas-themed characters and animations that bring holiday joy.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Share Holiday Cheer</h3>
                    <p className="text-sm sm:text-base text-gray-400">Create and share your Christmas compositions with friends and family for the perfect holiday greeting.</p>
                  </div>
                </div>
              </div>

              {/* 评论区 */}
              <div className="bg-black/50 rounded-xl">
                <div className="p-4 sm:p-6 border-b border-[#2EE59D]/10">
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D]">Comments</h2>
                </div>
                <div className="h-[400px] overflow-y-auto custom-scrollbar">
                  <div className="p-4 sm:p-6">
                    <Comments />
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                  FAQ
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What is Christmas Sprunki?</h3>
                    <p className="text-gray-400">Christmas Sprunki is a holiday-themed version of the Sprunki music creation game, featuring festive sounds, visuals, and special Christmas elements.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it only available during Christmas?</h3>
                    <p className="text-gray-400">While it's especially popular during the holiday season, Christmas Sprunki is available to play year-round for those who want to spread Christmas cheer any time.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How is it different from regular Sprunki?</h3>
                    <p className="text-gray-400">It includes special holiday-themed sound samples, festive visuals, snow effects, and Christmas characters that aren't available in the standard version.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my Christmas creations?</h3>
                    <p className="text-gray-400">Yes, you can save and share your holiday music compositions with others, making them perfect for digital Christmas cards.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Christmas Sprunki free to play?</h3>
                    <p className="text-gray-400">Yes, Christmas Sprunki is completely free to play and enjoy throughout the year.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be other holiday versions?</h3>
                    <p className="text-gray-400">We're always considering new seasonal versions of Sprunki for different holidays and special occasions.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there achievements specific to Christmas Sprunki?</h3>
                    <p className="text-gray-400">Yes, there are special holiday-themed achievements you can unlock by creating certain combinations or discovering hidden festive features.</p>
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
