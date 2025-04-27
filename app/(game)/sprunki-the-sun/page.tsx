'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {  Comments  } from '@/components/comments'
import { GameNav } from '@/components/game/game-nav'

export default function SprunkiTheSunPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        const windowHeight = window.innerHeight
        const offsetTop = iframeRef.current.getBoundingClientRect().top
        const newHeight = windowHeight - offsetTop - 40
        iframeRef.current.style.height = `${newHeight}px`
      }
    }

    window.addEventListener('resize', adjustIframeHeight)
    adjustIframeHeight()

    return () => window.removeEventListener('resize', adjustIframeHeight)
  }, [])

  return (
    <div className="min-h-screen bg-black/90">
      <GameNav title="Sprunki The Sun" />
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center gap-6">
            <Link 
              href="/sprunked-games" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
              </div>
            </Link>

            <div>
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                Sprunki The Sun - Radiant Beats
              </h1>
              <p className="text-gray-400 text-lg">
                Create dazzling musical compositions with the power of the sun
              </p>
            </div>
          </div>

          {/* Game Area */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden mb-8">
            <iframe
              ref={iframeRef}
              id="gameframe"
              src="https://wowtbc.net/sprunkin/sprunki-thesun/index.html"
              loading="lazy"
              title="Sprunki the Sun"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; focus-without-user-activation *;"
              style={{ display: 'initial' }}
            />
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">About Sprunki The Sun</h2>
            <p className="text-gray-300 mb-4">
              Sprunki The Sun brings a brilliant new dimension to the Sprunki universe, combining radiant visuals with sun-inspired sound design. This unique mod transforms your musical creation experience with warm, energetic beats and dazzling effects.
            </p>
            <p className="text-gray-300 mb-4">
              Harness the power of solar-inspired sounds to create music that truly shines. With its innovative sound palette and luminous visual elements, Sprunki The Sun offers a bright new way to express your musical creativity.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Sun-themed sound effects and samples</li>
              <li>Radiant visual effects and animations</li>
              <li>Intuitive music creation interface</li>
              <li>Multiple solar-inspired musical styles</li>
              <li>Dynamic beat combinations</li>
              <li>Share your luminous compositions</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">What makes Sprunki The Sun special?</h3>
                <p className="text-gray-300">
                  Sprunki The Sun introduces a unique solar theme to the classic Sprunki experience, featuring bright, energetic sounds and radiant visual effects that create an entirely new atmosphere for music creation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">How does the sun theme enhance the gameplay?</h3>
                <p className="text-gray-300">
                  The sun theme influences both the visual and audio aspects of the game, providing warm, energetic sound samples and dazzling effects that complement the traditional Sprunki gameplay while adding a brilliant new dimension to your musical creations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Can I combine different sound elements?</h3>
                <p className="text-gray-300">
                  Absolutely! Sprunki The Sun encourages experimentation by allowing you to mix various solar-inspired sounds and effects. Create unique combinations to produce your own radiant musical masterpieces.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Is this mod beginner-friendly?</h3>
                <p className="text-gray-300">
                  Yes! While the theme is unique, the core gameplay remains accessible and easy to understand. New players can quickly start creating music, while experienced users will appreciate the fresh, sun-inspired take on familiar mechanics.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">What are the technical requirements?</h3>
                <p className="text-gray-300">
                  Sprunki The Sun runs smoothly in most modern web browsers. For the best experience, we recommend using an updated version of Chrome, Firefox, or Safari with a stable internet connection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Can I save and share my music?</h3>
                <p className="text-gray-300">
                  Yes! You can save your radiant musical creations and share them with the community. Let others experience your unique sun-inspired compositions and discover what fellow creators have made.
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <Comments />
        </div>
      </div>
    </div>
  )
} 
