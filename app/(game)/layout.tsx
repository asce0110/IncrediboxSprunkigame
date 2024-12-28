import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { RootProvider } from '@/components/providers/root-provider'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IncrediboxSprunkiMod - Sprunked Music Creation Games',
  description: 'Play Sprunked and other music creation games on IncrediboxSprunkiMod. Create amazing beats, mix unique sounds, and enjoy interactive music gaming experiences.',
}

export default function GameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
} 