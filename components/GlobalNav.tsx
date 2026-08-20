'use client'

import NavWrapper from './NavWrapper'
import IconNav from './IconNav'
import StackedNav from './StackedNav'
import { langHref, otherLang, type Lang } from '@/lib/i18n'
import type { NavId } from '@/lib/copy'
import { HOME_HREF } from '@/lib/constants'

type Props = {
  lang: Lang
  navLabels: Record<NavId, string>
  langSwitchLabel: string
}

/**
 * `lang` arrives as a prop from the layout rather than being parsed out of
 * usePathname(). The icons are ordered current-language-first; both are
 * decorative, so the accessible name lives on the link itself.
 */
export default function GlobalNav({ lang, navLabels, langSwitchLabel }: Props) {
  const target = otherLang(lang)
  const href = langHref(target)

  const iconTopSrc = lang === 'en' ? '/icons/eng-filled.svg' : '/icons/da-filled.svg'
  const iconBottomSrc = lang === 'en' ? '/icons/da-outlined.svg' : '/icons/eng-outlined.svg'

  return (
    <>
      <NavWrapper
        homeHref={HOME_HREF}
        langHref={href}
        langSwitchLabel={langSwitchLabel}
        langImgSrc={iconBottomSrc}
        lottieSrc="/documents/biennale-white-logo-sm.json"
      />
      {/* Keyed on lang: both components cache DOM refs and register listeners in
          mount-only effects, so they must rebuild when the page swaps. */}
      <IconNav
        key={lang}
        homeHref={HOME_HREF}
        langHref={href}
        langSwitchLabel={langSwitchLabel}
        iconTopSrc={iconTopSrc}
        iconBottomSrc={iconBottomSrc}
      />
      <StackedNav key={`${lang}-nav`} labels={navLabels} />
    </>
  )
}
