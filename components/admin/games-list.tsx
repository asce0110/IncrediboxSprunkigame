'use client'

import { Game } from '@/types/game'
import { GameCard } from './game-card'

interface GamesListProps {
  games: Game[]
}

export function GamesList({ games }: GamesListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}