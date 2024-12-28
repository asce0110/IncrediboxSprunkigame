import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

interface Game {
  id: string
  title: string
  description: string
  created_at: string
}

export default async function AdminGamesPage() {
  const cookieStore = cookies()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const { data: games } = await supabase
    .from('games')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Games Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games?.map((game: Game) => (
          <div key={game.id} className="bg-black/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-gray-400 mb-4">{game.description}</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-[#2EE59D] text-black rounded-lg hover:bg-[#2EE59D]/90 transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}