/** Canonical origin. No trailing slash — callers append their own path. */
export const SITE_URL = 'https://biennalen-2025.vercel.app'

/** Where the logo in the nav links back to. */
export const HOME_HREF = 'https://biennalen.dk'

/** Identical in both languages, so it lives outside the copy dictionary. */
export const BADGE = {
  src: '/images/30-years-white.svg',
  alt: '30 years anniversary mark',
}

export const NOMINEES = 'Emilie Palle Holm, Lone Løvschal & Lotte Westphael.'
export const WINNER = 'Lone Løvschal'

export const PARTNER_LOGOS = [
  { src: '/images/kd-logo.png',      href: 'https://dkod.dk/',          alt: 'KD partner logo', sizes: '(max-width: 955px) 100vw, 955px' },
  { src: '/images/glas-logo.png',    href: 'https://www.glaskunst.dk/', alt: 'Glas partner logo', sizes: '(max-width: 667px) 100vw, 667px' },
  { src: '/images/ukurant-logo.png', href: 'https://ukurant.com/',      alt: 'Ukurant partner logo', sizes: '(max-width: 605px) 100vw, 605px' },
]
