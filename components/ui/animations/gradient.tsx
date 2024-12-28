import { cn } from '@/lib/utils'

interface GradientProps {
  children: React.ReactNode
  className?: string
  direction?: 'x' | 'xy'
}

export function Gradient({ children, className, direction = 'x' }: GradientProps) {
  return (
    <div className={cn(
      'bg-gradient-to-r from-[#2EE59D] to-blue-500',
      direction === 'x' ? 'animate-gradient' : 'animate-gradient-xy',
      className
    )}>
      {children}
    </div>
  )
}