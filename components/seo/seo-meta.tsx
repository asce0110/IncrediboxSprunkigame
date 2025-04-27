import React from 'react';
import Head from 'next/head';
import { GameJsonLd, WebsiteJsonLd, OrganizationJsonLd } from './json-ld';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'game';
  keywords?: string[];
  jsonLd?: 'game' | 'website' | 'organization' | 'none';
  gameData?: {
    name: string;
    description: string;
    imageUrl: string;
    pageUrl: string;
    rating?: number;
    ratingCount?: number;
    keywords?: string[];
  };
  websiteData?: {
    name: string;
    description: string;
    url: string;
    logoUrl?: string;
  };
  organizationData?: {
    name: string;
    description: string;
    url: string;
    logoUrl: string;
    contactPoint?: {
      telephone: string;
      contactType: string;
      email?: string;
    };
  };
}

// 默认网站基本信息
const BASE_URL = 'https://incrediboxsprunkimod.com';
const DEFAULT_TITLE = 'IncrediboxSprunkiMod - Sprunked Music Creation Games';
const DEFAULT_DESCRIPTION = 'Play Sprunked and other music creation games on IncrediboxSprunkiMod. Create amazing beats, mix unique sounds, and enjoy interactive music gaming experiences.';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.jpg`;

export const SEOMeta = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonical = BASE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords = ['music creation game', 'sprunked', 'incredibox', 'music games'],
  jsonLd = 'none',
  gameData,
  websiteData,
  organizationData
}: SEOProps) => {
  // 确保canonical URL是完整的URL
  const fullCanonical = canonical.startsWith('http')
    ? canonical
    : `${BASE_URL}${canonical}`;
  
  // 确保ogImage是完整的URL
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${BASE_URL}${ogImage}`;

  return (
    <Head>
      {/* 基本元标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph 标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="IncrediboxSprunkiMod" />
      
      {/* Twitter 卡片 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* 其他重要元标签 */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* 结构化数据 */}
      {jsonLd === 'game' && gameData && (
        <GameJsonLd
          name={gameData.name}
          description={gameData.description}
          imageUrl={gameData.imageUrl.startsWith('http') ? gameData.imageUrl : `${BASE_URL}${gameData.imageUrl}`}
          pageUrl={gameData.pageUrl.startsWith('http') ? gameData.pageUrl : `${BASE_URL}${gameData.pageUrl}`}
          rating={gameData.rating}
          ratingCount={gameData.ratingCount}
          keywords={gameData.keywords || keywords}
        />
      )}
      
      {jsonLd === 'website' && websiteData && (
        <WebsiteJsonLd
          name={websiteData.name}
          description={websiteData.description}
          url={websiteData.url.startsWith('http') ? websiteData.url : `${BASE_URL}${websiteData.url}`}
          logoUrl={websiteData.logoUrl ? (websiteData.logoUrl.startsWith('http') ? websiteData.logoUrl : `${BASE_URL}${websiteData.logoUrl}`) : undefined}
        />
      )}
      
      {jsonLd === 'organization' && organizationData && (
        <OrganizationJsonLd
          name={organizationData.name}
          description={organizationData.description}
          url={organizationData.url.startsWith('http') ? organizationData.url : `${BASE_URL}${organizationData.url}`}
          logoUrl={organizationData.logoUrl.startsWith('http') ? organizationData.logoUrl : `${BASE_URL}${organizationData.logoUrl}`}
          contactPoint={organizationData.contactPoint}
        />
      )}
    </Head>
  );
}; 