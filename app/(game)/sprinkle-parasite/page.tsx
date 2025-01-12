'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function SprinkleParasitePage() {
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
                  Sprinkle Parasite - Infectious Musical Adventure
                </h1>
                <p className="text-gray-400 text-lg">
                  Experience a parasitic twist on music creation in this unique Sprunki variant
                </p>
              </div>
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
                  About Sprinkle Parasite
                </h2>
                <p className="text-gray-300 mb-4">
                  Sprinkle Parasite introduces a fascinating parasitic theme to the Sprunki universe. Create music that evolves and spreads through your composition, with each beat and melody potentially triggering unexpected mutations and transformations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Parasitic Beats</span>
                    <span className="text-gray-400 text-center">Watch your music evolve and spread</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Mutation System</span>
                    <span className="text-gray-400 text-center">Dynamic sound transformations</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Infectious Fun</span>
                    <span className="text-gray-400 text-center">Spread your musical creation</span>
                  </div>
                </div>
              </div>

              {/* 游戏特点 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Why Play Sprinkle Parasite?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Evolving Soundscape</h3>
                    <p className="text-gray-400">Create music that dynamically evolves as parasitic elements spread through your composition.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Mutation Mechanics</h3>
                    <p className="text-gray-400">Experience unique sound mutations that transform your music in unexpected ways.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Interactive Spread</h3>
                    <p className="text-gray-400">Watch and influence how your musical parasites spread and interact.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Unique Theme</h3>
                    <p className="text-gray-400">A fresh take on music creation with a parasitic twist.</p>
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Sprinkle Parasite?</h3>
                    <p className="text-gray-400">A unique variant of Sprunki that introduces parasitic elements to music creation, where sounds evolve and spread throughout your composition.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How does the mutation system work?</h3>
                    <p className="text-gray-400">As you create music, certain elements can mutate and transform, creating new and unexpected sound combinations.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I control the parasitic spread?</h3>
                    <p className="text-gray-400">Yes, you have tools to influence how the parasitic elements spread and interact within your composition.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes this version unique?</h3>
                    <p className="text-gray-400">The parasitic theme adds a new layer of complexity and unpredictability to the classic Sprunki formula.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is it beginner-friendly?</h3>
                    <p className="text-gray-400">While the parasitic mechanics add complexity, the core music creation remains accessible to all skill levels.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my mutated creations?</h3>
                    <p className="text-gray-400">Yes, you can save and share your unique parasitic musical compositions with others.</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be more parasitic features?</h3>
                    <p className="text-gray-400">We're constantly working on new mutations and parasitic mechanics to keep the experience fresh.</p>
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