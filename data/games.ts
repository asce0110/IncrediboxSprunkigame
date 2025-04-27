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