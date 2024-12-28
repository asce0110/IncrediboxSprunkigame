import { FeaturedGameCard } from './featured-content/game-card'

interface GameCardProps {
  id: number
  title: string
  coverImage: string
  rating: number
  players: number
}

export function GameCard({ id, title, coverImage, rating, players }: GameCardProps) {
  return (
    <FeaturedGameCard
      href={`/games/${id}`}
      title={title}
      image={coverImage}
      rating={rating}
      players={players}
    />
  )
}