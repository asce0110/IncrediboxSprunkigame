import { CategoryIcon } from './icon'
import { IconGlow } from '@/components/ui/effects/icon-glow'
import type { CategoryCardProps } from '@/types/category'

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="relative group">
      <div className="bg-black/50 rounded-lg p-8 text-center">
        <IconGlow intensity="medium">
          <CategoryIcon 
            icon={category.icon} 
            className="text-[#2EE59D] hover:scale-110 transition-transform duration-300" 
          />
        </IconGlow>

        <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-[#2EE59D] transition-colors duration-300">
          {category.name}
        </h3>
      </div>
    </div>
  )
}