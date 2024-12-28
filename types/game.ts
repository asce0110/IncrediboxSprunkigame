export interface Game {
  id: number;
  created_at: string;
  title: string;
  description: string | null;
  image_url: string | null;
  category_id: number;
  itch_game_id: string;
  slug: string;
}