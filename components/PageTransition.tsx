'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePageTransition } from '@/lib/transition-context'

type Props = {
  children: React.ReactNode
}

export default function PageTransition({ children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { register } = usePageTransition()

  // Runs synchronously before the browser paints — scroll position is correct
  // on the very first frame, so the user never sees the page at the top.
  useLayoutEffect(() => {
    const savedY = sessionStorage.getItem('lang-switch-scrollY')
    if (savedY !== null) {
      sessionStorage.removeItem('lang-switch-scrollY')
      // Temporarily override `scroll-behavior: smooth` so the restoration
      // is instantaneous — the inline style wins the cascade, and since
      // scrollTo() is synchronous the override can be removed immediately after.
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, parseInt(savedY, 10))
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    register(async () => {
      const { gsap } = await import('gsap')
      await new Promise<void>(resolve => {
        gsap.to(el, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: resolve })
      })
    })

    import('gsap').then(({ gsap }) => {
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    })
  }, [register])

  return (
    <main ref={ref} className="main w-full" style={{ opacity: 0 }}>
      {children}
    </main>
  )
}
