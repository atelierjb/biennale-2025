import type { Lang } from '@/lib/i18n'
import { exhibitorData } from './data'
import { exhibitorCopyDA } from './copy.da'
import { exhibitorCopyEN } from './copy.en'
import type {
  Exhibitor,
  ExhibitorCopy,
  ExhibitorImages,
  ExhibitorImagesData,
  ImageRef,
} from './types'

export type { Exhibitor, SlideImage, ExhibitorImages } from './types'

const COPY: Record<Lang, Record<number, ExhibitorCopy>> = {
  da: exhibitorCopyDA,
  en: exhibitorCopyEN,
}

/** "af" in Danish, "by" in English — as in "TITLE by ARTIST". */
const BY: Record<Lang, string> = { da: 'af', en: 'by' }

function withAlt(images: ExhibitorImagesData, alt: string): ExhibitorImages {
  const add = (r: ImageRef) => ({ ...r, alt })
  return images.type === 'alternative-layout'
    ? { ...images, landscape: add(images.landscape), portrait: add(images.portrait) }
    : { ...images, slides: images.slides.map(add) }
}

/**
 * Merges the language-neutral data with the copy for `lang`.
 *
 * Alt text is derived rather than stored: keeping it in the data meant 21 of the
 * 26 Danish entries carried untranslated English alt, and two paired an English
 * title with the Danish preposition.
 */
export function getExhibitors(lang: Lang): Exhibitor[] {
  const dictionary = COPY[lang]

  return exhibitorData.map(({ images, ...data }) => {
    const copy = dictionary[data.id]
    if (!copy) {
      // Fail at build time rather than rendering a blank accordion row.
      throw new Error(`Missing ${lang} copy for exhibitor id ${data.id} (${data.artistName})`)
    }

    return {
      ...data,
      ...copy,
      images: withAlt(images, `${copy.workTitle} ${BY[lang]} ${data.artistName}`),
    }
  })
}
