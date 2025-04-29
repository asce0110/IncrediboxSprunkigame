'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiInOhioBrainrotPage() {
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
      <GameNav title="Sprunki In Ohio Brainrot" />
      <div className="min-h-screen bg-black/90">
        <div className="container mx-auto py-4 px-4">
          <div className="max-w-4xl mx-auto">
            {/* 鏍囬鍖哄煙 */}
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
                  Sprunki In Ohio Brainrot
                  <span className="block text-lg sm:text-xl md:text-2xl mt-1 text-white/90">The Ultimate Ohio Experience</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                  Experience the chaotic world of Sprunki in Ohio with this mind-bending game
                </p>
              </div>
            </div>

            {/* 娓告垙鍖哄煙 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                src="https://html-classic.itch.zone/html/12037105/ohio/index.html"
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

            {/* 娓告垙浠嬬粛鍜屽唴瀹?*/}
            <div className="mt-8 space-y-6">
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Sprunki In Ohio Brainrot
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  Dive into the surreal world of Sprunki In Ohio Brainrot, where chaos and music collide in the heart of Ohio. This bizarre experience takes the beloved Sprunki character and places him in increasingly absurd Ohio-themed scenarios.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Ohio Vibes</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Experience the essence of Ohio</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Brainrot</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Delightfully bizarre gameplay</span>
                  </div>
                  <div className="flex flex-col items-center p-3 sm:p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-base sm:text-lg mb-1 sm:mb-2">Music Mayhem</span>
                    <span className="text-sm sm:text-base text-gray-400 text-center">Chaotic musical combinations</span>
                  </div>
                </div>
              </div>

              {/* 娓告垙鐗圭偣 */}
              <div className="p-4 sm:p-6 bg-black/50 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2EE59D] mb-4 sm:mb-6">
                  Why Play Sprunki In Ohio Brainrot?
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Absurd Humor</h3>
                    <p className="text-sm sm:text-base text-gray-400">Enjoy the ridiculous Ohio-themed jokes and scenarios that will leave you laughing.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Meme Culture</h3>
                    <p className="text-sm sm:text-base text-gray-400">Experience the internet's obsession with Ohio in this meme-filled adventure.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Unique Soundtrack</h3>
                    <p className="text-sm sm:text-base text-gray-400">Jam to Ohio-inspired music remixes that perfectly complement the chaotic gameplay.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">Addictive Gameplay</h3>
                    <p className="text-sm sm:text-base text-gray-400">Simple to learn but impossible to master, the perfect recipe for "just one more try".</p>
                  </div>
                </div>
              </div>

              {/* 璇勮鍖?*/}
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
                    <h3 className="text-lg font-medium text-white mb-2">What is Sprunki In Ohio Brainrot?</h3>
                    <p className="text-gray-400">It's a chaotic music game featuring Sprunki character in bizarre Ohio-themed scenarios, combining meme culture with music creation.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Why Ohio?</h3>
                    <p className="text-gray-400">Because the internet decided Ohio is the perfect setting for absurdist humor and memes. We're just following the trend!</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is this game suitable for kids?</h3>
                    <p className="text-gray-400">While there's no explicit content, the absurdist humor and memes might be better appreciated by teens and adults.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I play on mobile?</h3>
                    <p className="text-gray-400">Yes, Sprunki In Ohio Brainrot is fully optimized for both desktop and mobile devices.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Will there be more Ohio content?</h3>
                    <p className="text-gray-400">Absolutely! We're constantly working on new absurd Ohio scenarios and features for future updates.</p>
                  </div>

                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Is Ohio really like this?</h3>
                    <p className="text-gray-400">We can neither confirm nor deny the accuracy of our Ohio representation. It's best to experience the real Ohio for yourself!</p>
                  </div>

                  <div className="pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Who created this masterpiece?</h3>
                    <p className="text-gray-400">This game was created by the same team behind other Sprunki experiences, with a special love for internet meme culture.</p>
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

