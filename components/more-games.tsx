import { SimpleGameCard } from './simple-game-card'

const moreGames = [
  {
    title: 'FiddleSprunkis',
    image: 'https://s.incrediboxsprunkimod.com/public/FiddleSprunkis-368x207.png',
    href: '/fiddlesprunkis'
  },
  {
    title: 'Gray Sprunki',
    image: 'https://959c13b.webp.li/public/gray-sprunki.png',
    href: '/gray-sprunki'
  },
  {
    title: 'Sprunked',
    image: 'https://959c13b.webp.li/public/sprunked.jpg',
    href: '/sprunked'
  },
  {
    title: 'Sprunki Brud',
    image: 'https://959c13b.webp.li/public/sprunki-brud.jpg',
    href: '/sprunki-brud'
  },
  {
    title: 'Game Incredibox',
    image: 'https://959c13b.webp.li/public/corruptbox1-min.jpg',
    href: '/gameincredibox'
  },
  {
    title: 'Colorbox Mustard',
    image: 'https://959c13b.webp.li/public/colorbox-mustard.jpg',
    href: '/colorboxmustard'
  },
  {
    title: 'Cool As Ice',
    image: 'https://959c13b.webp.li/public/coolasice.png',
    href: '/cool-as-ice'
  },
  {
    title: 'Sprunki Alive',
    image: 'https://959c13b.webp.li/public/sprunki-alive.jpg',
    href: '/sprunki-alive'
  },
  {
    title: 'Sprunki Modded',
    image: 'https://959c13b.webp.li/public/sprunki-modded.jpg',
    href: '/sprunki-modded'
  },
  {
    title: 'Sprunki Phase 8',
    image: 'https://959c13b.webp.li/public/sprunki-phase-8.jpg',
    href: '/sprunki-phase-8'
  },
  {
    title: 'Sprunki Christmas',
    image: 'https://959c13b.webp.li/public/sprunki-christmas.jpg',
    href: '/sprunki-christmas'
  },
  {
    title: 'Christmas Sprunki',
    image: 'https://959c13b.webp.li/public/christmas-sprunki.jpg',
    href: '/christmas-sprunki'
  },
  {
    title: 'Sprunki Incredibox',
    image: 'https://959c13b.webp.li/public/Sprunki-Incredibox.jpg',
    href: '/sprunki-incredibox'
  },
  {
    title: 'Amazing Digital Circus',
    image: 'https://959c13b.webp.li/public/amazing-digital-circus.jpg',
    href: '/amazing-digital-circus'
  },
  {
    title: 'Sprunki SMG4',
    image: 'https://959c13b.webp.li/public/sprunki-smg4.jpg',
    href: '/sprunki-smg4'
  },
  {
    title: 'Sprunki Retake',
    image: 'https://959c13b.webp.li/public/sprunki-retake.jpg',
    href: '/sprunki-retake'
  },
  {
    title: 'Incredibox Sprunki Mod',
    image: 'https://959c13b.webp.li/public/incredibox-characters.jpg',
    href: '/incredibox-sprunki-mod'
  },
  {
    title: 'Neesterversal V3 Incredibox',
    image: 'https://959c13b.webp.li/public/neesterversal-v3.jpg',
    href: '/neesterversal-v3-incredibox'
  },
  {
    title: 'Sprunki Mayonaise 2',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Mayonaise-2-368x207.png',
    href: '/sprunki-mayonaise-2'
  },
  {
    title: 'Sprunki But 15,000,000 FunBots',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-but-15000000-fun-bot-368x207.png',
    href: '/sprunki-but-15000000-funbots'
  },
  {
    title: 'Sprunki in Ohio (Brainrot)',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-in-Ohio-Brainrot-368x207.png',
    href: '/sprunki-in-ohio-brainrot'
  },
  {
    title: 'Sprunki Terror Phase 30',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Terror-Phase-10-368x207.png',
    href: '/sprunki-terror-phase-30'
  },
  {
    title: 'Sprunki Titanic Cat Gang Edition',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Titanic-Cat-Gang-Edition-368x207.png',
    href: '/sprunki-titanic-cat-gang-edition'
  },
  {
    title: 'Sprunki The Sun',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-the-Sun-368x207.png',
    href: '/sprunki-the-sun'
  },
  {
    title: 'Sprunki Phase 3 Reverse',
    image: 'https://s.incrediboxsprunkimod.com/public/Sprunki-Phase-3-Reverse-368x207.png',
    href: '/sprunki-phase-3-reverse'
  },
  {
    title: 'Sprunki But Relish',
    image: 'https://s.incrediboxsprunkimod.com/public/RELISH-BUT-SPRUNKI-368x207.png',
    href: '/sprunki-but-relish'
  }
]

export function MoreGames() {
  return (
    <div className="bg-black/50 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-[#2EE59D]/10">
        <h2 className="text-2xl font-semibold text-[#2EE59D]">More Sprunked Games</h2>
      </div>
      <div className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {moreGames.map((game, index) => (
            <SimpleGameCard
              key={index}
              href={game.href}
              title={game.title}
              image={game.image}
              compact={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 