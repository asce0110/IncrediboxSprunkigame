import { cn } from '@/lib/utils'

interface GlowProps {
  children: React.ReactNode
  className?: string
}

export function Glow({ children, className }: GlowProps) {
  return (
    <div className="relative group inline-block">
      <div className={cn(
        "absolute -inset-1 bg-gradient-to-r from-[#2EE59D] to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy",
        className
      )} />
      {children}
    </div>
  )
}