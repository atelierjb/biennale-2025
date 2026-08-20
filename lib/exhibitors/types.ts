/** An image as stored: language-neutral. Alt text is derived per language. */
export type ImageRef = {
  src: string
  sizes: string
}

/** An image as rendered, with its localised alt text resolved. */
export type SlideImage = ImageRef & {
  alt: string
}

/** The three layouts an exhibitor's media can take. */
export type Media<T> =
  | { type: 'slider'; isPortrait?: boolean; slides: T[] }
  | { type: 'portrait-pair'; slides: T[] }
  | { type: 'alternative-layout'; landscape: T; portrait: T }

export type ExhibitorImagesData = Media<ImageRef>
export type ExhibitorImages = Media<SlideImage>

/** Everything that is the same in every language. */
export type ExhibitorData = {
  id: number
  artistName: string
  images: ExhibitorImagesData
}

/** Everything that genuinely needs translating. */
export type ExhibitorCopy = {
  workTitle: string
  /** Split on line breaks so each line renders as its own element. */
  dimensions: string[]
  materials: string
  description: string[]
}

/** A merged exhibitor, ready to render. */
export type Exhibitor = Omit<ExhibitorData, 'images'> &
  ExhibitorCopy & {
    images: ExhibitorImages
  }
