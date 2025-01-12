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
    <Link href={href}>
      <div className="group relative bg-black/50 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2EE59D]/10">
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="p-2">
          <h3 className="text-xs sm:text-sm font-semibold text-[#2EE59D] mb-0.5 line-clamp-1">{title}</h3>
          <p className="text-[10px] sm:text-xs text-gray-400 mb-1 line-clamp-2 min-h-[2.5em]">{description}</p>
          <div className="flex items-center justify-between text-[10px] sm:text-xs">
            <div className="flex items-center gap-0.5">
              <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400">{rating}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <Users className="w-2.5 h-2.5 text-blue-400" />
              <span className="text-blue-400">{players.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 border border-transparent group-hover:border-[#2EE59D]/50 rounded-lg transition-colors" />
      </div>
    </Link>
  )
}