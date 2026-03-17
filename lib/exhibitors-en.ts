import type { Exhibitor } from './exhibitors-da'

const LS = '(max-width: 2226px) 100vw, 2226px'
const LP = '(max-width: 1200px) 100vw, 1200px'
const LP_NEW = '(max-width: 900px) 100vw, 900px'
const LP_ALT = '(max-width: 780px) 100vw, 780px'

export const exhibitorsEn: Exhibitor[] = [
  {
    id: 1,
    artistName: 'Anna Søgaard & Tronhjem Rømer',
    workTitle: 'LUMINOUS LAYERS',
    materials: 'Textile print, wood, steel, LED and wire',
    dimensions: '(600 x 700 x 50 mm) x 3',
    description:
      'The project consists of tree identical pieces that explore the relationship between colour and light through a transformative weight-based principle, in which layers of textiles are staggered and new compositions take shape. This gives rise to a sensuous experience, as the light creates new colour blends of varying intensity across the textile surface. Four layers of textile are arranged above a floating structure with integrated lights.\n\nIn an exchange of approaches from their professional fields, Anna Søgaard & Tronhjem Rømer have explored colour phenomena and weight principles that cause the elements of the piece to reflect and highlight each other. Textile and construction are connected in the interplay of perspectives.\n\nThanks to Frederik Gustav for technical advice.',
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
    workTitle: 'THE TRACES WE MAKE',
    materials: 'Oak, teak, stainless steel and recycled aluminium',
    dimensions: 'Chair: 1350 x 340 x 450 mm\nTable: 720 x 600 x 430 mm\nLamp: 540 x 250 x 180 mm',
    description:
      'In a world that is moving much too fast and where technology is growing ever more influential, the piece examines the traces we make on our objects. It demonstrates the value of discarded materials by highlighting their inherent history, craftsmanship and materiality.\n\nElly Feldstein uses AI technology in her design process to optimize the use of materials and calculate her climate footprint. The piece consists of three sensuous everyday objects that convey our physical and climate-related impact.',
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
    materials: 'Cotton and polyester',
    dimensions:
      'Piece 01: WOVEN VOXEL [ 6.9.4 ]\nH: 2200 mm, L: 1500 mm, D: 35 mm\n\nPiece 02: WOVEN VOXEL [ 5.8.12 ]\nH: 2200 mm, L: 1500 mm, D: 1200 mm',
    description:
      "Jacquard weaving is a pixel-based (picture element) textile technique. Each pixel represents the interlacement of a warp and a weft thread. Like traditional woven textiles, pixels are bound to two dimensions. In 'Woven Voxel', Emilie Palle Holm innovatively challenges this continuity by expanding jacquard-woven constructions into the third dimension, forming intriguing woven voxels (volume elements) and shifting the format of weaving from surface to sculpture.\n\nBy embedding form-transformable mechanisms directly in the interlacement of warp and weft, she creates material and form simultaneously on the loom. By cutting selected warp floats, she causes the two-dimensional structures to unfold into spacious textile formations where visual shape and colour elements emphasize the physical depth. 'Woven Voxel' operates in the liminal space between two and three dimensions, uncovering the spatial potential of weaving.",
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
    workTitle: '(sn) Shrine BORE',
    materials: 'Tin, excess material and discarded, ruined tin objects',
    dimensions: '70 x 210 x 290 mm\n3.844 kg',
    description:
      "In '(sn) shrine BORE', Et Arrangement examines our relationship with incontrollable processes through the lifecycle of the woodboring beetle, which leaves patterns under the bark. These traces symbolize nature's slow and unseen transformations. The notion of a shrine – an object that traditionally preserves things – as both an object and a metaphor challenges our urge for control. The piece suggests that it is in our encounter with the incontrollable that we learn to appreciate life's unseen but significant processes.",
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
    workTitle: 'TRANSLUCENCE',
    materials: 'Jacquard-woven rug with video projection (3-minute loop)\nTrevira CS, wool, viscose, organic cotton and polyester',
    dimensions: '1650 x 2850 mm',
    description:
      "Light is a key source of inspiration, and sunlight and nature are recurring elements in Grethe Sørensen's work. Nature is always changing and in motion, never standing quite still. The refraction of sunlight in shallow water paints glowing patterns of light on the seabed, reflections of the eternal motion of the sea – universal patterns and shapes, created by nature.\n\nThis project is based on video recordings of the patterns and movements of light. The image on the rug, a still from the video, has been digitally converted into primary-colour pixels. In her weaving, Grethe Sørensen replaces every single pixel in the digital image with a thread in the same colour: the image is reproduced thread by thread in yarn of the same primary colours, so that the woven rug preserves the character of the ethereal light.\n\nA meditative slow-motion sequence of movements of light has been processed into a three-minute video loop that is projected on to the weave. The video gradually appears and plays in a slow flow until it fades out, and only the rug remains – fully illuminated.",
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
    workTitle: "Aerodynamics is for those who can't build engines",
    materials: 'Glass and car paint',
    dimensions: 'H: 230 mm, B: 180 mm, 60 mm wide at the base\nH: 200 mm, B: 185 mm, 60 mm wide at the base',
    description:
      "These vases are widely inspired by Indio Möglich's obsession with Ferrari. Like the Ferrari, the amphora shape of the vases is a classic. It is style. It is elegance. It is quality. It is something we yearn to own. Indio Möglich believes, that with products of true quality and aesthetic, we can fight overconsumption. He has combined the classic shape of the amphora vase with the speed and sleekness of the Ferrari. The vases are blown in glass with sculpted handles and sprayed with car paint.",
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
    materials: 'Textile and thread',
    dimensions: 'H: 2500 mm, W: 1000 mm, D: 1000 mm',
    description:
      "'Melting Material' explores the transition zone between hard and soft, firm and fluid. Based on the venue of this year's Biennale, the piece is inspired by glass – a material that balances between fragile and malleable, static and mobile. Through the textile techniques of hand-sewing and draping, Jens Ole Árnason translates the nature of glass into soft structures that appear to be melting, undulating or frozen in mid-motion. The purpose is to investigate the capacity of a textile material to capture the dual nature of glass as a firm surface and a substance in constant potential change.\n\n'Melting Material' invites us to engage in sensuous contemplation and reflection on the intrinsic properties of materials, our own experience of materiality, change and balance and the ability of crafts to inspire new contemporary works across materials and genres.\n\nÁrnason works exclusively with excess textiles. 'Melting Material' was made using residual textiles from the electric-vehicle manufacturer Polestar.",
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
    workTitle: 'GELLED GLASS – A NEW GLASS TECHNIQUE',
    materials: 'Glass',
    dimensions: '',
    description:
      'Karen Lise Krabbe presents her self-developed gelled-glass technique to give practising artists and makers as well as non-practitioners insight into the method and spark inspiration.\n\nKrabbe\'s work with interdisciplinary processes, including marine macro-algae, has resulted in her new glass moulding technique: glass, water and alginate are exposed to a solution of calcium chloride (CaCl2). This causes the glass mass to gel in a chemical crosslinking process. Through textile techniques, the gelled glass can be manipulated in the form of thread, sheets or 3D shapes. The most closely related method is pâte de verre, a technique that can be traced back to ancient Egypt and which is not widely used in Denmark. With gelled glass, Krabbe has reimagined the technique.\n\nThrough associative and intuitive connections, Krabbe\'s years-long studies of marine life are closely related to the development, form and expression of her glass objects.',
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
    materials: 'Ceramic',
    dimensions: 'H: 1050 mm, W: 290 mm, D: 320 mm',
    description:
      "The piece consists of two ceramic sculptures combined into one. With inspiration from the magic of the Viking völva, or seeress, and the symbolism of the fungal kingdom, Krestine Harboe explores our universal human relationship with nature, ethics and heart energy. The title – which refers to a species of fungus that has both a Latin and a common name – is a humorous allusion to the cultural transition when women's knowledge of nature was marginalized.\n\nThe sculpture is made of recycled clay in a process involving wheel throwing, hand-modelling and textile that is burnt off to leave a sensuous and complex surface. The glaze is made of raw materials from around the world and high-fired using mainly excess power. Since the kiln only takes objects up to 68 cm, the pieces are fired separately and then assembled.",
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
    materials: '3D print PLA, resin and ink',
    dimensions: 'H: 850 mm, W: 550 mm, L: 500 mm',
    description:
      "'Layer 8549' fluctuates between hand work and digital work. Through complex organic geometry, Lasse Sylvest Lilleør refines the aesthetic expression of 3D print. He hand-draws the chair in the 3D program Rhino, transforming a classic chair type by shifting and connecting ball-and-socket joints. Each component is printed and then coated in resin by hand. The coating highlights the layers in the horizontal surfaces and camouflages them in the vertical ones.\n\nFinally, the parts are assembled with visible joints that expose the production method. The piece is created in a slow, sensuous process but produced using a technology developed for mass production.\n\nWith this chair, Lilleør aims to demonstrate that 3D print can be used to create refined objects – not just as a prototyping tool – and to acknowledge the digital technologies and tools that he uses in his process.",
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
    workTitle: 'GLASS FOREST',
    materials: 'Blown glass with sand-blasted surface',
    dimensions:
      'Total (approx.): L: 1500 mm, W: 500 mm\nIndividual dimensions: H: 400, W: 120 mm / H: 310, W: 160 mm / H: 440, W: 180 mm / H: 250, W: 200 mm / H: 460, W: 140 mm / H: 420, W: 190 mm / H: 365, W: 135 mm / H: 440, W: 175 mm',
    description:
      "'Glass Forest' is a tribute to the forest floor and the connection between glass and forests. This connection is, above all, material: the forests formed the setting of the development of the glass blowing industry in Scandinavia and the rest of Europe. And in many places, you can find bits of forest glass (Waldglas in German) with the same greenish tone as the iron-rich quartz in the forest floor that was mixed into the glass mass along with the ashes from the wood that was burnt to fuel the kilns.\n\n'Glass Forest' explores the meeting of contrasts: artificial and natural, transparent and solid. The colours imitate the greenish tone of forest glass, and the frosted surface hides the transparency of the glass. Laura Sonne Lund invites us to approach the objects with the same kind of curiosity as when exploring the forest floor, with its landscape of hollows and twisted roots.",
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/11-exhibition-landscape_1.jpg', alt: 'GLASS FOREST by Laura Sonne Lund', sizes: LS },
      portrait: { src: '/images/11-exhibition-portrait_2-new.jpg', alt: 'GLASS FOREST by Laura Sonne Lund', sizes: LP_ALT },
    },
  },
  {
    id: 12,
    artistName: 'Lea Nordstrøm',
    workTitle: 'Repeated pattern no 1',
    materials: 'Dyed porcelain',
    dimensions: '900 x 2500 x 50 mm',
    description:
      'In this piece, Lea Nordstrøm has aimed for a sensuous and aesthetic expression. Her visual inspiration springs from how we decode patterns and how the individual image becomes part of a greater whole and contributes to a rhythmic composition. The viewer\'s gaze moves between whole, details, rhythm, and gradual colour transitions and shades.\n\nThe repetition of identical forms brings out the variations in hand-crafting and the textural quality of the porcelain. This creates a vivid dynamic in a presentation that might otherwise appear static.\n\nThe porcelain is stretched to the absolute limit, and the delicate lines and negative spaces allow the viewer to see through the layers, adding a sense of depth and a more refined expression. In combination with the scale of the piece and the sheer number of objects, this effect produces a more monumental appearance.',
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
    workTitle: 'FLUCTUATING SPOONS',
    materials: 'Sterling silver',
    dimensions: 'All spoons are based on silver bar dimensions 10 x 10 x 70 mm',
    description:
      'As a way of embracing a new stage of life, perimenopause, Lone Løvschal has abandoned control, giving over to the craft and the possibility of divine or hormonal intervention. She has surrendered to her emotions, to the immediate aesthetic of the hammer and to her many years of experience as a silversmith with an affinity for spoons and beautiful lines.\n\nWorking from the same material base, Løvschal has forged over 30 spoons during a lunar cycle of 30 days without prior sketching. Fluctuating hormones produced numerous changes in her body and psyche, which had a profound impact on her work as a maker. Planning and a carefully laid-out design process proved challenging, as her oestrogen levels dropped, and the project gave her the gift of having a fixed assignment every day. The time constraint made the process playful and immediate.\n\nThe project helped Løvschal rediscover the joy in her work, and she carries the playful approach with her into her future practice.',
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
    workTitle: 'A POETIC OF PATTERNS',
    materials: 'Five cylindrical vessels in dyed porcelain\nSlab-built by hand',
    dimensions: 'D: 270–370 mm, H: 180–320 mm',
    description:
      "Lotte Westphael's work series in porcelain contains a story of time in a pattern of interference between a ceramic and a textile universe.\n\nWith inspiration from the systematic approach of weaving and the artist Agnes Martin's vibrant pencil lines, Westphael examines how rhythm and patterns can be integrated with the materiality of porcelain. The patterns are not just decorative but represent an inner logic in the construction of the pieces.\n\nWestphael aims for a vibrant sensitivity in both lines and colours and is preoccupied with colour sequences that seem to flow in a poetic story following the curvature of the cylinder.\n\nThe colours are incorporated into the porcelain mass, weighing, kneading and assembling up to 50 colour shades in a layered method, 100 % low-tech.\n\nThe carefully planned process allows for the movement of the material during firing. Thus, the technique is both a method and part of the aesthetic of the pieces.\n\nThe five pieces resonate with this poetic.",
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/14-exhibition-landscape_1.jpg', alt: 'A POETIC OF PATTERNS by Lotte Westphael', sizes: LS },
      portrait: { src: '/images/14-exhibition-portrait_2-new.jpg', alt: 'A POETIC OF PATTERNS by Lotte Westphael', sizes: LP_ALT },
    },
  },
  {
    id: 15,
    artistName: 'Louise Bitsch',
    workTitle: 'ORNO',
    materials: 'Anodized aluminium',
    dimensions: 'H: 740 mm, W: 580 mm, D: 580 mm',
    description:
      "'ORNO' is a visual and tactile study of the interaction of past, present and future, where traditional craftsmanship meets modern industrial technology. With inspiration from the delicate technique behind a lace tablecloth, Louise Bitsch has created a familiar silhouette and form to convey a historic narrative in the modern material of aluminium. The table forms a powerful visual and emotional link to the past, as Louise Bitsch uses contemporary technologies to produce something new.\n\nThe piece challenges the aesthetic of mass production by demonstrating how technology can revitalize old craft traditions. And, not least, how the two worlds can co-exist in harmony when modern technology is used to carry on, rather than replace, the craft legacy.",
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
    materials: 'Hand-blown glass',
    dimensions:
      '"Tassa cum vase". H: 450 mm, Ø: 285 mm\n"Tassa". H: 280 mm, W: 380 mm, D: 350 mm\n"Candelabrum". H: 580 mm, W: 350 mm, D: 180 mm\n"Cloche I". H: 270 mm, Ø: 230 mm\n"Cloche II". H: 390 mm, Ø: 200 mm\n"Tabula Tortae". H: 135 mm, Ø: 330 mm\n"Lagena". H: 265 mm, W: 180 mm, D: 140 mm\n"Calix". H: 140 mm, W: 145 mm, D: 115 mm\n"Patera". H: 130 mm, Ø: 300 mm',
    description:
      "'Tactile Table' explores new perspectives on glass making by transforming traditional glass objects into a sensuous experience. Lærke Laura Nielsen highlights the unexpected aesthetic qualities of glass blowing and challenges the traditional understanding of glass making and the life cycle of the material.\n\nThe classic elements of a table setting take on new, appetizing life through deliberate flaws and shards from the glass blowing process. Instead of a precise figurative expression, Nielsen uses random residual elements to create abstract, decorative shapes that invite the viewer to reach their own personal interpretation.\n\nThe craft takes on an experimental dimension that offers a new take on glass as a material: the essence of the material is appreciated, its life cycle is extended, and the aesthetic qualities of glass are brought forward as something sensuous, carnal, clumsy and opulent.",
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/16-exhibition-landscape_1.jpg', alt: 'TACTILE TABLE by Lærke Laura Nielsen', sizes: LS },
      portrait: { src: '/images/16-exhibition-portrait_2-new.jpg', alt: 'TACTILE TABLE by Lærke Laura Nielsen', sizes: LP_ALT },
    },
  },
  {
    id: 17,
    artistName: 'Malene Hartmann Rasmussen',
    workTitle: 'Viper Weave #11',
    materials: 'One-off in stoneware',
    dimensions: '95 x 470 x 505 mm',
    description:
      "'Viper Weave' is open to the viewer's own associations and interpretations. The piece is an invitation for us to see and reflect.\n\nThe suite takes its point of departure in the French Renaissance ceramist Bernard Palissy's oeuvre. Along the river bank, Palissy gathered frogs, insects and snakes to use as models for his 'Rustiques Figulines', which Malene Hartmann Rasmussen studied during a residence at the Victoria and Albert Museum in 2018.\n\nA core element in her work is animism: the notion that animals, plants and landscapes are sentient, and that rivers, mountains and rocks are animated.\n\nHartmann Rasmussen is interested in transitions between states – intellectual and in terms of form – and often interprets them in sculptural animal and plant hybrids. At first glance, the pieces may seem reliable, but they soon reveal themselves to be absurd objects, permeated by a dark narrative.",
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
    materials: 'Glass',
    dimensions: '460 x 400 x 750 mm, 15.8 kg\n330 x 360 x 770 mm, 9 kg',
    description:
      "The sculptures are inspired by the architectural decorations in the oldest part of the glass museum, which was originally built as a customs house. In buildings from the previous century, the column – a symbol of power, strength and stability – is usually a mere imitation of an ideal, its function as a load-bearing element long gone. The pieces play with the notion of ornamentation unleashed: Ionic volutes that have abandoned their place at the very top and are now headed somewhere else. They have gone off script, on the search for something else – new possibilities, a different future or a desire to establish new connections?\n\nIn 2011, Maria Bang Espersen developed a technique of stretching and folding hot glass until a thread-like structure develops on the surface. This technique requires her to work quickly and in a very focused way during the few seconds that the glass remains malleable. However, she never has full control, as the result will be influenced by gravity and the inherent way of the glass itself.",
    images: {
      type: 'portrait-pair',
      slides: [
        { src: '/images/18-exhibition-portrait_1-new.jpg', alt: 'IN SEARCH OF SOMETHING ELSE / hope is a powerful thing by Maria Bang Espersen', sizes: LP },
        { src: '/images/18-exhibition-portrait_2.jpg', alt: 'IN SEARCH OF SOMETHING ELSE / hope is a powerful thing by Maria Bang Espersen', sizes: LP },
      ],
    },
  },
  {
    id: 19,
    artistName: 'Maria Sparre-Petersen',
    workTitle: 'Epistemic Artefact CK8_2024_07',
    materials: 'Regenerated window glass with coating',
    dimensions: '140 x 150 x 330 mm',
    description:
      "Once all the sand in the world has been used to make glass and concrete for buildings and roads, and we no longer have access to virgin materials, glass artists will have to get used to working with whatever glass is on hand. Maria Sparre-Petersen has explored how sustainable principles can be incorporated into artistic glasswork processes. Specifically, she has experimented with the use of scrapped window panes instead of glass types developed specially for artistic productions. Window glass has different material properties than art glass. For example, modern window panes have invisible coatings designed to optimize energy consumption in buildings. These surface treatments react with the glass in the thermochemical fusing process, which results in unpredictable expressions in the artefacts. This gives rise to possibilities that spark Sparre-Petersen's curiosity.",
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
    materials: 'Wool, cotton and nylon',
    dimensions: 'H: 750, W: 6500, D: 70 mm',
    description:
      "'CRY ME A RIVER' consists of six chronological scenes related to the sea. The piece opens with a prologue, followed by five scenes that work as individual stories and also form overall narrative with references to the sea as a cultural, historical and political theme.\n\n'CRY ME A RIVER' translates classic tapestry weaving to the conditions of the digital loom. In the piece, Marie Holst explores tapestry weaving as a medium for conveying contemporary themes and issues.\n\nThe piece was hand-woven on a digital TC2 loom and combines shiny and matt yarns to create a surface with varying relief effects, depending on lighting conditions.",
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
    workTitle: 'TERRAIN #0125, TERRAIN #0225, TERRAIN #0325',
    materials: 'Glass, colour pigment, black quartz, copper oxide, granite, silt and ash',
    dimensions: 'H: 310 mm, W: 220 mm\nH: 270 mm, W: 190 mm\nH: 340 mm, W: 200 mm',
    description:
      "The glass grows out of a deep and constant fascination with nature's infinite complexity and beauty – a symphony of forms, structures and rhythms that Morten Klitgaard seeks to recreate and interpret. In a time when many feel increasingly separated from nature and its primordial power, he feels a pressing need to enhance our connectedness with it. His goal is to visualize the contrasting patterns that arise when nature's fluid organic shapes meet human-made lines and structures.\n\nKlitgaard's medium is glass, a material that in its hot, inflated state becomes malleable and delicate, alive and pliable. He uses small, carefully selected natural objects as stamps from wild nature to apply textures and patterns to the glass. In this way, he achieves poetic harmony between natural and cultivated, between soft and firm, between what is shaped and what retains its form.",
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/21-exhibition-landscape_1.jpg', alt: 'TERRAIN #0125, TERRAIN #0225, TERRAIN #0325 by Morten Klitgaard', sizes: LS },
      portrait: { src: '/images/21-exhibition-portrait_2-new.jpg', alt: 'TERRAIN #0125, TERRAIN #0225, TERRAIN #0325 by Morten Klitgaard', sizes: LP_ALT },
    },
  },
  {
    id: 22,
    artistName: 'Oberdoerfer & Krebs',
    workTitle: 'Human Layers',
    materials: 'Polylactic acid (PLA)',
    dimensions: 'H: 900 mm, W: 450 mm, D: 450 mm',
    description:
      "'Human Layers' is a 3D printed vase created in the field of tension between tradition and technology. The piece was inspired by the classic textile dyeing method ikat. The project examines how traditional crafts can be reinterpreted through modern production methods and algorithmic systems. The interaction between humans and machines gives rise to a new aesthetic expression in which ornamentation and method fuse into one. The vase is Oberdoerfer & Krebs's take on how crafts can achieve relevance in a digital age when industrial and hand-made are not opposites but collaborators.",
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
    workTitle: 'EARTHEN VEIL',
    materials: 'Stoneware clay, slipping and glaze',
    dimensions: 'H: 560 mm, W: 330 mm, D: 150 mm',
    description:
      "'Earthen Veil' represents some of the geological processes that have shaped our shared planet. The surface texture symbolizes the cycle of life and the layers of sediment that build up over time: a story of transformation and change, in which Peter Durlev invites the viewer to reflect on the influences of these processes on both nature and our own existence.\n\nWith their inherent memory, materials bear witness to the passage of time and the slow rhythm of nature. Every crack and irregularity serves as a map of invisible forces and movements deep under ground. The piece acts as a quiet meditation on the organic and immutable and provides a space for reflection and contemplation.",
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
    materials: 'Paper, plant dye, earth pigment, tannins, iron sulphate and fishing line',
    dimensions:
      "'Floating'. H: 2800 mm, W: 2000 mm, D: 500 mm\n'Growing'. H: 2000 mm, W: 1500 mm, D: 400 mm\n'Melting'. H: 1000 mm, W: 1200 mm, D: 900 mm",
    description:
      "'A Glimpse of Nature' is a spatial suite of three woven forms: 'Floating', 'Growing' and 'Melting'. It was conceived as a poetic observation of the co-existence of nature and humanity.\n\nThe thoughts behind the piece sprang from a focus on climate change and a common curiosity about exploring new sustainable and aesthetic approaches to weaving and dyeing.\n\nIn an experimental process, Sarah Busk & Mari Børlund investigate what is feasible.\n\nThe crisp, transparent paper that the forms are woven in has been frugally brushed with natural dyes. Each form has its own palette with a gradation of colours ranging from deep and intense to delicate shades. This variation results in a shimmering shadow play as daylight passes through the weave.\n\nAfter the pieces have been cut off the loom, the weaving technique and the properties of the paper result in a three-dimensional form. The woven pieces shrink, twist and take on three-dimensional form in this explorative process.\n\nThe piece received support from the Danish Arts Foundation, Danmarks Nationalbank's Anniversary Foundation and Hahnemühle.",
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
    workTitle: 'PLATFORM',
    materials: 'Douglas wood, pigmented linseed oil with raw and burnt Løvskal ochre and retro lacquer',
    dimensions: 'H: 760 mm, D: 400 mm, W: 2840 mm',
    description:
      "Once upon a time, we used to paint our trains in Danish ochre – and the dark signature red used by DSB, the Danish State Railways, was extracted from Jutland soil. The soil and the ochre are still there, but the ochre industry and the craft have disappeared. With the furniture piece 'Platform', Thomas Woltmann wishes to shine a light on the lost colours and their capacity to connect us to nature. 'Platform' is a bench designed for use on Danish railway platforms. Like the old train cars, it has a surface treatment of pigmented linseed oil with raw and burnt ochre from the now defunct ochre works in Løvskal.\n\nSince 2022, Woltmann has been exploring how we can revive the production, the craft and the use of Danish ochre pigments. The linseed oil for 'Platform' was developed in collaboration with the manufacturer Linolie & Pigment based on ochre from Løvskal. It is the first industrially produced oil with Danish earth pigments for over 60 years.",
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
    workTitle: "It´s not a vessel",
    materials: 'Hand-knitting: 99% paper and 1% PA',
    dimensions: '90 x 80 mm, 110 x 90 mm, 130 x 90 mm,\n180 x 130 mm, 260 x 180 mm',
    description:
      "Timmi B. Kromann's practice challenges established understandings of the relations between technique, form and material in crafts. Her experimental approach combines textile techniques, such as hand-knitting, with the expression of ceramics and the lightness of paper. The pieces strike a balance between soft, hard and fragile and give rise to new aesthetic and material connections. The project examines affiliations – between materials and between disciplines. Kromann seeks to open a space for interdisciplinary communities and new understandings of the possibilities of crafts.",
    images: {
      type: 'alternative-layout',
      landscape: { src: '/images/26-exhibition-landscape_1.jpg', alt: "IT'S NOT A VESSEL by Timmi B. Kromann", sizes: LS },
      portrait: { src: '/images/26-exhibition-portrait_2-new.jpg', alt: "IT'S NOT A VESSEL by Timmi B. Kromann", sizes: LP_ALT },
    },
  },
]
