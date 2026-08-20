import type { ExhibitorCopy } from './types'

// Only the fields that genuinely differ between languages. Keyed by exhibitor
// id — see ./data.ts for the shared ids, artist names and imagery.

export const exhibitorCopyDA: Record<number, ExhibitorCopy> = {
  1: {
    workTitle: "Lysende Lag",
    materials: "Tekstiltryk, træ, stål, LED og wire",
    dimensions: [
      "(600 x 700 x 50 mm) x 3",
    ],
    description: [
      "Projektet består af tre identiske værker. Værkerne undersøger relationen mellem farve og lys gennem et transformativt vægtprincip, hvor lag af tekstiler forskydes, og nye kompositioner dannes. Her opstår en sanselig oplevelse, når lyset skaber nye farveblandinger, og intensiteten ændrer sig over tekstilets flade. Fire lag tekstil er monteret over en svævende konstruktion med integreret lys.",
      "Gunnem en tværfaglig udveksling har Anna Søgaard & Tronhjem Rømer undersøgt farvefænomener og vægtprincipper, der får værkets elementer til at afspejle og fremhæve hinanden. Tekstil og konstruktion er forbundne i samspillet mellem de forskellige perspektiver.",
      "Tak til Frederik Gustav for teknisk vejledning.",
    ],
  },
  2: {
    workTitle: "De aftryk vi sætter",
    materials: "Egetræ, teaktræ, rustfri stål og genanvendt aluminium",
    dimensions: [
      "Stol: 1350 x 340 x 450 mm",
      "Bord: 720 x 600 x 430 mm",
      "Lampe: 540 x 250 x 180 mm",
    ],
    description: [
      "I en verden, der bevæger sig alt for hurtigt, og hvor teknologiens indflydelse konstant øges, undersøger værket de aftryk, vi sætter på vores objekter. Værket viser værdien i aflagte materialer ved at fremhæve deres iboende historie, håndværk og materialitet.",
      "Elly Feldstein anvender AI-teknologien i designprocessen for at optimere materialebrug og beregne klimaaftryk. Værket består af tre sanselige hverdagsobjekter, der formidler både de fysiske og klimamæssige aftryk, vi sætter.",
    ],
  },
  3: {
    workTitle: "WOVEN VOXEL",
    materials: "Bomuld og polyester",
    dimensions: [
      "Værk 01: WOVEN VOXEL [ 6.9.4 ]",
      "H: 2200 mm, L : 1500 mm, D: 35 mm",
      "Værk 02: WOVEN VOXEL [ 5.8.12 ]",
      "H: 2200 mm, L: 1500 mm, D: 1200 mm",
    ],
    description: [
      "Jacquardvævning er en pixelbaseret (picture element) tekstilteknik. Hver enkelt pixel repræsenterer sammenvævningen af en kæde- og en skudtråd. Ligesom traditionelle vævede tekstiler er pixels bundet til to dimensioner. I \"Woven Voxel\" udfordrer Emilie Palle Holm innovativt denne kontinuitet ved at udvide jacquardvævede strukturer i den tredje dimension. Herved frembringer hun \"Woven Voxel\" (volume element) og ændrer det vævede format fra flade til form.",
      "Ved at indlejre formtransformerende mekanismer direkte i sammenvævningen af kæde og skud skaber Emilie Palle Holm materiale og form simultant i væven. Ved opklipning af specifikke kædeflotteringer udfoldes de todimensionelle strukturer til rumlige tekstilformationer, hvor visuelle form- og farveelementer understøtter værkernes fysiske dybde. \"Woven Voxel\" opererer i grænselandet mellem to og tre dimensioner og afdækker vævens rumlige potentiale.",
    ],
  },
  4: {
    workTitle: "(sn) skrin BORE",
    materials: "Tin, overskudsmateriale og kasserede ødelagte tingenstande.",
    dimensions: [
      "70 x 210 x 290 mm",
      "3,844 kg",
    ],
    description: [
      "Med \"(sn) skrin BORE\" undersøger Et Arrangement vores forhold til ukontrollerbare processer gennem borebillens livscyklus, der efterlader mønstre under barken. Sporene symboliserer naturens langsomme og skjulte transformationer. Idéen om et skrin – et objekt, der traditionelt bevarer – som både en genstand og en metafor stiller spørgsmål til  vores behov for kontrol. Værket peger på, at det er i mødet med det ukontrollerbare, at vi lærer at værdsætte livets skjulte, men betydningsfulde processer.",
    ],
  },
  5: {
    workTitle: "TRANSLUCENS",
    materials: "Jacquardvævet tæppe med videoprojektion (3 min. loop)\n\nTrevira CS, uld, viskose, økologisk bomuld og polyester",
    dimensions: [
      "1650 x 2850 mm",
    ],
    description: [
      "Lys er en vigtig inspirationskilde, og sollys og naturen indgår ofte i Grethe Sørensens arbejder. Naturen er i evig bevægelse og forandring, intet ligger nogensinde helt stille. Sollysets brydning i det lave vand tegner levende lysmønstre på havbunden, refleksioner af havets evige bevægelser – naturskabte, universelle mønstre og former.",
      "Videooptagelser af lysets mønstre og bevægelser er udgangspunkt for projektet. Tæppets motiv, et stillbillede fra videoen, er bearbejdet digitalt til pixels i grundfarver. I vævningen erstatter Grethe Sørensen hver enkelt pixel i det digitale motiv med en tråd i samme farve: Motivet genskabes tråd for tråd af garn i de samme grundfarver, så det vævede tæppe bibeholder karakteren af det æteriske lys.",
      "Et meditativt forløb af lysets bevægelser i slowmotion er bearbejdet til et tre minutters videoloop, der projiceres på vævningen. Videobilledet toner frem og kører i et langsomt flow, til det toner væk, og tæppet står alene – fuldt oplyst.",
    ],
  },
  6: {
    workTitle: "Aerodynamics is for those who can't build engines",
    materials: "Glas og bilmaling",
    dimensions: [
      "H: 230 mm, B: 180 mm, bredde i bund: 60 mm",
      "H: 200 mm, B: 185 mm, bredde i bund: 60 mm",
    ],
    description: [
      "Vaserne er inspireret af Indio Möglichs besættelse af Ferrari. Ligesom Ferrari er vasernes amforaform en klassiker. Det er stil. Det er elegance. Det er kvalitet. Det er noget, vi længes efter at eje. Indio Möglich mener, at vi med produkter af ægte kvalitet og æstetik kan bekæmpe overforbrug. Værket er en blanding af amforavasens klassiske form og Ferraris hastighed og strømlinede, slanke design. Vaserne er blæst glas med skulpturerede håndtag. De er sprøjtemalet med bilmaling.",
    ],
  },
  7: {
    workTitle: "Melting Material",
    materials: "Tekstil og tråd",
    dimensions: [
      "H: 2500 mm, B: 1000 mm, D: 1000 mm",
    ],
    description: [
      "\"Melting Material\" undersøger grænselandet mellem det hårde og det bløde, det faste og det flydende. Med udgangspunkt i lokationen for Biennalen er værket inspireret af glas – et materiale, der balancerer mellem det skrøbelige og det formbare, det statiske og det bevægelige. Gennem tekstile teknikker som håndsyning og drapering oversætter Jens Ole Árnason glassets karakter til bløde strukturer, der tilsyneladende smelter, bølger eller stivner i bevægelse. Målet er at se, hvordan et tekstilt materiale kan indfange glassets dobbelte natur som både en solid flade og et stof i konstant potentiel forvandling.",
      "\"Melting Material\" inviterer til sanselig fordybelse og eftertanke over materialers iboende egenskaber, vores egen oplevelse af materialitet, forandring og balance, og hvordan kunsthåndværk på tværs af materialer og genrer kan inspirere til nye kontemporære værker.",
      "Árnason arbejder udelukkende med resttekstiler. \"Melting Material\" er skabt i resttekstil fra elbilfirmaet Polestar.",
    ],
  },
  8: {
    workTitle: "GELÉRET GLAS – EN NY GLASTEKNIK",
    materials: "Glas",
    dimensions: [],
    description: [
      "Karen Lise Krabbe ønsker at formidle sin egen geléret glas-teknik, så både udøvende kunstnere og kunsthåndværkere og ikkeudøvende kan få indblik i metoden og inspireres.",
      "Krabbes arbejde med tværgående fagprocesser, blandt andet med havets makroalger, har resulteret i den nye glasstøbeteknik: Glas, vand og alginat eksponeres for en CaCl2-opløsning. Herved gélerer glasmassen i en kemisk krydsbindingsproces, og glasset kan tekstilt manipuleres koldt som tråd, flader eller 3D-former. Nærmeste familie er den i Danmark ikke så brugte pâte de verre-metode, der går tilbage til oldtidens Egypten. Med det gélerede glas har Krabbe nytænkt metoden.",
      "Krabbes mangeårige research vedrørende havet hænger tæt sammen med hendes glasværkers udvikling, form og udtryk. Associativt og intuitivt.",
    ],
  },
  9: {
    workTitle: "Phallus impudicus",
    materials: "Keramik",
    dimensions: [
      "H: 1050 mm,  B: 290 mm, D: 320 mm",
    ],
    description: [
      "Værket består af to keramiske skulpturer, samlet til én helhed. Inspireret af vølvernes sejd og svamperigets symbolik undersøger Krestine Harboe menneskets forhold til natur, etik og hjerteenergi. Titlen – der refererer til en svampeart med både et latinsk og et folkeligt navn – peger med et glimt i øjet på den kulturelle overgang, hvor kvindelig naturviden blev fortrængt.",
      "Skulpturen er skabt i genbrugsler og gennem drejning, håndmodellering og tekstil, der brændes væk og efterlader en sanselig og kompleks overflade. Glasuren er håndfremstillet af råmaterialer fra hele verden og brændt ved høj temperatur og hovedsageligt med overskudsstrøm. Da ovnen kun rummer 68 cm, er skulpturerne brændt hver for sig og efterfølgende samlet.",
    ],
  },
  10: {
    workTitle: "Layer 8549",
    materials: "3D-print PLA, resin og blæk",
    dimensions: [
      "H: 850 mm, B: 550 mm, L: 500 mm",
    ],
    description: [
      "\"Layer 8549\" fluktuerer mellem håndens arbejde og digitalt arbejde. Gennem kompleks organisk geometri forfiner Lasse Sylvest Lilleør det æstetiske udtryk af 3D-print. Stolen tegnes manuelt i 3D-programmet Rhino, hvor en klassisk stoleform transformeres ved at forskyde og forbinde kugleled. Hver del printes og coates derefter i hånden med resin. Det fremhæver lagene i de horisontale overflader og kamuflerer dem i de lodrette.",
      "Til sidst samles delene med synlige samlinger, der peger på stolens produktionsmetode.Værket skabes i en langsom og sanselig proces, men produceres med en teknologi, udviklet til masseproduktion.Med stolen vil Lilleør vise, at 3D-print kan bruges til at skabe formfuldendte objekter – ikke kun som et prototypeværktøj – og samtidig anerkende de digitale teknologier og værktøjer, som han bruger i sin proces.",
    ],
  },
  11: {
    workTitle: "Glasskoven",
    materials: "Pustet glas med sandblæst overflade",
    dimensions: [
      "Samlet (ca.): L: 1500 mm, B: 500 mm",
      "Individuelle mål: H: 400 mm, B: 120 mm / H: 310 mm,  B: 160 mm / H: 440 mm, B: 180 mm / H: 250 mm, B: 200 mm / H: 460 mm, B: 140 mm / H: 420 mm, B: 190 mm / H: 365 mm, B: 135 mm / H: 440 mm, B: 175 mm",
    ],
    description: [
      "\"Glasskoven\" er en hyldest til skovbunden og forbindelsen mellem glasset og skovene. Forbindelsen er i første omgang materiel: Skovene har dannet rammen om udviklingen af glaspusterindustrien i Skandinavien og Europa. Og mange steder kan man finde små stykker waldglas med samme grønlige skær som det jernholdige kvarts i skovbunden, der blev blandet i glasmengen sammen med asken fra træets afbrænding i ovnene.",
      "\"Glasskoven\" kredser om det punkt, hvor kontraster mødes: det kunstige og det naturlige, det transparente og det solide. Farverne imiterer waldglassets grønlige skær, og den matterede overflade skjuler glassets transparens. Laura Sonne Lund inviterer os til at gå til objekterne med samme nysgerrighed, som når man undersøger skovbundens landskab af hulrum og snoede rødder.",
    ],
  },
  12: {
    workTitle: "Repeated pattern no 1",
    materials: "Indfarvet porcelæn",
    dimensions: [
      "900 x 2500 x 50 mm",
    ],
    description: [
      "Lea Nordstrøm har arbejdet med at skabe et sanseligt og æstetisk udtryk. Den visuelle inspiration udspringer af måden, vi aflæser mønstre på, og hvordan det enkelte motiv indgår som en del af en større helhed og bidrager til en rytmisk komposition. Beskuerens blik bevæger sig mellem helheden, de små detaljer, rytmen og farvernes graduering og nuancer.",
      "Ved at gentage den samme form fremhæves variationerne i håndens arbejde og porcelænets stoflige karakter. Det skaber en levende dynamik i en opsætning, der ellers kunne fremstå statisk.",
      "Porcelænet er strakt til det yderste, og de fine linjer og negative rum tillader, at man kan se igennem lagene. Det tilfører en vis dybde og et forfinet udtryk, som i kombination med værkets størrelse og mange dele giver en mere monumental fremtoning.",
    ],
  },
  13: {
    workTitle: "Fluktuerende skeer",
    materials: "Sterling sølv",
    dimensions: [
      "Alle skeer har udgangspunkt i en sølvbarre på 10 x 10 x 70 mm",
    ],
    description: [
      "For at omfavne en ny livsfase, perimenopausen, har Lone Løvschal sluppet kontrollen og ladet håndværket og en mulig guddommelig eller hormonel indgriben råde. Hun har overgivet sig til sine følelsers vold, til hammerens umiddelbare æstetik og til mange års erfaring som sølvsmed med hang til skeer og lækre linjer.",
      "Med samme materielle udgangspunkt har Løvschal smedet 30 skeer over en månecyklus på 30 dage uden forudgående skitser. Fluktuerende hormoner afstedkom et væld af kropslige og psykiske ændringer, og det påvirkede i høj grad hendes arbejdsliv som kunsthåndværker. Planlægning og en gennemarbejdet designproces viste sig udfordrende, i takt med at østrogenniveauet faldt, og med projektet var det en gave hver dag at have en fast opgave, der på grund af tidspresset blev umiddelbar og legende.",
      "Projektet har hjulpet Løvschal til at genfinde glæden ved arbejdet, og den legende tilgang tager hun med sig videre.",
    ],
  },
  14: {
    workTitle: "MØNSTERVÆRKER",
    materials: "Fem cylinderformede krukker i indfarvet porcelæn\n\nHåndlavet i pladeteknik",
    dimensions: [
      "D: 270-370 mm, H: 180-320 mm",
    ],
    description: [
      "Lotte Westphaels værkserie i porcelæn rummer en fortælling om tid i en interferens mellem et keramisk og tekstilt univers.",
      "Med inspiration fra vævningens systematik og kunstneren Agnes Martins vibrerende blyantslinjer undersøger Westphael, hvordan rytme og mønstre kan integreres i porcelænets materialitet. Mønstrene fungerer ikke blot som dekoration, men som en indre logik i værkernes opbygning.Westphael søger en vibrerende følsomhed i både linjer og farver, og hun er optaget af farveforløb, som synes at flyde i en poetisk fortælling rundt om cylinderens kurve.",
      "Farverne er indarbejdet i selve porcelænsmassen med op til 50 nuancer, som er afvejet, æltet og samlet i lag på lag. 100 % low-tech.",
      "Processen er nøje planlagt og rummer samtidig plads til materialets egen bevægelse under brændingen. Teknikken er dermed både en metode og en del af værkernes æstetik.",
      "De fem værker resonerer den poetik.",
    ],
  },
  15: {
    workTitle: "ORNO",
    materials: "Anodiseret aluminium",
    dimensions: [
      "H: 740 mm, B: 580 mm, D: 580 mm",
    ],
    description: [
      "\"ORNO\" er en visuel og taktil undersøgelse af samspillet mellem fortid, nutid og fremtid, hvor traditionelt håndværk møder moderne industriel teknologi. Inspireret af den delikate teknik bag en kniplet dug skaber Louise Bitsch en genkendelig silhuet og form, der bærer på en historisk fortælling gennem et moderne materiale som aluminium. Bordet etablerer en stærk visuel og følelsesmæssig forbindelse til fortiden, samtidig med at Louise Bitsch anvender nutidens teknologier til at fremstille noget nyt.",
      "Værket udfordrer masseproduktionens æstetik ved at demonstrere, hvordan teknologi kan forny gamle håndværkstraditioner. Og ikke mindst, hvordan de to verdener kan eksistere i harmoni, når man bruger moderne teknologi til at videreføre frem for at erstatte arven fra håndværket.",
    ],
  },
  16: {
    workTitle: "Tactile Table",
    materials: "Mundblæst glas",
    dimensions: [
      "\"Tassa cum vase\". H: 450 mm, Ø: 285 mm",
      "\"Tassa\". H: 280 mm, B: 380 mm, D: 350 mm",
      "\"Candelabrum\". H: 580 mm, B: 350 mm, D: 180 mm",
      "\"Cloche I\". \"H: 270 mm, Ø: 230 mm",
      "\"Cloche II\". H: 390 mm, Ø: 200 mm",
      "\"Tabula Tortae\". H: 135 mm, Ø: 330 mm",
      "\"Lagena\". H: 265 mm, B: 180 mm, D: 140 mm",
      "\"Calix\". H: 140 mm, B: 145 mm, D: 115 mm",
      "\"Patera\". H: 130 mm, Ø: 300 mm",
    ],
    description: [
      "\"Tactile Table\" udforsker nye perspektiver på glashåndværk ved at transformere traditionelle glasobjekter til en sanselig oplevelse. Lærke Laura Nielsen fremhæver de uventede æstetiske kvaliteter i glaspustning og udfordrer den traditionelle opfattelse af glashåndværk og materialets livscyklus.",
      "De klassiske elementer i en bordopstilling får nyt appetitvækkende liv gennem bevidst indarbejdede fejl og skår fra glaspustningen. I stedet for et præcist figurativt udtryk anvender Nielsen tilfældige restelementer til at skabe abstrakte, dekorative former, der inviterer beskueren til en personlig fortolkning.",
      "Håndværket får en eksperimentel dimension, der tilbyder en ny fortolkning af glas som materiale: Essensen af materialet værdsættes, livscyklus forlænges, og frem træder de æstetiske kvaliteter ved glas som noget sanseligt, kødeligt, ubehændigt og opulent.",
    ],
  },
  17: {
    workTitle: "Viper Weave #11",
    materials: "Unikaværk i stentøj",
    dimensions: [
      "95 x 470 x 505 mm",
    ],
    description: [
      "\"Viper Weave\" er åben for beskuerens egne associationer og fortolkninger. Værket er en invitation til at se og tænke.",
      "Værkserien tager afsæt i den franske renæssancekeramiker Bernard Palissys oeuvre. Langs flodbredden indsamlede Palissy frøer, insekter og slanger og brugte dem som modeller til de \"Rustiques Figulines\", som Malene Hartmann Rasmussen studerede under et ophold på Victoria and Albert Museum i 2018.",
      "Animismen er central i hendes virke: idéen om, at dyr, planter og landskaber er sansende og floder, bjerge og klipper besjælede.",
      "Overgange mellem tilstande, både intellektuelt og formmæssigt, optager Hartmann Rasmussen, der ofte fortolker dem skulpturelt i dyre- og plantehybrider. Umiddelbart kan værkerne synes tilforladelige, men viser sig dog snart som absurde genstande, gennemsyrede af en mørk fortælling.",
    ],
  },
  18: {
    workTitle: "IN SEARCH OF SOMETHING ELSE / hope is a powerful thing",
    materials: "Glas",
    dimensions: [
      "460 x 400 x 750 mm, 15.8 kg /",
      "Glas, 330 x 360 x 770 mm, 9 kg",
    ],
    description: [
      "Skulpturerne er inspireret af de arkitektoniske udsmykninger i glasmuseets ældste del, som oprindeligt er bygget til at være toldhus. Søjlen, der symboliserer magt, styrke og stabilitet, er i bygninger fra forrige århundrede oftest blot en imitation af et ideal, da funktionen som bærende element er forsvundet.",
      "‍",
      "Værkerne leger med tanken om en ornamentik, som er sluppet løs – joniske volutter, der har forladt deres plads øverst oppe og nu er på vej et andet sted hen. De er gået off script på jagt efter noget andet – nye muligheder, en anderledes fremtid eller et ønske om at etablere nye forbindelser?",
      "I 2011 udviklede Maria Bang Espersen en teknik, hvor hun strækker og folder varmt glas, til en trådstruktur opstår på overfladen. Teknikken kræver, at hun arbejder hurtigt og yderst fokuseret i de få sekunder, der er til at forme glasset. Hun har dog aldrig fuld kontrol, da glassets egenrådighed og tyngdekraften er med til at afgøre resultatet.",
    ],
  },
  19: {
    workTitle: "Epistemic Artefact CK8_2024_07",
    materials: "Regenereret vinduesglas med overfladebehandling",
    dimensions: [
      "140 x 150 x 330 mm",
    ],
    description: [
      "Når vi har brugt alt verdens sand til at bygge huse og veje i glas og beton, og vi ikke længere kan lave glas af jomfruelige materialer, så må glaskunstnere vænne sig til at arbejde med det forhåndenværende glas. Maria Sparre-Petersens undersøgelser omhandler, hvordan man kan indarbejde bæredygtige principper i kunstneriske glasformningsprocesser. Konkret ved at bruge skrottede vinduer i stedet for glastyper, der er udviklet særligt til kunstproduktion. Vinduesglassets materialeegenskaber er anderledes end kunstglastyperne. I dag er vinduer eksempelvis forsynet med usynlige belægninger, der optimerer energiforbruget i bygningerne. Belægningerne reagerer med glasset i den varmekemiske fusing-proces og giver uforudsigelige udtryk i artefakterne. Det er de muligheder, der vækker Sparre-Petersens nysgerrighed.",
    ],
  },
  20: {
    workTitle: "CRY ME A RIVER",
    materials: "Uld, bomuld og nylon",
    dimensions: [
      "H: 750 mm, B: 6500 mm, D: 70 mm",
    ],
    description: [
      "\"CRY ME A RIVER\" består af seks kronologiske scener om havet. Værket indledes af en prolog, som efterfølges af fem scener, der fungerer både som individuelle fortællinger og som et samlet narrativ med referencer til havet som kulturelt, historisk og politisk motiv.",
      "\"CRY ME A RIVER\" er en oversættelse af klassisk gobelinvævning til den digitale vævs præmis. Her undersøger Marie Holst billedvævning som medie til at formidle nutidige tematikker og problemstillinger.",
      "Værket er håndvævet på en digital TC2-væv og kombinerer blanke og matte garner, som i samspil skaber en overflade med skiftende reliefvirkninger, afhængigt af lysforholdene.",
    ],
  },
  21: {
    workTitle: "TERRÆN #0125, TERRÆN #0225, TERRÆN #0325",
    materials: "Glas, farvepigment, sort kvarts, kobberoxid, granit, silt, aske",
    dimensions: [
      "H: 310 mm, B: 220 mm",
      "H: 270 mm, B: 190 mm",
      "H: 340 mm, B: 200 mm",
    ],
    description: [
      "Glasset spirer ud af en dyb og konstant fascination af naturens uendelige kompleksitet og skønhed – en symfoni af former, strukturer og rytmer, som Morten Klitgaard søger at genskabe og fortolke. I en tid, hvor mange oplever en stigende adskillelse fra naturen og dens urkraft, føler han et presserende kald til at forstærke vores forbindelse til den. Ønsket er at visualisere de kontrasterende mønstre, der opstår, når naturens flydende organiske former møder menneskeskabte linjer og strukturer.",
      "Klitgaard anvender glas som medie. Et materiale, der i sin varme og opblæste tilstand bliver både formbart og sart, levende og føjeligt. Med små, nøje udvalgte naturgenstande – små stempler fra den vilde natur – skaber han teksturer og mønstre på glasset. På den måde opstår en poetisk harmoni mellem det naturlige og det kultiverede, mellem det bløde og det faste, mellem det, der formes, og det, der fastholdes.",
    ],
  },
  22: {
    workTitle: "Human Layers",
    materials: "Polylaktisk syre (PLA)",
    dimensions: [
      "H: 900 mm, B: 450 mm, D: 450 mm",
    ],
    description: [
      "\"Human Layers\" er en 3D-printet vase skabt i spændingsfeltet mellem tradition og teknologi. Værket er inspireret af den klassiske tekstilindfarvningsteknik ikat. Projektet undersøger, hvordan historiske kunsthåndværk kan genfortolkes gennem moderne fremstillingsmetoder og algoritmiske systemer. I samspillet mellem menneske og maskine opstår et nyt æstetisk udtryk, hvor ornamentik og metode smelter sammen. Vasen er Oberdoerfer & Krebs' bud på, hvordan kunsthåndværk kan finde relevans i en digital tidsalder, hvor det industrielle og det håndlavede ikke er modsætninger, men samarbejdspartnere.",
    ],
  },
  23: {
    workTitle: "Jordens Slør",
    materials: "Stentøjsler, begitninger og glasur",
    dimensions: [
      "H: 560 mm, B: 330 mm, D: 150 mm",
    ],
    description: [
      "\"Jordens Slør\" repræsenterer nogle af de geologiske processer, der har formet vores fælles planet. Overfladens tekstur symboliserer livets cyklus og de lag af sediment, som kommer gennem tidens gang. En historie om transformation og forandring, hvor Peter Durlev inviterer betragteren til at overveje, hvordan processerne påvirker både naturen og vores egen eksistens.",
      "Materialets iboende hukommelse bærer vidnesbyrd om tidens passage og naturens langsomme rytme. Hver revne og ujævnhed fungerer som et kort over usynlige kræfter og dybe bevægelser i jorden. Værket fungerer som en stille meditation over det organiske og det uforanderlige og skaber rum til refleksion og fordybelse.",
    ],
  },
  24: {
    workTitle: "A Glimpse of Nature",
    materials: "Papir, plantefarve, jordpigment, tanniner, jernsulfat og fiskesnøre",
    dimensions: [
      "\"Floating\". H: 2800 mm, B: 2000 mm, D: 500 mm",
      "\"Growing\". H: 2000 mm, B: 1500 mm, D: 400 mm",
      "\"Melting\". H: 1000 mm, B: 1200 mm, D: 900 mm",
    ],
    description: [
      "\"A Glimpse of Nature\" er et rumskabende værk, der udfoldes gennem serien af tre vævede former: \"Floating\", \"Growing\" og \"Melting\". Værket er tænkt som en poetisk iagttagelse af naturens og menneskets sameksistens.",
      "Tankerne bag værket er opstået ud fra et fokus på klimaforandringer og en fælles nysgerrighed på at afsøge nye bæredygtige og æstetiske tilgange til vævning og indfarvning.",
      "Sarah Busk & Mari Børlunds tilgang er eksperimenterende, hvor de gennem processen undersøger det ladsiggørlige.",
      "Det transparente sprøde papir, som formerne væves med, er nøjsomt penslet med naturfarve. Hver form har sin egen palet, hvor farverne gradueres fra dybe og intense toner til helt sarte nuancer. Det danner changerende skyggespil, når dagslyset strømmer igennem vævningerne.",
      "Efter nedklipning fra væven opstår en tredimensionel form i kraft af væveteknikken og papirmaterialets egenskaber. Vævningerne krymper, vrider og formgiver sig tredimensionelt i den undersøgende proces.",
      "Værket er støttet af Statens Kunstfond, Nationalbankens Jubilæumsfond og Hahnemühle.",
    ],
  },
  25: {
    workTitle: "Perronen",
    materials: "Douglastræ, pigmenteret linolie med rå og brændt Løvskal-okker samt retrolak",
    dimensions: [
      "H: 760 mm, D: 400 mm, B: 2840 mm",
    ],
    description: [
      "Der var engang, hvor vi malede vores tog i danske okkerfarver – hvor DSB's mørkerøde farve  stammede fra den jyske jord. Jorden og okkerfarverne eksisterer stadig, men okkerindustrien og  håndværket er forsvundet. Med møblet \"Perronen\" ønsker Thomas Woltmann at sætte fokus på de tabte farver, og hvordan de kan forbinde mennesket og naturen. \"Perronen\" er en bænk, designet til at stå på danske togperroner. Og ligesom de gamle togvogne er den overfladebehandlet med pigmenteret linolie i rå og brændt okker fra det nedlagte okkerværk i Løvskal.",
      "Siden 2022 har Woltmann undersøgt, hvordan vi kan genoplive produktionen, håndværket og brugen af danske okkerpigmenter. Linolien til \"Perronen\" er udviklet i samarbejde med producenten Linolie & Pigment og er fremstillet af okker fra Løvskal. Olien er den første industrielt producerede olie med danske jordfarver i over 60 år.",
    ],
  },
  26: {
    workTitle: "It´s not a vessel",
    materials: "Håndstrik: 99 % papir og 1 % PA",
    dimensions: [
      "90 x 80 mm, 110 x 90 mm, 130 x 90 mm,",
      "180 x 130 mm, 260 x 180 mm",
    ],
    description: [
      "Timmi B. Kromanns praksis udfordrer etablerede forestillinger om relationer mellem teknik, form og materiale i kunsthåndværket. Gennem en eksperimenterende tilgang kombinerer hun tekstile teknikker som håndstrik med keramikkens formsprog og papirets lethed. Værkerne balancerer mellem det bløde, det hårde og det skrøbelige og skaber nye æstetiske og materielle sammenhænge. Projektet undersøger tilhørsforhold – både mellem materialer og mellem discipliner. Kromann ønsker at åbne rum til tværfaglige fællesskaber og fornyede forståelser af kunsthåndværkets muligheder.",
    ],
  },
}
