'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function GameincrediboxPage() {
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
      <GameNav title="Game Incredibox" />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* SEO优化的标题区域 */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
              Game Incredibox - Enhanced Gaming Experience
            </h1>
            <p className="text-gray-400 text-lg">
              Enjoy the classic Incredibox experience with new gameplay elements
            </p>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12037105/incredibox/index.html"
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
              <div className="overflow-y-auto custom-scrollbar">
                <div className="p-6">
                  <CommentsMock />
                </div>
              </div>
            </div>

            {/* 游戏介绍 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Game Incredibox
              </h2>
              <p className="text-gray-300 mb-4">
                Game Incredibox takes the beloved music creation platform to the next level, transforming it into a full gaming experience. With added gameplay elements, challenges, and rewards, you can enjoy the musical creativity of Incredibox in an entirely new way.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Gameplay</span>
                  <span className="text-gray-400 text-center">New game mechanics and challenges</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Rewards</span>
                  <span className="text-gray-400 text-center">Unlock new sounds and visuals</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Classic+</span>
                  <span className="text-gray-400 text-center">Enhanced Incredibox experience</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Game Incredibox?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Enhanced Gameplay</h3>
                  <p className="text-gray-400">Experience Incredibox with game mechanics that make music creation more engaging and challenging.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Progression System</h3>
                  <p className="text-gray-400">Level up and unlock new sounds, characters, and visual effects as you master the game.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Challenges & Achievements</h3>
                  <p className="text-gray-400">Complete special challenges to earn rewards and show off your music creation skills.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Same Great Music</h3>
                  <p className="text-gray-400">All the musical creativity of Incredibox with added game elements for a more engaging experience.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                FAQ
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What is Game Incredibox?</h3>
                  <p className="text-gray-400">Game Incredibox is an enhanced version of the classic Incredibox music creation platform, featuring added gameplay elements, challenges, and a progression system.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How does it differ from regular Incredibox?</h3>
                  <p className="text-gray-400">While retaining all the music creation capabilities, Game Incredibox adds game mechanics, challenges, achievements, and a progression system to make the experience more engaging.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Can I still create music freely?</h3>
                  <p className="text-gray-400">Absolutely! The core music creation functionality remains intact, with game elements enhancing rather than restricting your creative freedom.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What kind of rewards can I unlock?</h3>
                  <p className="text-gray-400">You can unlock new sound samples, characters, visual effects, and exclusive music creation tools as you progress through the game.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is Game Incredibox free to play?</h3>
                  <p className="text-gray-400">Yes, Game Incredibox is completely free to play, with all core features available without any purchase.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is there multiplayer support?</h3>
                  <p className="text-gray-400">Game Incredibox includes competitive elements and leaderboards where you can compare your creations and achievements with other players.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Will there be updates to Game Incredibox?</h3>
                  <p className="text-gray-400">Yes, we regularly update with new challenges, sounds, and gameplay features to keep the experience fresh and exciting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
