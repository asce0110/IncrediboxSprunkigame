import { Metadata } from 'next'
import AboutContent from './about-content'

// 明确声明这是一个服务器组件
// 不要添加'use client'指令

// 导出元数据
export const metadata: Metadata = {
  title: 'About IncrediboxSprunkiMod - Our Story & Mission',
  description: 'Learn about IncrediboxSprunkiMod - the platform dedicated to bringing you the best music creation games online. Discover our story, mission, and the team behind the music.',
  keywords: 'about incrediboxsprunkimod, music creation platform, sprunked games, incredibox history, online music games, who we are',
  openGraph: {
    title: 'About IncrediboxSprunkiMod - Our Story & Mission',
    description: 'Learn about the platform dedicated to bringing you the best music creation games online.',
    images: [
      {
        url: 'https://s.incrediboxsprunkimod.com/public/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About IncrediboxSprunkiMod',
      }
    ],
  }
}

// 服务器组件默认导出
export default function AboutPage() {
  return <AboutContent />
} 