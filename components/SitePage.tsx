import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import GallerySection from '@/components/GallerySection'
import IndexSection from '@/components/IndexSection'
import ColophonSection from '@/components/ColophonSection'
import { getExhibitors } from '@/lib/exhibitors'
import { getCopy } from '@/lib/copy'
import { galleryImages } from '@/lib/gallery-images'
import { PARTNER_LOGOS, BADGE, NOMINEES, WINNER } from '@/lib/constants'
import type { Lang } from '@/lib/i18n'

/**
 * The one page composition, for both languages. Everything that varies comes
 * from lib/copy; everything identical comes from lib/constants or the shared
 * data modules.
 */
export default function SitePage({ lang }: { lang: Lang }) {
  const copy = getCopy(lang)

  return (
    <PageTransition>
      <HeroSection
        dates={copy.hero.dates}
        locationLines={copy.hero.locationLines}
        partnerLogos={PARTNER_LOGOS}
      />

      <IntroSection
        largeText={copy.intro.largeText}
        col1={copy.intro.col1}
        col2={copy.intro.col2}
        badgeSrc={BADGE.src}
        badgeAlt={BADGE.alt}
        prizeLabel={copy.intro.prizeLabel}
        nomineesLabel={copy.intro.nomineesLabel}
        nominees={NOMINEES}
        winnerLabel={copy.intro.winnerLabel}
        winner={WINNER}
      />

      <GallerySection title={copy.gallery.title} images={galleryImages} />

      <IndexSection exhibitors={getExhibitors(lang)} sliderLabels={copy.slider} />

      <ColophonSection
        supportLabel={copy.colophon.supportLabel}
        fundingLogoAlt={copy.colophon.fundingLogoAlt}
        credits={copy.colophon.credits}
        copyright={copy.colophon.copyright}
        dateRange={copy.colophon.dateRange}
      />
    </PageTransition>
  )
}
