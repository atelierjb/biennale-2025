'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import LangLink from './LangLink'

type Props = {
  homeHref: string
  langHref: string
  langImgSrc: string
  langImgAlt: string
  lottieSrc: string
}

export default function NavWrapper({ homeHref, langHref, langImgSrc, langImgAlt, lottieSrc }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    let anim: ReturnType<typeof import('lottie-web').default.loadAnimation> | null = null

    const run = async () => {
      const mod = await import('lottie-web')
      if (!containerRef.current) return
      const animData = await fetch(lottieSrc).then(r => r.json())
      anim = mod.default.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animData,
      })
    }

    run()
    return () => { anim?.destroy() }
  }, [lottieSrc])

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] flex items-start justify-between px-5 py-4 pointer-events-none max-sm:bg-gradient-to-b from-[#291e0f] to-transparent">
      <a href={homeHref} className="inline-flex items-center pointer-events-auto nav:hidden mt-[2vw]">
        <Image src="/icons/home-icon.svg" alt="return to biennalen.dk" width={28} height={28} className="w-7 h-auto" />
      </a>

      <a href="#hero" className="pointer-events-auto">
        <div ref={containerRef} className="w-30 sm:w-36 aspect-[145/105] block shrink-0" />
      </a>

      <LangLink href={langHref} className="pointer-events-auto nav:hidden mt-[2vw]">
        <Image src={langImgSrc} alt={langImgAlt} width={28} height={28} className="w-7 h-auto" />
      </LangLink>
    </div>
  )
}
