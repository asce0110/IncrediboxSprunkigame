'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function IncrediboxSprunkiModPage() {
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
                  <span className="block text-lg sm:text-xl md:text-2xl mt-1 text-white/90">The Ultimate Music Creation Experience</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                  Experience Incredibox with the amazing Sprunki modification for enhanced creativity
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12037105/sprunki-mod/index.html"
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
                  Incredibox Sprunki Mod enhances the classic Incredibox experience with new sounds, visuals, and features inspired by the Sprunki character. This fan-made modification brings fresh creativity to the beloved music creation platform, allowing you to craft unique musical compositions with a twist.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">New Sounds</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Exclusive Sprunki sound samples</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Fresh Visuals</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Sprunki-themed characters and effects</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Enhanced</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Expanded creative possibilities</span>
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
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Expanded Sound Library</h3>
                    <p className="text-sm sm:text-base text-gray-400">Access a vast collection of new sounds and beats not available in the original Incredibox.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Sprunki Characters</h3>
                    <p className="text-sm sm:text-base text-gray-400">Create music with unique Sprunki-themed characters that bring your compositions to life in new ways.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Fresh Experience</h3>
                    <p className="text-sm sm:text-base text-gray-400">Enjoy familiar gameplay with a refreshing twist that makes music creation feel new again.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Community-Driven</h3>
                    <p className="text-sm sm:text-base text-gray-400">Experience a mod created by fans, for fans, with regular updates based on community feedback.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Incredibox Sprunki Mod?</h3>
                    <p className="text-gray-400">It's a fan-made modification of Incredibox that introduces new Sprunki-themed sounds, characters, and visuals to enhance the music creation experience.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it official Incredibox content?</h3>
                    <p className="text-gray-400">No, this is a fan-created modification that pays homage to both Incredibox and Sprunki, offering an alternative creative experience.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How many new sounds are included?</h3>
                    <p className="text-gray-400">The Sprunki Mod includes dozens of new sounds across multiple categories, giving you countless new possibilities for music creation.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I share my Sprunki Mod creations?</h3>
                    <p className="text-gray-400">Yes, you can save and share your unique compositions with friends and the wider Incredibox community.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Incredibox Sprunki Mod free?</h3>
                    <p className="text-gray-400">Yes, this mod is completely free to play and enjoy, with all features accessible to everyone.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be updates to the mod?</h3>
                    <p className="text-gray-400">Yes, the development team regularly releases updates with new sounds, characters, and features based on player feedback.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Who created the Sprunki Mod?</h3>
                    <p className="text-gray-400">The mod was created by a team of dedicated Incredibox and Sprunki fans who wanted to combine these two creative worlds.</p>
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

