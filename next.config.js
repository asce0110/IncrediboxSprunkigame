/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', '959c13b.webp.li'],
    unoptimized: true,
    remotePatterns: []
  },
  async rewrites() {
    return [
      {
        source: '/scratch-proxy/:id',
        destination: '/api/scratch-proxy/:id'
      }
    ]
  },
  // Disable cache for development
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig