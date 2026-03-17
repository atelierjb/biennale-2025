export type GalleryImage = {
  src: string
  alt: string
  sizes: string
  isPortrait: boolean
}

const LS = '(max-width: 991px) 100vw, 1020px'
const LP = '(max-width: 767px) 100vw, 550px'

export const galleryImages: GalleryImage[] = [
  { src: '/images/1-gallery-image-landscape-v3.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/3-gallery-image-portrait.jpg', alt: 'image from the exhibition', sizes: LP, isPortrait: true },
  { src: '/images/2-gallery-image-landscape.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/4-gallery-image-portrait.jpg', alt: 'image from the exhibition', sizes: LP, isPortrait: true },
  { src: '/images/5-gallery-image-portrait.jpg', alt: 'image from the exhibition', sizes: LP, isPortrait: true },
  { src: '/images/6-gallery-image-landscape-v2.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/7-gallery-image-landscape.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/8-gallery-image-portrait-v2.jpg', alt: 'image from the exhibition', sizes: LP, isPortrait: true },
  { src: '/images/9-gallery-image-landscape.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/10-gallery-image-landscape.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/11-gallery-image-landscape-v3.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
  { src: '/images/12-gallery-image-landscape-v3.jpg', alt: 'image from the exhibition', sizes: LS, isPortrait: false },
]
