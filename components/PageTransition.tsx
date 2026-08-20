'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePageTransition } from '@/lib/transition-context'
import { resolveScrollOffset, scrollToInstantly } from '@/lib/scroll-anchor'
import { jumpOpenTrigger } from '@/lib/accordion-dom'

type Props = {
  children: React.ReactNode
}

export default function PageTransition({ children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { register, consumeHandoff } = usePageTransition()

  // Restore the position handed over by LangLink, before paint.
  //
  // Both steps live here on purpose. Re-opening the accordion changes the height
  // of everything below it, so it has to happen before anchors are measured —
  // doing it in this one effect makes that ordering structural rather than a
  // race against IndexSection's (async, post-paint) setup effect.
  useLayoutEffect(() => {
    const handoff = consumeHandoff()
    if (!handoff) return // hard load or first mount: nothing to restore

    if (handoff.openTriggerId) jumpOpenTrigger(handoff.openTriggerId)

    // collectAnchors() reads getBoundingClientRect, which forces a synchronous
    // layout that already includes the re-opened panel.
    const target = resolveScrollOffset(handoff.anchor)
    if (Math.abs(window.scrollY - target) <= 1) return

    scrollToInstantly(target)
  }, [consumeHandoff])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let revealed = false
    const reveal = () => {
      revealed = true
      el.removeAttribute('data-transition')
    }

    // Fail open: if the GSAP chunk is slow or never arrives, show the content
    // anyway rather than leaving <main> permanently invisible.
    const failsafe = window.setTimeout(reveal, 1200)

    const unregister = register(async () => {
      try {
        const { gsap } = await import('gsap')
        await new Promise<void>(resolve => {
          gsap.to(el, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: resolve })
        })
      } catch {
        // A failed animation must never block navigation.
      }
    })

    import('gsap')
      .then(({ gsap }) => {
        window.clearTimeout(failsafe)
        if (revealed) return
        reveal()
        gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      })
      .catch(() => {
        window.clearTimeout(failsafe)
        reveal()
      })

    return () => {
      window.clearTimeout(failsafe)
      unregister()
    }
  }, [register])

  return (
    <main ref={ref} className="main w-full" data-transition="pending">
      {children}
    </main>
  )
}

