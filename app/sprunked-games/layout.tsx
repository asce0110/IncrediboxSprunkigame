import { GameLayout } from '@/components/layout/game-layout'
import { Footer } from '@/components/footer'

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <GameLayout>{children}</GameLayout>
      <Footer />
    </div>
  )
}