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