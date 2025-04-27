'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunckiChristmasPage() {
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
      <GameNav title="Sprunki Christmas" />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 标题区域 */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
              Sprunki Christmas - Create Festive Holiday Music
            </h1>
            <p className="text-gray-400 text-lg">
              Mix Christmas beats and holiday sounds in this special festive edition
            </p>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="game_drop"
              allowFullScreen
              className="w-full"
              style={{ border: 'none' }}
              src="https://sprunki-christmas.vercel.app/"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍和评论区布局 */}
          <div className="mt-8">
            <div className="space-y-6">
              {/* 评论区 */}
              <div className="bg-black/50 rounded-xl">
                <div className="p-6 border-b border-[#2EE59D]/10">
                  <h2 className="text-2xl font-semibold text-[#2EE59D]">Comments</h2>
                </div>
                <div className="h-[600px] overflow-y-auto custom-scrollbar">
                  <div className="p-6">
                    <CommentsMock />
                  </div>
                </div>
              </div>

              {/* 游戏介绍 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  About Sprunki Christmas
                </h2>
                <p className="text-gray-300 mb-4">
                  Welcome to Sprunki Christmas, a festive edition of the popular music creation game. Get into the holiday spirit with this special Christmas version that brings together jingle bells, holiday beats, and Christmas-themed sounds. Create your own holiday masterpieces with our unique collection of seasonal instruments and effects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Christmas Sounds</span>
                    <span className="text-gray-400 text-center">Festive beats and holiday samples</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Holiday Themes</span>
                    <span className="text-gray-400 text-center">Christmas-themed visuals and effects</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Seasonal Features</span>
                    <span className="text-gray-400 text-center">Special Christmas mixing tools</span>
                  </div>
                </div>
              </div>

              {/* FAQ部分 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes Sprunki Christmas special?</h3>
                    <p className="text-gray-400">Sprunki Christmas offers a unique holiday-themed music creation experience with Christmas sounds, festive visuals, and seasonal features perfect for creating holiday music.</p>
                  </div>
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I create Christmas music?</h3>
                    <p className="text-gray-400">Simply drag and drop festive characters onto the stage to start creating holiday music. Each character adds unique Christmas sounds to your mix.</p>
                  </div>
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my Christmas creations?</h3>
                    <p className="text-gray-400">Yes! Save and share your holiday masterpieces with the Sprunki Christmas community. Spread joy this season with your musical creations!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

