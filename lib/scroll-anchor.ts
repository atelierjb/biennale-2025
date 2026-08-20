// Scroll restoration across a language switch.
//
// A raw pixel offset is meaningless between the two languages: #intro is ~422px
// taller in English, so everything below it is shifted by that constant. Instead
// we record *which landmark* the viewport sat against and how far into the span
// after it, then reproduce that against the same landmark in the incoming layout.
//
// #hero, #gallery and the closed #index rows are identical heights in both
// languages, so the remap is exact there. Inside #intro it maps proportionally,
// which is the best available approximation for the same prose at a different
// length.

/** Section ids rendered identically by both languages. */
const SECTION_IDS = ['hero', 'intro', 'gallery', 'index', 'colophon'] as const

/** Tops closer than this count as the same position — #index and
 *  #exhibitor-1-trigger genuinely share one. */
const EPSILON = 1

export type AnchorPoint = {
  id: string
  top: number
}

export type ScrollAnchor = {
  /** null when the offset sat above every anchor. */
  anchorId: string | null
  /** 0–1 within the span from this anchor to the next distinct one. */
  fraction: number
  /** Fallback, used only if the anchor id is absent from the incoming layout. */
  rawY: number
}

export const absoluteTop = (el: Element): number =>
  el.getBoundingClientRect().top + window.scrollY

/**
 * Collected fresh on every call — the whole point is that the two layouts
 * differ, so a cached list would defeat the exercise.
 */
export function collectAnchors(): AnchorPoint[] {
  const points: AnchorPoint[] = []

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (el) points.push({ id, top: absoluteTop(el) })
  }

  document.querySelectorAll<HTMLElement>('.index-accordion-trigger').forEach(trigger => {
    if (trigger.id) points.push({ id: trigger.id, top: absoluteTop(trigger) })
  })

  return points.sort((a, b) => a.top - b.top)
}

/** End of the span starting at `index`: the next strictly greater top, else the document end. */
export function spanEnd(anchors: AnchorPoint[], index: number, documentEnd: number): number {
  const { top } = anchors[index]
  for (let i = index + 1; i < anchors.length; i++) {
    if (anchors[i].top > top + EPSILON) return anchors[i].top
  }
  return documentEnd
}

/** Pure: which anchor does `y` sit against, and how far into its span. */
export function anchorFromOffset(
  anchors: AnchorPoint[],
  y: number,
  documentEnd: number
): ScrollAnchor {
  let index = -1
  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].top <= y + EPSILON) index = i
    else break // sorted, so nothing later can match
  }

  if (index === -1) return { anchorId: null, fraction: 0, rawY: y }

  const { top } = anchors[index]
  const span = spanEnd(anchors, index, documentEnd) - top
  const fraction = span > EPSILON ? (y - top) / span : 0

  return {
    anchorId: anchors[index].id,
    fraction: Math.min(1, Math.max(0, fraction)),
    rawY: y,
  }
}

/** Pure: where that anchor lands in this layout. null = the anchor is gone. */
export function offsetFromAnchor(
  anchors: AnchorPoint[],
  anchor: ScrollAnchor,
  documentEnd: number
): number | null {
  if (anchor.anchorId === null) return anchor.rawY

  const index = anchors.findIndex(a => a.id === anchor.anchorId)
  if (index === -1) return null

  const { top } = anchors[index]
  return top + anchor.fraction * (spanEnd(anchors, index, documentEnd) - top)
}

const documentEnd = () => document.documentElement.scrollHeight

export const captureScrollAnchor = (): ScrollAnchor =>
  anchorFromOffset(collectAnchors(), window.scrollY, documentEnd())

export function clampScrollOffset(y: number): number {
  const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  return Math.min(Math.max(0, y), max)
}

/** Must run *after* any layout-changing restore step, e.g. re-opening an accordion. */
export const resolveScrollOffset = (anchor: ScrollAnchor): number =>
  clampScrollOffset(offsetFromAnchor(collectAnchors(), anchor, documentEnd()) ?? anchor.rawY)

/**
 * Beats `html { scroll-behavior: smooth }`.
 *
 * `behavior: 'instant'` on the call itself is what actually guarantees this —
 * toggling the inline style around a bare `scrollTo(x, y)` is not reliable
 * (observed in Chrome: the scroll still animated over ~1s, because the computed
 * value is read when the scroll is performed, not when the call is made). The
 * inline override is kept as belt-and-braces for engines without 'instant'.
 */
export function scrollToInstantly(y: number): void {
  document.documentElement.style.scrollBehavior = 'auto'
  window.scrollTo({ top: y, left: 0, behavior: 'instant' })
  document.documentElement.style.scrollBehavior = ''
}
