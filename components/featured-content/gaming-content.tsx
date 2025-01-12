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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

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
      href: "/sprunki-titanic-cat-gang-edition",
      title: "Sprunki Titanic Cat Gang Edition",
      description: "Join the feline musical crew on their epic voyage",
      image: "https://959c13b.webp.li/public/sprunki-titanic.jpg",
      rating: 4.8,
      players: 242000
    },
    {
      href: "/sprunki-but-relish",
      title: "Sprunki But Relish",
      description: "A tangy twist on the classic Sprunki experience",
      image: "https://959c13b.webp.li/public/sprunki-relish.jpg",
      rating: 4.8,
      players: 238000
    },
    {
      href: "/sprunki-definitive-phase-5",
      title: "Sprunki Definitive Phase 5",
      description: "The ultimate refined version of the Sprunki series",
      image: "https://959c13b.webp.li/public/sprunki-phase-5.jpg",
      rating: 4.8,
      players: 235000
    },
    {
      href: "/sprunki-cute-time",
      title: "Sprunki Cute Time",
      description: "Adorable musical adventures with kawaii elements",
      image: "https://959c13b.webp.li/public/sprunki-cute.jpg",
      rating: 4.8,
      players: 232000
    },
    {
      href: "/sprunki-the-sun",
      title: "Sprunki The Sun",
      description: "Create blazing hot beats in this solar-powered edition",
      image: "https://959c13b.webp.li/public/sprunki-sun.jpg",
      rating: 4.8,
      players: 228000
    },
    {
      href: "/kino-sprunked-2-0-mini-remake",
      title: "Kino Sprunked 2.0 Mini Remake",
      description: "A cinematic musical experience reimagined",
      image: "https://959c13b.webp.li/public/kino-sprunked.jpg",
      rating: 4.7,
      players: 225000
    },
    {
      href: "/fiddlesprunkis",
      title: "Fiddlesprunkis",
      description: "A folk-inspired musical journey with a Sprunki twist",
      image: "https://959c13b.webp.li/public/fiddlesprunkis.jpg",
      rating: 4.7,
      players: 222000
    },
    {
      href: "/sprunki-phase-3-reverse",
      title: "Sprunki Phase 3 Reverse",
      description: "Experience classic Sprunki beats in reverse",
      image: "https://959c13b.webp.li/public/sprunki-reverse.jpg",
      rating: 4.7,
      players: 218000
    },
    {
      href: "/cool-as-ice",
      title: "Cool As Ice",
      description: "Create chill beats with this winter-themed music game",
      image: "https://959c13b.webp.li/public/cool-as-ice.jpg",
      rating: 4.7,
      players: 215000
    },
    {
      href: "/sprunki-alive",
      title: "Sprunki Alive",
      description: "Experience dynamic music creation with real-time sound generation",
      image: "https://959c13b.webp.li/public/sprunki-alive.jpg",
      rating: 4.7,
      players: 212000
    },
    {
      href: "/sprunki-modded",
      title: "Sprunki Modded",
      description: "Experience a unique take on the Sprunki series with new sounds",
      image: "https://959c13b.webp.li/public/sprunki-modded.jpg",
      rating: 4.7,
      players: 208000
    },
    {
      href: "/sprunki-phase-8",
      title: "Sprunki Phase 8",
      description: "Experience Phase eight, the next evolution of music creation",
      image: "https://959c13b.webp.li/public/sprunki-phase-8.jpg",
      rating: 4.7,
      players: 205000
    },
    {
      href: "/sprunki-christmas",
      title: "Sprunki Christmas",
      description: "Create festive music with holiday-themed sounds and visuals",
      image: "https://959c13b.webp.li/public/sprunki-christmas.jpg",
      rating: 4.7,
      players: 202000
    },
    {
      href: "/christmas-sprunki",
      title: "Christmas Sprunki",
      description: "Another take on holiday music creation with unique features",
      image: "https://959c13b.webp.li/public/christmas-sprunki.jpg",
      rating: 4.7,
      players: 198000
    },
    {
      href: "/sprunki-incredibox",
      title: "Sprunki Incredibox",
      description: "Experience the classic Incredibox style with a Sprunki twist",
      image: "https://959c13b.webp.li/public/sprunki-incredibox.jpg",
      rating: 4.7,
      players: 195000
    },
    {
      href: "/amazing-digital-circus",
      title: "Amazing Digital Circus",
      description: "Create circus-themed music with amazing digital effects",
      image: "https://959c13b.webp.li/public/amazing-digital-circus.jpg",
      rating: 4.7,
      players: 192000
    },
    {
      href: "/sprunki-smg4",
      title: "Sprunki SMG4",
      description: "Experience SMG4-style gameplay exclusively on IncrediboxSprunkiMod",
      image: "https://959c13b.webp.li/public/sprunki-smg4.jpg",
      rating: 4.7,
      players: 188000
    },
    {
      href: "/sprunki-retake",
      title: "Sprunki Retake",
      description: "A fresh take on the Sprunki series with new features",
      image: "https://959c13b.webp.li/public/sprunki-retake.jpg",
      rating: 4.7,
      players: 185000
    },
    {
      href: "/incredibox-sprunki-mod",
      title: "Incredibox Sprunki Mod",
      description: "The ultimate Incredibox mod with enhanced features",
      image: "https://959c13b.webp.li/public/incredibox-sprunki-mod.jpg",
      rating: 4.7,
      players: 182000
    },
    {
      href: "/neesterversal-v3-incredibox",
      title: "Neesterversal V3 Incredibox",
      description: "Experience the V3 version of Neesterversal Incredibox",
      image: "https://959c13b.webp.li/public/neesterversal-v3.jpg",
      rating: 4.7,
      players: 178000
    }
  ]

  return (
    <div className="container mx-auto px-1">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1">
        {allGames.map((game, index) => (
          <div key={index}>
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
      </div>
    </div>
  )
}