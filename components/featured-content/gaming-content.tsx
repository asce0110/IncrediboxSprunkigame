'use client'

import { FeaturedGameCard } from './game-card'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'next/link'

const featuredGames = [
  {
    id: 1,
    title: 'Sprunki Mayonaise 2',
    coverImage: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Mayonaise-2-368x207.png',
    description: 'The creamy musical adventure returns with new features',
    rating: 4.9,
    players: 265000,
    href: '/sprunki-mayonaise-2'
  },
  {
    id: 2,
    title: 'Sprunki But 15,000,000 FunBots',
    coverImage: 'https://s.incrediboxsprunkimod.com/public/Sprunki-but-15000000-fun-bot-368x207.png',
    description: 'Experience musical mayhem with millions of AI bots',
    rating: 4.9,
    players: 258000,
    href: '/sprunki-but-15000000-funbots'
  },
  {
    id: 3,
    title: 'Sprunki in Ohio (Brainrot)',
    coverImage: 'https://s.incrediboxsprunkimod.com/public/Sprunki-in-Ohio-Brainrot-368x207.png',
    description: 'Experience the wild and chaotic fusion of Sprunki meets Ohio',
    rating: 4.9,
    players: 255000,
    href: '/sprunki-in-ohio-brainrot'
  },
  {
    id: 4,
    title: 'Sprunki Terror Phase 30',
    coverImage: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Terror-Phase-10-368x207.png',
    description: 'The ultimate horror music experience with terrifying beats',
    rating: 4.9,
    players: 248000,
    href: '/sprunki-terror-phase-30'
  }
]

const allGames = [
  {
    href: "/gray-sprunki",
    title: "Gray Sprunki",
    description: "Create amazing beats with Gray Sprunki on IncrediboxSprunkiMod",
    image: "https://959c13b.webp.li/public/gray-sprunki.jpg",
    rating: 4.9,
    players: 285000
  },
  {
    href: "/sprunked",
    title: "Sprunked",
    description: "Experience the revolutionary music creation game that pushes the boundaries",
    image: "https://959c13b.webp.li/public/sprunked.jpg",
    rating: 4.9,
    players: 280000
  },
  {
    href: "/sprunki-brud",
    title: "Sprunki Brud",
    description: "Create amazing music with Sprunki Brud - The Latest Addition",
    image: "https://959c13b.webp.li/public/sprunki-brud.jpg",
    rating: 4.9,
    players: 275000
  },
  {
    href: "/game-incredibox",
    title: "Game Incredibox",
    description: "Play the amazing Incredibox game with unique musical mechanics",
    image: "https://959c13b.webp.li/public/game-incredibox.jpg",
    rating: 4.9,
    players: 270000
  },
  {
    href: "/colorbox-mustard",
    title: "Colorbox Mustard",
    description: "Experience colorful music creation with unique sound combinations",
    image: "https://959c13b.webp.li/public/colorbox-mustard.jpg",
    rating: 4.9,
    players: 268000
  },
  {
    href: '/sprunki-mayonaise-2',
    title: 'Sprunki Mayonaise 2',
    description: 'The creamy musical adventure returns with new features',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Mayonaise-2-368x207.png',
    rating: 4.9,
    players: 265000
  },
  {
    href: "/sprunki-titanic-cat-gang-edition",
    title: "Sprunki Titanic Cat Gang Edition",
    description: "Join the feline musical crew on their epic voyage",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Titanic-Cat-Gang-Edition-368x207.png",
    rating: 4.8,
    players: 242000
  },
  {
    href: "/sprunki-phase-3-reverse",
    title: "Sprunki Phase 3 Reverse",
    description: "Experience classic Sprunki beats in reverse",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Phase-3-Reverse-368x207.png",
    rating: 4.7,
    players: 218000
  },
  {
    href: '/sprunki-but-relish',
    title: 'Sprunki But Relish',
    description: 'Experience the zesty fusion of music and condiments',
    image: 'https://s.incrediboxsprunkimod.com/public/RELISH-BUT-SPRUNKI-368x207.png',
    rating: 4.8,
    players: 225000
  },
  // ... 复制其他游戏数据 ...
]

const CustomArrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-[#2EE59D]/20 transition-all duration-300 ${
      direction === 'left' ? 'left-0 translate-x-4' : 'right-0 -translate-x-4'
    }`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-[#2EE59D]" />
    ) : (
      <ChevronRight className="w-6 h-6 text-[#2EE59D]" />
    )}
  </button>
)

export function GamingContent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  return (
    <div className="relative px-4">
      <Slider {...settings}>
        {featuredGames.map((game, index) => (
          <div key={index} className="px-2">
            <FeaturedGameCard
              href={game.href}
              title={game.title}
              description={game.description}
              image={game.coverImage}
              rating={game.rating}
              players={game.players}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}