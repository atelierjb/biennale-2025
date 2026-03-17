import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/HeroSection'
import IntroSection from '@/components/IntroSection'
import GallerySection from '@/components/GallerySection'
import IndexSection from '@/components/IndexSection'
import ColophonSection from '@/components/ColophonSection'
import { exhibitorsDa } from '@/lib/exhibitors-da'
import { galleryImages } from '@/lib/gallery-images'
import { PARTNER_LOGOS } from '@/lib/constants'

const DA_CREDITS = [
  { label: 'Arrangør',                              value: 'Danske Kunsthåndværkere & Designere' },
  { label: 'Udstillingssted',                       value: 'Glas — Museum for Glaskunst' },
  { label: 'Jury, kuratering og udstillingsdesign', value: 'Kamma Rosa Schytte, Kasper Kyster, Josefine Krabbe og Lærke Ryom – stiftere af Ukurant.' },
  { label: 'Priskomité',                            value: 'Karen Grøn, museumsdirektør på Trapholt, Rigetta Klint, redaktør af bookazinet HÅNDVÆRK, og designer Lise Vester' },
  { label: 'Foto',                                  value: 'Jacob Friis-Holm Nielsen og Kasper G. Palsnov' },
  { label: 'Oversættelse',                          value: 'Dorte Herholdt Silver' },
  { label: 'Grafisk design',                        value: 'Osvald Landmark' },
  { label: 'Hjemmeside',                            value: 'Jonas Baun' },
]

export default function DanishPage() {
  return (
    <PageTransition>
      <HeroSection
        dates="9. OkTober – 22. februar"
        location={<>glas – museet for glaskunst<br />strandvejen 8, 8400 ebeltoft</>}
        langHref="/en"
        langLabel="EN"
        partnerLogos={PARTNER_LOGOS}
      />

      <IntroSection
        largeText="Biennalen for Kunsthåndværk & Design 2025 inviterer til et indblik i, hvad der optager de danske formgivere netop nu. Her udfolder 26 kunsthåndværkere og designere aktuelle og eksperimenterende tilgange til proces, materiale og håndværk inden for glas, keramik, tekstil, papirhåndværk, sølvtøj og møbeldesign."
        col1="Nye teknikker som geleret glas, 3D-print og digitalvævning møder traditionelle metoder som jacquardvævning, glaspustning og træarbejde. Moderne teknologier undersøges, og gamle metoder og udtryk genoptages, udfordres og nytænkes. Nogle værker blander medier, som når fotorealistisk vævning mixes med video. Andre værker demonstrerer måder at tænke design og kunsthåndværk cirkulært på, når gamle møbler dekonstrueres, eller restmaterialer fra industrien og egne tidligere projekter genopstår som nye værker."
        col2={<>
          <p>Udstillingen markerer Biennalens 30-årsjubilæum og er kurateret og iscenesat af Kamma Rosa Schytte, Kasper Kyster, Josefine Krabbe og Lærke Ryom – stiftere af Ukurant.</p>
          <p>Ukurant, Glas og Danske Kunsthåndværkere & Designere samles om at udfordre, udvikle og formidle samtidens kunsthåndværk og design på Biennalen. Samarbejdet forener tradition og fornyelse med en fælles vision om at styrke håndværket, udforske materialernes potentiale og skabe nye perspektiver.</p>
        </>}
        badgeSrc="/images/30-years-white.svg"
        badgeAlt="30 years anniversary mark"
        prizeLabel="Modtageren af Biennaleprisen 2025 er fundet"
        nomineesLabel="nominerede"
        nominees="Emilie Palle Holm, Lone Løvschal & Lotte Westphael."
        winnerLabel="vinder af biennaleprisen 2025"
        winner="Lone Løvschal"
      />

      <GallerySection title="Gallery:" images={galleryImages} />

      <IndexSection exhibitors={exhibitorsDa} />

      <ColophonSection
        supportLabel="dette års biennale er støttet af"
        credits={DA_CREDITS}
        copyright="© copyright biennalen for kunsthåndværk og design 2025. alle rettigheder forbeholdt."
        dateRange="biennalen for kunsthåndværk og design 2025. 9. oktober 2025 — 22. februar 2026"
      />
    </PageTransition>
  )
}
