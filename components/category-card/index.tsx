import { CategoryIcon } from './icon'
import { IconGlow } from '@/components/ui/effects/icon-glow'
import type { CategoryCardProps } from '@/types/category'
import { Music, Gamepad, Headphones, Mic, Radio, Users, Swords, MapPin, Puzzle, Crown } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export function CategoryCard({ category }: CategoryCardProps) {
  // 从图标名称获取实际的图标组件
  const getIconComponent = (iconName: string): LucideIcon => {
    const icons: Record<string, LucideIcon> = {
      'music': Music,
      'gamepad': Gamepad,
      'headphones': Headphones,
      'mic': Mic,
      'radio': Radio,
      'users': Users,
      'swords': Swords,
      'map-pin': MapPin,
      'puzzle': Puzzle,
      'crown': Crown
    }
    return icons[iconName.toLowerCase()] || Music; // 默认使用Music图标
  }

  const IconComponent = category.icon ? getIconComponent(category.icon) : Music;

  return (
    <div className="relative group">
      <div className="bg-black/50 rounded-lg p-8 text-center">
        <IconGlow intensity="medium">
          <CategoryIcon 
            icon={IconComponent} 
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