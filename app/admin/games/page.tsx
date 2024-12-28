import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { GamesList } from '@/components/admin/games-list'
import { AddGameButton } from '@/components/admin/add-game-button'

export default async function GamesAdminPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: games } = await supabase.from('games').select('*')

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Games Management</h1>
        <AddGameButton />
      </div>
      <GamesList games={games || []} />
    </div>
  )
}