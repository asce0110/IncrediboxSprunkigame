'use client'

import { FeaturedGameCard } from '@/components/featured-content/game-card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const allGames = [
  {
    href: "/fiddlesprunkis",
    title: "FiddleSprunkis",
    description: "A folk-inspired musical journey with a Sprunki twist",
    image: "https://sprunkin.com/wp-content/uploads/2025/01/FiddleSprunkis-368x207.png",
    rating: 4.9,
    players: 285000
  },
  {
    href: "/gray-sprunki",
    title: "Gray Sprunki",
    description: "Create amazing beats with Gray Sprunki on IncrediboxSprunkiMod",
    image: "https://959c13b.webp.li/public/gray-sprunki.png",
    rating: 4.9,
    players: 280000
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
    image: "https://959c13b.webp.li/public/corruptbox1-min.jpg",
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
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Mayonaise-2-368x207.png",
    rating: 4.9,
    players: 265000
  },
  {
    href: "/sprunki-but-15000000-funbots",
    title: "Sprunki But 15,000,000 FunBots",
    description: "Experience musical mayhem with millions of AI bots",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-but-15000000-fun-bot-368x207.png",
    rating: 4.9,
    players: 258000
  },
  {
    href: "/sprunki-in-ohio-brainrot",
    title: "Sprunki in Ohio (Brainrot)",
    description: "Experience the wild and chaotic fusion of Sprunki meets Ohio",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-in-Ohio-Brainrot-368x207.png",
    rating: 4.9,
    players: 255000
  },
  {
    href: "/sprunki-terror-phase-30",
    title: "Sprunki Terror Phase 30",
    description: "The ultimate horror music experience with terrifying beats",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Terror-Phase-10-368x207.png",
    rating: 4.9,
    players: 248000
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
    href: "/sprunki-but-relish",
    title: "Sprunki But Relish",
    description: "Experience the zesty fusion of music and condiments",
    image: "https://s.incrediboxsprunkimod.com/public/RELISH-BUT-SPRUNKI-368x207.png",
    rating: 4.8,
    players: 225000
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
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-the-Sun-368x207.png",
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
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Phase-3-Reverse-368x207.png",
    rating: 4.7,
    players: 218000
  },
  {
    href: "/cool-as-ice",
    title: "Cool As Ice",
    description: "Create chill beats with this winter-themed music game",
    image: "https://959c13b.webp.li/public/coolasice.png",
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
    image: "https://959c13b.webp.li/public/incredibox-characters.jpg",
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

export default function SprunkedGamesPage() {
  return (
    <div className="min-h-screen bg-black/90">
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
              </div>
            </Link>

            <div>
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                More Sprunked Games
            </h1>
              <p className="text-gray-400 text-lg">
                Explore our complete collection of music creation games
            </p>
            </div>
          </div>

          {/* Games Grid */}
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
      </div>
    </div>
  )
}