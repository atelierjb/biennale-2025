// Module-level cache. It survives component remounts within the same JS
// context, so switching language re-mounts the nav logo without a network
// round trip — which is what made the swap visibly blink.
const cache = new Map<string, Promise<unknown>>()

export function loadLottieData(src: string): Promise<unknown> {
  let pending = cache.get(src)

  if (!pending) {
    pending = fetch(src).then(res => {
      if (!res.ok) throw new Error(`lottie ${src}: ${res.status}`)
      return res.json()
    })
    // Don't cache a rejection forever — let the next mount retry.
    pending.catch(() => cache.delete(src))
    cache.set(src, pending)
  }

  return pending
}
