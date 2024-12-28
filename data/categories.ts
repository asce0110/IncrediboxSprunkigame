import { Swords, MapPin, Puzzle, Crown } from 'lucide-react'
import type { Category } from '@/types/category'

export const categories: Category[] = [
  { id: 'action', name: 'Action', icon: Swords },
  { id: 'adventure', name: 'Adventure', icon: MapPin },
  { id: 'puzzle', name: 'Puzzle', icon: Puzzle },
  { id: 'strategy', name: 'Strategy', icon: Crown },
]