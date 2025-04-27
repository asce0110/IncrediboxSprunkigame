'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiModdedPage() {
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
      <GameNav title="Sprunki Modded" />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 标题区域 */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
              Sprunki Modded - Enhanced Music Creation Experience
            </h1>
            <p className="text-gray-400 text-lg">
              Experience the enhanced version of music creation with new features and modern beats
            </p>
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
              allowFullScreen={true}
              scrolling="no"
              allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍和内容 */}
          <div className="mt-8 space-y-6">
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Sprunki Modded
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Sprunki Modded, an enhanced version of the classic music creation game. This modded version brings together new sound design, enhanced visuals, and innovative music creation features. Sprunki Modded introduces unique electronic elements and modern beats that push the boundaries of what's possible in browser-based music creation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">New Sounds</span>
                  <span className="text-gray-400 text-center">Fresh electronic beats and modern samples</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">Enhanced Visuals</span>
                  <span className="text-gray-400 text-center">Improved animations and effects</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                  <span className="text-[#2EE59D] font-bold text-lg mb-2">New Features</span>
                  <span className="text-gray-400 text-center">Advanced mixing tools</span>
                </div>
              </div>
            </div>

            {/* 游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Key Features of Sprunki Modded
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Enhanced Sound Library</h3>
                  <p className="text-gray-400">Sprunki Modded introduces a cutting-edge collection of electronic sounds, beats, and effects that reflect contemporary music trends.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Improved Visual Experience</h3>
                  <p className="text-gray-400">Experience improved animations, dynamic visual effects, and a refined user interface that makes music creation more intuitive than ever.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Advanced Mixing Tools</h3>
                  <p className="text-gray-400">Take advantage of new mixing capabilities and sound manipulation features to create more complex and nuanced musical compositions.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Share Your Creations</h3>
                  <p className="text-gray-400">Save and share your Sprunki Modded masterpieces with the community, and discover what others are creating with these innovative tools.</p>
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

            {/* FAQ 部分 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What's new in Sprunki Modded?</h3>
                  <p className="text-gray-400">Sprunki Modded introduces new electronic sounds, improved visual effects, and enhanced mixing capabilities, offering a fresh take on the music creation experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I get started?</h3>
                  <p className="text-gray-400">Simply drag and drop characters onto the stage to start creating music. Each character adds a unique sound to your mix, allowing you to build complex arrangements.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                  <p className="text-gray-400">Yes! You can save your musical creations and share them with the community. Join now and showcase your unique compositions!</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is Sprunki Modded free to play?</h3>
                  <p className="text-gray-400">Yes, Sprunki Modded is free to play online. Start creating your own electronic masterpieces right away!</p>
                </div>
              </div>
            </div>

            {/* 社区部分 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Join the Community
              </h2>
              <p className="text-gray-300">
                Become part of the growing Sprunki Modded community! Create, share, and discover amazing musical creations with players from around the world. Whether you're a beginner or an experienced music creator, Sprunki Modded provides the perfect platform to express your creativity and make unique music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
