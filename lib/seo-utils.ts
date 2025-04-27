import type { Metadata } from 'next';

// 网站信息配置
const siteConfig = {
  name: 'IncrediboxSprunkiMod',
  description: 'Play Sprunked and other music creation games on IncrediboxSprunkiMod. Create amazing beats, mix unique sounds, and enjoy interactive music gaming experiences.',
  url: 'https://incrediboxsprunkimod.com',
  ogImage: 'https://s.incrediboxsprunkimod.com/public/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/incrediboxmod',
    github: 'https://github.com/asce0110/IncrediboxSprunkigame',
  },
  creator: '@incrediboxmod',
};

// 图片域名前缀
const IMAGE_PREFIX = 'https://s.incrediboxsprunkimod.com/public';

interface MetadataProps {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article' | 'game';
  keywords?: string[];
}

/**
 * 生成页面的metadata配置
 * @param props 
 * @returns Metadata对象
 */
export function generateMetadata({
  title,
  description = siteConfig.description,
  path = '',
  ogImage = siteConfig.ogImage,
  noIndex = false,
  type = 'website',
  keywords = []
}: MetadataProps): Metadata {
  // 确保URL格式正确
  const url = path ? `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}` : siteConfig.url;
  
  // 确保图片URL格式正确
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${IMAGE_PREFIX}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
  
  // 默认关键词
  const defaultKeywords = [
    'music creation', 'sprunked', 'incredibox', 'music game', 'interactive music', 'beat maker'
  ];
  
  // 合并关键词并去重（避免使用Set来解决TypeScript编译错误）
  const allKeywords = [...defaultKeywords, ...keywords];
  const uniqueKeywords = allKeywords.filter((value, index, self) => self.indexOf(value) === index);
  const metaKeywords = uniqueKeywords.join(', ');
  
  // 确定OpenGraph类型
  // Next.js 的 OpenGraph 类型只接受 'website' | 'article'，所以需要转换
  const ogType = type === 'game' ? 'website' : type;
  
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: ogType, // 使用转换后的类型
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      creator: siteConfig.creator,
      images: [imageUrl],
    },
  };
}

/**
 * 为游戏页面生成metadata
 * @param game 游戏信息
 * @returns Metadata对象
 */
export function generateGameMetadata(game: {
  title: string;
  description: string;
  slug: string;
  image: string;
  rating?: number;
  players?: number;
  keywords?: string[];
}): Metadata {
  const { title, description, slug, image, keywords = [] } = game;
  
  // 为游戏页面添加专属关键词
  const gameKeywords = [
    'play online', 'free music game', 'beat creator', 'sound mixer', 
    title.toLowerCase(), ...keywords
  ];
  
  return generateMetadata({
    title,
    description,
    path: `/${slug}`,
    ogImage: image,
    type: 'game',
    keywords: gameKeywords,
  });
} 