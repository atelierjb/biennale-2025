import localFont from 'next/font/local'

export const utileNarrow = localFont({
  src: [
    { path: '../public/fonts/Utile-NarrowBold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/Utile-NarrowSemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-utile-narrow',
  display: 'swap',
})
