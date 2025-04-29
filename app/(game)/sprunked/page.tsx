import { Metadata } from 'next'
import { SprunkedContent } from './sprunked-content'

export const metadata: Metadata = {
  title: 'Sprunked - The Ultimate Music Creation Experience',
  description: 'Create amazing beats and music with this revolutionary music creation game'
}

export default function SprunkedPage() {
  return <SprunkedContent />
} 