'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunkiTerrorPhase10Page() {
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
      <div className="min-h-screen bg-black/90">
        <GameNav title="Sprunki Terror Phase 10" />
        
        <div className="container mx-auto py-4 px-4">
          <div className="max-w-4xl mx-auto">
            {/* SEO优化的标题区域 */}
            <div className="mb-4">
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                Sprunki Terror Phase 10 - Classic Horror Reimagined
              </h1>
              <p className="text-gray-400 text-lg">
                Return to the roots of horror with this iconic phase of the Terror series
              </p>
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
                  About Sprunki Terror Phase 10
                </h2>
                <p className="text-gray-300 mb-4">
                  Phase 10 of the Sprunki Terror series brings you back to the classic horror roots. Experience the perfect blend of traditional horror elements with modern music creation mechanics in this milestone release.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Classic Horror</span>
                    <span className="text-gray-400 text-center">Traditional horror elements</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Phase 10</span>
                    <span className="text-gray-400 text-center">Iconic milestone release</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Modern Twist</span>
                    <span className="text-gray-400 text-center">Updated gameplay mechanics</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Why Play Sprunki Terror Phase 10?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Classic Horror Elements</h3>
                    <p className="text-gray-400">Experience the traditional horror mechanics that made the series famous.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Refined Gameplay</h3>
                    <p className="text-gray-400">Enjoy polished and perfected horror music creation mechanics.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Iconic Soundtrack</h3>
                    <p className="text-gray-400">Create music with the memorable sounds of Phase 10.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Modern Features</h3>
                    <p className="text-gray-400">Classic horror enhanced with modern gameplay elements.</p>
                  </div>
                </div>
              </div>

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

              {/* FAQ Section */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes Phase 10 special?</h3>
                    <p className="text-gray-400">Phase 10 is a milestone release that perfectly balances classic horror elements with modern gameplay mechanics.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is this version different from Phase 30?</h3>
                    <p className="text-gray-400">While Phase 30 focuses on intense horror, Phase 10 offers a more traditional horror experience with refined mechanics.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What's new in this phase?</h3>
                    <p className="text-gray-400">Phase 10 introduces classic horror elements while maintaining modern gameplay features and sound quality.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it suitable for beginners?</h3>
                    <p className="text-gray-400">Yes, Phase 10's refined mechanics make it an excellent entry point for new players to the Terror series.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What horror elements are included?</h3>
                    <p className="text-gray-400">Experience classic horror sounds, atmospheric effects, and traditional horror-themed visuals.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I play other phases first?</h3>
                    <p className="text-gray-400">While you can play phases in any order, Phase 10 offers a great introduction to the Terror series.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there future updates planned?</h3>
                    <p className="text-gray-400">We continue to refine and enhance Phase 10 while maintaining its classic horror appeal.</p>
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