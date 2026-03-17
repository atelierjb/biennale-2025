'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { usePageTransition } from '@/lib/transition-context'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

export default function LangLink({ href, className, children }: Props) {
  const router = useRouter()
  const { trigger } = usePageTransition()

  const handleClick = useCallback(async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    await trigger()
    router.push(href, { scroll: false })
  }, [href, router, trigger])

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
