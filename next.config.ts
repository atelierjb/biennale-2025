import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['gsap'],
  },
  async headers() {
    return [
      {
        // Immutable cache for content-hashed Next.js static assets
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Long cache for public images, fonts, documents
        source: '/:path(images|fonts|documents|icons)/:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, stale-while-revalidate=86400' },
        ],
      },
    ]
  },
}

export default nextConfig
