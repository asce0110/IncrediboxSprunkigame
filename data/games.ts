export interface Game {
  slug: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  players: number;
  keywords?: string[];
  releaseDate?: string;
  isFeatured?: boolean;
}

export const GAMES: Game[] = [
  {
    slug: "wenda-treatment-sprunki",
    title: "Wenda Treatment Sprunki",
    description: "Experience the ultimate therapeutic music creation with Wenda Treatment",
    image: "https://s.incrediboxsprunkimod.com/public/wenda-treatment-sprunki.png",
    rating: 4.9,
    players: 290000,
    keywords: ["therapy", "treatment", "healing sounds", "musical therapy"],
    releaseDate: "2023-08-01",
    isFeatured: true
  },
  {
    slug: "fiddlesprunkis",
    title: "FiddleSprunkis",
    description: "A folk-inspired musical journey with a Sprunki twist",
    image: "https://s.incrediboxsprunkimod.com/public/FiddleSprunkis-368x207.png",
    rating: 4.9,
    players: 285000,
    keywords: ["folk music", "fiddle", "musical journey", "sprunki twist"],
    releaseDate: "2023-06-15",
    isFeatured: true
  },
  {
    slug: "gray-sprunki",
    title: "Gray Sprunki",
    description: "Create amazing beats with Gray Sprunki on IncrediboxSprunkiMod",
    image: "https://s.incrediboxsprunkimod.com/public/gray-sprunki.png",
    rating: 4.9,
    players: 280000,
    keywords: ["gray", "monochrome", "beats", "music creation"],
    releaseDate: "2023-05-20",
    isFeatured: true
  },
  {
    slug: "sprunked",
    title: "Sprunked",
    description: "Experience the revolutionary music creation game that pushes the boundaries",
    image: "https://959c13b.webp.li/public/sprunked.jpg",
    rating: 4.9,
    players: 280000,
    keywords: ["revolutionary", "music creation", "boundary pushing", "original sprunked"],
    releaseDate: "2023-01-10",
    isFeatured: true
  },
  {
    slug: "sprunki-brud",
    title: "Sprunki Brud",
    description: "Create amazing music with Sprunki Brud - The Latest Addition",
    image: "https://959c13b.webp.li/public/sprunki-brud.jpg",
    rating: 4.9,
    players: 275000,
    keywords: ["newest release", "brud", "music creator", "latest addition"],
    releaseDate: "2023-07-05",
    isFeatured: true
  },
  {
    slug: "game-incredibox",
    title: "Game Incredibox",
    description: "Play the amazing Incredibox game with unique musical mechanics",
    image: "https://959c13b.webp.li/public/corruptbox1-min.jpg",
    rating: 4.9,
    players: 270000,
    keywords: ["incredibox", "musical mechanics", "unique sounds"],
    releaseDate: "2022-12-15",
    isFeatured: true
  },
  {
    slug: "colorbox-mustard",
    title: "Colorbox Mustard",
    description: "Experience colorful music creation with unique sound combinations",
    image: "https://959c13b.webp.li/public/colorbox-mustard.jpg",
    rating: 4.9,
    players: 268000,
    keywords: ["colorful", "mustard", "sound combinations", "vibrant music"],
    releaseDate: "2023-02-28",
    isFeatured: true
  },
  {
    slug: "cool-as-ice",
    title: "Cool As Ice",
    description: "Chill out with this icy cool music creation experience",
    image: "https://959c13b.webp.li/public/coolasice.png",
    rating: 4.8,
    players: 266000,
    keywords: ["ice", "cool", "chill", "winter beats"],
    releaseDate: "2023-01-15"
  },
  {
    slug: "sprunki-alive",
    title: "Sprunki Alive",
    description: "Experience the living, breathing music creation game",
    image: "https://959c13b.webp.li/public/sprunki-alive.jpg",
    rating: 4.8,
    players: 265500,
    keywords: ["alive", "living", "dynamic", "responsive"],
    releaseDate: "2023-03-01"
  },
  {
    slug: "sprunki-modded",
    title: "Sprunki Modded",
    description: "Enhanced version with community-created sounds and visuals",
    image: "https://959c13b.webp.li/public/sprunki-modded.jpg",
    rating: 4.8,
    players: 265200,
    keywords: ["modded", "custom", "enhanced", "community"],
    releaseDate: "2023-02-10"
  },
  {
    slug: "sprunki-phase-8",
    title: "Sprunki Phase 8",
    description: "The eighth evolution of the Sprunki music experience",
    image: "https://959c13b.webp.li/public/sprunki-phase-8.jpg",
    rating: 4.8,
    players: 265000,
    keywords: ["phase 8", "evolution", "advanced", "eighth generation"],
    releaseDate: "2023-04-05"
  },
  {
    slug: "sprunki-mayonaise-2",
    title: "Sprunki Mayonaise 2",
    description: "The creamy musical adventure returns with new features",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Mayonaise-2-368x207.png",
    rating: 4.9,
    players: 265000,
    keywords: ["mayonaise", "sequel", "creamy sounds", "musical adventure"],
    releaseDate: "2023-04-10"
  },
  {
    slug: "sprunki-christmas",
    title: "Sprunki Christmas",
    description: "Festive holiday-themed music creation experience",
    image: "https://959c13b.webp.li/public/sprunki-christmas.jpg",
    rating: 4.8,
    players: 262000,
    keywords: ["christmas", "holiday", "festive", "winter"],
    releaseDate: "2022-12-01"
  },
  {
    slug: "christmas-sprunki",
    title: "Christmas Sprunki",
    description: "Create magical holiday music with Christmas Sprunki",
    image: "https://959c13b.webp.li/public/christmas-sprunki.jpg",
    rating: 4.8,
    players: 260000,
    keywords: ["christmas", "holiday", "magical", "festive beats"],
    releaseDate: "2022-12-10"
  },
  {
    slug: "sprunki-incredibox",
    title: "Sprunki Incredibox",
    description: "The classic Incredibox experience with a Sprunki twist",
    image: "https://959c13b.webp.li/public/Sprunki-Incredibox.jpg",
    rating: 4.8,
    players: 259000,
    keywords: ["classic", "incredibox", "twist", "fusion"],
    releaseDate: "2023-01-20"
  },
  {
    slug: "sprunki-but-15000000-funbots",
    title: "Sprunki But 15,000,000 FunBots",
    description: "Experience musical mayhem with millions of AI bots",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-but-15000000-fun-bot-368x207.png",
    rating: 4.9,
    players: 258000,
    keywords: ["ai bots", "funbots", "musical mayhem", "chaotic beats"],
    releaseDate: "2023-03-15"
  },
  {
    slug: "amazing-digital-circus",
    title: "Amazing Digital Circus",
    description: "A carnival of digital sounds and musical wonders",
    image: "https://959c13b.webp.li/public/amazing-digital-circus.jpg",
    rating: 4.8,
    players: 257000,
    keywords: ["circus", "carnival", "digital", "wonders"],
    releaseDate: "2023-02-20"
  },
  {
    slug: "sprunki-in-ohio-brainrot",
    title: "Sprunki in Ohio (Brainrot)",
    description: "Experience the wild and chaotic fusion of Sprunki meets Ohio",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-in-Ohio-Brainrot-368x207.png",
    rating: 4.9,
    players: 255000,
    keywords: ["ohio", "brainrot", "chaotic fusion", "wild music"],
    releaseDate: "2023-02-05"
  },
  {
    slug: "sprunki-smg4",
    title: "Sprunki SMG4",
    description: "A crossover music creation game with SMG4 characters",
    image: "https://959c13b.webp.li/public/sprunki-smg4.jpg",
    rating: 4.8,
    players: 252000,
    keywords: ["smg4", "crossover", "characters", "collab"],
    releaseDate: "2023-01-05"
  },
  {
    slug: "sprunki-retake",
    title: "Sprunki Retake",
    description: "A fresh take on the classic Sprunki experience",
    image: "https://959c13b.webp.li/public/sprunki-retake.jpg",
    rating: 4.8,
    players: 250000,
    keywords: ["retake", "fresh", "reimagined", "classic"],
    releaseDate: "2022-11-20"
  },
  {
    slug: "sprunki-terror-phase-30",
    title: "Sprunki Terror Phase 30",
    description: "The ultimate horror music experience with terrifying beats",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Terror-Phase-10-368x207.png",
    rating: 4.9,
    players: 248000,
    keywords: ["horror", "terror", "dark music", "phase 30", "scary beats"],
    releaseDate: "2022-10-31"
  },
  {
    slug: "incredibox-sprunki-mod",
    title: "Incredibox Sprunki Mod",
    description: "The official mod that started the Sprunki phenomenon",
    image: "https://959c13b.webp.li/public/incredibox-characters.jpg",
    rating: 4.8,
    players: 245000,
    keywords: ["official", "mod", "original", "phenomenon"],
    releaseDate: "2022-09-01"
  },
  {
    slug: "sprunki-titanic-cat-gang-edition",
    title: "Sprunki Titanic Cat Gang Edition",
    description: "Join the feline musical crew on their epic voyage",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Titanic-Cat-Gang-Edition-368x207.png",
    rating: 4.8,
    players: 242000,
    keywords: ["cats", "titanic", "gang", "feline music", "epic voyage"],
    releaseDate: "2022-11-15"
  },
  {
    slug: "neesterversal-v3-incredibox",
    title: "Neesterversal V3 Incredibox",
    description: "The third version of the popular Neesterversal remix",
    image: "https://959c13b.webp.li/public/neesterversal-v3.jpg",
    rating: 4.8,
    players: 240000,
    keywords: ["neesterversal", "v3", "remix", "version three"],
    releaseDate: "2022-10-10"
  },
  {
    slug: "sprunki-the-sun",
    title: "Sprunki The Sun",
    description: "Radiant beats and sunny melodies in this bright music game",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-the-Sun-368x207.png",
    rating: 4.8,
    players: 235000,
    keywords: ["sun", "bright", "radiant", "sunny"],
    releaseDate: "2022-08-15"
  },
  {
    slug: "sprunki-phase-3-reverse",
    title: "Sprunki Phase 3 Reverse",
    description: "Experience Phase 3 in reverse for a whole new sound",
    image: "https://s.incrediboxsprunkimod.com/public/Sprunki-Phase-3-Reverse-368x207.png",
    rating: 4.8,
    players: 230000,
    keywords: ["phase 3", "reverse", "backwards", "new perspective"],
    releaseDate: "2022-09-05"
  },
  {
    slug: "sprunki-but-relish",
    title: "Sprunki But Relish",
    description: "Experience the zesty fusion of music and condiments",
    image: "https://s.incrediboxsprunkimod.com/public/RELISH-BUT-SPRUNKI-368x207.png",
    rating: 4.8,
    players: 225000,
    keywords: ["relish", "condiment", "zesty", "fusion music"],
    releaseDate: "2022-09-20"
  }
];

/**
 * 通过slug获取游戏信息
 * @param slug 游戏的唯一标识
 * @returns 游戏信息或undefined
 */
export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find(game => game.slug === slug);
}

/**
 * 获取精选游戏
 * @param limit 限制数量
 * @returns 精选游戏数组
 */
export function getFeaturedGames(limit?: number): Game[] {
  const featured = GAMES.filter(game => game.isFeatured);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * 获取最近发布的游戏
 * @param limit 限制数量
 * @returns 最近发布的游戏数组
 */
export function getRecentGames(limit = 5): Game[] {
  return [...GAMES]
    .sort((a, b) => {
      if (!a.releaseDate || !b.releaseDate) return 0;
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    })
    .slice(0, limit);
}

/**
 * 获取热门游戏
 * @param limit 限制数量
 * @returns 热门游戏数组
 */
export function getPopularGames(limit = 5): Game[] {
  return [...GAMES]
    .sort((a, b) => b.players - a.players)
    .slice(0, limit);
} 