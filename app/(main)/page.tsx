import { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { FeaturedContent } from '@/components/featured-content/featured-content'
import { CommentsMock } from '@/components/comments-mock'
import { MoreGames } from '@/components/more-games'
import { Slideshow } from '@/components/slideshow/slideshow'
import Link from 'next/link'
import { AppSEO } from '@/components/seo/app-seo'
import { getFeaturedGames, getPopularGames } from '@/data/games'
import { Music, Gamepad2, Users } from 'lucide-react'

// 浼樺寲鍏冩暟鎹紝浣跨敤鏇磋缁嗙殑SEO鏍囩
export const metadata: Metadata = {
  title: 'IncrediboxSprunkiMod - Create Amazing Music Online | Free Music Games',
  description: 'Create amazing music with IncrediboxSprunkiMod. Play Sprunked and other interactive music creation games for free in your browser. Mix beats, create tunes, and have fun!',
  keywords: 'music creation, sprunked, incredibox, music game, interactive music, beat maker, online music games, free music maker, music creation platform, musical games',
  openGraph: {
    title: 'IncrediboxSprunkiMod - Create Amazing Music Online',
    description: 'Play Sprunked and other music creation games online. Create amazing beats, mix unique sounds, and enjoy interactive music gaming.',
    url: 'https://incrediboxsprunkimod.com',
    images: [
      {
        url: 'https://s.incrediboxsprunkimod.com/public/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IncrediboxSprunkiMod - Music Creation Games',
      }
    ],
    type: 'website',
    siteName: 'IncrediboxSprunkiMod',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IncrediboxSprunkiMod - Create Amazing Music Online',
    description: 'Play Sprunked and other music creation games online. Create amazing beats and mix unique sounds.',
    images: ['https://s.incrediboxsprunkimod.com/public/og-image.jpg'],
    creator: '@incrediboxmod',
  },
  alternates: {
    canonical: 'https://incrediboxsprunkimod.com',
  }
}

export default function Home() {
  // 获取推荐游戏和热门游戏
  const featuredGames = getFeaturedGames(3);
  const popularGames = getPopularGames(5);
  
  return (
    <>
      {/* 结构化数据 */}
      <AppSEO
        jsonLd="website"
        websiteData={{
          name: "IncrediboxSprunkiMod",
          description: "Play Sprunked and other music creation games on IncrediboxSprunkiMod. Create amazing beats, mix unique sounds, and enjoy interactive music gaming.",
          url: "/",
          logoUrl: "https://s.incrediboxsprunkimod.com/public/logo.png"
        }}
      />
      
      <main>
        {/* Hero Section with More Games */}
        <section className="relative min-h-screen flex flex-col">
          <div className="flex-1 relative">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Hero Section */}
                <div className="flex-1">
                  <HeroSection />
                </div>
                
                {/* More Games Sidebar */}
                <div className="w-full lg:w-[400px] shrink-0">
                  <div className="lg:sticky lg:top-4">
                    <MoreGames />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 轮播图改为卡片展示 */}
          <div className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black to-black/80">
            <Slideshow />
          </div>
        </section>
        
        {/* 产品价值主张 - 增加SEO权重 */}
        <section className="py-12 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose <span className="text-[#2EE59D]">IncrediboxSprunkiMod</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-6 rounded-xl border border-[#2EE59D]/10 transition-all duration-300 hover:border-[#2EE59D]/30 hover:shadow-lg hover:shadow-[#2EE59D]/5">
                <div className="bg-[#2EE59D]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-[#2EE59D]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Music Creation</h3>
                <p className="text-gray-300">Unleash your creativity with our intuitive music creation tools. No musical experience required to create amazing beats.</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-[#2EE59D]/10 transition-all duration-300 hover:border-[#2EE59D]/30 hover:shadow-lg hover:shadow-[#2EE59D]/5">
                <div className="bg-[#2EE59D]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-[#2EE59D]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Interactive Gaming</h3>
                <p className="text-gray-300">Enjoy the perfect blend of gaming and music. Our games make music creation fun and engaging for everyone.</p>
              </div>
              
              <div className="bg-black/50 p-6 rounded-xl border border-[#2EE59D]/10 transition-all duration-300 hover:border-[#2EE59D]/30 hover:shadow-lg hover:shadow-[#2EE59D]/5">
                <div className="bg-[#2EE59D]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#2EE59D]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
                <p className="text-gray-300">Join a vibrant community of music creators. Share your creations and discover amazing beats from other players.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Content */}
        <FeaturedContent />
        
        {/* Free Online Music Creation Games Section */}
        <section className="bg-black/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#2EE59D] mb-4">Free Online Music Creation Games</h2>
              <div className="prose prose-sm prose-invert">
                <p className="text-gray-300 mb-4">
                  IncrediboxSprunkiMod offers a unique collection of browser-based music creation games that are 
                  completely free to play. Our platform is designed for music enthusiasts of all skill levels, 
                  from beginners to experienced creators.
                </p>
                <p className="text-gray-300 mb-4">
                  Whether you're looking to create beat-heavy tracks with <Link href="/sprunked" className="text-[#2EE59D] hover:underline">Sprunked</Link>, 
                  experiment with unique sounds in <Link href="/sprunki-brud" className="text-[#2EE59D] hover:underline">Sprunki Brud</Link>, 
                  or explore the original <Link href="/game-incredibox" className="text-[#2EE59D] hover:underline">Game Incredibox</Link>, 
                  we have something for everyone.
                </p>
                <p className="text-gray-300">
                  Our games run directly in your browser with no downloads required, making them accessible 
                  on desktops, laptops, and even many tablet devices. Start creating amazing music today!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 
