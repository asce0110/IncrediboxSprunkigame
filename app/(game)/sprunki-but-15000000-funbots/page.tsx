'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'
import { GameNav } from '@/components/game/game-nav'

export default function SprunkiFunbotsPage() {
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
      <GameNav title="Sprunki But 15,000,000 FunBots" />
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
                  Sprunki But 15,000,000 FunBots - Ultimate Chaos
                </h1>
                <p className="text-gray-400 text-lg">
                  Experience musical mayhem with millions of AI-powered FunBots creating endless combinations
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="gameframe"
                src="https://wowtbc.net/sprunkin/funbot150k/index.html"
                className="w-full"
                style={{ 
                  border: 'none',
                  backgroundColor: 'black',
                  height: '600px',
                  marginTop: '40px',
                  display: 'initial'
                }}
                loading="lazy"
                title="Sprunki But 15,000,000 FunBots"
                width="100%"
                height="100%"
                scrolling="no"
                allow="autoplay; fullscreen; focus-without-user-activation *;"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
            </div>

            {/* 游戏介绍和SEO内容 */}
            <div className="mt-8 space-y-6">
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Sprunki But 15,000,000 FunBots
                </h2>
                <p className="text-gray-300 mb-4">
                  Welcome to the most chaotic version of Sprunki yet! With 15 million AI-powered FunBots creating music simultaneously, every session becomes an unprecedented symphony of randomness and creativity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Millions of Bots</span>
                    <span className="text-gray-400 text-center">15M FunBots creating music</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">AI Chaos</span>
                    <span className="text-gray-400 text-center">Unpredictable combinations</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Endless Music</span>
                    <span className="text-gray-400 text-center">Never-repeating patterns</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Why Play Sprunki But 15,000,000 FunBots?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Massive Scale</h3>
                    <p className="text-gray-400">Experience music creation on an unprecedented scale with millions of AI bots.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Chaotic Creativity</h3>
                    <p className="text-gray-400">Watch as millions of FunBots create unexpected and unique musical combinations.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">AI Intelligence</h3>
                    <p className="text-gray-400">Each FunBot uses advanced AI to make musical decisions and create patterns.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Infinite Possibilities</h3>
                    <p className="text-gray-400">No two sessions are ever the same with millions of possible combinations.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">How do 15M FunBots work?</h3>
                    <p className="text-gray-400">Each bot uses AI to independently create and combine musical elements, resulting in complex and unique patterns.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I control the chaos?</h3>
                    <p className="text-gray-400">While the FunBots operate autonomously, you can influence the overall direction and style of the music.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will it overwhelm my system?</h3>
                    <p className="text-gray-400">The game is optimized to handle millions of bots without impacting performance.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How is each session unique?</h3>
                    <p className="text-gray-400">The massive number of FunBots ensures that no two musical sessions are ever identical.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save the creations?</h3>
                    <p className="text-gray-400">Yes, you can record and save the unique musical combinations created by the FunBots.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it beginner-friendly?</h3>
                    <p className="text-gray-400">The chaotic nature of the game makes it accessible to all - just sit back and enjoy the AI-generated music!</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be more bots?</h3>
                    <p className="text-gray-400">We're constantly working on expanding the FunBot population and improving their AI capabilities.</p>
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