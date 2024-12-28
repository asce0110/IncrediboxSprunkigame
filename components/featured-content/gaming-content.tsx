'use client'

import { FeaturedGameCard } from './game-card'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const featuredGames = [
  {
    id: 1,
    title: 'Sprunked',
    coverImage: 'https://959c13b.webp.li/public/sprunked.jpg',
    description: 'Experience the revolutionary music creation game with amazing features',
    rating: 4.9,
    players: 245000,
    href: '/sprunked'
  },
  {
    id: 2,
    title: 'Sprunki Brud',
    coverImage: 'https://959c13b.webp.li/public/sprunki-brud.jpg',
    description: 'Create amazing music with Sprunki Brud - The Latest Addition to IncrediboxSprunkiMod Music Games',
    rating: 4.9,
    players: 238000,
    href: '/sprunki-brud'
  },
  {
    id: 3,
    title: 'Game Incredibox',
    coverImage: 'https://959c13b.webp.li/public/corruptbox1-min.jpg',
    description: 'Play the amazing Incredibox game with unique musical mechanics!',
    rating: 4.9,
    players: 234000,
    href: '/gameincredibox'
  },
  {
    id: 4,
    title: 'Colorbox Mustard',
    coverImage: 'https://959c13b.webp.li/public/colorbox-mustard.jpg',
    description: 'Create amazing beats with this unique music creation game',
    rating: 4.7,
    players: 167000,
    href: '/colorboxmustard'
  }
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  const allGames = [
    {
      href: "/incrediboxsprunkimod",
      title: "Incredibox Sprunki Mod",
      description: "Create your own beats with this amazing music game",
      image: "https://959c13b.webp.li/public/incredibox-characters.jpg",
      rating: 4.9,
      players: 198000
    },
    {
      href: "/cool-as-ice",
      title: "Cool As Ice",
      description: "Create chill beats with this winter-themed Incredibox mod",
      image: "https://959c13b.webp.li/public/coolasice.png",
      rating: 4.8,
      players: 156000
    },
    {
      href: "/sprunki-smg4",
      title: "Sprunki SMG4",
      description: "Experience the unique SMG4-style gameplay exclusively on IncrediboxSprunkiMod",
      image: "https://959c13b.webp.li/public/sprunki-smg4.jpg",
      rating: 4.9,
      players: 230000
    },
    {
      href: "/amazing-digital-circus",
      title: "Amazing Digital Circus",
      description: "Experience the magic of digital circus with stunning visuals",
      image: "https://959c13b.webp.li/public/amazing-digital-circus.jpg",
      rating: 4.9,
      players: 225000
    },
    ...featuredGames.map(game => ({
      href: game.href,
      title: game.title,
      description: game.description,
      image: game.coverImage,
      rating: game.rating,
      players: game.players
    }))
  ]

  return (
    <div className="relative px-8">
      <Slider {...settings}>
        {allGames.map((game, index) => (
          <div key={index} className="px-3">
            <FeaturedGameCard
              href={game.href}
              title={game.title}
              description={game.description}
              image={game.image}
              rating={game.rating}
              players={game.players}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}