import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <Providers>
      <div className="min-h-screen dark:bg-black dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </Providers>
  )
}