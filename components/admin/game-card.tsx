'use client'

import Image from 'next/image'
import { Game } from '@/types/game'
import { Button } from '../ui/button'
import { Edit, Trash } from 'lucide-react'

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-black/50 rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={game.image_url || ''}
          alt={game.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
        <p className="text-gray-400 mb-4">{game.description}</p>
        <div className="flex justify-end space-x-2">
          <Button size="sm" variant="ghost">
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button size="sm" variant="ghost" className="text-red-500">
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}