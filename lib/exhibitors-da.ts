export type SlideImage = {
  src: string
  alt: string
  sizes: string
}

export type ExhibitorImages =
  | { type: 'slider'; isPortrait?: boolean; slides: SlideImage[] }
  | { type: 'portrait-pair'; slides: SlideImage[] }
  | { type: 'alternative-layout'; landscape: SlideImage; portrait: SlideImage }

export type Exhibitor = {
  id: number
  artistName: string
  workTitle: string
  materials: string
  dimensions: string
  description: string
  images: ExhibitorImages
}

const LS = '(max-width: 2226px) 100vw, 2226px'
const LP = '(max-width: 1200px) 100vw, 1200px'
const LP_NEW = '(max-width: 900px) 100vw, 900px'
const LP_ALT = '(max-width: 780px) 100vw, 780px'

export const exhibitorsDa: Exhibitor[] = [
  {
    id: 1,
    artistName: 'Anna Søgaard & Tronhjem Rømer',
    workTitle: 'Lysende Lag',
    materials: 'Tekstiltryk, træ, stål, LED og wire',
    dimensions: '(600 x 700 x 50 mm) x 3',
    description:
      'Projektet består af tre identiske værker. Værkerne undersøger relationen mellem farve og lys gennem et transformativt vægtprincip, hvor lag af tekstiler forskydes, og nye kompositioner dannes. Her opstår en sanselig oplevelse, når lyset skaber nye farveblandinger, og intensiteten ændrer sig over tekstilets flade. Fire lag tekstil er monteret over en svævende konstruktion med integreret lys.\n \nGunnem en tværfaglig udveksling har Anna Søgaard & Tronhjem Rømer undersøgt farvefænomener og vægtprincipper, der får værkets elementer til at afspejle og fremhæve hinanden. Tekstil og konstruktion er forbundne i samspillet mellem de forskellige perspektiver.\n\nTak til Frederik Gustav for teknisk vejledning.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/1-exhibition-landscape_1.jpg', alt: 'LUMINOUS LAYERS by Anna Søgaard & Trondhjem Rømer', sizes: LS },
        { src: '/images/1-exhibition-landscape_2.jpg', alt: 'LUMINOUS LAYERS by Anna Søgaard & Trondhjem Rømer', sizes: LS },
      ],
    },
  },
  {
    id: 2,
    artistName: 'Elly Feldstein',
    workTitle: 'De aftryk vi sætter',
    materials: 'Egetræ, teaktræ, rustfri stål og genanvendt aluminium',
    dimensions: 'Stol: 1350 x 340 x 450 mm\nBord: 720 x 600 x 430 mm\nLampe: 540 x 250 x 180 mm',
    description:
      'I en verden, der bevæger sig alt for hurtigt, og hvor teknologiens indflydelse konstant øges, undersøger værket de aftryk, vi sætter på vores objekter. Værket viser værdien i aflagte materialer ved at fremhæve deres iboende historie, håndværk og materialitet.\n\nElly Feldstein anvender AI-teknologien i designprocessen for at optimere materialebrug og beregne klimaaftryk. Værket består af tre sanselige hverdagsobjekter, der formidler både de fysiske og klimamæssige aftryk, vi sætter.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/2-exhibition-portrait_1-new.jpg', alt: 'THE TRACES WE MAKE by Elly Feldstein', sizes: LP_NEW },
        { src: '/images/2-exhibition-portrait_2-new.jpg', alt: 'THE TRACES WE MAKE by Elly Feldstein', sizes: LP_NEW },
      ],
    },
  },
  {
    id: 3,
    artistName: 'Emilie Palle Holm',
    workTitle: 'WOVEN VOXEL',
    materials: 'Bomuld og polyester',
    dimensions:
      'Værk 01: WOVEN VOXEL [ 6.9.4 ]\nH: 2200 mm, L : 1500 mm, D: 35 mm\n\nVærk 02: WOVEN VOXEL [ 5.8.12 ]\nH: 2200 mm, L: 1500 mm, D: 1200 mm',
    description:
      'Jacquardvævning er en pixelbaseret (picture element) tekstilteknik. Hver enkelt pixel repræsenterer sammenvævningen af en kæde- og en skudtråd. Ligesom traditionelle vævede tekstiler er pixels bundet til to dimensioner. I "Woven Voxel" udfordrer Emilie Palle Holm innovativt denne kontinuitet ved at udvide jacquardvævede strukturer i den tredje dimension. Herved frembringer hun "Woven Voxel" (volume element) og ændrer det vævede format fra flade til form.\n\nVed at indlejre formtransformerende mekanismer direkte i sammenvævningen af kæde og skud skaber Emilie Palle Holm materiale og form simultant i væven. Ved opklipning af specifikke kædeflotteringer udfoldes de todimensionelle strukturer til rumlige tekstilformationer, hvor visuelle form- og farveelementer understøtter værkernes fysiske dybde. "Woven Voxel" opererer i grænselandet mellem to og tre dimensioner og afdækker vævens rumlige potentiale.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/3-exhibition-landscape_1.jpg', alt: 'WOVEN VOXEL by Emilie Palle Holm', sizes: LS },
        { src: '/images/3-exhibition-landscape_2.jpg', alt: 'WOVEN VOXEL by Emilie Palle Holm', sizes: LS },
      ],
    },
  },
  {
    id: 4,
    artistName: 'Et Arrangement',
    workTitle: '(sn) skrin BORE',
    materials: 'Tin, overskudsmateriale og kasserede ødelagte tingenstande.',
    dimensions: '70 x 210 x 290 mm\n3,844 kg',
    description:
      'Med "(sn) skrin BORE" undersøger Et Arrangement vores forhold til ukontrollerbare processer gennem borebillens livscyklus, der efterlader mønstre under barken. Sporene symboliserer naturens langsomme og skjulte transformationer. Idéen om et skrin – et objekt, der traditionelt bevarer – som både en genstand og en metafor stiller spørgsmål til  vores behov for kontrol. Værket peger på, at det er i mødet med det ukontrollerbare, at vi lærer at værdsætte livets skjulte, men betydningsfulde processer.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/4-exhibition-landscape_1.jpg', alt: '(SN) SHRINE BORE by Et Arrangement', sizes: LS },
        { src: '/images/4-exhibition-landscape_2.jpg', alt: '(SN) SHRINE BORE by Et Arrangement', sizes: LS },
      ],
    },
  },
  {
    id: 5,
    artistName: 'Grethe Sørensen',
    workTitle: 'TRANSLUCENS',
    materials: 'Jacquardvævet tæppe med videoprojektion (3 min. loop)\n\nTrevira CS, uld, viskose, økologisk bomuld og polyester',
    dimensions: '1650 x 2850 mm',
    description:
      'Lys er en vigtig inspirationskilde, og sollys og naturen indgår ofte i Grethe Sørensens arbejder. Naturen er i evig bevægelse og forandring, intet ligger nogensinde helt stille. Sollysets brydning i det lave vand tegner levende lysmønstre på havbunden, refleksioner af havets evige bevægelser – naturskabte, universelle mønstre og former.\n \nVideooptagelser af lysets mønstre og bevægelser er udgangspunkt for projektet. Tæppets motiv, et stillbillede fra videoen, er bearbejdet digitalt til pixels i grundfarver. I vævningen erstatter Grethe Sørensen hver enkelt pixel i det digitale motiv med en tråd i samme farve: Motivet genskabes tråd for tråd af garn i de samme grundfarver, så det vævede tæppe bibeholder karakteren af det æteriske lys.\n\nEt meditativt forløb af lysets bevægelser i slowmotion er bearbejdet til et tre minutters videoloop, der projiceres på vævningen. Videobilledet toner frem og kører i et langsomt flow, til det toner væk, og tæppet står alene – fuldt oplyst.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/5-exhibition-landscape_1.jpg', alt: 'TRANSLUCENCE by Grethe Sørensen', sizes: LS },
        { src: '/images/5-exhibition-landscape_2.jpg', alt: 'TRANSLUCENCE by Grethe Sørensen', sizes: LS },
      ],
    },
  },
  {
    id: 6,
    artistName: 'Indio Möglich',
    workTitle: 'Aerodynamics is for those who can\'t build engines',
    materials: 'Glas og bilmaling',
    dimensions: 'H: 230 mm, B: 180 mm, bredde i bund: 60 mm\nH: 200 mm, B: 185 mm, bredde i bund: 60 mm',
    description:
      'Vaserne er inspireret af Indio Möglichs besættelse af Ferrari. Ligesom Ferrari er vasernes amforaform en klassiker. Det er stil. Det er elegance. Det er kvalitet. Det er noget, vi længes efter at eje. Indio Möglich mener, at vi med produkter af ægte kvalitet og æstetik kan bekæmpe overforbrug. Værket er en blanding af amforavasens klassiske form og Ferraris hastighed og strømlinede, slanke design. Vaserne er blæst glas med skulpturerede håndtag. De er sprøjtemalet med bilmaling.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/6-exhibition-portrait_1.jpg', alt: "Aerodynamics is for those who can't build engines by Indio Möglich", sizes: LP },
        { src: '/images/6-exhibition-portrait_2.jpg', alt: "Aerodynamics is for those who can't build engines by Indio Möglich", sizes: LP },
        { src: '/images/6-exhibition-portrait_3.jpg', alt: "Aerodynamics is for those who can't build engines by Indio Möglich", sizes: LP },
      ],
    },
  },
  {
    id: 7,
    artistName: 'Jens Ole Árnason',
    workTitle: 'Melting Material',
    materials: 'Tekstil og tråd',
    dimensions: 'H: 2500 mm, B: 1000 mm, D: 1000 mm',
    description:
      '"Melting Material" undersøger grænselandet mellem det hårde og det bløde, det faste og det flydende. Med udgangspunkt i lokationen for Biennalen er værket inspireret af glas – et materiale, der balancerer mellem det skrøbelige og det formbare, det statiske og det bevægelige. Gennem tekstile teknikker som håndsyning og drapering oversætter Jens Ole Árnason glassets karakter til bløde strukturer, der tilsyneladende smelter, bølger eller stivner i bevægelse. Målet er at se, hvordan et tekstilt materiale kan indfange glassets dobbelte natur som både en solid flade og et stof i konstant potentiel forvandling.\n \n"Melting Material" inviterer til sanselig fordybelse og eftertanke over materialers iboende egenskaber, vores egen oplevelse af materialitet, forandring og balance, og hvordan kunsthåndværk på tværs af materialer og genrer kan inspirere til nye kontemporære værker.\n \nÁrnason arbejder udelukkende med resttekstiler. "Melting Material" er skabt i resttekstil fra elbilfirmaet Polestar.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/7-exhibition-portrait_1-new.jpg', alt: 'MELTING MATERIAL by Jens Ole Árnason', sizes: LP_NEW },
        { src: '/images/7-exhibition-portrait_2.jpg', alt: 'MELTING MATERIAL by Jens Ole Árnason', sizes: LP },
      ],
    },
  },
  {
    id: 8,
    artistName: 'Karen Lise Krabbe',
    workTitle: 'GELÉRET GLAS – EN NY GLASTEKNIK',
    materials: 'Glas',
    dimensions: '',
    description:
      'Karen Lise Krabbe ønsker at formidle sin egen geléret glas-teknik, så både udøvende kunstnere og kunsthåndværkere og ikkeudøvende kan få indblik i metoden og inspireres.\n\nKrabbes arbejde med tværgående fagprocesser, blandt andet med havets makroalger, har resulteret i den nye glasstøbeteknik: Glas, vand og alginat eksponeres for en CaCl2-opløsning. Herved gélerer glasmassen i en kemisk krydsbindingsproces, og glasset kan tekstilt manipuleres koldt som tråd, flader eller 3D-former. Nærmeste familie er den i Danmark ikke så brugte pâte de verre-metode, der går tilbage til oldtidens Egypten. Med det gélerede glas har Krabbe nytænkt metoden.\n\nKrabbes mangeårige research vedrørende havet hænger tæt sammen med hendes glasværkers udvikling, form og udtryk. Associativt og intuitivt.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/8-exhibition-landscape_1.jpg', alt: 'GELLED GLASS by Karen Lise Krabbe', sizes: LS },
        { src: '/images/8-exhibition-landscape_2.jpg', alt: 'GELLED GLASS by Karen Lise Krabbe', sizes: LS },
      ],
    },
  },
  {
    id: 9,
    artistName: 'Krestine Harboe',
    workTitle: 'Phallus impudicus',
    materials: 'Keramik',
    dimensions: 'H: 1050 mm,  B: 290 mm, D: 320 mm',
    description:
      'Værket består af to keramiske skulpturer, samlet til én helhed. Inspireret af vølvernes sejd og svamperigets symbolik undersøger Krestine Harboe menneskets forhold til natur, etik og hjerteenergi. Titlen – der refererer til en svampeart med både et latinsk og et folkeligt navn – peger med et glimt i øjet på den kulturelle overgang, hvor kvindelig naturviden blev fortrængt.\n\nSkulpturen er skabt i genbrugsler og gennem drejning, håndmodellering og tekstil, der brændes væk og efterlader en sanselig og kompleks overflade. Glasuren er håndfremstillet af råmaterialer fra hele verden og brændt ved høj temperatur og hovedsageligt med overskudsstrøm. Da ovnen kun rummer 68 cm, er skulpturerne brændt hver for sig og efterfølgende samlet.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/9-exhibition-portrait_1.jpg', alt: 'PHALLUS IMPUDICUS by Krestine Harboe', sizes: LP },
        { src: '/images/9-exhibition-portrait_2.jpg', alt: 'PHALLUS IMPUDICUS by Krestine Harboe', sizes: LP },
      ],
    },
  },
  {
    id: 10,
    artistName: 'Lasse Sylvest Lilleør',
    workTitle: 'Layer 8549',
    materials: '3D-print PLA, resin og blæk',
    dimensions: 'H: 850 mm, B: 550 mm, L: 500 mm',
    description:
      '"Layer 8549" fluktuerer mellem håndens arbejde og digitalt arbejde. Gennem kompleks organisk geometri forfiner Lasse Sylvest Lilleør det æstetiske udtryk af 3D-print. Stolen tegnes manuelt i 3D-programmet Rhino, hvor en klassisk stoleform transformeres ved at forskyde og forbinde kugleled. Hver del printes og coates derefter i hånden med resin. Det fremhæver lagene i de horisontale overflader og kamuflerer dem i de lodrette.\n \nTil sidst samles delene med synlige samlinger, der peger på stolens produktionsmetode.Værket skabes i en langsom og sanselig proces, men produceres med en teknologi, udviklet til masseproduktion.Med stolen vil Lilleør vise, at 3D-print kan bruges til at skabe formfuldendte objekter – ikke kun som et prototypeværktøj – og samtidig anerkende de digitale teknologier og værktøjer, som han bruger i sin proces.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/10-exhibition-portrait_1.jpg', alt: 'LAYER 8549 by Lasse Sylvest Lilleør', sizes: LP },
        { src: '/images/10-exhibition-portrait_2.jpg', alt: 'LAYER 8549 by Lasse Sylvest Lilleør', sizes: LP },
      ],
    },
  },
  {
    id: 11,
    artistName: 'Laura Sonne Lund',
    workTitle: 'Glasskoven',
    materials: 'Pustet glas med sandblæst overflade',
    dimensions:
      'Samlet (ca.): L: 1500 mm, B: 500 mm\n\nIndividuelle mål: H: 400 mm, B: 120 mm / H: 310 mm,  B: 160 mm / H: 440 mm, B: 180 mm / H: 250 mm, B: 200 mm / H: 460 mm, B: 140 mm / H: 420 mm, B: 190 mm / H: 365 mm, B: 135 mm / H: 440 mm, B: 175 mm',
    description:
      '"Glasskoven" er en hyldest til skovbunden og forbindelsen mellem glasset og skovene. Forbindelsen er i første omgang materiel: Skovene har dannet rammen om udviklingen af glaspusterindustrien i Skandinavien og Europa. Og mange steder kan man finde små stykker waldglas med samme grønlige skær som det jernholdige kvarts i skovbunden, der blev blandet i glasmengen sammen med asken fra træets afbrænding i ovnene.\n\n"Glasskoven" kredser om det punkt, hvor kontraster mødes: det kunstige og det naturlige, det transparente og det solide. Farverne imiterer waldglassets grønlige skær, og den matterede overflade skjuler glassets transparens. Laura Sonne Lund inviterer os til at gå til objekterne med samme nysgerrighed, som når man undersøger skovbundens landskab af hulrum og snoede rødder.',
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/11-exhibition-landscape_1.jpg', alt: 'GLASSKOVEN af Laura Sonne Lund', sizes: LS },
      portrait: { src: '/images/11-exhibition-portrait_2-new.jpg', alt: 'GLASSKOVEN af Laura Sonne Lund', sizes: LP_ALT },
    },
  },
  {
    id: 12,
    artistName: 'Lea Nordstrøm',
    workTitle: 'Repeated pattern no 1',
    materials: 'Indfarvet porcelæn',
    dimensions: '900 x 2500 x 50 mm',
    description:
      'Lea Nordstrøm har arbejdet med at skabe et sanseligt og æstetisk udtryk. Den visuelle inspiration udspringer af måden, vi aflæser mønstre på, og hvordan det enkelte motiv indgår som en del af en større helhed og bidrager til en rytmisk komposition. Beskuerens blik bevæger sig mellem helheden, de små detaljer, rytmen og farvernes graduering og nuancer.\n\nVed at gentage den samme form fremhæves variationerne i håndens arbejde og porcelænets stoflige karakter. Det skaber en levende dynamik i en opsætning, der ellers kunne fremstå statisk.\n\nPorcelænet er strakt til det yderste, og de fine linjer og negative rum tillader, at man kan se igennem lagene. Det tilfører en vis dybde og et forfinet udtryk, som i kombination med værkets størrelse og mange dele giver en mere monumental fremtoning.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/12-exhibition-portrait_1.jpg', alt: 'REPEATED PATTERN NO 1 by Lea Nordstrøm', sizes: LP },
        { src: '/images/12-exhibition-portrait_2.jpg', alt: 'REPEATED PATTERN NO 1 by Lea Nordstrøm', sizes: LP },
      ],
    },
  },
  {
    id: 13,
    artistName: 'Lone Løvschal',
    workTitle: 'Fluktuerende skeer',
    materials: 'Sterling sølv',
    dimensions: 'Alle skeer har udgangspunkt i en sølvbarre på 10 x 10 x 70 mm',
    description:
      'For at omfavne en ny livsfase, perimenopausen, har Lone Løvschal sluppet kontrollen og ladet håndværket og en mulig guddommelig eller hormonel indgriben råde. Hun har overgivet sig til sine følelsers vold, til hammerens umiddelbare æstetik og til mange års erfaring som sølvsmed med hang til skeer og lækre linjer.\n \nMed samme materielle udgangspunkt har Løvschal smedet 30 skeer over en månecyklus på 30 dage uden forudgående skitser. Fluktuerende hormoner afstedkom et væld af kropslige og psykiske ændringer, og det påvirkede i høj grad hendes arbejdsliv som kunsthåndværker. Planlægning og en gennemarbejdet designproces viste sig udfordrende, i takt med at østrogenniveauet faldt, og med projektet var det en gave hver dag at have en fast opgave, der på grund af tidspresset blev umiddelbar og legende.\n \nProjektet har hjulpet Løvschal til at genfinde glæden ved arbejdet, og den legende tilgang tager hun med sig videre.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/13-exhibition-landscape_1.jpg', alt: 'FLUCTUATING SPOONS by Lone Løvschal', sizes: LS },
        { src: '/images/13-exhibition-landscape_2.jpg', alt: 'FLUCTUATING SPOONS by Lone Løvschal', sizes: LS },
      ],
    },
  },
  {
    id: 14,
    artistName: 'Lotte Westphael',
    workTitle: 'MØNSTERVÆRKER',
    materials: 'Fem cylinderformede krukker i indfarvet porcelæn\n\nHåndlavet i pladeteknik',
    dimensions: 'D: 270-370 mm, H: 180-320 mm',
    description:
      'Lotte Westphaels værkserie i porcelæn rummer en fortælling om tid i en interferens mellem et keramisk og tekstilt univers.\n \nMed inspiration fra vævningens systematik og kunstneren Agnes Martins vibrerende blyantslinjer undersøger Westphael, hvordan rytme og mønstre kan integreres i porcelænets materialitet. Mønstrene fungerer ikke blot som dekoration, men som en indre logik i værkernes opbygning.Westphael søger en vibrerende følsomhed i både linjer og farver, og hun er optaget af farveforløb, som synes at flyde i en poetisk fortælling rundt om cylinderens kurve.\n \nFarverne er indarbejdet i selve porcelænsmassen med op til 50 nuancer, som er afvejet, æltet og samlet i lag på lag. 100 % low-tech.\n \nProcessen er nøje planlagt og rummer samtidig plads til materialets egen bevægelse under brændingen. Teknikken er dermed både en metode og en del af værkernes æstetik.\n \nDe fem værker resonerer den poetik.',
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/14-exhibition-landscape_1.jpg', alt: 'MØNSTERVÆRKER af Lotte Westphael', sizes: LS },
      portrait: { src: '/images/14-exhibition-portrait_2-new.jpg', alt: 'MØNSTERVÆRKER af Lotte Westphael', sizes: LP_ALT },
    },
  },
  {
    id: 15,
    artistName: 'Louise Bitsch',
    workTitle: 'ORNO',
    materials: 'Anodiseret aluminium',
    dimensions: 'H: 740 mm, B: 580 mm, D: 580 mm',
    description:
      '"ORNO" er en visuel og taktil undersøgelse af samspillet mellem fortid, nutid og fremtid, hvor traditionelt håndværk møder moderne industriel teknologi. Inspireret af den delikate teknik bag en kniplet dug skaber Louise Bitsch en genkendelig silhuet og form, der bærer på en historisk fortælling gennem et moderne materiale som aluminium. Bordet etablerer en stærk visuel og følelsesmæssig forbindelse til fortiden, samtidig med at Louise Bitsch anvender nutidens teknologier til at fremstille noget nyt.\n \nVærket udfordrer masseproduktionens æstetik ved at demonstrere, hvordan teknologi kan forny gamle håndværkstraditioner. Og ikke mindst, hvordan de to verdener kan eksistere i harmoni, når man bruger moderne teknologi til at videreføre frem for at erstatte arven fra håndværket.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/15-exhibition-portrait_1-v2.jpg', alt: 'ORNO by Louise Bitsch', sizes: LP },
        { src: '/images/15-exhibition-portrait_2.jpg', alt: 'ORNO by Louise Bitsch', sizes: LP },
      ],
    },
  },
  {
    id: 16,
    artistName: 'Lærke Laura Nielsen',
    workTitle: 'Tactile Table',
    materials: 'Mundblæst glas',
    dimensions:
      '"Tassa cum vase". H: 450 mm, Ø: 285 mm\n"Tassa". H: 280 mm, B: 380 mm, D: 350 mm\n"Candelabrum". H: 580 mm, B: 350 mm, D: 180 mm\n"Cloche I". "H: 270 mm, Ø: 230 mm\n"Cloche II". H: 390 mm, Ø: 200 mm\n"Tabula Tortae". H: 135 mm, Ø: 330 mm\n"Lagena". H: 265 mm, B: 180 mm, D: 140 mm\n"Calix". H: 140 mm, B: 145 mm, D: 115 mm\n"Patera". H: 130 mm, Ø: 300 mm',
    description:
      '"Tactile Table" udforsker nye perspektiver på glashåndværk ved at transformere traditionelle glasobjekter til en sanselig oplevelse. Lærke Laura Nielsen fremhæver de uventede æstetiske kvaliteter i glaspustning og udfordrer den traditionelle opfattelse af glashåndværk og materialets livscyklus.\n \nDe klassiske elementer i en bordopstilling får nyt appetitvækkende liv gennem bevidst indarbejdede fejl og skår fra glaspustningen. I stedet for et præcist figurativt udtryk anvender Nielsen tilfældige restelementer til at skabe abstrakte, dekorative former, der inviterer beskueren til en personlig fortolkning.\n \nHåndværket får en eksperimentel dimension, der tilbyder en ny fortolkning af glas som materiale: Essensen af materialet værdsættes, livscyklus forlænges, og frem træder de æstetiske kvaliteter ved glas som noget sanseligt, kødeligt, ubehændigt og opulent.',
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/16-exhibition-landscape_1.jpg', alt: 'TACTILE TABLE af Lærke Laura Nielsen', sizes: LS },
      portrait: { src: '/images/16-exhibition-portrait_2-new.jpg', alt: 'TACTILE TABLE af Lærke Laura Nielsen', sizes: LP_ALT },
    },
  },
  {
    id: 17,
    artistName: 'Malene Hartmann Rasmussen',
    workTitle: 'Viper Weave #11',
    materials: 'Unikaværk i stentøj',
    dimensions: '95 x 470 x 505 mm',
    description:
      '"Viper Weave" er åben for beskuerens egne associationer og fortolkninger. Værket er en invitation til at se og tænke.\n\nVærkserien tager afsæt i den franske renæssancekeramiker Bernard Palissys oeuvre. Langs flodbredden indsamlede Palissy frøer, insekter og slanger og brugte dem som modeller til de "Rustiques Figulines", som Malene Hartmann Rasmussen studerede under et ophold på Victoria and Albert Museum i 2018.\n\nAnimismen er central i hendes virke: idéen om, at dyr, planter og landskaber er sansende og floder, bjerge og klipper besjælede.\n \nOvergange mellem tilstande, både intellektuelt og formmæssigt, optager Hartmann Rasmussen, der ofte fortolker dem skulpturelt i dyre- og plantehybrider. Umiddelbart kan værkerne synes tilforladelige, men viser sig dog snart som absurde genstande, gennemsyrede af en mørk fortælling.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/17-exhibition-landscape_1.jpg', alt: 'VIPER WEAVE #11 by Malene Hartmann Rasmussen', sizes: LS },
        { src: '/images/17-exhibition-landscape_2.jpg', alt: 'VIPER WEAVE #11 by Malene Hartmann Rasmussen', sizes: LS },
      ],
    },
  },
  {
    id: 18,
    artistName: 'Maria Bang Espersen',
    workTitle: 'IN SEARCH OF SOMETHING ELSE / hope is a powerful thing',
    materials: 'Glas',
    dimensions: '460 x 400 x 750 mm, 15.8 kg /\nGlas, 330 x 360 x 770 mm, 9 kg',
    description:
      'Skulpturerne er inspireret af de arkitektoniske udsmykninger i glasmuseets ældste del, som oprindeligt er bygget til at være toldhus. Søjlen, der symboliserer magt, styrke og stabilitet, er i bygninger fra forrige århundrede oftest blot en imitation af et ideal, da funktionen som bærende element er forsvundet.\n‍\nVærkerne leger med tanken om en ornamentik, som er sluppet løs – joniske volutter, der har forladt deres plads øverst oppe og nu er på vej et andet sted hen. De er gået off script på jagt efter noget andet – nye muligheder, en anderledes fremtid eller et ønske om at etablere nye forbindelser?\n\nI 2011 udviklede Maria Bang Espersen en teknik, hvor hun strækker og folder varmt glas, til en trådstruktur opstår på overfladen. Teknikken kræver, at hun arbejder hurtigt og yderst fokuseret i de få sekunder, der er til at forme glasset. Hun har dog aldrig fuld kontrol, da glassets egenrådighed og tyngdekraften er med til at afgøre resultatet.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/18-exhibition-portrait_1.jpg', alt: 'IN SEARCH OF SOMETHING ELSE / hope is a powerful thing by Maria Bang Espersen', sizes: LP },
        { src: '/images/18-exhibition-portrait_2.jpg', alt: 'IN SEARCH OF SOMETHING ELSE / hope is a powerful thing by Maria Bang Espersen', sizes: LP },
      ],
    },
  },
  {
    id: 19,
    artistName: 'Maria Sparre-Petersen',
    workTitle: 'Epistemic Artefact CK8_2024_07',
    materials: 'Regenereret vinduesglas med overfladebehandling',
    dimensions: '140 x 150 x 330 mm',
    description:
      'Når vi har brugt alt verdens sand til at bygge huse og veje i glas og beton, og vi ikke længere kan lave glas af jomfruelige materialer, så må glaskunstnere vænne sig til at arbejde med det forhåndenværende glas. Maria Sparre-Petersens undersøgelser omhandler, hvordan man kan indarbejde bæredygtige principper i kunstneriske glasformningsprocesser. Konkret ved at bruge skrottede vinduer i stedet for glastyper, der er udviklet særligt til kunstproduktion. Vinduesglassets materialeegenskaber er anderledes end kunstglastyperne. I dag er vinduer eksempelvis forsynet med usynlige belægninger, der optimerer energiforbruget i bygningerne. Belægningerne reagerer med glasset i den varmekemiske fusing-proces og giver uforudsigelige udtryk i artefakterne. Det er de muligheder, der vækker Sparre-Petersens nysgerrighed.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/19-exhibition-landscape_1.jpg', alt: 'Epistemic Artefact CK8_2024_07 by Maria Sparre-Petersen', sizes: LS },
        { src: '/images/19-exhibition-landscape_2.jpg', alt: 'Epistemic Artefact CK8_2024_07 by Maria Sparre-Petersen', sizes: LS },
      ],
    },
  },
  {
    id: 20,
    artistName: 'Marie Holst',
    workTitle: 'CRY ME A RIVER',
    materials: 'Uld, bomuld og nylon',
    dimensions: 'H: 750 mm, B: 6500 mm, D: 70 mm',
    description:
      '"CRY ME A RIVER" består af seks kronologiske scener om havet. Værket indledes af en prolog, som efterfølges af fem scener, der fungerer både som individuelle fortællinger og som et samlet narrativ med referencer til havet som kulturelt, historisk og politisk motiv.\n \n"CRY ME A RIVER" er en oversættelse af klassisk gobelinvævning til den digitale vævs præmis. Her undersøger Marie Holst billedvævning som medie til at formidle nutidige tematikker og problemstillinger.\n \nVærket er håndvævet på en digital TC2-væv og kombinerer blanke og matte garner, som i samspil skaber en overflade med skiftende reliefvirkninger, afhængigt af lysforholdene.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/20-exhibition-landscape_1.jpg', alt: 'CRY ME A RIVER by Marie Holst', sizes: LS },
        { src: '/images/20-exhibition-landscape_2.jpg', alt: 'CRY ME A RIVER by Marie Holst', sizes: LS },
        { src: '/images/20-exhibition-landscape_3.jpg', alt: 'CRY ME A RIVER by Marie Holst', sizes: LS },
      ],
    },
  },
  {
    id: 21,
    artistName: 'Morten Klitgaard',
    workTitle: 'TERRÆN #0125, TERRÆN #0225, TERRÆN #0325',
    materials: 'Glas, farvepigment, sort kvarts, kobberoxid, granit, silt, aske',
    dimensions: 'H: 310 mm, B: 220 mm\nH: 270 mm, B: 190 mm\nH: 340 mm, B: 200 mm',
    description:
      'Glasset spirer ud af en dyb og konstant fascination af naturens uendelige kompleksitet og skønhed – en symfoni af former, strukturer og rytmer, som Morten Klitgaard søger at genskabe og fortolke. I en tid, hvor mange oplever en stigende adskillelse fra naturen og dens urkraft, føler han et presserende kald til at forstærke vores forbindelse til den. Ønsket er at visualisere de kontrasterende mønstre, der opstår, når naturens flydende organiske former møder menneskeskabte linjer og strukturer.\n\nKlitgaard anvender glas som medie. Et materiale, der i sin varme og opblæste tilstand bliver både formbart og sart, levende og føjeligt. Med små, nøje udvalgte naturgenstande – små stempler fra den vilde natur – skaber han teksturer og mønstre på glasset. På den måde opstår en poetisk harmoni mellem det naturlige og det kultiverede, mellem det bløde og det faste, mellem det, der formes, og det, der fastholdes.',
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/21-exhibition-landscape_1.jpg', alt: 'TERRÆN #0125, TERRÆN #0225, TERRÆN #0325 af Morten Klitgaard', sizes: LS },
      portrait: { src: '/images/21-exhibition-portrait_2-new.jpg', alt: 'TERRÆN #0125, TERRÆN #0225, TERRÆN #0325 af Morten Klitgaard', sizes: LP_ALT },
    },
  },
  {
    id: 22,
    artistName: 'Oberdoerfer & Krebs',
    workTitle: 'Human Layers',
    materials: 'Polylaktisk syre (PLA)',
    dimensions: 'H: 900 mm, B: 450 mm, D: 450 mm',
    description:
      '"Human Layers" er en 3D-printet vase skabt i spændingsfeltet mellem tradition og teknologi. Værket er inspireret af den klassiske tekstilindfarvningsteknik ikat. Projektet undersøger, hvordan historiske kunsthåndværk kan genfortolkes gennem moderne fremstillingsmetoder og algoritmiske systemer. I samspillet mellem menneske og maskine opstår et nyt æstetisk udtryk, hvor ornamentik og metode smelter sammen. Vasen er Oberdoerfer & Krebs\' bud på, hvordan kunsthåndværk kan finde relevans i en digital tidsalder, hvor det industrielle og det håndlavede ikke er modsætninger, men samarbejdspartnere.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/22-exhibition-portrait_1.jpg', alt: 'HUMAN LAYERS by Oberdoerfer & Krebs', sizes: LP },
        { src: '/images/22-exhibition-portrait_2.jpg', alt: 'HUMAN LAYERS by Oberdoerfer & Krebs', sizes: LP },
      ],
    },
  },
  {
    id: 23,
    artistName: 'Peter Durlev',
    workTitle: 'Jordens Slør',
    materials: 'Stentøjsler, begitninger og glasur',
    dimensions: 'H: 560 mm, B: 330 mm, D: 150 mm',
    description:
      '"Jordens Slør" repræsenterer nogle af de geologiske processer, der har formet vores fælles planet. Overfladens tekstur symboliserer livets cyklus og de lag af sediment, som kommer gennem tidens gang. En historie om transformation og forandring, hvor Peter Durlev inviterer betragteren til at overveje, hvordan processerne påvirker både naturen og vores egen eksistens.\n\nMaterialets iboende hukommelse bærer vidnesbyrd om tidens passage og naturens langsomme rytme. Hver revne og ujævnhed fungerer som et kort over usynlige kræfter og dybe bevægelser i jorden. Værket fungerer som en stille meditation over det organiske og det uforanderlige og skaber rum til refleksion og fordybelse.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/23-exhibition-portrait_1.jpg', alt: 'EARTHEN VEIL by Peter Durlev', sizes: LP },
        { src: '/images/23-exhibition-portrait_2.jpg', alt: 'EARTHEN VEIL by Peter Durlev', sizes: LP },
      ],
    },
  },
  {
    id: 24,
    artistName: 'Sarah Busk & Mari Børlund',
    workTitle: 'A Glimpse of Nature',
    materials: 'Papir, plantefarve, jordpigment, tanniner, jernsulfat og fiskesnøre',
    dimensions:
      '"Floating". H: 2800 mm, B: 2000 mm, D: 500 mm\n"Growing". H: 2000 mm, B: 1500 mm, D: 400 mm\n"Melting". H: 1000 mm, B: 1200 mm, D: 900 mm',
    description:
      '"A Glimpse of Nature" er et rumskabende værk, der udfoldes gennem serien af tre vævede former: "Floating", "Growing" og "Melting". Værket er tænkt som en poetisk iagttagelse af naturens og menneskets sameksistens.\n \nTankerne bag værket er opstået ud fra et fokus på klimaforandringer og en fælles nysgerrighed på at afsøge nye bæredygtige og æstetiske tilgange til vævning og indfarvning.\n \nSarah Busk & Mari Børlunds tilgang er eksperimenterende, hvor de gennem processen undersøger det ladsiggørlige.\n \nDet transparente sprøde papir, som formerne væves med, er nøjsomt penslet med naturfarve. Hver form har sin egen palet, hvor farverne gradueres fra dybe og intense toner til helt sarte nuancer. Det danner changerende skyggespil, når dagslyset strømmer igennem vævningerne.\n \nEfter nedklipning fra væven opstår en tredimensionel form i kraft af væveteknikken og papirmaterialets egenskaber. Vævningerne krymper, vrider og formgiver sig tredimensionelt i den undersøgende proces.\n\nVærket er støttet af Statens Kunstfond, Nationalbankens Jubilæumsfond og Hahnemühle.',
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/24-exhibition-portrait_1.jpg', alt: 'A GLIMPSE OF NATURE by Sarah Busk & Mari Børlund', sizes: LP },
        { src: '/images/24-exhibition-portrait_2.jpg', alt: 'A GLIMPSE OF NATURE by Sarah Busk & Mari Børlund', sizes: LP },
      ],
    },
  },
  {
    id: 25,
    artistName: 'Thomas Woltmann',
    workTitle: 'Perronen',
    materials: 'Douglastræ, pigmenteret linolie med rå og brændt Løvskal-okker samt retrolak',
    dimensions: 'H: 760 mm, D: 400 mm, B: 2840 mm',
    description:
      'Der var engang, hvor vi malede vores tog i danske okkerfarver – hvor DSB\'s mørkerøde farve  stammede fra den jyske jord. Jorden og okkerfarverne eksisterer stadig, men okkerindustrien og  håndværket er forsvundet. Med møblet "Perronen" ønsker Thomas Woltmann at sætte fokus på de tabte farver, og hvordan de kan forbinde mennesket og naturen. "Perronen" er en bænk, designet til at stå på danske togperroner. Og ligesom de gamle togvogne er den overfladebehandlet med pigmenteret linolie i rå og brændt okker fra det nedlagte okkerværk i Løvskal.\n\nSiden 2022 har Woltmann undersøgt, hvordan vi kan genoplive produktionen, håndværket og brugen af danske okkerpigmenter. Linolien til "Perronen" er udviklet i samarbejde med producenten Linolie & Pigment og er fremstillet af okker fra Løvskal. Olien er den første industrielt producerede olie med danske jordfarver i over 60 år.',
    images: {
      type: 'slider',
      slides: [
        { src: '/images/25-exhibition-landscape_1.jpg', alt: 'PLATFORM by Thomas Woltmann', sizes: LS },
        { src: '/images/25-exhibition-landscape_2.jpg', alt: 'PLATFORM by Thomas Woltmann', sizes: LS },
      ],
    },
  },
  {
    id: 26,
    artistName: 'Timmi B. Kromann',
    workTitle: 'It´s not a vessel',
    materials: 'Håndstrik: 99 % papir og 1 % PA',
    dimensions: '90 x 80 mm, 110 x 90 mm, 130 x 90 mm,\n180 x 130 mm, 260 x 180 mm',
    description:
      'Timmi B. Kromanns praksis udfordrer etablerede forestillinger om relationer mellem teknik, form og materiale i kunsthåndværket. Gennem en eksperimenterende tilgang kombinerer hun tekstile teknikker som håndstrik med keramikkens formsprog og papirets lethed. Værkerne balancerer mellem det bløde, det hårde og det skrøbelige og skaber nye æstetiske og materielle sammenhænge. Projektet undersøger tilhørsforhold – både mellem materialer og mellem discipliner. Kromann ønsker at åbne rum til tværfaglige fællesskaber og fornyede forståelser af kunsthåndværkets muligheder.',
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/26-exhibition-landscape_1.jpg', alt: "IT'S NOT A VESSEL af Timmi B. Kromann", sizes: LS },
      portrait: { src: '/images/26-exhibition-portrait_2-new.jpg', alt: "IT'S NOT A VESSEL af Timmi B. Kromann", sizes: LP_ALT },
    },
  },
]
