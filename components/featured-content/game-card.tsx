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
      <div className="group relative bg-black/50 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2EE59D]/10">
        <div className="aspect-[16/9] relative">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#2EE59D] mb-1 line-clamp-1">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-2 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-blue-400">{players.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#2EE59D]/50 rounded-xl transition-colors" />
      </div>
    </Link>
  )
}