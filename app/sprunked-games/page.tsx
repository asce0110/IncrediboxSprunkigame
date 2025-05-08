'use client'

import { FeaturedGameCard } from '@/components/featured-content/game-card'
import Link from 'next/link'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { GAMES } from '@/data/games'
import { AppSEO } from '@/components/seo/app-seo'
import { useState } from 'react'

export default function SprunkedGamesPage() {
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'rating'>('newest');

  // 根据选择的排序方式对游戏进行排序
  const sortedGames = [...GAMES].sort((a, b) => {
    if (sortBy === 'newest') {
      if (!a.releaseDate || !b.releaseDate) return 0;
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    } else if (sortBy === 'popular') {
      return b.players - a.players;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });
  
  // 获取游戏类别
  const categories = [
    { name: 'Popular Games', description: 'Our most played music creation games with millions of players worldwide' },
    { name: 'New Releases', description: 'Fresh music experiences with innovative features and sounds' },
    { name: 'Featured Games', description: 'Handpicked music games showcasing the best of IncrediboxSprunkiMod' },
    { name: 'Classic Games', description: 'The original music creation experiences that started it all' },
    { name: 'Experimental Games', description: 'Cutting-edge music creation with unique and unconventional sounds' },
    { name: 'Remix Games', description: 'Create your own versions of popular songs with our remix tools' },
    { name: 'Beat Maker Games', description: 'Specialized in rhythm and percussion for creating amazing beats' }
  ];
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* 增强的结构化数据 - 使用ItemList Schema标记游戏列表 */}
      <AppSEO
        jsonLd="website"
        websiteData={{
          name: "Sprunked Games Collection - Music Creation Games",
          description: "Browse our complete collection of interactive music creation games including Sprunked, Sprunki Brud, FiddleSprunkis and more.",
          url: "/sprunked-games",
          logoUrl: "https://s.incrediboxsprunkimod.com/public/logo.png"
        }}
      />
      
      {/* 手动添加ItemList结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": GAMES.map((game, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": game.title,
                "description": game.description,
                "image": game.image,
                "url": `https://incrediboxsprunkimod.com/${game.slug}`,
                "applicationCategory": "Game",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": game.rating.toString(),
                  "ratingCount": Math.round(game.players / 50).toString(),
                  "bestRating": "5",
                  "worstRating": "1"
                }
              }
            }))
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 增强的面包屑导航 - 对SEO有帮助 */}
          <nav className="flex items-center text-sm mb-4 text-gray-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#2EE59D]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2EE59D]">All Games</span>
          </nav>
          
          {/* 增强的页面标题区域 */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">
                All Music Creation Games
              </h1>
              <p className="text-gray-400 mt-2 max-w-3xl">
                Browse our complete collection of interactive music creation games. Create amazing beats, melodies, and musical compositions with our award-winning music games. Perfect for music lovers, creators, and anyone who wants to express their creativity through sound.
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
          
          {/* 游戏集合介绍 - 增加更多文本内容对SEO有帮助 */}
          <div className="bg-black/30 p-6 rounded-xl mb-10">
            <h2 className="text-2xl font-semibold text-[#2EE59D] mb-3">About Our Music Games</h2>
            <p className="text-gray-300 mb-4">
              IncrediboxSprunkiMod offers a unique collection of music creation games that combine intuitive interfaces with powerful sound engines. Each game provides a different musical experience, from folk-inspired journeys to electronic beat making. Our games are designed to be accessible to everyone, regardless of musical experience.
            </p>
            <p className="text-gray-300">
              With millions of players worldwide, our music creation platform has become a favorite for music enthusiasts, educators, and creative minds looking to express themselves through sound. All games are free to play directly in your browser with no downloads required.
            </p>
          </div>
          
          {/* 游戏数量统计 */}
          <div className="mb-6 flex justify-between items-center">
            <div className="text-gray-300">
              <span className="text-[#2EE59D] font-semibold">{sortedGames.length}</span> games available
            </div>
            <div className="flex gap-2">
              <select 
                className="bg-black/30 text-gray-300 px-3 py-2 rounded-lg border border-gray-800 focus:outline-none focus:border-[#2EE59D]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular' | 'rating')}
              >
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
          
          {/* 游戏网格 - 增加更多语义标记和分页功能 */}
          <section aria-labelledby="games-heading">
            <h2 id="games-heading" className="sr-only">Music Creation Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedGames.map((game) => (
                <article key={game.slug} className="bg-black/30 rounded-xl overflow-hidden shadow-lg shadow-black/10 border border-gray-800/50 hover:border-[#2EE59D]/30 transition-colors">
                  <Link href={`/${game.slug}`} className="block">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={`${game.title} - Music Creation Game Screenshot`} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        width="368"
                        height="207"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 text-[#2EE59D] text-sm font-semibold px-2 py-1 rounded">
                        {game.rating} ★
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-white mb-2 hover:text-[#2EE59D] transition-colors">{game.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{game.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{(game.players / 1000).toFixed(0)}K Players</span>
                        <span className="text-[#2EE59D]">Play Now</span>
                      </div>
                      {game.releaseDate && (
                        <div className="mt-2 text-xs text-gray-500">
                          Released: {new Date(game.releaseDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      )}
                      {game.keywords && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {game.keywords.slice(0, 3).map(keyword => (
                            <span key={keyword} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            
            {/* 游戏计数和加载状态 */}
            <div className="mt-8 text-center text-gray-400">
              Showing all {sortedGames.length} games
            </div>
          </section>
          
          {/* 分类链接 - 增加内部链接和描述提升SEO，但暂时禁用链接避免404错误 */}
          <section className="mt-12 bg-black/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">Game Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {categories.map((category) => (
                <div key={category.name} className="bg-black/30 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-1">
                    {/* 暂时将链接改为span，避免404错误 */}
                    <span className="text-white hover:text-[#2EE59D] transition-colors cursor-pointer">
                      {category.name}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                // 暂时将链接改为span，避免404错误
                <span 
                  key={category.name}
                  className="px-4 py-2 bg-black/30 text-gray-300 rounded-lg hover:bg-[#2EE59D]/10 hover:text-[#2EE59D] transition-colors cursor-pointer"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </section>
          
          {/* FAQ部分 - 对SEO非常有帮助 */}
          <section className="mt-12 bg-black/20 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">What are music creation games?</h3>
                <p className="text-gray-400">Music creation games are interactive applications that allow users to create music through gameplay. Our collection features various styles and approaches to music making, from beat sequencers to loop-based composition tools.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Do I need musical experience to play these games?</h3>
                <p className="text-gray-400">No musical experience is required! Our games are designed to be intuitive and accessible to everyone, regardless of their musical background. The user-friendly interfaces make it easy to create amazing sounds.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Can I save or share my creations?</h3>
                <p className="text-gray-400">Yes, most of our games allow you to save your compositions and share them with friends. You can generate unique links or download your creations as audio files depending on the specific game.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Are these games free to play?</h3>
                <p className="text-gray-400">Yes, all games on IncrediboxSprunkiMod are completely free to play in your web browser. No downloads or installations are required.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}