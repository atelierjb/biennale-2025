'use client'

import { useEffect, useRef } from 'react'

type NavItem = {
  id: string
  label: string
  digitPath: string
  pillPath: string
  pillViewBox?: string
}

// SVG pill + digit paths extracted from original HTML
const NAV_ITEMS: NavItem[] = [
  {
    id: 'intro',
    label: 'introduktion',
    pillPath: 'M10.1885 0.485352C12.905 0.485352 15.3499 1.29547 17.1035 2.58008C18.8576 3.86506 19.8926 5.59859 19.8926 7.46387C19.8925 9.32914 18.8576 11.0627 17.1035 12.3477C15.3499 13.6323 12.905 14.4424 10.1885 14.4424C7.47215 14.4423 5.02795 13.6322 3.27441 12.3477C1.52029 11.0627 0.485396 9.32917 0.485352 7.46387C0.485352 5.59853 1.52026 3.86508 3.27441 2.58008C5.02797 1.29553 7.47212 0.485421 10.1885 0.485352Z',
    digitPath: 'M10.0006 3.88281H11.2495V9.36925C11.2495 9.94565 11.2708 10.4794 11.3456 10.9277H9.70176V5.54796L8.34616 6.50862H8.28212V5.11032L10.0006 3.88281Z',
  },
  {
    id: 'gallery',
    label: 'galleri',
    pillPath: 'M10.1885 0.955078C12.905 0.955078 15.3499 1.7652 17.1035 3.0498C18.8576 4.33479 19.8926 6.06832 19.8926 7.93359C19.8925 9.79887 18.8576 11.5324 17.1035 12.8174C15.3499 14.102 12.905 14.9121 10.1885 14.9121C7.47215 14.912 5.02795 14.1019 3.27441 12.8174C1.52029 11.5324 0.485396 9.7989 0.485352 7.93359C0.485352 6.06825 1.52026 4.3348 3.27441 3.0498C5.02797 1.76525 7.47212 0.955148 10.1885 0.955078Z',
    digitPath: 'M8.25774 6.59359V5.13125C8.81279 4.62957 9.5066 4.35205 10.2431 4.35205C11.5453 4.35205 12.442 5.24867 12.442 6.56157C12.442 7.63965 11.8976 8.48289 10.7234 9.59299L10.0937 10.1374V10.2014H12.3459V11.5036H8.24707V10.3829L9.0156 9.65703C10.2858 8.3975 10.9262 7.54358 10.9262 6.70033C10.9262 6.02787 10.4993 5.57956 9.88019 5.57956C9.32515 5.57956 8.78077 5.9318 8.25774 6.59359Z',
  },
  {
    id: 'index',
    label: 'udstillere 2025',
    pillPath: 'M10.1885 1.375C12.905 1.375 15.3499 2.18512 17.1035 3.46973C18.8576 4.75471 19.8926 6.48824 19.8926 8.35352C19.8925 10.2188 18.8576 11.9523 17.1035 13.2373C15.3499 14.5219 12.905 15.332 10.1885 15.332C7.47215 15.332 5.02795 14.5218 3.27441 13.2373C1.52029 11.9523 0.485396 10.2188 0.485352 8.35352C0.485352 6.48817 1.52026 4.75472 3.27441 3.46973C5.02797 2.18518 7.47212 1.37507 10.1885 1.375Z',
    digitPath: 'M10.7768 9.86299C10.7768 9.26524 10.3712 8.88098 9.85885 8.88098H9.45323V7.8029H9.80548C10.3072 7.8029 10.7234 7.46133 10.7234 6.87426C10.7234 6.32989 10.3285 5.999 9.82682 5.999C9.28245 5.999 8.75942 6.34056 8.30044 6.85292V5.47597C8.79144 5.01699 9.43189 4.77148 10.083 4.77148C11.2038 4.77148 12.1217 5.49732 12.1217 6.68213C12.1217 7.48268 11.7054 8.11245 11.0437 8.32593V8.34728C11.8015 8.58211 12.3032 9.23322 12.3032 10.0978C12.3032 11.336 11.3319 12.0298 10.1684 12.0298C9.47458 12.0298 8.78077 11.8057 8.24707 11.3253V9.94838C8.71673 10.4607 9.28245 10.7916 9.8375 10.7916C10.3925 10.7916 10.7768 10.4607 10.7768 9.86299Z',
  },
  {
    id: 'colophon',
    label: 'kolofon',
    pillPath: 'M10.1885 0.794922C12.905 0.794922 15.3499 1.60504 17.1035 2.88965C18.8576 4.17463 19.8926 5.90816 19.8926 7.77344C19.8925 9.63871 18.8576 11.3723 17.1035 12.6572C15.3499 13.9418 12.905 14.752 10.1885 14.752C7.47215 14.7519 5.02795 13.9417 3.27441 12.6572C1.52029 11.3723 0.485396 9.63874 0.485352 7.77344C0.485352 5.9081 1.52026 4.17465 3.27441 2.88965C5.02797 1.6051 7.47212 0.794991 10.1885 0.794922Z',
    digitPath: 'M11.3291 11.2367H9.89873V9.58227H7.42236V8.19465L10.0909 4.19189H11.3291V8.44015H12.1296V9.58227H11.3291V11.2367ZM9.89873 6.26265L8.43639 8.44015H9.89873V6.26265Z',
  },
]

function NavIcon({ pillPath, digitPath }: { pillPath: string; digitPath: string }) {
  return (
    <svg className="nav-icon absolute inset-0 w-full h-full block" viewBox="0 0 21 16" aria-hidden="true">
      <path className="pill" d={pillPath} stroke="#fff" strokeWidth="0.970365" />
      <path className="digit" d={digitPath} />
    </svg>
  )
}

type Props = {
  // allow DA vs EN label overrides
  labels?: Record<string, string>
}

export default function StackedNav({ labels }: Props) {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const GAP = 8
    const topList = nav.querySelector<HTMLUListElement>('.stacked-nav__top')!
    const bottomList = nav.querySelector<HTMLUListElement>('.stacked-nav__bottom')!
    let floater = nav.querySelector<HTMLDivElement>('.stacked-nav__float')!
    if (!topList || !bottomList || !floater) return

    const order = NAV_ITEMS.map(n => n.id)
    const items: Record<string, HTMLLIElement> = {}
    Array.from(bottomList.querySelectorAll<HTMLLIElement>('li')).forEach(li => {
      const target = li.dataset.target
      if (target) items[target] = li
    })

    const sections = order.map(
      id => document.getElementById(id)
    ).filter(Boolean) as HTMLElement[]

    let floatingId: string | null = null
    let pendingIndex: number | null = null
    let jumpLockUntil = 0

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

    function insertBackInOrder(li: HTMLLIElement) {
      const idx = order.indexOf(li.dataset.target!)
      const candidates = Array.from(bottomList.children).filter(
        el => el instanceof HTMLLIElement && el.dataset.target
      ) as HTMLLIElement[]
      const ref = candidates.find(sib => order.indexOf(sib.dataset.target!) > idx) ?? null
      bottomList.insertBefore(li, ref)
    }

    function moveToTop(id: string) {
      const li = items[id]
      if (li && li.parentNode !== topList) {
        li.classList.remove('is-hidden')
        li.setAttribute('data-state', 'active')
        topList.appendChild(li)
      }
    }

    function moveToBottom(id: string) {
      const li = items[id]
      if (li && li.parentNode !== bottomList) {
        li.setAttribute('data-state', 'idle')
        insertBackInOrder(li)
      }
    }

    function showFloaterFor(li: HTMLLIElement) {
      floater.innerHTML = ''
      const clone = li.cloneNode(true) as HTMLLIElement
      clone.removeAttribute('id')
      clone.style.margin = '0'
      clone.setAttribute('data-state', 'active')
      floater.appendChild(clone)
      li.classList.add('is-hidden')
      floater.style.display = 'block'
    }

    function hideFloater() {
      floater.style.display = 'none'
      floater.innerHTML = ''
      const hidden = bottomList.querySelector<HTMLLIElement>('li.is-hidden')
      if (hidden) hidden.classList.remove('is-hidden')
    }

    function syncStacksToIndex(idx: number) {
      if (idx < 0) return
      for (let i = 0; i < order.length; i++) {
        if (i < idx) moveToTop(order[i])
        else moveToBottom(order[i])
      }
      hideFloater()
      floatingId = null
    }

    function update() {
      const now = performance.now()
      if (pendingIndex !== null && now < jumpLockUntil) {
        syncStacksToIndex(pendingIndex)
        return
      }
      if (pendingIndex !== null && now >= jumpLockUntil) {
        pendingIndex = null
      }

      const navRect = nav!.getBoundingClientRect()
      const dockY = topList.getBoundingClientRect().bottom + GAP

      let passed = 0
      sections.forEach((sec, idx) => {
        const secTop = sec.getBoundingClientRect().top
        if (secTop <= dockY) { passed++; moveToTop(order[idx]) }
        else moveToBottom(order[idx])
      })

      const nextIdx = passed
      if (nextIdx >= order.length) { hideFloater(); floatingId = null; return }

      const id = order[nextIdx]
      const li = items[id]
      const sec = sections[nextIdx]
      if (!li || !sec) { hideFloater(); return }

      const rowTop = li.getBoundingClientRect().top
      const secTop = sec.getBoundingClientRect().top
      const EPS = 1

      if (secTop > rowTop + EPS) {
        if (floatingId) { hideFloater(); floatingId = null }
        li.classList.remove('is-hidden')
        li.setAttribute('data-state', 'idle')
        return
      }

      if (floatingId !== id) {
        if (floatingId && items[floatingId]) items[floatingId].classList.remove('is-hidden')
        showFloaterFor(li)
        floatingId = id
      }

      const dist = Math.max(1, rowTop - dockY)
      const progress = clamp((rowTop - secTop) / dist, 0, 1)
      const yView = rowTop - progress * dist
      floater.style.top = Math.round(yView - navRect.top) + 'px'

      if (progress >= 0.999) {
        li.classList.remove('is-hidden')
        moveToTop(id)
        hideFloater()
        floatingId = null
      }
    }

    // Anchor clicks — just scroll; update() handles stack state via scroll events
    nav.addEventListener('click', (e) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')!.slice(1)
      const idx = order.indexOf(id)
      if (idx === -1) return
      e.preventDefault()
      const target = document.getElementById(id)
      if (target) {
        const dockY = topList.getBoundingClientRect().bottom + GAP
        const y = window.scrollY + target.getBoundingClientRect().top - dockY
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    })

    // Hash change
    const onHashChange = () => {
      const id = location.hash.replace('#', '')
      const idx = order.indexOf(id)
      if (idx !== -1) {
        pendingIndex = idx
        syncStacksToIndex(idx)
        jumpLockUntil = performance.now() + 900
        requestAnimationFrame(update)
        setTimeout(update, 60)
      }
    }

    // Scroll / resize
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => { ticking = false; update() })
      }
    }

    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('load', update)
    if (document.fonts?.ready) document.fonts.ready.then(update)
    update()

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('load', update)
    }
  }, [])

  return (
    <div ref={navRef} className="stacked-nav fixed top-40 left-gutter bottom-gutter w-[260px] flex flex-col justify-between z-[1000] pointer-events-none max-nav:hidden">
      <ul role="list" className="stacked-nav__top">
        <li /><li /><li />
      </ul>

      <div className="stacked-nav__float" style={{ display: 'none' }} />

      <ul role="list" className="stacked-nav__bottom">
        {NAV_ITEMS.map(item => (
          <li key={item.id} data-state="idle" data-target={item.id} className="nav-row flex items-center gap-2 my-[0.35rem]">
            <div className="icon-wrap relative w-gutter h-[1.125rem] shrink-0">
              <NavIcon pillPath={item.pillPath} digitPath={item.digitPath} />
            </div>
            <a href={`#${item.id}`} className="label-xs pointer-events-auto">
              {labels?.[item.id] ?? item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
