'use client'

import { FeaturedGameCard } from '@/components/featured-content/game-card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const allGames = [
  {
    href: "/gray-sprunki",
    title: "Gray Sprunki",
    description: "Create amazing beats with Gray Sprunki on IncrediboxSprunkiMod",
    image: "https://959c13b.webp.li/public/gray-sprunki.jpg",
    rating: 4.9,
    players: 285000
  },
  {
    href: "/sprunked",
    title: "Sprunked",
    description: "Experience the revolutionary music creation game that pushes the boundaries",
    image: "https://959c13b.webp.li/public/sprunked.jpg",
    rating: 4.9,
    players: 280000
  },
  // ... 复制其他游戏数据 ...
]

export default function SprunkedGamesPage() {
  return (
    <div className="min-h-screen bg-black/90">
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center gap-6">
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
                More Sprunked Games
              </h1>
              <p className="text-gray-400 text-lg">
                Explore our complete collection of music creation games
              </p>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1">
            {allGames.map((game, index) => (
              <div key={index}>
                <FeaturedGameCard
                  href={game.href}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  rating={game.rating}
                  players={game.players}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}