'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function ColorboxMustardPage() {
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
      {/* 使用通用导航组件 */}
      <GameNav title="Colorbox Mustard" />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* SEO优化的标题区域 */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
              Colorbox Mustard - Unique Music Creation Experience
            </h1>
            <p className="text-gray-400 text-lg">
              Create amazing beats with this unique music creation game
            </p>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/12132346/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px'
              }}
              frameBorder="0"
              allowFullScreen={true}
              scrolling="no"
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Colorbox Mustard
              </h2>
              <p className="text-gray-300 mb-4">
                Colorbox Mustard is a unique music creation game that brings a fresh perspective to rhythm-based gameplay. With its innovative interface and diverse sound library, you can create amazing beats and explore your musical creativity.
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
                Why Play Colorbox Mustard?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Unique Music Creation</h3>
                  <p className="text-gray-400">Experience a fresh approach to music creation with our innovative interface and intuitive controls.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Diverse Sound Library</h3>
                  <p className="text-gray-400">Access a wide range of sounds and beats to create your unique musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Interactive Experience</h3>
                  <p className="text-gray-400">Enjoy real-time feedback and visual effects as you create your music.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Special Features</h3>
                  <p className="text-gray-400">Discover unique sound combinations and unlock special animations.</p>
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
                  <h3 className="text-lg font-medium text-white mb-2">What is Colorbox Mustard?</h3>
                  <p className="text-gray-400">Colorbox Mustard is a unique music creation game that lets you create beats and melodies through an innovative interface.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I play?</h3>
                  <p className="text-gray-400">Simply interact with the colorful interface to create sounds. Mix and match different elements to create your unique musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is it free to play?</h3>
                  <p className="text-gray-400">Yes, Colorbox Mustard is completely free to play in your web browser.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Do I need musical experience?</h3>
                  <p className="text-gray-400">No musical experience is required! Colorbox Mustard is designed to be intuitive and fun for everyone.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What makes it unique?</h3>
                  <p className="text-gray-400">Colorbox Mustard combines colorful visuals with intuitive music creation, creating a unique and engaging experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What devices can I play on?</h3>
                  <p className="text-gray-400">Colorbox Mustard works on any modern web browser on desktop and mobile devices.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Are there tutorials?</h3>
                  <p className="text-gray-400">Yes, Colorbox Mustard includes in-game tutorials and guides to help you get started.</p>
                </div>

                <div className="pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How often is new content added?</h3>
                  <p className="text-gray-400">We regularly update Colorbox Mustard with new sounds and features to enhance your music creation experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 