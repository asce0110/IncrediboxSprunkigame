import { Metadata } from 'next'
import { PrivacyContent } from './privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy - IncrediboxSprunkiMod',
  description: 'Read our privacy policy to understand how we protect your data.'
}

export default function PrivacyPage() {
  return <PrivacyContent />
} 