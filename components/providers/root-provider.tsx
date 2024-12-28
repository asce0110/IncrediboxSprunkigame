'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from './theme-provider'

interface RootProviderProps {
  children: React.ReactNode
}

export function RootProvider({ children }: RootProviderProps) {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
} 