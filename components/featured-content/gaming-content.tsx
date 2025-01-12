'use client'

import { FeaturedGameCard } from './game-card'
import Slider from 'react-slick'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const featuredGames = [
  {
    id: 1,
    title: 'Sprunki Mayonaise 2',
    coverImage: 'https://959c13b.webp.li/public/sprunki-mayo-2.jpg',
    description: 'The creamy musical adventure returns with new features',
    rating: 4.9,
    players: 265000,
    href: '/sprunki-mayonaise-2'
  },
  {
    id: 2,
    title: 'Sprunki But 15,000,000 FunBots',
    coverImage: 'https://959c13b.webp.li/public/sprunki-funbots.jpg',
    description: 'Experience musical mayhem with millions of AI bots',
    rating: 4.9,
    players: 258000,
    href: '/sprunki-but-15000000-funbots'
  },
  {
    id: 3,
    title: 'Sprunki in Ohio (Brainrot)',
    coverImage: 'https://959c13b.webp.li/public/sprunki-ohio.jpg',
    description: 'Experience the wild and chaotic fusion of Sprunki meets Ohio',
    rating: 4.9,
    players: 255000,
    href: '/sprunki-in-ohio-brainrot'
  },
  {
    id: 4,
    title: 'Sprunki Terror Phase 30',
    coverImage: 'https://959c13b.webp.li/public/sprunki-terror-30.jpg',
    description: 'The ultimate horror music experience with terrifying beats',
    rating: 4.9,
    players: 248000,
    href: '/sprunki-terror-phase-30'
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
      href: "/sprunki-mayonaise-2",
      title: "Sprunki Mayonaise 2",
      description: "The creamy musical adventure returns with new features",
      image: "https://959c13b.webp.li/public/sprunki-mayo-2.jpg",
      rating: 4.9,
      players: 265000
    },
    {
      href: "/sprunki-but-15000000-funbots",
      title: "Sprunki But 15,000,000 FunBots",
      description: "Experience musical mayhem with millions of AI bots",
      image: "https://959c13b.webp.li/public/sprunki-funbots.jpg",
      rating: 4.9,
      players: 258000
    },
    {
      href: "/sprunki-in-ohio-brainrot",
      title: "Sprunki in Ohio (Brainrot)",
      description: "Experience the wild and chaotic fusion of Sprunki meets Ohio",
      image: "https://959c13b.webp.li/public/sprunki-ohio.jpg",
      rating: 4.9,
      players: 255000
    },
    {
      href: "/sprunki-terror-phase-30",
      title: "Sprunki Terror Phase 30",
      description: "The ultimate horror music experience with terrifying beats",
      image: "https://959c13b.webp.li/public/sprunki-terror-30.jpg",
      rating: 4.9,
      players: 248000
    },
    {
      href: "/sprinkle-parasite",
      title: "Sprinkle Parasite",
      description: "Create infectious music that evolves and spreads",
      image: "https://959c13b.webp.li/public/sprinkle-parasite.jpg",
      rating: 4.9,
      players: 244000
    },
    {
      href: "/sprunki-terror-phase-10",
      title: "Sprunki Terror Phase 10",
      description: "Classic horror reimagined with modern mechanics",
      image: "https://959c13b.webp.li/public/sprunki-terror-10.jpg",
      rating: 4.8,
      players: 237000
    },
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