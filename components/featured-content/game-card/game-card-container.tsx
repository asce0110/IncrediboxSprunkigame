import Link from 'next/link'

interface GameCardContainerProps {
  href: string
  children: React.ReactNode
}

export function GameCardContainer({ href, children }: GameCardContainerProps) {
  return (
    <Link href={href} className="block">
      <div className="group relative bg-black/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2EE59D]/0 via-[#2EE59D]/50 to-[#2EE59D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2EE59D] to-[#2EE59D] opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
        
        {/* Inner content container */}
        <div className="relative m-[1px] bg-black/90 rounded-2xl overflow-hidden z-10">
          {children}
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-[#2EE59D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </Link>
  )
}