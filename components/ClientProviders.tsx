'use client'

import { TransitionProvider } from '@/lib/transition-context'
import IntroOverlay from './IntroOverlay'
import GlobalNav from './GlobalNav'
import type { Lang } from '@/lib/i18n'
import type { NavId } from '@/lib/copy'

type Props = {
  lang: Lang
  // Resolved strings rather than the whole dictionary, so only the active
  // language's copy is serialised into the client bundle.
  navLabels: Record<NavId, string>
  langSwitchLabel: string
  children: React.ReactNode
}

export default function ClientProviders({ lang, navLabels, langSwitchLabel, children }: Props) {
  return (
    <TransitionProvider>
      <IntroOverlay />
      <GlobalNav lang={lang} navLabels={navLabels} langSwitchLabel={langSwitchLabel} />
      {children}
    </TransitionProvider>
  )
}
