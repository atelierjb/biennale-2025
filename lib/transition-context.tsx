'use client'

import { createContext, useContext, useRef, useCallback } from 'react'

type Ctx = {
  register: (fn: () => Promise<void>) => void
  trigger: () => Promise<void>
}

const TransitionCtx = createContext<Ctx>({
  register: () => {},
  trigger: () => Promise.resolve(),
})

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const fnRef = useRef<(() => Promise<void>) | null>(null)

  const register = useCallback((fn: () => Promise<void>) => {
    fnRef.current = fn
  }, [])

  const trigger = useCallback(async () => {
    if (fnRef.current) await fnRef.current()
  }, [])

  return (
    <TransitionCtx.Provider value={{ register, trigger }}>
      {children}
    </TransitionCtx.Provider>
  )
}

export const usePageTransition = () => useContext(TransitionCtx)
