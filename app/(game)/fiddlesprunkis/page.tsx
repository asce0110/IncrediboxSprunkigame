'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import Head from 'next/head'
import { Comments } from '@/components/comments'

export default function FiddleSprunkisPage() {
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
      <Head>
        <title>FiddleSprunkis - Folk-Inspired Music Creation Game | Play Online Free</title>
        <meta name="description" content="Play FiddleSprunkis online - A folk-inspired musical journey with a Sprunki twist. Create unique beats, mix folk sounds, and compose your own musical masterpieces in this engaging interactive experience." />
        <meta name="keywords" content="FiddleSprunkis, folk music game, music creation, Sprunki game, online music maker, folk beats" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="FiddleSprunkis - Create Your Own Folk-Inspired Music Online" />
        <meta property="og:description" content="A folk-inspired musical journey with a Sprunki twist. Create and mix unique folk beats in this engaging music creation game." />
        <meta property="og:image" content="https://sprunkin.com/wp-content/uploads/2025/01/FiddleSprunkis-368x207.png" />
        <meta property="og:url" content="https://incrediboxsprunkimod.com/fiddlesprunkis" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FiddleSprunkis - Folk-Inspired Music Creation Game" />
        <meta name="twitter:description" content="Create and mix unique folk beats in this engaging music creation game. A folk-inspired musical journey with a Sprunki twist." />
        <meta name="twitter:image" content="https://sprunkin.com/wp-content/uploads/2025/01/FiddleSprunkis-368x207.png" />
      </Head>

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
                  FiddleSprunkis - The Ultimate Music Creation Experience
                </h1>
                <p className="text-gray-400 text-lg">
                  Create amazing beats and music with this revolutionary music creation game
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="gameframe"
                src="https://wowtbc.net/sprunkin/fiddlesprunkis/index.html"
                className="w-full"
                style={{ 
                  border: 'none',
                  backgroundColor: 'black',
                  height: '600px',
                  marginTop: '40px',
                  display: 'initial'
                }}
                loading="lazy"
                title="FiddleSprunkis"
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
                  About FiddleSprunkis
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  FiddleSprunkis is an innovative music creation game that lets you explore your musical creativity. 
                  Mix different sounds, create unique beats, and compose your own musical masterpieces in this engaging 
                  interactive experience.
                </p>
              </div>

              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  Features
                </h2>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Intuitive music creation interface</li>
                  <li>Wide variety of sounds and beats</li>
                  <li>Real-time music mixing</li>
                  <li>Unique visual experience</li>
                  <li>Save and share your creations</li>
                </ul>
              </div>

              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  How to Play
                </h2>
                <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                  <li>Click on different characters to add their sounds</li>
                  <li>Mix and match different beats</li>
                  <li>Create your own unique rhythm</li>
                  <li>Experiment with different combinations</li>
                  <li>Share your musical creations with friends</li>
                </ol>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 