'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import {  Comments  } from '@/components/comments'
import { GameNav } from '@/components/game/game-nav'

export default function SprunkiPhase3ReversePage() {
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
                Sprunki Phase 3 Reverse - Experience Music in Reverse
              </h1>
              <p className="text-gray-400 text-lg">
                Create amazing reversed beats with Sprunki Phase 3 Reverse on IncrediboxSprunkiMod
              </p>
            </div>
          </div>

          {/* Game Area */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden mb-8">
            <iframe
              ref={iframeRef}
              id="gameframe"
              src="https://wowtbc.net/sprunkin/phase3-reverse/index.html"
              loading="lazy"
              title="Sprunki Phase 3 Reverse"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; focus-without-user-activation *;"
              style={{ display: 'initial' }}
            />
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">About Sprunki Phase 3 Reverse</h2>
            <p className="text-gray-300 mb-4">
              Sprunki Phase 3 Reverse is an innovative music creation game that takes the beloved Sprunki Phase 3 experience and flips it on its head. This unique version lets you create amazing beats by playing everything backwards, offering a fresh perspective on familiar sounds. With its intuitive interface and reversed audio mechanics, Sprunki Phase 3 Reverse brings a whole new dimension to music creation.
            </p>
            <p className="text-gray-300 mb-4">
              Experience the magic of reverse music creation in this special edition of Sprunki Phase 3. Create mesmerizing beats, discover new sound combinations, and explore the fascinating world of reversed audio patterns. Whether you're a fan of the original Sprunki Phase 3 or new to the series, this reverse edition offers endless possibilities for musical creativity.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Key Features of Sprunki Phase 3 Reverse</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Reversed audio mechanics for unique sound creation</li>
              <li>Classic Sprunki Phase 3 sounds reimagined in reverse</li>
              <li>Intuitive drag-and-drop interface</li>
              <li>Multiple music creation modes</li>
              <li>Save and share your reversed musical creations</li>
              <li>Enhanced visual effects and animations</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">What makes Sprunki Phase 3 Reverse different from the original?</h3>
                <p className="text-gray-300">
                  Sprunki Phase 3 Reverse takes all the beloved sounds and mechanics from the original game and plays them in reverse, creating a completely new musical experience. This reversed approach allows for unique sound combinations and creative possibilities not found in the standard version.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Do I need to play the original Sprunki Phase 3 first?</h3>
                <p className="text-gray-300">
                  No, you don't need prior experience with Sprunki Phase 3. While fans of the original will appreciate the reversed versions of familiar sounds, the game is designed to be enjoyable for both newcomers and experienced players.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">How do the reversed mechanics work?</h3>
                <p className="text-gray-300">
                  The game takes the original Sprunki Phase 3 sound samples and plays them in reverse. This creates unique sonic textures and allows you to compose music with an interesting twist. The drag-and-drop interface remains intuitive, making it easy to experiment with reversed sounds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Can I save my reversed music creations?</h3>
                <p className="text-gray-300">
                  Yes, Sprunki Phase 3 Reverse allows you to save your musical compositions. You can also share your creations with other players, building a community around this unique musical experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">What are the system requirements?</h3>
                <p className="text-gray-300">
                  Sprunki Phase 3 Reverse runs smoothly in most modern web browsers. For the best experience, we recommend using an updated version of Chrome, Firefox, or Safari with a stable internet connection.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Are there different music styles available?</h3>
                <p className="text-gray-300">
                  Yes, Sprunki Phase 3 Reverse includes various musical styles and sound sets, all played in reverse. This variety allows you to create diverse musical compositions across different genres and styles.
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
