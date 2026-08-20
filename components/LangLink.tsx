'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { usePageTransition } from '@/lib/transition-context'
import { captureScrollAnchor } from '@/lib/scroll-anchor'
import { readOpenTriggerId } from '@/lib/accordion-dom'

type Props = {
  href: string
  className?: string
  'aria-label'?: string
  children: React.ReactNode
}

export default function LangLink({ href, className, children, ...rest }: Props) {
  const router = useRouter()
  const { trigger, saveHandoff } = usePageTransition()
  const [isPending, startTransition] = useTransition()

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Let modified clicks (new tab/window) behave natively.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
      e.preventDefault()
      if (isPending) return

      // Captured against the outgoing layout, which is still the measurable one.
      saveHandoff({
        anchor: captureScrollAnchor(),
        openTriggerId: readOpenTriggerId(),
      })
      await trigger()
      startTransition(() => router.push(href, { scroll: false }))
    },
    [href, router, trigger, saveHandoff, isPending, startTransition]
  )

  // next/link so the target's RSC payload is prefetched — without it the user
  // waits on a network round trip after the fade-out has already completed.
  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
