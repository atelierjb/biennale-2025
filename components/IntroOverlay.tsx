'use client'

import { useEffect, useRef, useState } from 'react'

export default function IntroOverlay() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Skip intro on subsequent visits (e.g. language switching)
    if (sessionStorage.getItem('intro-seen')) {
      setVisible(false)
      return
    }

    let anim: ReturnType<typeof import('lottie-web').default.loadAnimation> | null = null

    const run = async () => {
      const mod = await import('lottie-web')
      if (!containerRef.current) return

      const animData = await fetch('/documents/biennale-brown-logo-xl-v4.json').then(r => r.json())

      anim = mod.default.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animData,
      })

      anim.addEventListener('complete', () => {
        sessionStorage.setItem('intro-seen', '1')
        if (containerRef.current) {
          containerRef.current.parentElement!.style.transition = 'opacity .4s ease'
          containerRef.current.parentElement!.style.opacity = '0'
          setTimeout(() => setVisible(false), 420)
        }
      })
    }

    run()

    return () => { anim?.destroy() }
  }, [])

  if (!visible) return null

  return (
    <section
      className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <div ref={containerRef} className="w-[min(60vw,480px)]" />
    </section>
  )
}
