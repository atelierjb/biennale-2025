import type { Metadata } from 'next'
import '../globals.css'
import { utileNarrow } from '@/lib/fonts'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'The Biennale for Craft & Design 2025',
  description:
    'We celebrate 30 years of the Biennale for Craft & Design. The anniversary exhibition honours both tradition and renewal.',
  openGraph: {
    title: 'The Biennale for Craft & Design 2025',
    description:
      'We celebrate 30 years of the Biennale for Craft & Design. The anniversary exhibition honours both tradition and renewal.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Biennale for Craft & Design 2025',
    description:
      'We celebrate 30 years of the Biennale for Craft & Design. The anniversary exhibition honours both tradition and renewal.',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${utileNarrow.variable} bg-bg text-white font-sans antialiased`}>
      <head>
        <link rel="preload" as="image" href="/images/hero-image-1-v2.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/eye-shape.svg" type="image/svg+xml" />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
        <div className="fixed bottom-0 left-0 right-0 z-[1000] pointer-events-none bg-gradient-to-t from-[#291e0f] to-transparent sm:hidden h-[10vh]"></div>
      </body>
    </html>
  )
}
