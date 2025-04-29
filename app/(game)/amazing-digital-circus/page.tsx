'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

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
      <GameNav title="Amazing Digital Circus" />
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
                  Amazing Digital Circus
                  <span className="block text-lg sm:text-xl md:text-2xl mt-1 text-white/90">A Unique Gaming Experience</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                  Experience the amazing world of Amazing Digital Circus with exciting gameplay and music
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12037105/circus/index.html"
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
                  About Amazing Digital Circus
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Dive into the fascinating world of Amazing Digital Circus, a unique gaming experience that combines music, creativity, and fun. This game offers a refreshing take on the classic Incredibox concept with new features and exciting gameplay elements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Creative</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Express your musical talent</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Interactive</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Engaging gameplay mechanics</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Unique</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">A one-of-a-kind experience</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                  Why Play Amazing Digital Circus?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Immersive Experience</h3>
                    <p className="text-sm sm:text-base text-gray-400">Get lost in a world of music and creativity with captivating visuals and sounds.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Endless Possibilities</h3>
                    <p className="text-sm sm:text-base text-gray-400">Create countless musical combinations and discover new patterns.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">User-Friendly Interface</h3>
                    <p className="text-sm sm:text-base text-gray-400">Intuitive controls make it easy for players of all skill levels to enjoy.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Regular Updates</h3>
                    <p className="text-sm sm:text-base text-gray-400">New content and features added regularly to keep the experience fresh.</p>
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
                    <CommentsMock />
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Amazing Digital Circus?</h3>
                    <p className="text-gray-400">Amazing Digital Circus is an interactive music game that allows players to create unique musical compositions through an intuitive and engaging interface.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I play?</h3>
                    <p className="text-gray-400">Simply interact with the game interface to combine different musical elements and create your own unique compositions.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it free to play?</h3>
                    <p className="text-gray-400">Yes, Amazing Digital Circus is completely free to play on our website.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                    <p className="text-gray-400">Yes, the game allows you to save and share your musical creations with others.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Does it work on mobile devices?</h3>
                    <p className="text-gray-400">Yes, the game is fully responsive and works well on both desktop and mobile devices.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there updates planned?</h3>
                    <p className="text-gray-400">We regularly update the game with new content, features, and improvements based on player feedback.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Who created this game?</h3>
                    <p className="text-gray-400">The game was created by our talented development team, inspired by the classic Incredibox experience with our own unique twist.</p>
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

