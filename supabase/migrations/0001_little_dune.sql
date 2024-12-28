/*
  # Create games management system

  1. New Tables
    - `games`
      - `id` (uuid, primary key)
      - `title` (text, game title)
      - `description` (text, game description)
      - `cover_image` (text, URL of cover image)
      - `category_id` (text, foreign key to categories)
      - `url` (text, game URL)
      - `featured` (boolean, if game should be featured)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `games` table
    - Add policies for authenticated users to manage games
*/

CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  cover_image text,
  category_id text REFERENCES categories(id),
  url text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE games ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all games
CREATE POLICY "Anyone can read games"
  ON games
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert games
CREATE POLICY "Authenticated users can insert games"
  ON games
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update their games
CREATE POLICY "Authenticated users can update games"
  ON games
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);