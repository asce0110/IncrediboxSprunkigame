import { Database } from './supabase'

export type Game = Database['public']['Tables']['games']['Row']

export interface GameFormData {
  title: string
  description: string
  coverImage: string
  categoryId: string
  url: string
  featured: boolean
}