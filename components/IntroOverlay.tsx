'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getSessionItem, setSessionItem } from '@/lib/safe-storage'
import { loadLottieData } from '@/lib/lottie'

// Module-level, so it survives the remount that a language switch causes.
// Without it the overlay renders for one frame on every switch — and since it is
// a full-screen white panel, that reads as the whole page flashing.
// Fresh per request on the server, so SSR and first hydration still agree.
let introDone = false

// Bumped to v5 when the composition out-point was corrected. Assets under
// /documents are served with a 1-year immutable cache and are not content-hashed,
// so any edit MUST come with a filename bump or returning visitors keep the old file.
const LOTTIE_SRC = '/documents/biennale-brown-logo-xl-v5.json'

// The composition holds a static pose for its first second and the logo build
// runs to frame 840. Playing [60, 840] at 4x lands at ~3.25s of actual motion.
const SEGMENT: [number, number] = [60, 840]
const SPEED = 4

/** Nothing may keep the splash up longer than this, whatever goes wrong. */
const HARD_TIMEOUT_MS = 6000

const FADE_MS = 400

export default function IntroOverlay() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => !introDone)

  // Decided before the browser paints, so a session that has already seen the
  // intro never shows even one frame of the white panel on reload.
  useLayoutEffect(() => {
    if (introDone || getSessionItem('intro-seen')) {
      introDone = true
      setVisible(false)
    }
  }, [])

  useEffect(() => {
    if (introDone) return

    let anim: ReturnType<typeof import('lottie-web').default.loadAnimation> | null = null
    let done = false
    let fadeTimer = 0

    const dismiss = () => {
      if (done) return
      done = true
      introDone = true
      const overlay = containerRef.current?.parentElement
      if (overlay) {
        overlay.style.transition = `opacity ${FADE_MS}ms ease`
        overlay.style.opacity = '0'
        fadeTimer = window.setTimeout(() => setVisible(false), FADE_MS + 20)
      } else {
        setVisible(false)
      }
    }

    // Independent of the animation entirely: covers a failed import, a 404 on
    // the JSON, a malformed file, or a 'complete' event that never fires.
    const hardTimeout = window.setTimeout(dismiss, HARD_TIMEOUT_MS)

    const run = async () => {
      // Recorded up front, not on completion — otherwise switching language
      // mid-intro replays the whole thing on the next page.
      setSessionItem('intro-seen', '1')

      const [mod, animationData] = await Promise.all([
        import('lottie-web'),
        loadLottieData(LOTTIE_SRC),
      ])
      if (!containerRef.current || done) return

      // loadAnimation appends; clear first so a double-invoked effect can't stack.
      containerRef.current.replaceChildren()

      anim = mod.default.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData,
        initialSegment: SEGMENT,
      })
      anim.setSpeed(SPEED)

      anim.addEventListener('complete', dismiss)
      anim.addEventListener('data_failed', dismiss)
      anim.addEventListener('error', dismiss)
    }

    run().catch(dismiss)

    return () => {
      window.clearTimeout(hardTimeout)
      window.clearTimeout(fadeTimer)
      anim?.destroy()
    }
  }, [])

  if (!visible) return null

  return (
    // White ground, not bg-bg: the logo in this file is filled #291E0F — the same
    // brown as the site background — so on bg-bg it renders completely invisible.
    <section
      className="intro-overlay fixed inset-0 z-[9999] bg-white flex items-center justify-center"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* aspect-ratio is required: lottie-web sets the svg to height:100%, which
          collapses to zero inside a height-less parent. */}
      <div ref={containerRef} className="w-[min(60vw,480px)] aspect-[3/2]" />
    </section>
  )
}
