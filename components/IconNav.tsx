'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import LangLink from './LangLink'

type Props = {
  homeHref: string
  langHref: string
  langSwitchLabel: string
  /** Current language on top, target language below — not DA/EN specifically. */
  iconTopSrc: string
  iconBottomSrc: string
}

export default function IconNav({
  homeHref,
  langHref,
  langSwitchLabel,
  iconTopSrc,
  iconBottomSrc,
}: Props) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let ScrollTriggerCleanup: (() => void) | null = null
    // Assigned only after the import resolves; without this the cleanup fires
    // against a null and the ScrollTrigger leaks, leaving stale triggers bound
    // to a #hero element that no longer exists after a remount.
    let cancelled = false

    const run = async () => {
      const { ScrollTrigger } = await import('@/lib/gsap').then(m => m.getGsap())
      if (cancelled) return

      // Show icon-nav after scrolling past the hero section
      const st = ScrollTrigger.create({
        trigger: '#hero',
        start: 'bottom top',
        onEnter: () => nav.classList.add('is-on'),
        onLeaveBack: () => nav.classList.remove('is-on'),
      })

      ScrollTriggerCleanup = () => st.kill()
    }

    run()

    return () => {
      cancelled = true
      ScrollTriggerCleanup?.()
    }
  }, [])

  return (
    <div ref={navRef} className="icon-nav fixed top-5 right-gutter z-[1001] flex flex-col items-center gap-4 max-nav:hidden">
      <a href={homeHref} className="flex items-center">
        <Image src="/icons/home-icon.svg" alt="return to biennalen.dk" width={32} height={32} className="w-8 h-auto" />
      </a>
      {/* Both icons are decorative; the link itself carries the accessible name. */}
      <LangLink href={langHref} aria-label={langSwitchLabel} className="flex flex-col items-center gap-1">
        <Image src={iconTopSrc} alt="" width={32} height={32} className="w-8 h-auto" />
        <Image src={iconBottomSrc} alt="" width={32} height={32} className="w-8 h-auto" />
      </LangLink>
    </div>
  )
}
