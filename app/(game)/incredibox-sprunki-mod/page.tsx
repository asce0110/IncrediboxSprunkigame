'use client'

import { Comments } from '@/components/comments'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function IncrediboxSprunkiModPage() {
  return (
    <>
      <div className="min-h-screen bg-black/90">
        <div className="container mx-auto py-4 px-4">
          <div className="max-w-[1920px] mx-auto">
            {/* 返回按钮 */}
            <div className="mb-8">
              <Link 
                href="/" 
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
                </div>
              </Link>
            </div>

            {/* 游戏标题 */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                Incredibox Sprunki Mod
              </h1>
              <p className="text-gray-400 text-lg">
                The ultimate Incredibox mod with enhanced features
              </p>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                src="https://html-classic.itch.zone/html/11995631/index.html?v=1732313511"
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
                  About Incredibox Sprunki Mod
                </h2>
                <p className="text-gray-300 mb-4">
                  Welcome to Incredibox Sprunki Mod, the ultimate modification of the classic Incredibox game. This enhanced version brings together new sound design, improved visuals, and innovative features that take the music creation experience to the next level.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Enhanced Features</span>
                    <span className="text-gray-400 text-center">Experience new and improved gameplay mechanics</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Modern Sounds</span>
                    <span className="text-gray-400 text-center">Create music with updated sound library</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Visual Updates</span>
                    <span className="text-gray-400 text-center">Enjoy improved graphics and animations</span>
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

              {/* FAQ Section */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What is Incredibox Sprunki Mod?</h3>
                    <p className="text-gray-400">Incredibox Sprunki Mod is an enhanced version of the classic Incredibox game, featuring new sounds, improved visuals, and additional gameplay features.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I play Incredibox Sprunki Mod?</h3>
                    <p className="text-gray-400">Simply drag and drop characters onto the stage to create your own unique musical compositions. Each character adds a different sound to the mix.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Incredibox Sprunki Mod free to play?</h3>
                    <p className="text-gray-400">Yes, Incredibox Sprunki Mod is completely free to play on IncrediboxSprunkiMod.com.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What's new in this mod?</h3>
                    <p className="text-gray-400">This mod includes new sound samples, enhanced visual effects, improved user interface, and additional gameplay features not found in the original game.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                    <p className="text-gray-400">Yes, you can save and share your musical creations with other players in the community.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it available on mobile devices?</h3>
                    <p className="text-gray-400">Yes, Incredibox Sprunki Mod is fully optimized for both desktop and mobile devices.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there tutorials available?</h3>
                    <p className="text-gray-400">Yes, the game includes built-in tutorials to help you get started with creating music.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How often is the mod updated?</h3>
                    <p className="text-gray-400">We regularly update Incredibox Sprunki Mod with new features, sounds, and improvements based on community feedback.</p>
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