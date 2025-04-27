import { Metadata } from 'next'
import { FeaturedGameCard } from '@/components/featured-content/game-card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { GAMES } from '@/data/games'
import { AppSEO } from '@/components/seo/app-seo'

export const metadata: Metadata = {
  title: 'All Sprunked Games - Music Creation Collection',
  description: 'Browse our complete collection of music creation games including Sprunked, Sprunki Brud, Game Incredibox and more. Create amazing music online with our interactive games.',
  keywords: 'sprunked games, music creation games, incredibox, online music creator, beat maker, music games collection',
  openGraph: {
    title: 'All Sprunked Games - Music Creation Collection',
    description: 'Browse our complete collection of music creation games. Create amazing music online with our interactive games.',
    type: 'website',
    images: [
      {
        url: 'https://s.incrediboxsprunkimod.com/public/games-collection.jpg',
        width: 1200,
        height: 630,
        alt: 'Sprunked Games Collection',
      }
    ],
  }
}

export default function SprunkedGamesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 结构化数据 */}
      <AppSEO
        jsonLd="website"
        websiteData={{
          name: "Sprunked Games Collection",
          description: "Browse our complete collection of music creation games including Sprunked, Sprunki Brud, Game Incredibox and more.",
          url: "/sprunked-games",
          logoUrl: "https://s.incrediboxsprunkimod.com/public/logo.png"
        }}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 面包屑导航 - 对SEO有帮助 */}
          <nav className="flex items-center text-sm mb-4 text-gray-400">
            <Link href="/" className="hover:text-[#2EE59D]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2EE59D]">All Games</span>
          </nav>
          
          {/* 页面标题区域 */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">
                All Music Creation Games
              </h1>
              <p className="text-gray-400 mt-2">
                Browse our complete collection of music creation games
              </p>
            </div>
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 bg-[#2EE59D]/10 text-[#2EE59D] rounded-lg hover:bg-[#2EE59D]/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          
          {/* 游戏网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAMES.map((game) => (
              <div key={game.slug} className="bg-black/30 rounded-xl overflow-hidden shadow-lg shadow-black/10 border border-gray-800/50 hover:border-[#2EE59D]/30 transition-colors">
                <Link href={`/${game.slug}`} className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={`${game.title} - Music Creation Game`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-[#2EE59D] text-sm font-semibold px-2 py-1 rounded">
                      {game.rating} ★
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-white mb-2 hover:text-[#2EE59D] transition-colors">{game.title}</h2>
                    <p className="text-gray-400 text-sm mb-3">{game.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{(game.players / 1000).toFixed(0)}K Players</span>
                      <span className="text-[#2EE59D]">Play Now</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* 分类链接 - 增加内部链接提升SEO */}
          <div className="mt-12 bg-black/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">Game Categories</h2>
            <div className="flex flex-wrap gap-3">
              {['Popular', 'New Releases', 'Featured', 'Classic', 'Experimental', 'Remix', 'Beat Maker'].map((category) => (
                <Link 
                  key={category}
                  href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 bg-black/30 text-gray-300 rounded-lg hover:bg-[#2EE59D]/10 hover:text-[#2EE59D] transition-colors"
                >
                  {category} Games
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}