import { cn } from '@/lib/utils'

interface GlowContainerProps {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function GlowContainer({ 
  children, 
  className,
  intensity = 'medium' 
}: GlowContainerProps) {
  const glowIntensity = {
    low: 'opacity-10 blur-sm',
    medium: 'opacity-20 blur',
    high: 'opacity-30 blur-lg'
  }

  return (
    <div className="relative group">
      <div className={cn(
        "absolute -inset-0.5 bg-[#2EE59D] rounded-lg transition-all duration-500",
        glowIntensity[intensity],
        "opacity-0 group-hover:opacity-20",
        className
      )} />
      {children}
    </div>
  )
}