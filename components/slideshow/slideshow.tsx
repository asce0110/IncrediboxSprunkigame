'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SlideshowProps {
  className?: string
}

const slides = [
  {
    id: 1,
    image: 'https://959c13b.webp.li/public/incredibox-characters.jpg',
    title: 'Incredibox Characters',
    description: 'Meet the amazing characters from Incredibox',
    alt: 'Incredibox music game characters - A diverse lineup of animated beatboxers and musicians in unique art style'
  },
  {
    id: 2,
    image: 'https://959c13b.webp.li/public/sprunki.jpg',
    title: 'Sprunki',
    description: 'Experience the unique world of Sprunki',
    alt: 'Sprunki music creation game - Interactive musical interface with colorful visual elements and beat mixing tools'
  },
  {
    id: 3,
    image: 'https://959c13b.webp.li/public/coolasice.jpg',
    title: 'Cool As Ice',
    description: 'Discover the winter wonderland of Cool As Ice',
    alt: 'Cool As Ice winter music game - Snow-themed music creation interface with icy visual effects and winter soundscapes'
  }
]

export function Slideshow({ className }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={cn("relative w-full h-full", className)}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          {/* Background image */}
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-[#2EE59D] w-4" 
                : "bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  )
}