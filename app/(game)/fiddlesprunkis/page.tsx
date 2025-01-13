'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

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
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 