import type { Metadata } from 'next'
import '../globals.css'
import { utileNarrow } from '@/lib/fonts'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'Biennalen for Kunsthåndværk & Design 2025',
  description:
    'Vi fejrer 30 år med Biennalen for Kunsthåndværk & Design. Jubilæumsudstillingen hylder både tradition og fornyelse.',
  openGraph: {
    title: 'Biennalen for Kunsthåndværk & Design 2025',
    description:
      'Vi fejrer 30 år med Biennalen for Kunsthåndværk & Design. Jubilæumsudstillingen hylder både tradition og fornyelse.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biennalen for Kunsthåndværk & Design 2025',
    description:
      'Vi fejrer 30 år med Biennalen for Kunsthåndværk & Design. Jubilæumsudstillingen hylder både tradition og fornyelse.',
  },
}

export default function DaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={`${utileNarrow.variable} bg-bg text-white font-sans antialiased`}>
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
