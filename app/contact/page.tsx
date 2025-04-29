import { Metadata } from 'next'
import { ContactContent } from './contact-content'

export const metadata: Metadata = {
  title: 'Contact Us - IncrediboxSprunkiMod',
  description: 'Get in touch with us for any questions about our Sprunked music creation games.'
}

export default function ContactPage() {
  return <ContactContent />
} 