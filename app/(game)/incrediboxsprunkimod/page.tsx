'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function IncrediboxSprunckiModPage() {
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
                Incredibox Sprunki Mod - Create Your Own Beats
              </h1>
              <p className="text-gray-400 text-lg">
                Create your own beats with this amazing music game
              </p>
            </div>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12097960/index.html"
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

          {/* 游戏介绍 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Incredibox Sprunki Mod
              </h2>
              <p className="text-gray-300 mb-4">
                Incredibox Sprunki Mod is an exciting modification of the classic Incredibox game, featuring new sounds, beats, and visual elements. Experience music creation in a whole new way with our innovative interface and modern sound library.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Create Music</span>
                  <span className="text-gray-400 text-center">Mix and match different beats and sounds</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Interactive</span>
                  <span className="text-gray-400 text-center">Real-time music creation</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Have Fun</span>
                  <span className="text-gray-400 text-center">Enjoy creating music in a fun way</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Incredibox Sprunki Mod?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">New Sound Elements</h3>
                  <p className="text-gray-400">Experience fresh electronic beats and modern samples that expand the original Incredibox sound library.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Enhanced Visuals</h3>
                  <p className="text-gray-400">Enjoy improved animations and visual effects that bring your music to life.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Interactive Experience</h3>
                  <p className="text-gray-400">Create music in real-time with immediate audio and visual feedback.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Unique Features</h3>
                  <p className="text-gray-400">Discover special combinations and unlock unique animated performances.</p>
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
                  <p className="text-gray-400">Incredibox Sprunki Mod is a modified version of Incredibox featuring new sounds, beats, and visual elements.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I play?</h3>
                  <p className="text-gray-400">Simply drag and drop characters onto the stage to add different sounds. Mix and match to create your unique musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is it free to play?</h3>
                  <p className="text-gray-400">Yes, Incredibox Sprunki Mod is completely free to play in your web browser.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Do I need musical experience?</h3>
                  <p className="text-gray-400">No musical experience is required! The game is designed to be intuitive and fun for everyone.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What's new in this mod?</h3>
                  <p className="text-gray-400">This mod features new electronic beats, modern samples, improved animations, and unique sound combinations.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What devices can I play on?</h3>
                  <p className="text-gray-400">Incredibox Sprunki Mod works on any modern web browser on desktop and mobile devices.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Are there tutorials?</h3>
                  <p className="text-gray-400">Yes, the game includes tutorials and guides to help you get started.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How often is new content added?</h3>
                  <p className="text-gray-400">We regularly update the mod with new sounds and features to enhance your music creation experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 