'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Head from 'next/head'
import { Music, Gamepad2, Users, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Sprunked - IncrediboxSprunkiMod Music Creation Games</title>
        <meta 
          name="description" 
          content="Learn about Sprunked music creation games on IncrediboxSprunkiMod. Discover our innovative music making platform, game features, and creative community."
        />
        <meta 
          name="keywords" 
          content="Sprunked games, music creation platform, IncrediboxSprunkiMod about, online music games, interactive music maker"
        />
      </Head>

      <div className="min-h-screen bg-black">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
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
                        Create amazing music with our intuitive interface and extensive sound library.
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
                        Enjoy engaging gameplay mechanics that make music creation fun and accessible.
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
                        Join our growing community of music creators and gamers.
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
                        Experience new features, sounds, and games regularly.
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

              {/* Platform Stats */}
              <section className="bg-black/50 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Platform Statistics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">15+</div>
                    <div className="text-gray-300">Music Games</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">1M+</div>
                    <div className="text-gray-300">Players</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">500+</div>
                    <div className="text-gray-300">Sound Effects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#2EE59D] mb-2">4.9</div>
                    <div className="text-gray-300">Average Rating</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
} 