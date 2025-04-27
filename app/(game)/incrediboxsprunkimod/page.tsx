'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'
import { GameNav } from '@/components/game/game-nav'

export default function IncrediboxsprunkimodPage() {
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
      <GameNav title="Incredibox Sprunki Mod" />
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
                  Incredibox Sprunki Mod
                  <span className="block text-lg sm:text-xl md:text-2xl mt-1 text-white/90">Enhanced Music Creation</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                  Explore new musical possibilities with the Sprunki modification for Incredibox
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12037105/sprunkimod/index.html"
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
                  About Incredibox Sprunki Mod
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Incredibox Sprunki Mod reimagines the classic music creation experience with a fresh twist. This innovative modification introduces new sounds, characters, and visual effects inspired by the Sprunki universe, allowing for even more creative musical expression.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Creative</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Expanded musical possibilities</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Original</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Unique Sprunki-themed elements</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Innovative</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Fresh take on a classic formula</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                  Why Play Incredibox Sprunki Mod?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">New Sound Library</h3>
                    <p className="text-sm sm:text-base text-gray-400">Discover fresh sounds and beats created exclusively for the Sprunki modification.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Unique Characters</h3>
                    <p className="text-sm sm:text-base text-gray-400">Create music with special Sprunki-inspired characters that bring a new visual flair to your compositions.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Expanded Creativity</h3>
                    <p className="text-sm sm:text-base text-gray-400">Mix and match elements in new ways to create compositions that weren't possible in the original version.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Fan-Made Excellence</h3>
                    <p className="text-sm sm:text-base text-gray-400">Experience a lovingly crafted modification made by fans who understand what makes Incredibox special.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Incredibox Sprunki Mod?</h3>
                    <p className="text-gray-400">It's a creative modification of Incredibox that introduces Sprunki-themed elements, providing new sounds, visuals, and possibilities for music creation.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How does it differ from the original Incredibox?</h3>
                    <p className="text-gray-400">While maintaining the core music creation mechanics, Sprunki Mod adds unique sounds, characters, and visual elements not found in the original version.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it difficult to learn?</h3>
                    <p className="text-gray-400">Not at all! If you're familiar with Incredibox, you'll feel right at home. New users will find the intuitive drag-and-drop interface easy to pick up.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                    <p className="text-gray-400">Yes, you can save and share your musical creations just like in the original Incredibox.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Incredibox Sprunki Mod free?</h3>
                    <p className="text-gray-400">Yes, it's completely free to play and enjoy, with all features accessible to everyone.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be future updates?</h3>
                    <p className="text-gray-400">The development team is committed to adding new content and features based on community feedback.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Who should try this mod?</h3>
                    <p className="text-gray-400">Both Incredibox fans looking for something new and newcomers interested in creative music making will enjoy this fresh take on the formula.</p>
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
