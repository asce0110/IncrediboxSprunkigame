'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { Header } from '@/components/header'

function GameCard({ 
  title, 
  description, 
  image, 
  href, 
  rating = 5,
  features = []
}: { 
  title: string
  description?: string
  image: string
  href: string
  rating?: number
  features?: string[]
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative bg-black/30 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 h-[420px]">
        {/* Glowing border */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#2EE59D] via-[#2EE59D]/50 to-[#2EE59D] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#2EE59D]/40 via-[#2EE59D]/20 to-[#2EE59D]/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Content container */}
        <div className="relative m-[1px] bg-black/90 rounded-2xl overflow-hidden h-full">
          <div className="relative h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Image gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
          <div className="relative p-6">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-5 h-5 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-500'
                  }`}
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold text-[#2EE59D] mb-2">{title}</h3>
            {description && <p className="text-gray-300 mb-4">{description}</p>}
            {features.length > 0 && (
              <ul className="text-sm text-gray-400 list-disc list-inside">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2EE59D]/50 via-[#2EE59D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </div>
    </Link>
  )
}

const games = [
  {
    title: 'Gray Sprunki',
    description: 'Create amazing beats with Gray Sprunki on IncrediboxSprunkiMod',
    image: 'https://959c13b.webp.li/public/gray-sprunki.png',
    href: '/gray-sprunki',
    features: [
      'Intuitive beat creation',
      'Custom sound effects',
      'Real-time mixing'
    ]
  },
  {
    title: 'Sprunked',
    description: 'Experience the revolutionary music creation game that pushes the boundaries of what\'s possible in browser-based music creation.',
    image: 'https://959c13b.webp.li/public/sprunked.jpg',
    href: '/sprunked',
    features: [
      'Revolutionary music creation interface',
      'Modern sound library',
      'Interactive experience'
    ]
  },
  {
    title: 'Sprunki Brud',
    description: 'Create amazing music with Sprunki Brud - The Latest Addition to IncrediboxSprunkiMod Music Games',
    image: 'https://959c13b.webp.li/public/sprunki-brud.jpg',
    href: '/sprunki-brud',
    features: [
      'Modern interface',
      'Fresh sound library',
      'Innovative mechanics'
    ]
  },
  {
    title: 'Game Incredibox',
    description: 'Play the amazing Incredibox game with unique musical mechanics!',
    image: 'https://959c13b.webp.li/public/corruptbox1-min.jpg',
    href: '/gameincredibox',
    features: [
      'Classic Incredibox gameplay',
      'Multiple sound styles',
      'Interactive animations'
    ]
  },
  {
    title: 'Colorbox Mustard',
    description: 'Experience colorful music creation with unique sound combinations',
    image: 'https://959c13b.webp.li/public/colorbox-mustard.jpg',
    href: '/colorboxmustard',
    features: [
      'Colorful interface',
      'Unique sound combinations',
      'Interactive visuals'
    ]
  },
  {
    title: 'Cool As Ice',
    description: 'Create chill beats with this winter-themed music game',
    image: 'https://959c13b.webp.li/public/coolasice.png',
    href: '/cool-as-ice',
    features: [
      'Winter-themed sounds',
      'Chill atmosphere',
      'Unique winter visuals'
    ]
  },
  {
    title: 'Sprunki Alive',
    description: 'Experience dynamic music creation with real-time sound generation',
    image: 'https://959c13b.webp.li/public/sprunki-alive.jpg',
    href: '/sprunki-alive',
    features: [
      'Dynamic music creation',
      'Real-time generation',
      'Exclusive sounds'
    ]
  },
  {
    title: 'Sprunki Modded',
    description: 'Experience a unique take on the Sprunki series with new sounds and features',
    image: 'https://959c13b.webp.li/public/sprunki-modded.jpg',
    href: '/sprunki-modded',
    features: [
      'Modified gameplay',
      'New sound combinations',
      'Enhanced features'
    ]
  },
  {
    title: 'Sprunki Phase 8',
    description: 'Experience Phase eight, the next evolution of music creation',
    image: 'https://959c13b.webp.li/public/sprunki-phase-8.jpg',
    href: '/sprunki-phase-8',
    features: [
      'Phase 8 mechanics',
      'Enhanced sound library',
      'Modern interface'
    ]
  },
  {
    title: 'Sprunki Christmas',
    description: 'Create festive music with holiday-themed sounds and visuals',
    image: 'https://959c13b.webp.li/public/sprunki-christmas.jpg',
    href: '/sprunki-christmas',
    features: [
      'Holiday themes',
      'Festive sounds',
      'Christmas atmosphere'
    ]
  },
  {
    title: 'Christmas Sprunki',
    description: 'Another take on holiday music creation with unique features',
    image: 'https://959c13b.webp.li/public/christmas-sprunki.jpg',
    href: '/christmas-sprunki',
    features: [
      'Holiday music creation',
      'Special effects',
      'Festive interface'
    ]
  },
  {
    title: 'Sprunki Incredibox',
    description: 'Experience the classic Incredibox style with a Sprunki twist',
    image: 'https://959c13b.webp.li/public/Sprunki-Incredibox.jpg',
    href: '/sprunki-incredibox',
    features: [
      'Classic style',
      'Modern features',
      'Unique sounds'
    ]
  },
  {
    title: 'Amazing Digital Circus',
    description: 'Create circus-themed music with amazing digital effects',
    image: 'https://959c13b.webp.li/public/amazing-digital-circus.jpg',
    href: '/amazing-digital-circus',
    features: [
      'Circus themes',
      'Digital effects',
      'Unique atmosphere'
    ]
  },
  {
    title: 'Sprunki SMG4',
    description: 'Experience SMG4-style gameplay exclusively on IncrediboxSprunkiMod',
    image: 'https://959c13b.webp.li/public/sprunki-smg4.jpg',
    href: '/sprunki-smg4',
    features: [
      'SMG4 style',
      'Exclusive content',
      'Unique gameplay'
    ]
  },
  {
    title: 'Sprunki Retake',
    description: 'A fresh take on the Sprunki series with new features',
    image: 'https://959c13b.webp.li/public/sprunki-retake.jpg',
    href: '/sprunki-retake',
    features: [
      'Fresh mechanics',
      'New features',
      'Modern interface'
    ]
  },
  {
    title: 'Incredibox Sprunki Mod',
    description: 'The ultimate Incredibox mod with enhanced features',
    image: 'https://959c13b.webp.li/public/incredibox-characters.jpg',
    href: '/incrediboxsprunkimod',
    features: [
      'Enhanced features',
      'Modern sounds',
      'Unique visuals'
    ]
  },
  {
    title: 'Neesterversal V3 Incredibox',
    description: 'Experience the V3 version of Neesterversal Incredibox',
    image: 'https://959c13b.webp.li/public/neesterversal-v3.jpg',
    href: '/neesterversal-v3-incredibox',
    features: [
      'V3 features',
      'Enhanced mechanics',
      'Modern interface'
    ]
  }
]

export default function GamesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-12 bg-black/90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2EE59D] mb-4">
              IncrediboxSprunkiMod | Sprunked Music Creation
            </h1>
            <p className="text-xl text-gray-300">
              Play Free Browser-Based Music Games on IncrediboxSprunkiMod.com - Create Amazing Music with Sprunked & Interactive Music Makers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}