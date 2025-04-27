import React from 'react';

interface GameJsonLdProps {
  name: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
  rating?: number;
  ratingCount?: number;
  datePublished?: string;
  keywords?: string[];
  applicationCategory?: string;
  operatingSystem?: string;
}

interface WebsiteJsonLdProps {
  name: string;
  description: string;
  url: string;
  logoUrl?: string;
  socialLinks?: { platform: string; url: string }[];
  sameAs?: string[];
}

interface OrganizationJsonLdProps {
  name: string;
  description: string;
  url: string;
  logoUrl: string;
  socialLinks?: { platform: string; url: string }[];
  sameAs?: string[];
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
}

export const GameJsonLd = ({
  name,
  description,
  imageUrl,
  pageUrl,
  rating = 4.8,
  ratingCount = 1000,
  datePublished = new Date().toISOString().split('T')[0],
  keywords = [],
  applicationCategory = "Game",
  operatingSystem = "Web Browser"
}: GameJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "genre": "Music Creation",
    "image": imageUrl,
    "url": pageUrl,
    "datePublished": datePublished,
    "keywords": keywords.join(", "),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "ratingCount": ratingCount.toString()
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const WebsiteJsonLd = ({
  name,
  description,
  url,
  logoUrl,
  socialLinks = [],
  sameAs = []
}: WebsiteJsonLdProps) => {
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": description,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  if (logoUrl) {
    jsonLd["logo"] = logoUrl;
  }

  if (sameAs && sameAs.length > 0) {
    jsonLd["sameAs"] = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const OrganizationJsonLd = ({
  name,
  description,
  url,
  logoUrl,
  socialLinks = [],
  sameAs = [],
  contactPoint
}: OrganizationJsonLdProps) => {
  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "description": description,
    "url": url,
    "logo": logoUrl
  };

  if (sameAs && sameAs.length > 0) {
    jsonLd["sameAs"] = sameAs;
  }

  if (contactPoint) {
    jsonLd["contactPoint"] = {
      "@type": "ContactPoint",
      "telephone": contactPoint.telephone,
      "contactType": contactPoint.contactType,
      "email": contactPoint.email
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}; 