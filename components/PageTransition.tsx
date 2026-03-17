'use client'

import { useEffect, useRef } from 'react'
import { usePageTransition } from '@/lib/transition-context'

type Props = {
  children: React.ReactNode
}

export default function PageTransition({ children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { register } = usePageTransition()

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
