import type { Lang } from '@/lib/i18n'
import type { SiteCopy } from './types'
import { da } from './da'
import { en } from './en'

export type { SiteCopy, CreditEntry, NavId } from './types'

const COPY: Record<Lang, SiteCopy> = { da, en }

export function getCopy(lang: Lang): SiteCopy {
  return COPY[lang]
}
