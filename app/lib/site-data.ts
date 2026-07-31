/**
 * site-data.ts — single source of truth for the home page content.
 *
 * Extracted from the previous hardcoded landing.tsx so the tri-column home,
 * and later the AskZach LLM, can consume the same structured content.
 *
 * Memo paragraphs are stored as segment arrays so inline links survive as data
 * (and so plain text can be derived for the LLM via `memoPlainText`).
 */

export type Segment = string | { text: string; href: string }

export interface MemoParagraph {
  id: string
  /** Included in the "tightened" letter shown by default in the About column. */
  lead?: boolean
  segments: Segment[]
}

export interface ExperienceEntry {
  title: string
  org: string
  orgHref?: string
  dates: string
  location: string
  /** Short blurb paragraphs. */
  blurb?: string[]
  /** Optional bullet list (e.g. "How we help", "Have helped launch"). */
  listLabel?: string
  list?: string[]
  clients?: string
}

export interface Reference {
  name: string
  role: string
  org: string
  quote: string
}

export interface PersonalProject {
  role: string
  name: string
  href?: string
  location: string
  dates: string
}

export interface PressItem {
  title: string
  outlet: string
  year: string
}

// ---------------------------------------------------------------------------
// Identity
// ---------------------------------------------------------------------------

export const identity = {
  name: 'Zach McNair',
  positioning: 'Brand & product designer',
  /** One-liner used under the name. */
  tagline:
    'I design products people believe in, building brand and product from zero, for entertainment, community, and AI-native tech.',
  since: 1998,
  location: 'Austin, Texas & Remote',
  email: 'hello@zachmcnair.com',
  signature: '/zm-signature.svg',
}

export const availability = {
  status: 'limited' as 'open' | 'limited' | 'closed',
  label: 'Open to the right project',
  dotColor: '#E2B237',
  mailto:
    "mailto:hello@zachmcnair.com?subject=I think I've got the right project",
}

export const socials = [
  { label: 'Email', href: 'mailto:hello@zachmcnair.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/zachmcnair' },
  { label: 'X', href: 'https://x.com/zachmcnair' },
  { label: 'Instagram', href: 'https://instagram.com/zachmcnair' },
]

// ---------------------------------------------------------------------------
// The memo (the "letter" voice). Faithful to the previous landing.tsx copy.
// ---------------------------------------------------------------------------

export const memo: MemoParagraph[] = [
  {
    id: 'greeting',
    lead: true,
    segments: ['Howdy,'],
  },
  {
    id: 'introduction',
    lead: true,
    segments: [
      "Since 1998 I've been obsessed with one thing: the moment a product stops being a thing and starts being something people care about. That space between what something is and what people feel about it is where I live.",
    ],
  },
  {
    id: 'sweet-spot',
    lead: true,
    segments: [
      "My sweet spot is products that need believers: entertainment, community platforms, AI-native tools. Companies where the work isn't just functional, it's felt.",
    ],
  },
  {
    id: 'freelance-work',
    segments: [
      'In 2017, I founded ',
      { text: 'All Manner Of Us', href: 'https://allmannerofus.com' },
      ', a design and strategy studio shaping the next era of collaboration between people and intelligent systems. Today, I consult on brand and product design for teams building what’s next.',
    ],
  },
  {
    id: 'current-work',
    segments: [
      'Recently, I built and launched ',
      { text: 'Safeclip', href: 'https://spaceclipapp.com' },
      ", a privacy-first clipping and transcription desktop application on MacOS, Windows, and Linux for people who can't afford to send their content to the cloud. I led the marcom and product design for ",
      { text: 'Think Agents', href: 'https://thinkagents.ai' },
      ' and 6079ai, where I built everything from the design system to a gamified community web app with real users competing in real time. With ',
      { text: 'Stages', href: 'https://www.stages.movie/' },
      ', I helped filmmakers get their stories in front of audiences who were ready for them.',
    ],
  },
  {
    id: 'web3',
    segments: [
      "I've also been building in Web3 since 2021, across NFT communities, token launches, and protocol design. My tangible extension there is through Mindful Monkz, a community and wellness lifestyle IP brand.",
    ],
  },
  {
    id: 'philosophy',
    segments: ['I believe design without conviction is decoration.'],
  },
  {
    id: 'contact-invitation',
    segments: [
      "If you're building something that needs to mean something, ",
      {
        text: "let's talk.",
        href: "mailto:hello@zachmcnair.com?subject=Let's%20create%20something%20great%20together",
      },
    ],
  },
  {
    id: 'closing',
    segments: ['Cheers,\nZach'],
  },
]

/** Plain-text rendering of the memo — for AskZach grounding later. */
export const memoPlainText = memo
  .map((p) => p.segments.map((s) => (typeof s === 'string' ? s : s.text)).join(''))
  .join('\n\n')

// ---------------------------------------------------------------------------
// Resume
// ---------------------------------------------------------------------------

export const experience: ExperienceEntry[] = [
  {
    title: 'Founder, Agentic Experience Design (AXD)',
    org: 'All Manner Of Us',
    orgHref: 'https://allmannerofus.com',
    dates: '2017–Present',
    location: 'Austin, TX & Remote',
    blurb: [
      'All Manner Of Us (AMOU) is a design and strategy studio shaping the next era of collaboration between people and intelligent systems.',
      'We help teams translate intelligence into products people actually trust and use, designing experiences that connect humans, agents, and data into clear, coherent workflows.',
    ],
    listLabel: 'How we help',
    list: [
      'Product & agentic system design',
      'AI-native interface architecture',
      'Strategic design consulting + coaching',
      'Brand and creative direction',
      'Web3 + decentralized experiences',
    ],
    clients:
      'Morpheus • 6079 • THINK • AI Layer Labs • Indeed • Wistia • HCA Healthcare • Son Lux • Superset • Kistler Rods • Lemburg House • Hammock',
  },
  {
    title: 'UX & Digital Product Designer',
    org: 'AI Layer Labs',
    dates: '2024–2025',
    location: 'Remote',
    blurb: [
      'Worked to create a truly independent AI ecosystem by bridging the gap between brand and product, focusing on user experience, and utilizing Web3 and AI technologies.',
    ],
    listLabel: 'Helped launch',
    list: [
      'THINK Protocol token ($THINK) with Futureverse',
      'The Independent AI Institute',
      'A social mission game using X integration (6079.ai)',
      'Marcom for Wire.Network & Wire.Foundation',
      'A blockchain hub, explorer, and node dashboard for Wire Network',
      'A decentralized AI PVP game (AI Prize Fight)',
      '$MOR token swap product for Morpheus (Mor.org)',
    ],
  },
  {
    title: 'Art Director & Senior Marketing Designer',
    org: 'Creative Market (Autodesk)',
    dates: '2015–2016',
    location: 'San Francisco, CA & Remote',
    blurb: [
      'An online marketplace for design content from independent creatives worldwide. Worked across marketing, product, and brand initiatives. Enhanced product signup conversion by 17%.',
    ],
  },
  {
    title: 'Co-founder & Creative Director',
    org: 'Dbln llc',
    dates: '2013–2014',
    location: 'Houston, TX & Remote',
    blurb: [
      'A web design, development, and brand studio with a focus on the wedding and hospitality industries.',
    ],
  },
  {
    title: 'Freelance Consultant',
    org: 'Self-employed',
    dates: '1998–Present',
    location: 'Austin, TX & Remote',
    blurb: [
      'I solve brand & product design problems to help people reach their intended audiences, using design and strategy to bridge the gap between brand and product.',
    ],
  },
]

export const expertise = [
  'AI',
  'Art Direction',
  'Brand Strategy',
  'Brand Guidelines',
  'Campaigns',
  'Creative Direction',
  'Curation',
  'Design Consulting',
  'Design Systems',
  'Environments',
  'GTM',
  'Identity Design',
  'Installations',
  'Naming',
  'NFTs & Tokens',
  'Original Artwork',
  'Print & Packaging',
  'Product Design',
  'Signage & Wayfinding',
  'Software Design & Development',
  'User Experience',
  'Web3 & Blockchain',
  'Website Design & Development',
]

/** Curated marquee clients for the Resume column. */
export const selectClients = [
  'Indeed',
  'Wistia',
  'HCA Healthcare',
  'Google',
  'Johnson & Johnson',
  'Accenture',
  'WeWork',
  'Morpheus',
  '6079',
  'THINK',
  'Son Lux',
  'Underoath',
  'Mutemath',
  'Hammock',
]

export const references: Reference[] = [
  {
    name: 'Margaret Becker',
    role: 'Director of UX Research',
    org: 'Indeed',
    quote:
      'He always delivered quality, thoughtful design work that enhanced our startup product brand and gave our UX the polish of a much more mature product.',
  },
  {
    name: 'Adam Day',
    role: 'Creative Director',
    org: 'Wistia',
    quote:
      'An attentive listener and great designer — Zach worked hard to experiment and incorporate our feedback, and helped us create a strong brand identity. Would absolutely work with Zach again.',
  },
  {
    name: 'James Hobbs',
    role: 'VP of Design',
    org: 'MetaLab',
    quote:
      'Zach is always thinking outside of the box and trying to break traditional design patterns to come up with unique solutions. He leads teams well and inspires great outcomes.',
  },
]

export const press: PressItem[] = [
  { title: 'A "renaissance man in the creative realm"', outlet: 'VSCO', year: '' },
]

export const personalProjects: PersonalProject[] = [
  {
    role: 'Music Producer, Writer',
    name: 'Forenn',
    href: 'https://open.spotify.com/artist/73c3uoSWES19r8u3pNWd2K',
    location: 'Texas, USA & Nairobi, Kenya',
    dates: '2012–Present',
  },
  {
    role: 'Music Producer',
    name: 'Emma Bieniewicz',
    href: 'https://open.spotify.com/artist/3Q8oea8QqbpbbgHLzDcjTo',
    location: 'Grand Rapids, MI & Remote',
    dates: '2021–Present',
  },
  {
    role: 'Community & Wellness IP',
    name: 'Mindful Monkz',
    location: 'Remote',
    dates: '2021–Present',
  },
]
