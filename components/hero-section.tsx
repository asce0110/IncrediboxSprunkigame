'use client'

import Link from 'next/link'
import { ArrowRight, Headphones, PlayCircle, PlusCircle } from 'lucide-react'
import { GradientButton } from '@/components/ui/gradient-button'
import { useEffect, useState } from 'react'

export function HeroSection() {
  // 添加打字效果的状态
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Create amazing music with our interactive online games.';

  // 添加滚动检测状态
  const [isScrolled, setIsScrolled] = useState(false);

  // 打字效果
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // 滚动检测
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 游戏特性数据
  const features = [
    {
      icon: <Headphones className="w-5 h-5 text-[#2EE59D]" />,
      text: "Beat Mixing"
    },
    {
      icon: <PlayCircle className="w-5 h-5 text-[#2EE59D]" />,
      text: "Musical Creation"
    },
    {
      icon: <PlusCircle className="w-5 h-5 text-[#2EE59D]" />,
      text: "Interactive Fun"
    }
  ];

  return (
    <article className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12">
      {/* 动画背景效果 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-[#2EE59D]/5 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[15%] right-[15%] w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* 主要内容容器，使用article增强语义化 */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <header>
          {/* H1标题，重要的SEO元素 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            <span className="relative inline-block">
              IncrediboxSprunki<wbr/>Mod
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2EE59D] to-transparent"></span>
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-2 text-[#2EE59D]">
              The Ultimate Music Creation Platform
            </span>
          </h1>
          
          {/* 打字效果副标题 */}
          <p className="h-8 md:h-10 text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
            {displayText}<span className="animate-pulse">|</span>
          </p>
        </header>
        
        {/* SEO优化的特性列表 */}
        <div className="hidden sm:flex items-center justify-center gap-6 md:gap-10 mb-8 text-shadow-sm">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon}
              <span className="text-white text-sm md:text-base">{feature.text}</span>
            </div>
          ))}
        </div>
        
        {/* CTA区域 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/sprunked-games" aria-label="Browse all music creation games">
            <GradientButton 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              Play Now
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </GradientButton>
          </Link>
          
          <Link 
            href="/sprunked" 
            className="px-6 py-3 border border-[#2EE59D]/30 text-[#2EE59D] rounded-xl hover:bg-[#2EE59D]/10 transition-colors duration-300"
            aria-label="Try our flagship Sprunked game"
          >
            Try Sprunked
          </Link>
        </div>
        
        {/* 社会证明和信任指标 */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-3">Trusted by music creators worldwide</p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="text-center">
              <span className="block text-[#2EE59D] font-bold text-xl md:text-2xl">15+</span>
              <span className="text-gray-400 text-xs">Games</span>
            </div>
            <div className="text-center">
              <span className="block text-[#2EE59D] font-bold text-xl md:text-2xl">1M+</span>
              <span className="text-gray-400 text-xs">Players</span>
            </div>
            <div className="text-center">
              <span className="block text-[#2EE59D] font-bold text-xl md:text-2xl">4.9</span>
              <span className="text-gray-400 text-xs">Rating</span>
            </div>
          </div>
        </div>
        
        {/* 滚动提示 - 当用户向下滚动时消失 */}
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-50 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center text-gray-200 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span>Scroll to explore</span>
            <div className="w-5 h-10 border border-gray-300 rounded-full mt-2 relative">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 添加结构化数据，提升SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "IncrediboxSprunkiMod",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "description": "Play Sprunked and other music creation games on IncrediboxSprunkiMod. Create amazing beats, mix unique sounds, and enjoy interactive music gaming experiences.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1000+"
            }
          })
        }}
      />
    </article>
  )
}