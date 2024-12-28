'use client'

import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export function AddGameButton() {
  const router = useRouter()

  return (
    <Button 
      onClick={() => router.push('/admin/games/new')}
      className="bg-[#2EE59D] text-black hover:bg-[#2EE59D]/90"
    >
      <Plus className="w-4 h-4 mr-2" />
      Add New Game
    </Button>
  )
}