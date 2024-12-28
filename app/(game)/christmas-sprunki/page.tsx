'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRef, useEffect } from 'react'
import Head from 'next/head'
import { Comments } from '@/components/comments'

export default function ChristmasSprunkiPage() {
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
        <title>Christmas Sprunki - Best Christmas Music Creation Game | Play Online Free</title>
        <meta name="description" content="Play Christmas Sprunki online - The ultimate Christmas music creation game. Create festive beats, mix holiday sounds, and share your Christmas music. Perfect for holiday music makers!" />
        <meta name="keywords" content="Christmas Sprunki, Christmas music game, holiday music maker, Christmas beats, Christmas music creator, Christmas Sprunki game" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Christmas Sprunki - Create Your Own Christmas Music Online" />
        <meta property="og:description" content="Create festive Christmas music with Christmas Sprunki. Mix holiday beats, jingle bells, and Christmas sounds in this unique music creation game." />
        <meta property="og:image" content="/christmas-sprunki-og.jpg" />
        <meta property="og:url" content="https://yourdomain.com/christmas-sprunki" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sprunki Games" />
        <link rel="canonical" href="https://yourdomain.com/christmas-sprunki" />
        
        {/* Schema.org Markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Christmas Sprunki",
            "description": "The ultimate Christmas music creation game. Create festive beats and holiday music online.",
            "applicationCategory": "Game",
            "genre": "Music Creation",
            "image": "https://yourdomain.com/christmas-sprunki-og.jpg",
            "url": "https://yourdomain.com/christmas-sprunki",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "2150"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Head>
      
      <div className="min-h-screen bg-black/90">
        <div className="container mx-auto py-4 px-4">
          <div className="max-w-7xl mx-auto">
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
                  Christmas Sprunki - Holiday Music Creation Game
                </h1>
                <p className="text-gray-400 text-lg">
                  Create magical Christmas music with festive beats and holiday sounds
                </p>
              </div>
            </div>

            {/* 游戏区域 */}
            <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
              <iframe 
                ref={iframeRef}
                id="game_drop"
                allowFullScreen
                style={{ width: '100%' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
            </div>

            {/* 游戏介绍和评论区域布局 */}
            <div className="mt-8">
              <div className="space-y-6">
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
                    About Christmas Sprunki
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Christmas Sprunki is the ultimate holiday music creation experience. Immerse yourself in a festive wonderland where you can create magical Christmas music using our collection of holiday-themed sounds, jingle bells, and seasonal beats. Perfect for spreading Christmas cheer through music!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-[#2EE59D] font-bold text-lg mb-2">Holiday Beats</span>
                      <span className="text-gray-400 text-center">Festive rhythms and Christmas samples</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-[#2EE59D] font-bold text-lg mb-2">Christmas Effects</span>
                      <span className="text-gray-400 text-center">Magical holiday sound effects</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                      <span className="text-[#2EE59D] font-bold text-lg mb-2">Festive Tools</span>
                      <span className="text-gray-400 text-center">Special Christmas mixing features</span>
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
                      <h3 className="text-lg font-medium text-white mb-2">What makes Christmas Sprunki unique?</h3>
                      <p className="text-gray-400">Christmas Sprunki combines festive music creation with holiday-themed visuals and special Christmas sound effects, creating a magical holiday music experience unlike any other.</p>
                    </div>
                    <div className="border-b border-[#2EE59D]/10 pb-4">
                      <h3 className="text-lg font-medium text-white mb-2">How do I create Christmas music?</h3>
                      <p className="text-gray-400">Simply drag and drop festive characters onto the stage to start creating. Each character brings unique Christmas sounds to your mix, from jingle bells to holiday beats.</p>
                    </div>
                    <div className="border-b border-[#2EE59D]/10 pb-4">
                      <h3 className="text-lg font-medium text-white mb-2">Can I share my Christmas creations?</h3>
                      <p className="text-gray-400">Yes! Save and share your Christmas masterpieces with friends and family. Spread holiday joy with your unique musical creations!</p>
                    </div>
                    <div className="border-b border-[#2EE59D]/10 pb-4">
                      <h3 className="text-lg font-medium text-white mb-2">Is Christmas Sprunki free to play?</h3>
                      <p className="text-gray-400">Yes, Christmas Sprunki is completely free to play online. Start creating your festive music right away!</p>
                    </div>
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