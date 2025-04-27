import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getGameBySlug, GAMES } from '@/data/games';
import { generateGameMetadata } from '@/lib/seo-utils';
import { AppSEO } from '@/components/seo/app-seo';
import Link from 'next/link'
import { GameNav } from '@/components/game/game-nav';
import { ArrowLeft } from 'lucide-react';
import { CommentsMock } from '@/components/comments-mock';

// 为所有游戏生成静态路径
export function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.slug,
  }));
}

// 动态生成每个游戏页面的元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.',
    };
  }
  
  return generateGameMetadata(game);
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-black/90">
      <GameNav title="[Slug]" />
      {/* 结构化数据 */}
      <AppSEO
        jsonLd="game"
        gameData={{
          name: game.title,
          description: game.description,
          imageUrl: game.image,
          pageUrl: `/${game.slug}`,
          rating: game.rating,
          ratingCount: Math.floor(game.players / 100), // 假设每100玩家中有1个人评分
          keywords: game.keywords,
        }}
      />
      
      <div className="container mx-auto py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {/* SEO优化的标题区域 */}
          <div className="mb-4 flex items-center gap-6">
            <Link 
              href="/" 
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/50 hover:bg-[#2EE59D]/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#2EE59D]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowLeft className="w-6 h-6 text-[#2EE59D] relative z-10" />
              </div>
            </Link>

            <div>
              <h1 className="text-4xl font-bold text-[#2EE59D] mb-2">
                {game.title} - Create Amazing Music Online
              </h1>
              <p className="text-gray-400 text-lg">
                {game.description}
              </p>
            </div>
          </div>

          {/* 游戏区域 */}
          <div className="relative bg-black/50 rounded-xl overflow-hidden shadow-lg shadow-[#2EE59D]/10" style={{ minHeight: '600px' }}>
            <iframe 
              id="game_drop"
              allowFullScreen
              className="w-full h-[600px]"
              style={{ border: 'none' }}
              title={`Play ${game.title} Online - Interactive Music Creation Game`}
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/95 to-transparent z-10" />
          </div>

          {/* 游戏介绍和评论区布局 */}
          <div className="mt-8">
            <div className="space-y-6">
              {/* 评论区 */}
              <div className="bg-black/50 rounded-xl">
                <div className="p-6 border-b border-[#2EE59D]/10">
                  <h2 className="text-2xl font-semibold text-[#2EE59D]">Comments</h2>
                </div>
                <div className="overflow-y-auto custom-scrollbar">
                  <div className="p-6">
                    <CommentsMock />
                  </div>
            </div>
          </div>

              {/* 游戏介绍 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-4">
                  About {game.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  Welcome to {game.title}, one of our popular music creation games on IncrediboxSprunkiMod. 
                  {game.description} With our intuitive interface, you can create amazing beats and 
                  share your musical creations with friends.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Unique Sounds</span>
                    <span className="text-gray-400 text-center">Special audio samples and effects</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Beat Creation</span>
                    <span className="text-gray-400 text-center">Mix and match to create your own music</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-[#2EE59D] font-bold text-lg mb-2">Community Sharing</span>
                    <span className="text-gray-400 text-center">Share your creations with others</span>
                  </div>
            </div>
          </div>

              {/* FAQ部分 */}
              <div className="p-6 bg-black/50 rounded-xl">
                <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">What makes {game.title} special?</h3>
                    <p className="text-gray-400">{game.title} offers a unique music creation experience with custom sounds, visuals, and features that set it apart from other games.</p>
                  </div>
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">How do I create music in {game.title}?</h3>
                    <p className="text-gray-400">Simply drag and drop characters onto the stage to start creating music. Each character adds unique sounds to your mix.</p>
                  </div>
                  <div className="border-b border-[#2EE59D]/10 pb-4">
                    <h3 className="text-lg font-medium text-white mb-2">Can I save my creations?</h3>
                    <p className="text-gray-400">Yes! Save and share your masterpieces with the {game.title} community. Spread the joy of your musical creations!</p>
                  </div>
            </div>
          </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
} 