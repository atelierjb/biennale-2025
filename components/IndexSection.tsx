'use client'

import { useEffect, useRef } from 'react'
import type { Exhibitor } from '@/lib/exhibitors/types'
import AccordionItem from './AccordionItem'
import type { SliderLabels } from './ImageSlider'

type Props = {
  exhibitors: Exhibitor[]
  sliderLabels: SliderLabels
}

type Gsap = typeof import('gsap').gsap

function measureInnerHeight(panel: HTMLElement, inner: HTMLElement) {
  panel.removeAttribute('hidden')
  // Force reflow so Safari computes layout before scrollHeight
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  panel.offsetWidth
  return inner.scrollHeight || inner.offsetHeight || 0
}

function attachResizeObserver(gsap: Gsap, panel: HTMLElement, inner: HTMLElement, item: HTMLElement) {
  const p = panel as HTMLElement & { _ro?: ResizeObserver }
  if (p._ro) return
  p._ro = new ResizeObserver(() => {
    if (item.getAttribute('data-state') !== 'open') return
    const newH = inner.scrollHeight || 0
    const curH = parseFloat(getComputedStyle(panel).height) || 0
    if (Math.abs(newH - curH) > 1) {
      gsap.to(panel, {
        height: newH, duration: 0.2, ease: 'power1.out',
        onComplete() { panel.style.height = 'auto' },
      })
    }
  })
  p._ro.observe(inner)
}

function openItem(gsap: Gsap, item: HTMLElement) {
  const panel = item.querySelector<HTMLElement>('.index-accordion-panel')!
  const inner = item.querySelector<HTMLElement>('.index-accordion-panel__inner')!
  const trigger = item.querySelector<HTMLElement>('.index-accordion-trigger')!
  const icon = item.querySelector<HTMLElement>('.index-accordion-icon')

  item.setAttribute('data-state', 'open')
  trigger.setAttribute('aria-expanded', 'true')

  const h = measureInnerHeight(panel, inner)
  gsap.fromTo(panel,
    { height: 0, autoAlpha: 0 },
    {
      height: h, autoAlpha: 1, duration: 0.35, ease: 'power2.out',
      onComplete() { panel.style.height = 'auto' },
    }
  )
  if (icon) gsap.to(icon, { rotate: 45, duration: 0.25, ease: 'power2.out' })

  attachResizeObserver(gsap, panel, inner, item)

  // Re-measure when any image finishes loading
  panel.querySelectorAll<HTMLImageElement>('img').forEach(img => {
    img.addEventListener('load', () => {
      if (item.getAttribute('data-state') !== 'open') return
      const nh = inner.scrollHeight || 0
      gsap.to(panel, {
        height: nh, duration: 0.2, ease: 'power1.out',
        onComplete() { panel.style.height = 'auto' },
      })
    }, { once: true, passive: true })
  })
}

function closeItem(gsap: Gsap | null, item: HTMLElement, jump = false) {
  const panel = item.querySelector<HTMLElement>('.index-accordion-panel')!
  const trigger = item.querySelector<HTMLElement>('.index-accordion-trigger')!
  const icon = item.querySelector<HTMLElement>('.index-accordion-icon')

  item.setAttribute('data-state', 'closed')
  trigger.setAttribute('aria-expanded', 'false')

  if (jump) {
    panel.style.height = '0px'
    panel.style.opacity = '0'
    panel.setAttribute('hidden', '')
    if (icon) (icon as HTMLElement).style.transform = 'rotate(0deg)'
    return
  }

  const curH = parseFloat(getComputedStyle(panel).height) || 0
  gsap!.fromTo(panel,
    { height: curH, autoAlpha: 1 },
    {
      height: 0, autoAlpha: 0, duration: 0.3, ease: 'power2.in',
      onComplete() { panel.setAttribute('hidden', '') },
    }
  )
  if (icon) gsap!.to(icon, { rotate: 0, duration: 0.25, ease: 'power2.in' })
}

function toggleItem(gsap: Gsap, item: HTMLElement, mode: string, all: HTMLElement[]) {
  const isOpen = item.getAttribute('data-state') === 'open'
  if (isOpen) {
    closeItem(gsap, item)
  } else {
    if (mode === 'single') {
      all.forEach(it => { if (it !== item && it.getAttribute('data-state') === 'open') closeItem(gsap, it) })
    }
    openItem(gsap, item)
  }
}

export default function IndexSection({ exhibitors, sliderLabels }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return

    const cleanups: (() => void)[] = []
    // `cleanups` is only filled after the dynamic import resolves, so without
    // this flag the cleanup runs against an empty array and removes nothing —
    // and the in-flight run still attaches. React's dev double-invoke then
    // leaves two click listeners per trigger, so every click toggles twice.
    let cancelled = false

    const run = async () => {
      const { gsap } = await import('gsap')
      if (cancelled) return

      const accordions = gsap.utils.toArray<HTMLElement>('.index-accordion', root)
      accordions.forEach(acc => {
        const mode = acc.getAttribute('data-accordion') || 'single'
        const items = gsap.utils.toArray<HTMLElement>('.index-accordion-item', acc)

        items.forEach(item => {
          const trigger = item.querySelector<HTMLElement>('.index-accordion-trigger')
          const panel = item.querySelector<HTMLElement>('.index-accordion-panel')
          const inner = item.querySelector<HTMLElement>('.index-accordion-panel__inner')
          if (!trigger || !panel || !inner) return

          // Start closed — unless the language-switch restore already
          // jump-opened this one. That runs in a layout effect, i.e. before this
          // effect's `await import('gsap')` resolves, so the state is already
          // in the DOM by the time we get here.
          if (item.getAttribute('data-state') !== 'open') closeItem(null, item, true)

          const onClick = (e: Event) => {
            if (trigger.tagName === 'A') e.preventDefault()
            toggleItem(gsap, item, mode, items)
          }
          const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleItem(gsap, item, mode, items) }
          }

          trigger.addEventListener('click', onClick)
          trigger.addEventListener('keydown', onKeyDown as EventListener)
          cleanups.push(() => {
            trigger.removeEventListener('click', onClick)
            trigger.removeEventListener('keydown', onKeyDown as EventListener)
          })
        })
      })
    }

    run()
    return () => {
      cancelled = true
      cleanups.forEach(c => c())
    }
  }, [])

  return (
    <section id="index" className="pb-16 mb-24 px-gutter mx-auto md:pl-[21vw] md:pr-[14vw]" ref={sectionRef}>
      <div data-accordion="single" className="index-accordion border-b border-white">
        {/* Ids are derived from the exhibitor id, not useId(): useId encodes the
            component's position in the React tree, so its output shifts whenever
            anything above this component changes — which surfaces as a hydration
            mismatch. The exhibitor id is already stable and unique per page. */}
        {exhibitors.map(ex => (
          <AccordionItem
            key={ex.id}
            exhibitor={ex}
            sliderLabels={sliderLabels}
            triggerId={`exhibitor-${ex.id}-trigger`}
            panelId={`exhibitor-${ex.id}-panel`}
          />
        ))}
      </div>
    </section>
  )
}
