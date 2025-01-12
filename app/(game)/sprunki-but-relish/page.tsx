'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

export default function SprunkiButRelishPage() {
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
                Sprunki But Relish - A Tasty Musical Adventure
              </h1>
              <p className="text-gray-400 text-lg">
                Experience the zesty fusion of music and condiments in this unique Sprunki mod
              </p>
            </div>
          </div>

          {/* Game Area */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden mb-8">
            <iframe
              ref={iframeRef}
              id="gameframe"
              src="https://wowtbc.net/sprunkin/sprunki-but-relish/index.html"
              loading="lazy"
              title="Sprunki But Relish"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; focus-without-user-activation *;"
              style={{ display: 'initial' }}
            />
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">About Sprunki But Relish</h2>
            <p className="text-gray-300 mb-4">
              Sprunki But Relish is a delightfully quirky take on the classic Sprunki experience. This unique mod combines the beloved music creation mechanics with a zesty twist, introducing relish-themed sounds and visuals that create an entirely new flavor of musical entertainment.
            </p>
            <p className="text-gray-300 mb-4">
              Dive into a world where music meets condiments, creating beats that are both catchy and uniquely flavored. With its distinctive sound palette and creative approach, Sprunki But Relish offers a fresh and entertaining way to explore musical creativity.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Unique relish-themed sound effects and samples</li>
              <li>Classic Sprunki gameplay with a tasty twist</li>
              <li>Intuitive drag-and-drop music creation</li>
              <li>Multiple musical styles and combinations</li>
              <li>Special visual effects and animations</li>
              <li>Share your zesty musical creations</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">What makes Sprunki But Relish unique?</h3>
                <p className="text-gray-300">
                  Sprunki But Relish adds a flavorful twist to the classic Sprunki formula by incorporating relish-themed sounds and visuals. This creates a unique musical experience that's both familiar and refreshingly different.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">How does the relish theme affect gameplay?</h3>
                <p className="text-gray-300">
                  The relish theme influences both the visual and audio aspects of the game. You'll encounter unique sound samples and effects that complement the traditional Sprunki gameplay mechanics while adding a zesty new layer to your musical creations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Can I mix different sound styles?</h3>
                <p className="text-gray-300">
                  Yes! Sprunki But Relish encourages experimentation by allowing you to mix and match different sound styles. Combine various elements to create your own unique musical recipes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Is this mod suitable for beginners?</h3>
                <p className="text-gray-300">
                  Absolutely! While the theme is unique, the core gameplay remains intuitive and accessible. New players can easily jump in and start creating music, while experienced users will appreciate the fresh take on familiar mechanics.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">What are the system requirements?</h3>
                <p className="text-gray-300">
                  Sprunki But Relish runs smoothly in most modern web browsers. We recommend using an updated version of Chrome, Firefox, or Safari with a stable internet connection for the best experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">Can I save and share my creations?</h3>
                <p className="text-gray-300">
                  Yes! You can save your musical masterpieces and share them with the community. Show off your unique relish-inspired compositions and discover what others have created.
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