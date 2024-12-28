'use client'

import { useRef, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Comments } from '@/components/comments'

export default function SprunckiIncrediboxPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'game-loaded') {
        // 游戏加载完成后的处理
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 返回首页按钮 */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#2EE59D] hover:text-white transition-colors duration-300 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#2EE59D]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowLeft className="w-8 h-8 relative z-10" />
          </div>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="space-y-8">
          {/* SEO优化的标题区域 */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2EE59D]">
              Sprunki Incredibox - Interactive Music Creation Game
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Play Sprunki Incredibox online - Create amazing music with this unique blend of rhythm and animation
            </p>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              src="https://html-classic.itch.zone/html/11934963/index.html"
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

          {/* SEO优化的游戏介绍 */}
          <div className="mt-8 space-y-6">
            {/* 评论区 */}
            <div className="bg-black/50 rounded-xl">
              <div className="p-6 border-b border-[#2EE59D]/10">
                <h2 className="text-2xl font-semibold text-[#2EE59D]">Comments</h2>
              </div>
              <div className="h-[600px] overflow-y-auto custom-scrollbar">
                <div className="p-6">
                  <Comments />
                </div>
              </div>
            </div>

            {/* 游戏介绍 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                About Sprunki Incredibox - The Ultimate Music Creation Experience
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  Sprunki Incredibox combines the best of both worlds - the innovative gameplay of Sprunki and the beloved mechanics of Incredibox. This unique fusion creates an unparalleled music creation experience where you can mix beats, create melodies, and produce your own musical masterpieces with an intuitive drag-and-drop interface.
                </p>
              </div>
            </div>

            {/* SEO优化的游戏特点 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Why Play Sprunki Incredibox?
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Unique Sound Library</h3>
                  <p className="text-gray-400">Access a vast collection of sounds and beats that blend Sprunki's innovation with Incredibox's signature style.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Interactive Music Creation</h3>
                  <p className="text-gray-400">Create music through an engaging visual interface that makes music production fun and accessible to everyone.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Animated Performance</h3>
                  <p className="text-gray-400">Watch your music come to life with animated characters that respond to your musical arrangements.</p>
                </div>
              </div>
            </div>

            {/* SEO优化的FAQ部分 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Frequently Asked Questions About Sprunki Incredibox
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What is Sprunki Incredibox?</h3>
                  <p className="text-gray-400">Sprunki Incredibox is an innovative music creation game that combines the unique features of Sprunki with the beloved mechanics of Incredibox, creating a fresh and engaging musical experience.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I play Sprunki Incredibox?</h3>
                  <p className="text-gray-400">Simply drag and drop characters onto the stage to create your music. Each character adds a unique sound to your mix, allowing you to create complex musical arrangements easily.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What makes Sprunki Incredibox special?</h3>
                  <p className="text-gray-400">Sprunki Incredibox offers a unique combination of visual music creation, interactive animation, and an extensive sound library, making it stand out in the world of music games.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Can I share my Sprunki Incredibox creations?</h3>
                  <p className="text-gray-400">Yes! You can save and share your musical creations with friends and the Sprunki Incredibox community, showcasing your unique musical style.</p>
                </div>

                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Is Sprunki Incredibox free to play online?</h3>
                  <p className="text-gray-400">Yes, you can play Sprunki Incredibox for free right here in your browser. Start creating amazing music instantly!</p>
                </div>
              </div>
            </div>

            {/* SEO优化的额外信息 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Join the Sprunki Incredibox Community
              </h2>
              <p className="text-gray-300">
                Become part of the vibrant Sprunki Incredibox community! Share your musical creations, discover new mixing techniques, and connect with other music creators from around the world. Whether you're a beginner or an experienced musician, Sprunki Incredibox offers endless possibilities for musical expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 