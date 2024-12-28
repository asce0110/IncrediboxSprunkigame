import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryIconProps {
  icon: LucideIcon
  className?: string
}

export function CategoryIcon({ icon: Icon, className }: CategoryIconProps) {
  return (
    <Icon 
      className={cn(
        "w-10 h-10 mx-auto",
        className
      )} 
    />
  )
}