'use client'

import { TransitionProvider } from '@/lib/transition-context'
import IntroOverlay from './IntroOverlay'
import GlobalNav from './GlobalNav'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <IntroOverlay />
      <GlobalNav />
      {children}
    </TransitionProvider>
  )
}
