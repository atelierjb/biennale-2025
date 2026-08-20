import type { SiteCopy } from './types'

export const da: SiteCopy = {
  meta: {
    title: 'Biennalen for Kunsthåndværk & Design 2025',
    description:
      'Vi fejrer 30 år med Biennalen for Kunsthåndværk & Design. Jubilæumsudstillingen hylder både tradition og fornyelse.',
  },

  hero: {
    dates: '9. oktober – 22. februar',
    locationLines: ['glas – museet for glaskunst', 'strandvejen 8, 8400 ebeltoft'],
  },

  intro: {
    largeText:
      'Biennalen for Kunsthåndværk & Design 2025 inviterer til et indblik i, hvad der optager de danske formgivere netop nu. Her udfolder 26 kunsthåndværkere og designere aktuelle og eksperimenterende tilgange til proces, materiale og håndværk inden for glas, keramik, tekstil, papirhåndværk, sølvtøj og møbeldesign.',

    // The English version has five intro paragraphs; Danish has three. The two
    // missing ones are marked below and deliberately left out rather than
    // machine-translated — see TODO(P2) / TODO(P4).
    col1: [
      'Nye teknikker som geleret glas, 3D-print og digitalvævning møder traditionelle metoder som jacquardvævning, glaspustning og træarbejde. Moderne teknologier undersøges, og gamle metoder og udtryk genoptages, udfordres og nytænkes. Nogle værker blander medier, som når fotorealistisk vævning mixes med video. Andre værker demonstrerer måder at tænke design og kunsthåndværk cirkulært på, når gamle møbler dekonstrueres, eller restmaterialer fra industrien og egne tidligere projekter genopstår som nye værker.',
      // TODO(P2): Danish translation missing. EN: "The exhibits reflect how the
      // Biennale for Craft & Design embraces both new talents and experienced
      // practitioners. While some makers present techniques and crafts that they
      // have been refining for decades, others challenge those same techniques
      // with the new possibilities that digital tools have introduced into
      // artistic and craft practices."
    ],
    col2: [
      'Udstillingen markerer Biennalens 30-årsjubilæum og er kurateret og iscenesat af Kamma Rosa Schytte, Kasper Kyster, Josefine Krabbe og Lærke Ryom – stiftere af Ukurant.',
      // TODO(P4): Danish translation missing. EN: "The Biennale for Craft &
      // Design is a living archive of experiences, experiments and craftsmanship,
      // while Ukurant gives a voice to young designers who challenge the
      // established understanding of craft and design. Glas – Museum of Glass Art
      // has roots in the studio glass movement that arose during the 1960s…"
      'Ukurant, Glas og Danske Kunsthåndværkere & Designere samles om at udfordre, udvikle og formidle samtidens kunsthåndværk og design på Biennalen. Samarbejdet forener tradition og fornyelse med en fælles vision om at styrke håndværket, udforske materialernes potentiale og skabe nye perspektiver.',
    ],

    prizeLabel: 'Modtageren af Biennaleprisen 2025 er fundet',
    nomineesLabel: 'nominerede',
    winnerLabel: 'vinder af biennaleprisen 2025',
  },

  gallery: {
    title: 'Galleri:',
  },

  colophon: {
    supportLabel: 'dette års biennale er støttet af',
    fundingLogoAlt: 'Logoer for de fonde, der har støttet Biennalen 2025',
    credits: [
      { label: 'Arrangør',                              value: 'Danske Kunsthåndværkere & Designere' },
      { label: 'Udstillingssted',                       value: 'Glas — Museum for Glaskunst' },
      { label: 'Jury, kuratering og udstillingsdesign', value: 'Kamma Rosa Schytte, Kasper Kyster, Josefine Krabbe og Lærke Ryom – stiftere af Ukurant.' },
      { label: 'Priskomité',                            value: 'Karen Grøn, museumsdirektør på Trapholt, Rigetta Klint, redaktør af bookazinet HÅNDVÆRK, og designer Lise Vester' },
      { label: 'Foto',                                  value: 'Jacob Friis-Holm Nielsen og Kasper G. Palsnov' },
      { label: 'Oversættelse',                          value: 'Dorte Herholdt Silver' },
      { label: 'Grafisk design',                        value: 'Osvald Landmark' },
      { label: 'Hjemmeside',                            value: 'Jonas Baun' },
    ],
    copyright:
      '© copyright biennalen for kunsthåndværk og design 2025. alle rettigheder forbeholdt.',
    dateRange:
      'biennalen for kunsthåndværk og design 2025. 9. oktober 2025 — 22. februar 2026',
  },

  nav: {
    intro: 'introduktion',
    gallery: 'galleri',
    index: 'udstillere 2025',
    colophon: 'kolofon',
  },

  langSwitch: {
    linkLabel: 'Switch to English',
    iconAlt: '',
  },

  slider: {
    previous: 'Forrige billede',
    next: 'Næste billede',
    goTo: 'Gå til billede {n}',
  },
}
