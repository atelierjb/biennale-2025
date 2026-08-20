// The accordion's DOM contract, shared by IndexSection (which owns the
// behaviour) and the language-switch restore (which needs to read and reproduce
// the open state without importing IndexSection internals).

export const ACCORDION_ITEM = '.index-accordion-item'
export const ACCORDION_TRIGGER = '.index-accordion-trigger'
export const ACCORDION_PANEL = '.index-accordion-panel'
export const ACCORDION_ICON = '.index-accordion-icon'

/** Trigger id of the open exhibitor, or null. The accordion is single-open. */
export function readOpenTriggerId(): string | null {
  const trigger = document.querySelector<HTMLElement>(
    `${ACCORDION_ITEM}[data-state="open"] ${ACCORDION_TRIGGER}`
  )
  return trigger?.id || null
}

/**
 * The mirror of IndexSection's `closeItem(_, item, jump = true)`: lands the item
 * in exactly the state `openItem`'s tween *ends* in, without touching GSAP — so
 * it is safe to call synchronously inside a layout effect, before paint.
 *
 * Removing `hidden` is what releases the `!important` block in globals.css;
 * `height: auto` then tracks the content on its own, which is why no
 * ResizeObserver is needed here (openItem settles at `auto` too).
 */
export function jumpOpenTrigger(triggerId: string): boolean {
  const trigger = document.getElementById(triggerId)
  const item = trigger?.closest<HTMLElement>(ACCORDION_ITEM)
  const panel = item?.querySelector<HTMLElement>(ACCORDION_PANEL)
  if (!trigger || !item || !panel) return false

  const icon = item.querySelector<HTMLElement>(ACCORDION_ICON)

  item.setAttribute('data-state', 'open')
  trigger.setAttribute('aria-expanded', 'true')
  panel.removeAttribute('hidden')
  panel.style.height = 'auto'
  panel.style.opacity = '1'
  panel.style.visibility = 'visible'
  if (icon) icon.style.transform = 'rotate(45deg)'

  return true
}
