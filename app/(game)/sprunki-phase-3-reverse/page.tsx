'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Comments } from '@/components/comments'

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
                Sprunki Phase 3 Reverse
              </h1>
              <p className="text-gray-400 text-lg">
                Experience classic Sprunki beats in reverse
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
              Experience the classic Sprunki Phase 3 in an entirely new way with this reverse edition. This unique take on the beloved game lets you create amazing beats by playing everything backwards, offering a fresh perspective on familiar sounds.
            </p>
          </div>

          {/* Comments Section */}
          <Comments />
        </div>
      </div>
    </div>
  )
} 