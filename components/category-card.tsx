import { cn } from '@/lib/utils'
import type { CategoryCardProps } from '@/types/category'
import Link from 'next/link'

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon

  return (
    <Link href="/sprunked-games" className="block">
      <div className="relative group cursor-pointer">
        {/* Outer glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-[#2EE59D]/30 to-[#2EE59D]/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Card container */}
        <div className="relative bg-black/50 rounded-lg p-8 text-center overflow-hidden">
          {/* Animated background glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 bg-[#2EE59D]/10 animate-pulse" />
          </div>
          
          {/* Bottom border glow */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2EE59D] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Icon container with glow effects */}
          <div className="relative mb-4">
            {/* Base glow - always visible */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#2EE59D]/20 blur-xl opacity-60" />
            
            {/* Dynamic shape glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12">
              <div className="absolute inset-0 bg-[#2EE59D]/30 blur-md 
                before:content-[''] before:absolute before:inset-0 
                before:bg-[#2EE59D]/20 before:blur-lg before:scale-110
                after:content-[''] after:absolute after:inset-0 
                after:bg-[#2EE59D]/10 after:blur-xl after:scale-125" 
              />
            </div>
            
            {/* Hover glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 bg-[#2EE59D]/20 blur-xl animate-pulse" />
            </div>
            
            {/* Icon */}
            <div className="relative">
              <Icon className="w-10 h-10 mx-auto text-[#2EE59D] opacity-90 group-hover:opacity-100 transition-all duration-300 
                [filter:drop-shadow(0_0_8px_rgba(46,229,157,0.3))] group-hover:[filter:drop-shadow(0_0_12px_rgba(46,229,157,0.5))]" />
            </div>
          </div>
          
          <h3 className="relative z-10 text-lg font-semibold text-white group-hover:text-[#2EE59D] transition-colors duration-300">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  )
}