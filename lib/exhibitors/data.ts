import type { ExhibitorData } from './types'

// Language-neutral: ids, artist names and imagery are identical in both
// languages, so they live here once. Alt text is derived at merge time in
// ./index.ts from the localised work title — see getExhibitors().

const LS = '(max-width: 2226px) 100vw, 2226px'
const LP = '(max-width: 1200px) 100vw, 1200px'
const LP_NEW = '(max-width: 900px) 100vw, 900px'
const LP_ALT = '(max-width: 780px) 100vw, 780px'

export const exhibitorData: ExhibitorData[] = [
  {
    id: 1,
    artistName: "Anna Søgaard & Tronhjem Rømer",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/1-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/1-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 2,
    artistName: "Elly Feldstein",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/2-exhibition-portrait_1-new.jpg", sizes: LP_NEW },
        { src: "/images/2-exhibition-portrait_2-new.jpg", sizes: LP_NEW },
      ],
    },
  },
  {
    id: 3,
    artistName: "Emilie Palle Holm",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/3-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/3-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 4,
    artistName: "Et Arrangement",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/4-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/4-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 5,
    artistName: "Grethe Sørensen",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/5-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/5-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 6,
    artistName: "Indio Möglich",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/6-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/6-exhibition-portrait_2.jpg", sizes: LP },
        { src: "/images/6-exhibition-portrait_3.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 7,
    artistName: "Jens Ole Árnason",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/7-exhibition-portrait_1-new.jpg", sizes: LP_NEW },
        { src: "/images/7-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 8,
    artistName: "Karen Lise Krabbe",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/8-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/8-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 9,
    artistName: "Krestine Harboe",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/9-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/9-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 10,
    artistName: "Lasse Sylvest Lilleør",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/10-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/10-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 11,
    artistName: "Laura Sonne Lund",
    images: {
      type: 'alternative-layout',
      landscape: { src: "/images/11-exhibition-landscape_1.jpg", sizes: LS },
      portrait: { src: "/images/11-exhibition-portrait_2-new.jpg", sizes: LP_ALT },
    },
  },
  {
    id: 12,
    artistName: "Lea Nordstrøm",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/12-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/12-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 13,
    artistName: "Lone Løvschal",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/13-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/13-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 14,
    artistName: "Lotte Westphael",
    images: {
      type: 'alternative-layout',
      landscape: { src: "/images/14-exhibition-landscape_1.jpg", sizes: LS },
      portrait: { src: "/images/14-exhibition-portrait_2-new.jpg", sizes: LP_ALT },
    },
  },
  {
    id: 15,
    artistName: "Louise Bitsch",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/15-exhibition-portrait_1-v2.jpg", sizes: LP },
        { src: "/images/15-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 16,
    artistName: "Lærke Laura Nielsen",
    images: {
      type: 'alternative-layout',
      landscape: { src: "/images/16-exhibition-landscape_1.jpg", sizes: LS },
      portrait: { src: "/images/16-exhibition-portrait_2-new.jpg", sizes: LP_ALT },
    },
  },
  {
    id: 17,
    artistName: "Malene Hartmann Rasmussen",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/17-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/17-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 18,
    artistName: "Maria Bang Espersen",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/18-exhibition-portrait_1-new.jpg", sizes: LP },
        { src: "/images/18-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 19,
    artistName: "Maria Sparre-Petersen",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/19-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/19-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 20,
    artistName: "Marie Holst",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/20-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/20-exhibition-landscape_2.jpg", sizes: LS },
        { src: "/images/20-exhibition-landscape_3.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 21,
    artistName: "Morten Klitgaard",
    images: {
      type: 'alternative-layout',
      landscape: { src: "/images/21-exhibition-landscape_1.jpg", sizes: LS },
      portrait: { src: "/images/21-exhibition-portrait_2-new.jpg", sizes: LP_ALT },
    },
  },
  {
    id: 22,
    artistName: "Oberdoerfer & Krebs",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/22-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/22-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 23,
    artistName: "Peter Durlev",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/23-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/23-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 24,
    artistName: "Sarah Busk & Mari Børlund",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: "/images/24-exhibition-portrait_1.jpg", sizes: LP },
        { src: "/images/24-exhibition-portrait_2.jpg", sizes: LP },
      ],
    },
  },
  {
    id: 25,
    artistName: "Thomas Woltmann",
    images: {
      type: 'slider',
      slides: [
        { src: "/images/25-exhibition-landscape_1.jpg", sizes: LS },
        { src: "/images/25-exhibition-landscape_2.jpg", sizes: LS },
      ],
    },
  },
  {
    id: 26,
    artistName: "Timmi B. Kromann",
    images: {
      type: 'alternative-layout',
      landscape: { src: "/images/26-exhibition-landscape_1.jpg", sizes: LS },
      portrait: { src: "/images/26-exhibition-portrait_2-new.jpg", sizes: LP_ALT },
    },
  },
]
