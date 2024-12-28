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
    <Link href={href} className="block h-full">
      <div className="group relative bg-black/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2EE59D]/20 h-full flex flex-col">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2EE59D]/0 via-[#2EE59D]/50 to-[#2EE59D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Inner content container */}
        <div className="relative m-[1px] bg-black/90 rounded-2xl overflow-hidden flex-1 flex flex-col">
          {/* Image container */}
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={`${title} - Featured music game with ${(players / 1000).toFixed(1)}k players and ${rating.toFixed(1)} rating`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-[#2EE59D] transition-colors duration-300 line-clamp-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 line-clamp-2 flex-1">
                {description}
              </p>
            )}
            
            {/* Stats container */}
            <div className="flex items-center justify-between text-sm mt-auto">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-yellow-400/10 text-yellow-400 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="font-medium">{rating.toFixed(1)}</span>
                </div>
              </div>
              
              {/* Player count */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-white/5 text-gray-300 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">{(players / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-[#2EE59D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </Link>
  )
}