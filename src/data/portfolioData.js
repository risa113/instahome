export const STUDIO_INFO = {
  name: "InstaHome Design Builders",
  shortName: "INSTAHOME",
  subtitle: "Design Builders",
  tagline: "Architectural Vernacular Modernism",
  description:
    "InstaHome Design Builders transforms architectural ideas into refined spaces designed around the way you live and work. Deeply grounded in South Indian materiality and modern spatial precision.",
  location: "Palayamkottai, Tirunelveli, Tamil Nadu",
  address: "10A, Manakaavalam Pillai Hospital Road, Palayamkottai, Tirunelveli, Tamil Nadu – 627002",
  phoneDisplay: "082487 18414",
  phoneRaw: "08248718414",
  phoneInternational: "+918248718414",
  whatsappNumber: "918248718414",
  mapsUrl: "https://maps.google.com/?q=InstaHome+Design+Builders+Palayamkottai+Tirunelveli",
  coordinates: {
    lat: "8.7139° N",
    long: "77.7567° E",
    display: "LAT: 8.7139° N · LONG: 77.7567° E"
  },
  stats: {
    rating: "5.0 ★",
    ratingText: "Google Verified Reviews",
    turnkey: "100%",
    turnkeyText: "Turnkey Discipline"
  }
};

export const IMAGES = {
  heroPoolVilla:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD42vusS12wa_seRnjKXAu-8Y1lMsekzhHl9tdM77kgsthMH2c1m0bxoz_T5EjU4ryQ8hGqhp9ZmoEHsBGt0bpjXV2bVelTjOBvRy1mo-yDMdHeoMtWhmyPPKp-7oCYJ5mZw-tPF3851WQf-sgLAnr4iOJCtCRkLdV4rrKL-PAzInJWieDtECLLLp4og0TP2_sPx9bBZhQKk6FvfUC5u2oSUsetR4wZ7D9i4-ZT_wEI9rVJCS7xj6uQRw",
  rammedEarthPavilion:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDj3gauN0I0Q5dxe_1_HIZuLBHY43XNwURnATyL8TSCEu1bkLactz9tZ7p1mE1XbcZuzF4Nqd6OuZNxTWBVqhIx7ndnNGr06qHjjSNq6DzA0EFCqDES9oILZ5lJOmfHv0vWH3EXV4DRcqnMQ0MiHEmY1kbtK2lHHwTCqA84vDzlCvx14f3utRO5SBTTHEOiBlRPV6-pkq-xjHHHFKHURoY1VNEkuP-JoMjMGNo79zK3vtyqbVY_WpNLnA",
  monolithLivingSuite:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCIsMtBEbuZJRpoRKPw_0wGnTkvzv3oLffDxyeGCKrN3CgGWKyQpzyl55mQPCex0UQ79ViWl9PI3EsAUG3pvRaFatX5Rf-OaxNsvlkdIkjpCVEgggnkR4p4UIV49JOY_7CqyZi9Kwo4b4TKHd3LQXeelDPS4IF4P24orAta9XTOwxCG_FZDO9ZiHJPSssKtB50OJBQg5terO-ZNiBtuTov4-OhBpTqgJ8HZaPh6l8kP7p2N-QpLC5Rwog",
  courtyardDiningPavilion:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmzzX-pFg_iegnl7V8bYAzxC9qD57lGeTpWLVMQQm9RxUBmhgMpekP5NkzlzGdeITWVOcLfoQOQCuRqzYrtbR_r3WBPRFOda5Ve3EwfNJkDbAL-GNaBfhdtiJPm7mgda2qrMaEyn1Pnb-eiw4uesUR7rb4p1xx_pth_h1PvmzFJPgykL-zmor9e3vgeGNHxOh6jUQOyoI4owm426K1WmP5zzz58bij3m4GJuD5QWi68D1TBV66B58X9A"
};

export const PROJECTS = [
  {
    id: "the-rammed-earth-pavilion",
    title: "The Rammed Earth Pavilion",
    altTitle: "Thamirabarani Riverfront Villa",
    category: "residential",
    categoryLabel: "Residential · Tirunelveli",
    badge: "Completed 2024",
    code: "01 / CONCEPT",
    location: "Palayamkottai · Bioclimatic Residential",
    subSpecs: "Rammed Earth Thermal Mass · Lotus Pond · 3,800 sq.ft",
    description:
      "Rammed earth monolithic thermal mass combined with reclaimed teak louvers and natural lily pond integration designed for Tirunelveli sweltering tropical microclimate.",
    image: IMAGES.rammedEarthPavilion,
    aspect: "aspect-[16/11]",
    architecturalSpecs: {
      location: "Palayamkottai, Tirunelveli",
      execution: "InstaHome Design-Build",
      area: "3,800 sq.ft",
      materials: "Stabilized Rammed Earth, Reclaimed Teak, Porous Limestone"
    }
  },
  {
    id: "the-courtyard-villa",
    title: "The Courtyard Villa",
    altTitle: "Vannarpettai Contemporary Residence",
    category: "residential",
    categoryLabel: "Residential · Tirunelveli",
    badge: "Private Commission",
    code: "02 / ESTATE",
    location: "Vannarpettai · Generational Estate",
    subSpecs: "Double Cantilever · Courtyard Pool · 5,200 sq.ft",
    description:
      "A multi-generational private residence centered around an illuminated reflection pool with floor-to-ceiling teak sliding partitions and cantilevered concrete overhangs.",
    image: IMAGES.heroPoolVilla,
    aspect: "aspect-[16/10]",
    architecturalSpecs: {
      location: "Vannarpettai, Tirunelveli",
      execution: "InstaHome Turnkey",
      area: "5,200 sq.ft",
      materials: "Polished Concrete, Teak Partitions, Black Granite Pool Border"
    }
  },
  {
    id: "the-monolith-living-suite",
    title: "The Monolith Living Suite",
    altTitle: "The Monolith Executive Suite",
    category: "interiors",
    categoryLabel: "Interiors · Palayamkottai",
    badge: "Interior Scope",
    code: "03 / INTERIOR",
    location: "Palayamkottai · Interior Architecture",
    subSpecs: "Double Height Ceiling · Natural Stone · Bespoke Joinery",
    description:
      "Double-height volume interior with custom travertine fireplace, fluted oak joinery, and expansive steel-profile fenestration designed for acoustic tranquility.",
    image: IMAGES.monolithLivingSuite,
    aspect: "aspect-[16/10]",
    architecturalSpecs: {
      location: "Palayamkottai, Tirunelveli",
      execution: "InstaHome Interior Architecture",
      area: "2,400 sq.ft interior",
      materials: "Travertine Stone, Fluted White Oak, Black Profile Steel"
    }
  },
  {
    id: "palayamkottai-courtyard-kitchen",
    title: "Palayamkottai Courtyard Kitchen & Pavilion",
    altTitle: "Bespoke Dining Pavilion",
    category: "interiors",
    categoryLabel: "Interiors · Tirunelveli",
    badge: "Commissioned 2024",
    code: "04 / COURTYARD",
    location: "Palayamkottai · Courtyard Living",
    subSpecs: "Tactile Stone · Bespoke Joinery · Courtyard Integration",
    description:
      "Seamless integration of indoor dining with private lush courtyard greenery. Includes bespoke clay pendant lighting, dark fluted wood joinery, and a monolithic travertine dining table.",
    image: IMAGES.courtyardDiningPavilion,
    aspect: "aspect-[16/10]",
    architecturalSpecs: {
      location: "Palayamkottai, Tirunelveli",
      execution: "InstaHome Design-Build",
      area: "1,850 sq.ft",
      materials: "Terracotta Clay Pendants, Seasoned Teak Louvers, Porous Sandstone"
    }
  }
];

export const SERVICES = [
  {
    num: "01",
    id: "architecture",
    title: "Architecture & Masterplanning",
    shortTitle: "Architecture",
    tagline: "ARCHITECTURAL PRACTICE",
    summary: "Climatic massing, courtyard configurations, and structural engineering optimized for Tirunelveli conditions.",
    description:
      "We design buildings from the ground up, factoring in sun orientations, monsoon trajectories, and family requirements across generations. We craft bioclimatic envelopes that drastically cut energy dependence while maximizing natural daylight.",
    deliverables: [
      "Vernacular massing and microclimate simulation",
      "Comprehensive civil and structural engineering",
      "Municipal permit approvals & Tirunelveli zoning compliance",
      "Solar path and natural ventilation cross-draft modeling"
    ],
    image: IMAGES.heroPoolVilla
  },
  {
    num: "02",
    id: "interior-design",
    title: "Interior Architecture & Curation",
    shortTitle: "Interior Design",
    tagline: "INTERIOR ENVIRONMENTS",
    summary: "Custom millwork, artisanal lighting, curated fabrics, and tactile stone selection tailored for domestic harmony.",
    description:
      "Interiors are the tactile layer of everyday life. We oversee every centimeter of millwork, spatial illumination, acoustic warmth, and customized furniture pieces to construct calm domestic sanctuaries.",
    deliverables: [
      "Custom teak joinery and architectural cabinetry",
      "Natural stone selection (travertine, granite, porous limestone)",
      "Atmospheric circadian lighting design",
      "Acoustic balancing with linen, fluted wood, and plaster"
    ],
    image: IMAGES.monolithLivingSuite
  },
  {
    num: "03",
    id: "design-build",
    title: "Single-Point Design & Build",
    shortTitle: "Design & Build",
    tagline: "TURNKEY EXECUTION",
    summary: "End-to-end turnkey construction. Single accountability spanning architectural blueprint to key handover.",
    description:
      "Eliminate disputes between independent architects and disparate contractors. InstaHome takes unified, single-point accountability for your entire build from foundation excavation to final polishing.",
    deliverables: [
      "Full material procurement with certified testing",
      "Dedicated on-site civil engineers and site supervisors",
      "Guaranteed milestones and transparent cost governance",
      "Zero budget creep with comprehensive itemized bill of quantities"
    ],
    image: IMAGES.rammedEarthPavilion
  },
  {
    num: "04",
    id: "3d-visualization",
    title: "3D Visualization & Multi-Style Studies",
    shortTitle: "3D Visualization",
    tagline: "DIGITAL TWINS",
    summary: "Atmospheric spatial renders, sunlight shadow mapping, and VR walkthroughs before ground breaking.",
    description:
      "As praised by our clients in Google reviews: 'They submit catchy designs with multi style.' We create photorealistic digital twins of your space so you can experience light transitions, materials, and volumes before construction commences.",
    deliverables: [
      "High-fidelity ray-traced day & night lighting studies",
      "Multiple stylistic aesthetic iterations (Vernacular vs. Minimalist)",
      "Virtual reality walk-throughs for spatial confidence",
      "Accurate material texture and physical lighting calibration"
    ],
    image: IMAGES.courtyardDiningPavilion
  }
];

export const TESTIMONIALS = [
  {
    quote:
      "Overall work was very good & quality. Their responsiveness to our architectural suggestions made the entire build enjoyable.",
    author: "Homeowner Client",
    subtext: "Palayamkottai Commission",
    rating: 5,
    tag: "Verified"
  },
  {
    quote:
      "More customers friendly and they submit catchy designs with multi style. The 3D presentations gave complete confidence before execution.",
    author: "Residential Client",
    subtext: "Tirunelveli Town",
    rating: 5,
    tag: "Verified"
  },
  {
    quote:
      "Really good service. Precise structural execution and honest material procurement right here in Palayamkottai.",
    author: "Commercial Space Owner",
    subtext: "Vannarpettai",
    rating: 5,
    tag: "Verified"
  }
];

export const PILLARS = [
  {
    num: "01",
    title: "Thoughtful Design",
    description: "Contextual layouts tailored to movement patterns and family rituals."
  },
  {
    num: "02",
    title: "Attention to Detail",
    description: "Hairline joinery, shadow gaps, and hidden structural precision."
  },
  {
    num: "03",
    title: "Functional Planning",
    description: "Passive wind cross-drafts and natural zenith illumination pathways."
  },
  {
    num: "04",
    title: "Quality Focus",
    description: "Certified raw materials and uncompromised structural integrity."
  },
  {
    num: "05",
    title: "Client-Centric Turnkey Process",
    description: "Transparent milestone reporting with complete multi-style 3D previews before casting a single slab."
  }
];

export const PROCESS_STAGES = [
  {
    step: "01",
    name: "Discover",
    stage: "Stage 01",
    description: "Site topography, solar angles, and client lifestyle discovery.",
    highlight: false
  },
  {
    step: "02",
    name: "Define",
    stage: "Stage 02",
    description: "Spatial zoning, room volumetric massing, and materiality matrix.",
    highlight: true
  },
  {
    step: "03",
    name: "Design",
    stage: "Stage 03",
    description: "Architectural blueprints, MEP engineering, and photorealistic 3D visualization.",
    highlight: false
  },
  {
    step: "04",
    name: "Develop",
    stage: "Stage 04",
    description: "Civil construction, structural casting, and artisanal timber millwork.",
    highlight: true
  },
  {
    step: "05",
    name: "Deliver",
    stage: "Stage 05",
    description: "Snag-free quality audits, comprehensive handover, and ongoing care.",
    highlight: false
  }
];

export const MATERIALS = [
  {
    title: "Rammed Earth & Lime Wash",
    description:
      "High thermal inertia layers that absorb daytime solar heat, radiating coolness during Tamil Nadu evenings.",
    image: IMAGES.rammedEarthPavilion
  },
  {
    title: "Terracotta & Seasoned Teak",
    description:
      "Locally sourced terracotta tiles and plantation teak louvers providing filtered sunlight and natural acoustic dampening.",
    image: IMAGES.courtyardDiningPavilion
  },
  {
    title: "Travertine & Fluted Timber",
    description:
      "Monolithic stone hearths and bespoke vertical timber fluting creating delicate shadow play in interior galleries.",
    image: IMAGES.monolithLivingSuite
  }
];
