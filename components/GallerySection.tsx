'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { GalleryImage } from '@/lib/gallery-images'

type Props = {
  title: string
  images: GalleryImage[]
}

export default function GallerySection({ title, images }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const track = trackRef.current
    if (!root || !track) return

    let draggable: { kill: () => void } | null = null
    let killed = false
    let cleanupListeners: (() => void) | null = null

    const build = async () => {
      const { gsap, Draggable } = await import('@/lib/gsap').then(m => m.getGsap())
      if (killed) return

      // Prevent native image drag without waiting for decode (img.decode() hangs
      // in Chrome/Safari for off-screen lazy images, blocking the whole setup)
      Array.from(track.querySelectorAll('img')).forEach(img => img.setAttribute('draggable', 'false'))

      // One rAF so the browser has committed layout before we measure
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
      if (killed) return

      const viewport = root.querySelector<HTMLElement>('.index-gallery-viewport') ?? root
      const slides = Array.from(track.children) as HTMLElement[]
      if (!slides.length) return

      const cs = getComputedStyle(track)
      const GAP = parseFloat(cs.columnGap || cs.gap || '0') || 0

      const widths = slides.map(el => el.getBoundingClientRect().width || el.offsetWidth || 0)
      const lefts = widths.map((_, i) => widths.slice(0, i).reduce((a, b) => a + b, 0) + i * GAP)
      const centers = widths.map((w, i) => lefts[i] + w / 2)
      const totalW = widths.reduce((a, b) => a + b, 0) + GAP * Math.max(0, slides.length - 1)
      const vpW = viewport.getBoundingClientRect().width || viewport.offsetWidth || 0
      const vpCx = vpW / 2

      const maxX = vpCx - centers[0]
      const minX = vpCx - centers[slides.length - 1]
      const canScroll = totalW > vpW + 1 && maxX - minX > 1

      const startX = canScroll ? Math.min(maxX, Math.max(minX, vpCx - centers[0])) : 0
      gsap.set(track, { x: startX })

      const [drag] = Draggable.create(track, {
        type: 'x',
        inertia: true,
        bounds: canScroll ? { minX, maxX } : { minX: 0, maxX: 0 },
        edgeResistance: 0.15,
        zIndexBoost: false,
        minimumMovement: 3,
        onPress(e: PointerEvent) {
          if ((e.target as HTMLElement)?.tagName === 'IMG') e.preventDefault()
        },
        onDragStart() { track.classList.add('is-dragging') },
        onDragEnd() { track.classList.remove('is-dragging') },
      })
      draggable = drag

      // Horizontal wheel / trackpad
      const onWheel = (e: WheelEvent) => {
        if (!canScroll) return
        const absX = Math.abs(e.deltaX), absY = Math.abs(e.deltaY)
        if (!(absX > absY * 1.2 && absX > 2)) return
        e.preventDefault()
        const curX = (parseFloat(String(gsap.getProperty(track, 'x'))) || 0)
        const nextX = Math.min(maxX, Math.max(minX, curX - e.deltaX))
        gsap.to(track, { x: nextX, duration: 0.12, ease: 'power1.out' })
      }
      root.addEventListener('wheel', onWheel, { passive: false })

      // rebuild on resize
      const onResize = () => {
        draggable?.kill()
        gsap.set(track, { clearProps: 'x' })
        build()
      }
      const raf = { id: 0 }
      const debouncedResize = () => {
        cancelAnimationFrame(raf.id)
        raf.id = requestAnimationFrame(onResize)
      }
      window.addEventListener('resize', debouncedResize)

      cleanupListeners = () => {
        root.removeEventListener('wheel', onWheel)
        window.removeEventListener('resize', debouncedResize)
      }
    }

    build()

    return () => {
      killed = true
      draggable?.kill()
      cleanupListeners?.()
    }
  }, [])

  return (
    <section id="gallery" className="overflow-x-hidden pb-16 mb-24">
      <div className="text-2xl/[1] tracking-[-0.005em] px-gutter mb-8 nav:pl-[320px] sm:hidden">{title}</div>

      <div
        ref={rootRef}
        data-start="1"
        tabIndex={0}
        className="index-gallery relative overscroll-x-contain outline-none focus-visible:outline focus-visible:outline-[rgba(255,255,255,.35)] focus-visible:outline-offset-1"
      >
        <div className="index-gallery-viewport overflow-hidden w-full touch-pan-y">
          <div ref={trackRef} className="index-gallery-track flex items-end gap-[var(--gap)] will-change-transform cursor-grab relative z-[1] touch-none">
            {images.map((img, i) => (
              <div key={i} className="index-slide flex-none flex flex-col min-w-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  sizes={img.sizes}
                  width={img.isPortrait ? 550 : 1020}
                  height={img.isPortrait ? 825 : 680}
                  priority={i === 0}
                  className="index-slide-img block object-cover"
                  style={{ height: 'var(--rowH)', width: 'auto', maxWidth: 'unset' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
