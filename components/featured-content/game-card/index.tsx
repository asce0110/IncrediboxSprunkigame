import { GameCardContainer } from './game-card-container'
import { GameCardImage } from './game-card-image'
import { GameCardContent } from './game-card-content'
import { GameCardStats } from './game-card-stats'

interface FeaturedGameCardProps {
  href: string
  title: string
  description: string
  image: string
  rating?: number
  players?: number
}

export function FeaturedGameCard({ 
  href, 
  title, 
  description, 
  image,
  rating,
  players
}: FeaturedGameCardProps) {
  return (
    <GameCardContainer href={href}>
      <GameCardImage src={image} alt={title} />
      <GameCardContent title={title} description={description}>
        <GameCardStats rating={rating} players={players} />
      </GameCardContent>
    </GameCardContainer>
  )
}