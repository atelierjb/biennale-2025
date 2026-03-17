'use client'

import { useEffect, useRef } from 'react'
import LangLink from './LangLink'

type Props = {
  homeHref: string
  langHref: string
  daImgSrc: string
  enImgSrc: string
}

export default function IconNav({ homeHref, langHref, daImgSrc, enImgSrc }: Props) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let ScrollTriggerCleanup: (() => void) | null = null

    const run = async () => {
      const { gsap, ScrollTrigger } = await import('@/lib/gsap').then(m => m.getGsap())

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

    return () => { ScrollTriggerCleanup?.() }
  }, [])

  return (
    <div ref={navRef} className="icon-nav fixed top-5 right-gutter z-[1001] flex flex-col items-center gap-4 max-nav:hidden">
      <a href={homeHref} className="flex items-center">
        <img src="/icons/home-icon.svg" loading="lazy" alt="return to biennalen.dk" className="w-8 h-auto" />
      </a>
      <LangLink href={langHref} className="flex flex-col items-center gap-1">
        <img src={daImgSrc} loading="lazy" alt="" className="w-8 h-auto" />
        <img src={enImgSrc} loading="lazy" alt="" className="w-8 h-auto" />
      </LangLink>
    </div>
  )
}
