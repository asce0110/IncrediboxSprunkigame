import Link from 'next/link'
import Image from 'next/image'

interface SimpleGameCardProps {
  href: string
  title: string
  image: string
  compact?: boolean
  isNew?: boolean
}

export function SimpleGameCard({ href, title, image, compact = false, isNew = false }: SimpleGameCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative bg-black/30 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2EE59D] to-[#2EE59D] opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
        
        {/* Content container */}
        <div className="relative bg-black/90 rounded-lg overflow-hidden z-10">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image}
              alt={`${title} - IncrediboxSprunkiMod music game preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="150px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
            
            {/* New label */}
            {isNew && (
              <div className="absolute top-2 right-2 bg-[#2EE59D] text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg z-20">
                NEW
              </div>
            )}
          </div>
          
          {/* Title */}
          <div className="p-4">
            <h3 className="font-medium text-white text-sm sm:text-base line-clamp-2 group-hover:text-[#2EE59D] transition-colors text-center">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
} 