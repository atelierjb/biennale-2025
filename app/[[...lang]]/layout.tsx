import type { Metadata } from 'next'
import '../globals.css'
import { utileNarrow } from '@/lib/fonts'
import ClientProviders from '@/components/ClientProviders'
import { resolveLang, DEFAULT_LANG } from '@/lib/i18n'
import { getCopy } from '@/lib/copy'

type Props = {
  children: React.ReactNode
  params: Promise<{ lang?: string[] }>
}

// `/` and `/en` are the only two pages. Returning `{ lang: [] }` (not `{}`)
// is required — Next throws E618 if the key is absent from the object.
export function generateStaticParams() {
  return [{ lang: [] }, { lang: ['en'] }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description } = getCopy(resolveLang((await params).lang) ?? DEFAULT_LANG).meta

  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function RootLayout({ children, params }: Props) {
  const lang = resolveLang((await params).lang) ?? DEFAULT_LANG
  const copy = getCopy(lang)

  return (
    <html lang={lang} className={`${utileNarrow.variable} bg-bg text-white font-sans antialiased`}>
      <head>
        <link rel="preload" as="image" href="/images/hero-image-1-v2.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/eye-shape.svg" type="image/svg+xml" />
        {/* Without JS nothing can reveal <main> or dismiss the intro splash,
            so make both unconditionally visible/absent instead. */}
        <noscript>
          <style>{'.main{opacity:1!important}.intro-overlay{display:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <ClientProviders
          lang={lang}
          navLabels={copy.nav}
          langSwitchLabel={copy.langSwitch.linkLabel}
        >
          {children}
        </ClientProviders>
        <div className="fixed bottom-0 left-0 right-0 z-[1000] pointer-events-none bg-gradient-to-t from-[#291e0f] to-transparent sm:hidden h-[10vh]"></div>
      </body>
    </html>
  )
}
