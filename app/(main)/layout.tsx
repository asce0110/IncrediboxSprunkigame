import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  )
}