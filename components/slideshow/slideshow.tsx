'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { preloadImage } from '@/lib/image-utils'
import { ArrowRight } from 'lucide-react'

interface SlideshowProps {
  className?: string
}

const slides = [
  {
    id: 1,
    image: 'https://959c13b.webp.li/public/incredibox-characters.jpg',
    title: 'Incredibox Characters',
    description: 'Meet the amazing characters from Incredibox',
    alt: 'Incredibox music game characters - A diverse lineup of animated beatboxers and musicians in unique art style',
    width: 1280,
    height: 720,
    priority: true,
    slug: 'incredibox-characters'
  },
  {
    id: 2,
    image: 'https://959c13b.webp.li/public/sprunki.jpg',
    title: 'Sprunki',
    description: 'Experience the unique world of Sprunki',
    alt: 'Sprunki music creation game - Interactive musical interface with colorful visual elements and beat mixing tools',
    width: 1280,
    height: 720,
    priority: false,
    slug: 'sprunki'
  },
  {
    id: 3,
    image: 'https://959c13b.webp.li/public/coolasice.jpg',
    title: 'Cool As Ice',
    description: 'Discover the winter wonderland of Cool As Ice',
    alt: 'Cool As Ice winter music game - Snow-themed music creation interface with icy visual effects and winter soundscapes',
    width: 1280,
    height: 720,
    priority: false,
    slug: 'cool-as-ice'
  }
]

export function Slideshow({ className }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState<boolean[]>(slides.map((_, i) => i === 0))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    const preloadNextSlide = () => {
      const nextSlide = (currentSlide + 1) % slides.length
      if (!isLoaded[nextSlide]) {
        // 使用工具函数预加载图片
        preloadImage(slides[nextSlide].image)
          .then(() => {
            setIsLoaded(prev => {
              const newState = [...prev]
              newState[nextSlide] = true
              return newState
            })
          })
          .catch(err => {
            console.error(`Failed to preload image: ${slides[nextSlide].image}`, err)
          })
      }
    }

    preloadNextSlide()
    return () => clearInterval(timer)
  }, [currentSlide, isLoaded])

  return (
    <div className={cn("relative w-full h-full", className)}>
      <div aria-live="polite" className="sr-only">
        Currently showing featured experiences: {slides.map(slide => slide.title).join(', ')}
      </div>
      
      {/* 改为卡片式布局，不再使用背景渐变覆盖 */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          <span className="relative inline-block">
            Featured Experiences
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2EE59D] to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#2EE59D]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#2EE59D]/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={slide.priority}
                  onLoad={() => {
                    setIsLoaded(prev => {
                      const newState = [...prev]
                      newState[slides.findIndex(s => s.id === slide.id)] = true
                      return newState
                    })
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{slide.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{slide.description}</p>
                
                <Link 
                  href={`/${slide.slug}`} 
                  className="inline-flex items-center text-[#2EE59D] hover:underline group-hover:text-white transition-colors text-sm"
                  aria-label={`Learn more about ${slide.title}`}
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}