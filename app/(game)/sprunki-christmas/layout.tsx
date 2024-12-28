import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { RootProvider } from '@/components/providers/root-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sprunki Christmas - Create Festive Holiday Music',
  description: 'Play Sprunki Christmas online - Create festive holiday music with this special Christmas edition. Mix Christmas beats, jingle bells, and holiday sounds in this unique music creation game.',
}

export default function SprunckiChristmasLayout({
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