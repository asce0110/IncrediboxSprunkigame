'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { preloadImage } from '@/lib/image-utils'

export default function TestImage() {
  useEffect(() => {
    // 使用工具函数预加载图片
    preloadImage('https://959c13b.webp.li/public/incredibox-characters.jpg')
      .then(() => console.log('Image preloaded successfully'))
      .catch(err => console.error('Failed to preload image', err))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Image Test Component</h1>
      <div className="relative w-64 h-64">
        <Image
          src="https://959c13b.webp.li/public/incredibox-characters.jpg"
          alt="Test image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
} 