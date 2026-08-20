export type CreditEntry = {
  label: string
  value: string
}

export type NavId = 'intro' | 'gallery' | 'index' | 'colophon'

export type SiteCopy = {
  meta: {
    title: string
    description: string
  }
  hero: {
    dates: string
    /** Rendered one per line; was a JSX fragment with a <br />. */
    locationLines: string[]
  }
  intro: {
    largeText: string
    /** One entry per paragraph, so both languages stay structurally uniform. */
    col1: string[]
    col2: string[]
    prizeLabel: string
    nomineesLabel: string
    winnerLabel: string
  }
  gallery: {
    title: string
  }
  colophon: {
    supportLabel: string
    fundingLogoAlt: string
    credits: CreditEntry[]
    copyright: string
    dateRange: string
  }
  nav: Record<NavId, string>
  /** Accessible name for the language switcher, which is icon-only. */
  langSwitch: {
    linkLabel: string
    /** alt for the two icons is empty — they are decorative. */
    iconAlt: string
  }
  /** Accessible names for the per-exhibitor image slider controls. */
  slider: {
    previous: string
    next: string
    /** Template with an {n} placeholder — a plain string, because props
     *  crossing the server/client boundary cannot be functions. */
    goTo: string
  }
}
