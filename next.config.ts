import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['gsap'],
  },
  async headers() {
    // Never in development. `headers()` runs in dev too, but dev chunks are not
    // content-hashed the way production ones are — Turbopack reuses the same
    // filename as a module's contents change. Serving those as `immutable` makes
    // the browser cache stale JavaScript for a year and ignore reloads, which
    // surfaces as impossible errors: symbols that no longer exist in the source,
    // or hydration mismatches between fresh HTML and a cached bundle.
    if (process.env.NODE_ENV !== 'production') return []

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
