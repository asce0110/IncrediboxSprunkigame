import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://incrediboxsprunkimod.com'
  
  // 所有游戏页面
  const gamePages = [
    '/sprunked',
    '/sprunki-brud',
    '/gameincredibox',
    '/colorboxmustard',
    '/incrediboxsprunkimod',
    '/cool-as-ice',
    '/sprunki-smg4',
    '/amazing-digital-circus',
    '/sprunki-phase-8',
    '/gray-sprunki',
    '/sprunki-alive',
    '/sprunki-modded',
    '/sprunki-christmas',
    '/christmas-sprunki',
    '/sprunki-incredibox',
    '/sprunki-retake',
    '/neesterversal-v3-incredibox'
  ]

  // 基础页面
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // 添加其他重要页面
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }
  ]

  // 添加游戏页面
  for (const page of gamePages) {
    routes.push({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.8,
      
    })
  }

  return routes
}