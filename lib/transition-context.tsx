'use client'

import { createContext, useContext, useRef, useCallback } from 'react'
import type { ScrollAnchor } from './scroll-anchor'

export type ScrollHandoff = {
  /** Where the reader was, expressed against a landmark rather than in pixels. */
  anchor: ScrollAnchor
  /** Trigger id of the exhibitor open at the time of the switch, if any. */
  openTriggerId: string | null
}

// Module scope, NOT a ref on the provider. The root layout lives inside the
// [[...lang]] segment, whose React key contains the language param, so the whole
// subtree — this provider included — unmounts and remounts on a switch and any
// provider-scoped state is lost. (An earlier useRef version silently never
// restored anything; scroll only looked preserved because the browser keeps the
// offset across a same-task DOM swap.) Same reason IntroOverlay keeps
// `introDone` at module scope.
let pendingHandoff: ScrollHandoff | null = null

type Ctx = {
  /** Registers the outgoing-page fade. Returns an unregister for cleanup. */
  register: (fn: () => Promise<void>) => () => void
  /** Runs the registered fade. Never rejects and never hangs. */
  trigger: () => Promise<void>
  /** Stashes the anchored position to hand over to the incoming page. */
  saveHandoff: (handoff: ScrollHandoff) => void
  /** Reads and clears it. Returns null if there was none. */
  consumeHandoff: () => ScrollHandoff | null
}

const noop = () => {}

const TransitionCtx = createContext<Ctx>({
  register: () => noop,
  trigger: () => Promise.resolve(),
  saveHandoff: noop,
  consumeHandoff: () => null,
})

/** Hard ceiling on the outgoing fade so navigation can't be blocked by it. */
const FADE_TIMEOUT_MS = 600

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const fnRef = useRef<(() => Promise<void>) | null>(null)

  const register = useCallback((fn: () => Promise<void>) => {
    fnRef.current = fn
    // Only clear if this exact fn is still the registered one, so a remount
    // that registers before the old page unmounts can't be clobbered.
    return () => {
      if (fnRef.current === fn) fnRef.current = null
    }
  }, [])

  const trigger = useCallback(async () => {
    const fn = fnRef.current
    if (!fn) return
    try {
      await Promise.race([
        fn(),
        new Promise<void>(resolve => setTimeout(resolve, FADE_TIMEOUT_MS)),
      ])
    } catch {
      // A broken animation must not prevent the navigation from happening.
    }
  }, [])

  const saveHandoff = useCallback((handoff: ScrollHandoff) => {
    pendingHandoff = handoff
  }, [])

  const consumeHandoff = useCallback(() => {
    const handoff = pendingHandoff
    pendingHandoff = null
    return handoff
  }, [])

  return (
    <TransitionCtx.Provider value={{ register, trigger, saveHandoff, consumeHandoff }}>
      {children}
    </TransitionCtx.Provider>
  )
}

export const usePageTransition = () => useContext(TransitionCtx)
