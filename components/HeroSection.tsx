'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const HERO_IMAGES = [
  '/images/hero-image-1-v2.webp',
  '/images/hero-image-2-v2.webp',
  '/images/hero-image-3-v2.webp',
  '/images/hero-image-4-v2.webp',
  '/images/hero-image-5.webp',
  '/images/hero-image-6.webp',
]

type Props = {
  dates: string
  location: React.ReactNode
  langHref: string
  langLabel: string
  partnerLogos: { src: string; href: string; alt: string; sizes: string }[]
}

const checkIsIOS = () => {
  // Prefer the modern userAgentData API; fall back to UA string sniffing
  const uad = (navigator as Navigator & { userAgentData?: { platform: string } }).userAgentData
  if (uad?.platform) {
    const p = uad.platform.toLowerCase()
    return p === 'ios' || p === 'iphone' || p === 'ipad'
  }
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Gsap = typeof import('gsap').gsap

function initTilt(gsap: Gsap, root: HTMLElement, stage: HTMLElement, hasFinePointer: boolean, wantsGyro: boolean) {
  const maxTiltDesktop = parseFloat(root.dataset.tilt || '6')
  const maxTiltMobile = parseFloat(root.dataset.gyroTilt || String(Math.max(8, maxTiltDesktop * 1.8)))
  const gyroDiv = parseFloat(root.dataset.gyroDiv || '30')
  const smooth = parseFloat(root.dataset.gyroSmooth || '0.18')
  const invertGyro = (root.dataset.gyroInvert ?? 'true') !== 'false'
  const speed = parseFloat(root.dataset.speed || '6')

  const qRotX = gsap.quickTo(stage, 'rotationX', { duration: 1 / speed, ease: 'power2.out' })
  const qRotY = gsap.quickTo(stage, 'rotationY', { duration: 1 / speed, ease: 'power2.out' })
  const qScale = gsap.quickTo(stage, 'scale', { duration: 1 / speed, ease: 'power2.out' })
  gsap.set(stage, { transformOrigin: '50% 50%', transformPerspective: 2000 })

  const cleanups: (() => void)[] = []

  if (hasFinePointer) {
    const move = (e: MouseEvent) => {
      const r = root.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const mx = ((e.clientX ?? cx) - cx) / (r.width / 2)
      const my = ((e.clientY ?? cy) - cy) / (r.height / 2)
      qRotY(gsap.utils.clamp(-maxTiltDesktop, maxTiltDesktop, mx * maxTiltDesktop))
      qRotX(gsap.utils.clamp(-maxTiltDesktop, maxTiltDesktop, -my * maxTiltDesktop))
      qScale(1.02)
    }
    const leave = () => { qRotX(0); qRotY(0); qScale(1) }
    root.addEventListener('mousemove', move, { passive: true })
    root.addEventListener('mouseleave', leave)
    cleanups.push(() => {
      root.removeEventListener('mousemove', move)
      root.removeEventListener('mouseleave', leave)
    })
    return () => cleanups.forEach(c => c())
  }

  if (!wantsGyro) return () => { }

  // Mobile: show a permission button
  const btn = document.createElement('button')
  btn.className = 'hero-eye__motion-btn'
  btn.type = 'button'
  btn.textContent = 'Enable motion'
  root.appendChild(btn)
  cleanups.push(() => btn.parentNode?.removeChild(btn))

  const clamp = gsap.utils.clamp
  let baseB: number | null = null, baseG: number | null = null
  let emaX = 0, emaY = 0

  const onOrient = (e: DeviceOrientationEvent) => {
    const beta = e.beta ?? 0
    const gamma = e.gamma ?? 0
    if (baseB === null || baseG === null) { baseB = beta; baseG = gamma }
    const dx = (gamma - baseG) / gyroDiv
    const dy = (beta - baseB) / gyroDiv
    emaX += (dx - emaX) * smooth
    emaY += (dy - emaY) * smooth
    const rawY = clamp(-maxTiltMobile, maxTiltMobile, emaX * maxTiltMobile)
    const rawX = clamp(-maxTiltMobile, maxTiltMobile, -emaY * maxTiltMobile)
    qRotY(invertGyro ? -rawY : rawY)
    qRotX(invertGyro ? -rawX : rawX)
    qScale(1.02)
  }

  const enableMotion = async () => {
    try {
      const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
      if (typeof DOE.requestPermission === 'function') {
        const state = await DOE.requestPermission()
        if (state !== 'granted') return
      }
      window.addEventListener('deviceorientation', onOrient, true)
      btn.remove()
      cleanups.push(() => window.removeEventListener('deviceorientation', onOrient, true))
    } catch (_) { /* denied/unsupported */ }
  }

  btn.addEventListener('click', enableMotion, { once: true })

  let lastTap = 0
  const onTouchEnd = () => {
    const now = Date.now()
    if (now - lastTap < 350) { baseB = null; baseG = null }
    lastTap = now
  }
  root.addEventListener('touchend', onTouchEnd)
  cleanups.push(() => root.removeEventListener('touchend', onTouchEnd))

  const onVisibility = () => { if (document.hidden) { qRotX(0); qRotY(0); qScale(1) } }
  document.addEventListener('visibilitychange', onVisibility)
  cleanups.push(() => document.removeEventListener('visibilitychange', onVisibility))

  return () => cleanups.forEach(c => c())
}

function buildSVGSlideshow(gsap: Gsap, svg: SVGSVGElement, srcs: string[], prefersReduce: boolean) {
  const group = svg.querySelector<SVGGElement>('#eyeGroup')
  if (!group || srcs.length < 2) return () => { }

  const ns = 'http://www.w3.org/2000/svg'

  // Image[0] is already in the DOM from JSX. Create images 1–N without href
  // so the browser fetches nothing until they're needed.
  const first = svg.querySelector<SVGImageElement>('#eyeGroup image')!
  const photos: SVGImageElement[] = [first]
  for (let i = 1; i < srcs.length; i++) {
    const el = document.createElementNS(ns, 'image')
    el.setAttribute('x', '0'); el.setAttribute('y', '0')
    el.setAttribute('width', '1112'); el.setAttribute('height', '826')
    el.setAttribute('preserveAspectRatio', 'xMidYMid slice')
    group.insertBefore(el, group.querySelector('rect'))
    photos.push(el)
  }

  const loaded = new Set([0])
  const ensureLoaded = (i: number) => {
    if (!loaded.has(i)) {
      photos[i].setAttribute('href', srcs[i])
      loaded.add(i)
    }
  }

  gsap.set([group, ...photos], {
    force3D: true,
    transform: 'translateZ(0)',
    willChange: 'opacity,transform',
    backfaceVisibility: 'hidden',
  })
  photos.forEach((img, i) => gsap.set(img, { opacity: i === 0 ? 1 : 0 }))

  if (prefersReduce) return () => { }

  let idx = 0
  const HOLD = 2.6, FADE = 0.9
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timer: any = null

  const cycle = () => {
    const nextIdx = (idx + 1) % photos.length
    ensureLoaded(nextIdx)
    // Pre-fetch the one after that too
    ensureLoaded((nextIdx + 1) % photos.length)

    gsap.to(photos[idx], { opacity: 0, duration: FADE, ease: 'power2.inOut' })
    gsap.to(photos[nextIdx], {
      opacity: 1, duration: FADE, ease: 'power2.inOut',
      onComplete() { idx = nextIdx; timer = gsap.delayedCall(HOLD, cycle) },
    })
  }
  timer = gsap.delayedCall(HOLD, cycle)

  return () => { timer?.kill() }
}

function buildHTMLSlideshow(gsap: Gsap, root: HTMLElement, svg: SVGSVGElement, stage: HTMLElement, srcs: string[], prefersReduce: boolean) {
  const maskImg = svg.querySelector('mask#eyeMask image')?.getAttribute('href') || ''

  const styleTag = document.createElement('style')
  styleTag.textContent = `
.hero-eye__htmlmask { position:absolute; inset:0; overflow:hidden; }
.hero-eye__htmlmask img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; }
.hero-eye__htmlmask {
  -webkit-mask-image: url("${maskImg}");
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-image: url("${maskImg}");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
}
`
  document.head.appendChild(styleTag)

  if (getComputedStyle(stage).position === 'static') stage.style.position = 'relative'

  const htmlMask = document.createElement('div')
  htmlMask.className = 'hero-eye__htmlmask'
  stage.appendChild(htmlMask)

  const imgs = srcs.map((src, i) => {
    const el = document.createElement('img')
    el.src = src
    el.loading = i ? 'lazy' : 'eager'
    el.decoding = 'async'
    el.style.opacity = i === 0 ? '1' : '0'
    htmlMask.appendChild(el)
    return el
  })

  // Exact gradient overlay as inline SVG
  const ns = 'http://www.w3.org/2000/svg'
  const overlay = document.createElementNS(ns, 'svg')
  overlay.setAttribute('viewBox', '0 0 1112 826')
  overlay.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  overlay.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none'
  const defs = document.createElementNS(ns, 'defs')
  const grad = document.createElementNS(ns, 'radialGradient')
  grad.setAttribute('id', 'eyeVignetteMobile')
  grad.setAttribute('cx', '0'); grad.setAttribute('cy', '0'); grad.setAttribute('r', '1')
  grad.setAttribute('gradientUnits', 'userSpaceOnUse')
  grad.setAttribute('gradientTransform', 'translate(556 413) rotate(90) scale(412.849 556)')
  const s1 = document.createElementNS(ns, 'stop')
  s1.setAttribute('offset', '0.668269'); s1.setAttribute('stop-color', '#291E0F'); s1.setAttribute('stop-opacity', '0')
  const s2 = document.createElementNS(ns, 'stop')
  s2.setAttribute('offset', '1'); s2.setAttribute('stop-color', '#291E0F'); s2.setAttribute('stop-opacity', '1')
  grad.appendChild(s1); grad.appendChild(s2); defs.appendChild(grad); overlay.appendChild(defs)
  const rect = document.createElementNS(ns, 'rect')
  rect.setAttribute('x', '0'); rect.setAttribute('y', '0')
  rect.setAttribute('width', '1112'); rect.setAttribute('height', '826')
  rect.setAttribute('fill', 'url(#eyeVignetteMobile)')
  overlay.appendChild(rect)
  htmlMask.appendChild(overlay)

  svg.style.display = 'none'

  const cleanup = () => {
    styleTag.remove()
    htmlMask.remove()
    svg.style.display = ''
  }

  if (prefersReduce || !imgs.length) return cleanup

  let idx = 0
  const HOLD = 2.6, FADE = 0.9
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timer: any = null
  const cycle = () => {
    const cur = imgs[idx]
    const nxt = imgs[(idx + 1) % imgs.length]
    gsap.to(cur, { opacity: 0, duration: FADE, ease: 'power2.inOut' })
    gsap.to(nxt, {
      opacity: 1, duration: FADE, ease: 'power2.inOut',
      onComplete() { idx = (idx + 1) % imgs.length; timer = gsap.delayedCall(HOLD, cycle) },
    })
  }
  timer = gsap.delayedCall(HOLD, cycle)

  return () => { timer?.kill(); cleanup() }
}

export default function HeroSection({ dates, location, partnerLogos }: Props) {
  const eyeRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const root = eyeRef.current
    const stage = stageRef.current
    const svg = svgRef.current
    if (!root || !stage || !svg) return

    const prefersReduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = matchMedia('(hover:hover) and (pointer:fine)').matches
    const wantsGyro = root.dataset.gyro === 'true'
    const useIOSFallback = checkIsIOS()

    let cleanupTilt = () => { }
    let cleanupSlideshow = () => { }

    const run = async () => {
      const { gsap } = await import('gsap')

      if (!prefersReduce) {
        cleanupTilt = initTilt(gsap, root, stage, hasFinePointer, wantsGyro)
      }

      if (useIOSFallback) {
        cleanupSlideshow = buildHTMLSlideshow(gsap, root, svg, stage, HERO_IMAGES, prefersReduce)
      } else {
        cleanupSlideshow = buildSVGSlideshow(gsap, svg, HERO_IMAGES, prefersReduce)
      }
    }

    run()

    return () => {
      cleanupTilt()
      cleanupSlideshow()
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-svh [overflow:clip] flex items-center justify-center mb-24">
      <div
        ref={eyeRef}
        className="hero-eye w-screen max-h-[95vh] px-[12vw] my-[7vh] aspect-[1112/826] cursor-move max-nav:px-[5vw] [@media(hover:none)]:cursor-default"
        data-speed="6"
        data-tilt="6"
        data-gyro="true"
        data-gyro-tilt="20"
        data-gyro-div="30"
        data-gyro-smooth="0.18"
        data-gyro-invert="true"
      >
        <div ref={stageRef} className="hero-eye__stage w-full h-full -mt-10 sm:mt-0">
          <svg
            ref={svgRef}
            className="hero-eye__svg w-full h-full block"
            viewBox="0 0 1112 826"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <mask id="eyeMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1112" height="826">
                <image
                  href="/images/eye-shape.svg"
                  x="0" y="0"
                  width="1112" height="826"
                  preserveAspectRatio="xMidYMid meet"
                />
              </mask>
              <radialGradient
                id="eyeVignette"
                cx="0" cy="0" r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(556 413) rotate(90) scale(412.849 556)"
              >
                <stop offset="0.668269" stopColor="#291E0F" stopOpacity="0" />
                <stop offset="1" stopColor="#291E0F" />
              </radialGradient>
            </defs>

            <g mask="url(#eyeMask)" id="eyeGroup">
              {/* Only the first image is in the DOM on load.
                    Images 2–6 are added lazily by buildSVGSlideshow
                    just before they're needed, preventing eager network requests. */}
              <image
                href={HERO_IMAGES[0]}
                x="0" y="0"
                width="1112" height="826"
                preserveAspectRatio="xMidYMid slice"
                opacity={1}
              />
              <rect x="0" y="0" width="1112" height="826" fill="url(#eyeVignette)" />
            </g>
          </svg>
        </div>
      </div>

      {/* Partner logos — desktop */}
      <div className="absolute top-gutter right-gutter grid grid-cols-[1.5fr_1.25fr_1fr] gap-x-4 w-[19.375rem] items-center z-10 max-md:hidden">
        {partnerLogos.map(logo => (
          <a key={logo.href} href={logo.href} target="_blank" rel="noopener noreferrer" className="block">
            <Image src={logo.src} alt={logo.alt} sizes={logo.sizes} width={955} height={200} priority className="w-full h-auto object-contain block" />
          </a>
        ))}
      </div>

      {/* Date / location + mobile logos */}
      <div className="absolute right-gutter bottom-gutter flex flex-col items-center sm:items-end gap-2 text-center sm:text-right z-10 max-md:right-4 max-md:bottom-12 max-md:left-4 max-md:text-xl text-2xl uppercase tracking-[-0.005em] font-bold leading-[1]">
        <div className="opacity-100">{dates}</div>
        <div className="opacity-100">{location}</div>
        <div className="hidden max-md:flex max-md:static max-md:mt-6 max-md:justify-center max-md:gap-6 max-md:px-6">
          {partnerLogos.map(logo => (
            <a key={logo.href} href={logo.href} target="_blank" rel="noopener noreferrer" className="block">
              <Image src={logo.src} alt={logo.alt} sizes={logo.sizes} width={955} height={200} className="w-auto h-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
