import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import GallerySection from '@/components/GallerySection'
import IndexSection from '@/components/IndexSection'
import ColophonSection from '@/components/ColophonSection'
import { exhibitorsEn } from '@/lib/exhibitors-en'
import { galleryImages } from '@/lib/gallery-images'
import { PARTNER_LOGOS } from '@/lib/constants'

const EN_CREDITS = [
  { label: 'Organizer',                            value: 'Danish Crafts & Design Association' },
  { label: 'Exhibition venue',                     value: 'Glas — Museum of Glass Art' },
  { label: 'Jury, curation and exhibition design', value: 'Kamma Rosa Schytte, Kasper Kyster, Josefine Krabbe and Lærke Ryom – founders of Ukurant.' },
  { label: 'Prize committee',                      value: 'Karen Grøn, Director of Trapholt Art Museum; Rigetta Klint, editor of the bookazine HÅNDVÆRK; and designer Lise Vester' },
  { label: 'Photography',                          value: 'Jacob Friis-Holm Nielsen and Kasper G. Palsnov' },
  { label: 'Translation',                          value: 'Dorte Herholdt Silver' },
  { label: 'Graphic design',                       value: 'Osvald Landmark' },
  { label: 'Website',                              value: 'Jonas Baun' },
]

export default function EnglishPage() {
  return (
    <PageTransition>
      <HeroSection
        dates="9 October – 22 February"
        location={<>Glas – Museum of Glass Art<br />Strandvejen 8, 8400 Ebeltoft</>}
        langHref="/"
        langLabel="DA"
        partnerLogos={PARTNER_LOGOS}
      />

      <IntroSection
        largeText="The Biennale for Craft & Design 2025 offers a look at what is preoccupying Danish makers and designers right now. The exhibition presents 26 current and experimental approaches to process, material and crafts in the fields of glass, ceramics, textile, paper craft, jewellery and furniture."
        col1={<>
          <p>New techniques, such as gelled glass, 3D printing and digital weaving, meet traditional methods, such as jacquard weaving, glass blowing and woodcraft. Modern technologies are explored, and old methods and expressions are resumed, challenged and reinvented. Some pieces mix media, for example blending photo-realistic weaving with video. Others demonstrate circular approaches to design and craft in deconstructing used furniture or reviving residual materials from industry and previous projects in new pieces.</p>
          <p>The exhibits reflect how the Biennale for Craft & Design embraces both new talents and experienced practitioners. While some makers present techniques and crafts that they have been refining for decades, others challenge those same techniques with the new possibilities that digital tools have introduced into artistic and craft practices.</p>
          <p>This exhibition marks the 30th anniversary of the Biennale and was curated and designed by Kamma Rosa Schytte, Kasper Kyster, Josefine Krabbe and Lærke Ryom – the founders of Ukurant.</p>
        </>}
        col2={<>
          <p>The Biennale for Craft & Design is a living archive of experiences, experiments and craftsmanship, while Ukurant gives a voice to young designers who challenge the established understanding of craft and design. Glas – Museum of Glass Art has roots in the studio glass movement that arose during the 1960s and enabled artists and makers to work with glass on a smaller scale outside an industrial context. The movement was driven by curiosity, knowledge sharing and a strong professional community – an approach that paved the way for new artistic expressions and understandings of materials.</p>
          <p>Ukurant, Glas and Danish Crafts & Design Association jointly challenge, develop and present contemporary crafts and design at the Biennale. This collaboration combines tradition and renewal with a shared vision of promoting crafts, exploring the potential of materials and generating new perspectives through a collective effort.</p>
        </>}
        badgeSrc="/images/30-years-white.svg"
        badgeAlt="30 years anniversary mark"
        prizeLabel="The award committee has selected the recipient of the 2025 Biennale Award."
        nomineesLabel="nominees"
        nominees="Emilie Palle Holm, Lone Løvschal & Lotte Westphael."
        winnerLabel="winner of the 2025 prize"
        winner="Lone Løvschal"
      />

      <GallerySection title="Gallery:" images={galleryImages} />

      <IndexSection exhibitors={exhibitorsEn} />

      <ColophonSection
        supportLabel="this years biennale is generously supported by"
        credits={EN_CREDITS}
        copyright="© copyright biennalen for arts and craft 2025. all rights reserved."
        dateRange="biennalen for craft & design 2025. 9 october 2025 — 22 february 2026"
      />
    </PageTransition>
  )
}
