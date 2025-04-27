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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-100 text-gray-800 dark:bg-black dark:text-white transition-colors duration-300`}>
        <RootProvider>
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  )
} 