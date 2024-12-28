import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { RootProvider } from '@/components/providers/root-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sprunked - Revolutionary Music Creation Game',
  description: 'Play Sprunked online - The revolutionary music creation game. Create amazing beats, mix unique sounds, and share your music. Experience the next evolution of music gaming!',
}

export default function SprunkedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
} 