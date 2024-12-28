import { cn } from '@/lib/utils'

interface HoverScaleProps {
  children: React.ReactNode
  className?: string
  scale?: number
}

export function HoverScale({ 
  children, 
  className,
  scale = 1.05 
}: HoverScaleProps) {
  return (
    <div 
      className={cn(
        "transform transition-transform duration-300",
        "hover:scale-[var(--scale)]",
        className
      )}
      style={{ '--scale': scale } as any}
    >
      {children}
    </div>
  )
}