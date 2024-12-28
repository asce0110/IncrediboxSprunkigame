import { HeroSection } from '@/components/hero-section'
import { FeaturedContent } from '@/components/featured-content/featured-content'
import { Comments } from '@/components/comments'
import { MoreGames } from '@/components/more-games'
import { Slideshow } from '@/components/slideshow/slideshow'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Slideshow />
        </div>
        <div className="relative z-10 h-full">
          <HeroSection />
        </div>
      </section>
      <FeaturedContent />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧评论区 */}
          <div className="w-full lg:w-[400px] shrink-0">
            <Comments />
          </div>
          {/* 右侧More Games */}
          <div className="flex-1">
            <div className="lg:sticky lg:top-4">
              <MoreGames />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 