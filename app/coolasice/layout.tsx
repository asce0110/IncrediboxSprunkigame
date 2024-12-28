import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cool As Ice',
  description: 'Create your own winter-themed beats with this amazing music game'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 