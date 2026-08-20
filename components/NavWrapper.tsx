'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import LangLink from './LangLink'
import { loadLottieData } from '@/lib/lottie'

// The nav logo loops forever, and its host subtree remounts on every language
// switch. Carrying the playhead across remounts makes the swap look continuous
// instead of snapping back to frame 0.
let lastFrame = 0

type Props = {
  homeHref: string
  langHref: string
  langSwitchLabel: string
  langImgSrc: string
  lottieSrc: string
}

export default function NavWrapper({ homeHref, langHref, langSwitchLabel, langImgSrc, lottieSrc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let anim: ReturnType<typeof import('lottie-web').default.loadAnimation> | null = null
    // `anim` is only assigned after two awaits, so without this flag the cleanup
    // runs while it is still null, destroys nothing, and the in-flight load
    // appends a second <svg> to the same container — two logos.
    let cancelled = false

    const run = async () => {
      const [mod, animationData] = await Promise.all([
        import('lottie-web'),
        loadLottieData(lottieSrc),
      ])
      if (cancelled) return

      // loadAnimation appends rather than replaces.
      container.replaceChildren()

      anim = mod.default.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData,
      })
      anim.goToAndPlay(lastFrame, true)
      anim.addEventListener('enterFrame', () => {
        if (anim) lastFrame = anim.currentFrame
      })
    }

    run().catch(() => { /* a missing logo must not break the nav */ })

    return () => {
      cancelled = true
      anim?.destroy()
      container.replaceChildren()
    }
  }, [lottieSrc])

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex items-start justify-between px-5 py-4 pointer-events-none max-sm:bg-gradient-to-b from-[#291e0f] to-transparent">
      <a href={homeHref} className="inline-flex items-center pointer-events-auto nav:hidden mt-[2vw]">
        <Image src="/icons/home-icon.svg" alt="return to biennalen.dk" width={28} height={28} className="w-7 h-auto" />
      </a>

      <a href="#hero" className="pointer-events-auto">
        <div ref={containerRef} className="w-30 sm:w-36 aspect-[145/105] block shrink-0" />
      </a>

      {/* The icon is decorative — the action's name belongs on the link. */}
      <LangLink href={langHref} aria-label={langSwitchLabel} className="pointer-events-auto nav:hidden mt-[2vw]">
        <Image src={langImgSrc} alt="" width={28} height={28} className="w-7 h-auto" />
      </LangLink>
    </div>
  )
}
