// Centralised GSAP loader — registers all plugins exactly once.
// Dynamic imports are module-cached, so subsequent calls are effectively free.

let registered = false

export async function getGsap() {
  const { gsap } = await import('gsap')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [{ ScrollTrigger }, draggableMod, inertiaMod] = await Promise.all([
    import('gsap/ScrollTrigger'),
    import('gsap/dist/Draggable') as Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
    import('gsap/dist/InertiaPlugin') as Promise<any>, // eslint-disable-line @typescript-eslint/no-explicit-any
  ])

  if (!registered) {
    registered = true
    gsap.registerPlugin(ScrollTrigger, draggableMod.Draggable, inertiaMod.InertiaPlugin)
  }

  return {
    gsap,
    ScrollTrigger,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Draggable: draggableMod.Draggable as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    InertiaPlugin: inertiaMod.InertiaPlugin as any,
  }
}
