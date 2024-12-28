import { cn } from '@/lib/utils'

interface IconGlowProps {
  children: React.ReactNode
  className?: string
  color?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function IconGlow({ 
  children, 
  className,
  color = '#2EE59D',
  intensity = 'medium'
}: IconGlowProps) {
  const glowStyles = {
    low: 'opacity-10 blur-sm scale-110',
    medium: 'opacity-15 blur-md scale-125',
    high: 'opacity-20 blur-lg scale-150'
  }

  return (
    <div className="relative">
      {/* Base glow */}
      <div 
        className={cn(
          "absolute inset-0",
          glowStyles[intensity],
          "transition-all duration-500",
          className
        )}
        style={{ backgroundColor: color }}
      />
      
      {/* Animated glow */}
      <div 
        className={cn(
          "absolute inset-0",
          "opacity-10 blur-lg scale-125",
          "animate-pulse-slow",
          className
        )}
        style={{ backgroundColor: color }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}