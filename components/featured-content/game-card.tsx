import Link from 'next/link'
import Image from 'next/image'
import { Star, Users } from 'lucide-react'

interface FeaturedGameCardProps {
  href: string
  title: string
  description?: string
  image: string
  rating?: number
  players?: number
}

export function FeaturedGameCard({ 
  href, 
  title, 
  description, 
  image,
  rating = 4.8,
  players = 156000
}: FeaturedGameCardProps) {
  return (
    <Link href={href} className="block w-full">
      <div className="group relative bg-black/50 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="p-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2EE59D] truncate mb-2">{title}</h3>
          <p className="text-lg sm:text-xl text-gray-400 line-clamp-1 min-h-[1.5em] opacity-80">{description}</p>
          <div className="flex items-center justify-between text-lg mt-2">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400">{rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400">{players >= 1000 ? `${(players/1000).toFixed(1)}k` : players}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}