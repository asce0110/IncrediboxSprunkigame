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
    }
  ]

  return (
    <div className="relative px-4 sm:px-6 md:px-8">
      <Slider {...settings}>
        {allGames.map((game, index) => (
          <div key={index} className="px-1 sm:px-2 md:px-3">
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