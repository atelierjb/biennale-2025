export type Lang = 'da' | 'en'

export const LANGS: Lang[] = ['da', 'en']

export const DEFAULT_LANG: Lang = 'da'

/**
 * Resolves the `[[...lang]]` catch-all segment to a language.
 *
 * `/`   -> segment is undefined or []  -> 'da'
 * `/en` -> segment is ['en']           -> 'en'
 * anything else -> null, so the page can call notFound()
 */
export function resolveLang(segment: string[] | undefined): Lang | null {
  if (!segment || segment.length === 0) return DEFAULT_LANG
  if (segment.length === 1 && segment[0] === 'en') return 'en'
  return null
}

export const otherLang = (lang: Lang): Lang => (lang === 'da' ? 'en' : 'da')

export const langHref = (lang: Lang): string => (lang === 'da' ? '/' : '/en')
