import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IncrediboxSprunkiMod - Play Incredibox Sprunki Mod Online',
  description: 'Play the best Incredibox Sprunki mod online. Create amazing beats and music with this revolutionary music creation game.',
  keywords: 'incredibox sprunki mod, incredibox mod, music game, beat maker, online music creator',
  authors: [{ name: 'IncrediboxSprunkiMod Team' }],
  creator: 'IncrediboxSprunkiMod',
  publisher: 'IncrediboxSprunkiMod',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://incrediboxsprunkimod.com',
    siteName: 'IncrediboxSprunkiMod',
    title: 'IncrediboxSprunkiMod - Play Incredibox Sprunki Mod Online',
    description: 'Play the best Incredibox Sprunki mod online. Create amazing beats and music with this revolutionary music creation game.',
    images: [
      {
        url: 'https://incrediboxsprunkimod.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IncrediboxSprunkiMod - Play Incredibox Sprunki Mod Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IncrediboxSprunkiMod - Play Incredibox Sprunki Mod Online',
    description: 'Play the best Incredibox Sprunki mod online. Create amazing beats and music with this revolutionary music creation game.',
    images: ['https://incrediboxsprunkimod.com/og-image.jpg'],
    creator: '@incrediboxsprunkimod',
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rkgqkxfc15");
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8090388788273305"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}