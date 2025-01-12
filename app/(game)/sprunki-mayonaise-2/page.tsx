'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function SprunkiMayonaise2Page() {
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
                  Sprunki Mayonaise 2 - The Creamy Musical Adventure
                </h1>
                <p className="text-gray-400 text-lg">
                  Dive into the smooth and creamy world of musical mayhem in this delicious sequel
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="gameframe"
                src="https://wowtbc.net/sprunkin/mayonaise2/index.html"
                className="w-full"
                style={{ 
                  border: 'none',
                  backgroundColor: 'black',
                  height: '600px',
                  marginTop: '40px',
                  display: 'initial'
                }}
                loading="lazy"
                title="Sprunki Mayonaise 2"
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
                  About Sprunki Mayonaise 2
                </h2>
                <p className="text-gray-300 mb-4">
                  The long-awaited sequel to the popular Sprunki Mayonaise is here! With improved mechanics, new creamy sound effects, and an expanded musical palette, Sprunki Mayonaise 2 takes the condiment-themed music creation to new heights.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Creamy Beats</span>
                    <span className="text-gray-400 text-center">Smooth and rich sound effects</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Mayo Magic</span>
                    <span className="text-gray-400 text-center">Unique mayonnaise-themed visuals</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Sequel Features</span>
                    <span className="text-gray-400 text-center">New and improved gameplay</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Why Play Sprunki Mayonaise 2?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Enhanced Gameplay</h3>
                    <p className="text-gray-400">Experience improved mechanics and smoother controls in this delicious sequel.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">New Sound Library</h3>
                    <p className="text-gray-400">Discover fresh mayonnaise-themed sounds and effects to create unique music.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Visual Upgrades</h3>
                    <p className="text-gray-400">Enjoy improved graphics and creamy visual effects that bring the music to life.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Creative Freedom</h3>
                    <p className="text-gray-400">More tools and options for creating your perfect mayonnaise-inspired masterpiece.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What's new in Mayonaise 2?</h3>
                    <p className="text-gray-400">The sequel features improved gameplay mechanics, new sound effects, and enhanced visual elements.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Do I need to play the first game?</h3>
                    <p className="text-gray-400">While familiarity with the original can help, Mayonaise 2 is designed to be enjoyed by both new and returning players.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes the mayonnaise theme special?</h3>
                    <p className="text-gray-400">The creamy theme adds a unique twist to music creation, with smooth transitions and rich sound effects.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Are there new instruments?</h3>
                    <p className="text-gray-400">Yes, Mayonaise 2 introduces new mayonnaise-themed instruments and sound effects.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I share my creations?</h3>
                    <p className="text-gray-400">Absolutely! Share your mayonnaise-inspired musical masterpieces with the community.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it beginner-friendly?</h3>
                    <p className="text-gray-400">Yes, the game features intuitive controls and tutorials suitable for all skill levels.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be more updates?</h3>
                    <p className="text-gray-400">We're committed to adding more creamy content and features in future updates.</p>
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