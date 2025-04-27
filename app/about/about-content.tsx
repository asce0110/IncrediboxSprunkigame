'use client'

import Link from 'next/link'
import { ArrowLeft, Music, Gamepad2, Users, Star } from 'lucide-react'
import { getPopularGames } from '@/data/games'
import { AppSEO } from '@/components/seo/app-seo'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function AboutContent() {
  // 获取热门游戏，用于内部链接
  const popularGames = getPopularGames(3);
  
  return (
    <div className="min-h-screen bg-black">
      {/* 结构化数据 */}
      <AppSEO
        jsonLd="organization"
        organizationData={{
          name: "IncrediboxSprunkiMod",
          description: "A platform dedicated to music creation games, offering multiple unique musical experiences.",
          url: "/about",
          logoUrl: "https://s.incrediboxsprunkimod.com/public/logo.png",
          contactPoint: {
            telephone: "+1-800-123-4567",
            contactType: "customer service",
            email: "contact@incrediboxsprunkimod.com"
          }
        }}
      />
      
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 面包屑导航 - 对SEO有帮助 */}
          <nav className="flex items-center text-sm mb-4 text-gray-400">
            <Link href="/" className="hover:text-[#2EE59D]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#2EE59D]">About Us</span>
          </nav>
          
          <h1 className="text-4xl font-bold text-[#2EE59D] mb-8">
            About Sprunked Music Creation Games
          </h1>

          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Welcome to IncrediboxSprunkiMod
              </h2>
              <p className="text-gray-300">
                IncrediboxSprunkiMod is your premier destination for interactive music creation games. Our platform brings together innovative gameplay mechanics and music creation tools to deliver a unique gaming experience.
              </p>
            </section>

            {/* Features */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                Platform Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                    <Music className="w-6 h-6 text-[#2EE59D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Music Creation</h3>
                    <p className="text-gray-300">
                      Create amazing music with our intuitive interface and extensive sound library. Try games like <Link href="/sprunked" className="text-[#2EE59D] hover:underline">Sprunked</Link> and <Link href="/game-incredibox" className="text-[#2EE59D] hover:underline">Game Incredibox</Link>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                    <Gamepad2 className="w-6 h-6 text-[#2EE59D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Interactive Gaming</h3>
                    <p className="text-gray-300">
                      Enjoy engaging gameplay mechanics that make music creation fun and accessible for everyone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-[#2EE59D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Community</h3>
                    <p className="text-gray-300">
                      Join our growing community of music creators and gamers. Share your creations and get inspired.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#2EE59D]/10 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-[#2EE59D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Regular Updates</h3>
                    <p className="text-gray-300">
                      Experience new features, sounds, and games regularly. Check our <Link href="/sprunked-games" className="text-[#2EE59D] hover:underline">games collection</Link> for the latest releases.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-4">
                At IncrediboxSprunkiMod, we're dedicated to making music creation accessible and enjoyable for everyone. Our mission is to provide innovative music games that inspire creativity and bring joy to players worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="text-[#2EE59D] font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">
                    Pushing boundaries in music gaming
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="text-[#2EE59D] font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-400 text-sm">
                    Making music creation fun for all
                  </p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h3 className="text-[#2EE59D] font-semibold mb-2">Community</h3>
                  <p className="text-gray-400 text-sm">
                    Building a creative gaming space
                  </p>
                </div>
              </div>
            </section>
            
            {/* Popular Games */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Popular Games
              </h2>
              <p className="text-gray-300 mb-6">
                Explore some of our most popular music creation games:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {popularGames.map(game => (
                  <Link 
                    key={game.slug}
                    href={`/${game.slug}`}
                    className="block bg-black/30 rounded-lg overflow-hidden hover:bg-black/40 transition-colors"
                  >
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-1">{game.title}</h3>
                      <p className="text-gray-400 text-sm">{game.description}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{(game.players/1000).toFixed(0)}K players</span>
                        <span className="text-sm text-[#2EE59D]">Play Now</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link 
                  href="/sprunked-games" 
                  className="inline-block px-6 py-3 bg-[#2EE59D]/10 text-[#2EE59D] rounded-lg hover:bg-[#2EE59D]/20 transition-colors"
                >
                  View All Games
                </Link>
              </div>
            </section>
            
            {/* Contact Us */}
            <section className="bg-black/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-300 mb-6">
                Have questions or feedback? We'd love to hear from you! Visit our <Link href="/contact" className="text-[#2EE59D] hover:underline">contact page</Link> to get in touch with our team.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 