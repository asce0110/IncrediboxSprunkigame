'use client';

import React from 'react';
import { GameJsonLd, WebsiteJsonLd, OrganizationJsonLd } from './json-ld';

interface AppSEOProps {
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
const DEFAULT_KEYWORDS = ['music creation game', 'sprunked', 'incredibox', 'music games'];

export function AppSEO({
  jsonLd = 'none',
  gameData,
  websiteData,
  organizationData
}: AppSEOProps) {
  return (
    <>
      {/* 结构化数据 */}
      {jsonLd === 'game' && gameData && (
        <GameJsonLd
          name={gameData.name}
          description={gameData.description}
          imageUrl={gameData.imageUrl.startsWith('http') ? gameData.imageUrl : `${BASE_URL}${gameData.imageUrl}`}
          pageUrl={gameData.pageUrl.startsWith('http') ? gameData.pageUrl : `${BASE_URL}${gameData.pageUrl}`}
          rating={gameData.rating}
          ratingCount={gameData.ratingCount}
          keywords={gameData.keywords || DEFAULT_KEYWORDS}
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
    </>
  );
} 