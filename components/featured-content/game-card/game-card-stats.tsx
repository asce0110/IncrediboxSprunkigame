import { Star, Users } from 'lucide-react'

interface GameCardStatsProps {
  rating?: number
  players?: number
}

export function GameCardStats({ rating = 4.8, players = 156000 }: GameCardStatsProps) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-yellow-400/10 text-yellow-400 px-2.5 py-1 rounded-full backdrop-blur-sm">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-white/5 text-gray-300 px-2.5 py-1 rounded-full backdrop-blur-sm">
          <Users className="w-4 h-4" />
          <span className="font-medium">{(players / 1000).toFixed(1)}k</span>
        </div>
      </div>
    </div>
  )
}