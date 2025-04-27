import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/server-sitemap.xml',
      ],
    },
    sitemap: 'https://incrediboxsprunkimod.com/sitemap.xml',
    host: 'https://incrediboxsprunkimod.com',
  };
} 