'use client'

import { usePathname } from 'next/navigation'
import NavWrapper from './NavWrapper'
import IconNav from './IconNav'
import StackedNav from './StackedNav'

export default function GlobalNav() {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  const langHref     = isEn ? '/' : '/en'
  const langImgSrc   = isEn ? '/icons/da-outlined.svg' : '/icons/eng-outlined.svg'
  const langImgAlt   = isEn ? 'Dansk' : 'English'
  const daImgSrc     = isEn ? '/icons/eng-filled.svg' : '/icons/da-filled.svg'
  const enImgSrc     = isEn ? '/icons/da-outlined.svg' : '/icons/eng-outlined.svg'
  const stackedLabels = isEn
    ? { intro: 'introduction', gallery: 'gallery', index: 'exhibitors 2025', colophon: 'colophon' }
    : { intro: 'introduktion', gallery: 'galleri', index: 'udstillere 2025', colophon: 'kolofon' }

  return (
    <>
      <NavWrapper
        homeHref="https://biennalen.dk"
        langHref={langHref}
        langImgSrc={langImgSrc}
        langImgAlt={langImgAlt}
        lottieSrc="/documents/biennale-white-logo-sm.json"
      />
      <IconNav
        key={pathname}
        homeHref="https://biennalen.dk"
        langHref={langHref}
        daImgSrc={daImgSrc}
        enImgSrc={enImgSrc}
      />
      <StackedNav key={pathname + '-nav'} labels={stackedLabels} />
    </>
  )
}
