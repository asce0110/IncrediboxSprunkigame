import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoCardProps {
  title: string
  thumbnail: string
  views: string
  duration: string
}

export function VideoCard({ title, thumbnail, views, duration }: VideoCardProps) {
  return (
    <div className="group relative bg-black/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2EE59D]/20">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2EE59D]/0 via-[#2EE59D]/50 to-[#2EE59D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Inner content container */}
      <div className="relative m-[1px] bg-black/90 rounded-2xl overflow-hidden">
        {/* Thumbnail container */}
        <div className="relative h-48 w-full">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#2EE59D]/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
              <Play className="w-7 h-7 text-black ml-1" />
            </div>
          </div>
          
          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/80 rounded-full text-xs font-medium text-white backdrop-blur-sm">
            {duration}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#2EE59D] transition-colors duration-300">
            {title}
          </h3>
          
          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {views} views
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-[#2EE59D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  )
}