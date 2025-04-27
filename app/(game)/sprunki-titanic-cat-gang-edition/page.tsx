'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CommentsMock } from '@/components/comments-mock'
import { GameNav } from '@/components/game/game-nav'

export default function SprunkiTitanicCatGangEditionPage() {
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
      <GameNav title="Sprunki Titanic Cat Gang Edition" />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* SEO优化的标题区域 */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
              Sprunki Titanic Cat Gang Edition - A Feline Musical Adventure
            </h1>
            <p className="text-gray-400 text-lg">
              Join the feline musical crew on their epic voyage
            </p>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              ref={iframeRef}
              id="gameframe"
              src="https://wowtbc.net/sprunkin/titanic-cat1/index.html"
              className="w-full"
              style={{ 
                border: 'none',
                backgroundColor: 'black',
                height: '600px',
                marginTop: '40px',
                display: 'initial'
              }}
              loading="lazy"
              title="Sprunki Titanic Cat Gang Edition"
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
                About Sprunki Titanic Cat Gang Edition
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Sprunki Titanic Cat Gang Edition, where feline musical adventures meet the high seas! This unique take on the Sprunki series combines the charm of cats with the grandeur of an ocean voyage, creating a one-of-a-kind musical experience.
              </p>
              <p className="text-gray-300 mb-4">
                Create your own cat-themed musical compositions as you sail through an oceanic adventure. With a variety of feline-inspired sounds and sea shanties at your disposal, you'll be crafting purr-fect melodies in no time!
              </p>
            </div>

            {/* 特点部分 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Cat-themed sound effects and musical elements</li>
                <li>Ocean voyage backdrop with nautical themes</li>
                <li>Intuitive music creation interface</li>
                <li>Unique combination of feline and seafaring themes</li>
                <li>Share your cat-tastic musical creations</li>
                <li>Exclusive Titanic Cat Gang characters and animations</li>
              </ul>
            </div>

            {/* FAQ部分 */}
            <div className="p-6 bg-black/50 rounded-xl">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">What is Sprunki Titanic Cat Gang Edition?</h3>
                  <p className="text-gray-400">A unique music creation game that combines cat themes with a nautical adventure, allowing you to create music with feline and ocean-inspired sounds.</p>
                </div>
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">How do I play?</h3>
                  <p className="text-gray-400">Simply drag and drop musical elements onto the stage to create your own cat-themed oceanic melodies. Experiment with different combinations to discover unique sounds.</p>
                </div>
                <div className="border-b border-[#2EE59D]/10 pb-4">
                  <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                  <p className="text-gray-400">Yes! You can save and share your musical masterpieces with friends and the wider Sprunki community.</p>
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
          </div>
        </div>
      </div>
    </div>
  )
} 
