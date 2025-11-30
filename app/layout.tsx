import './global.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { faktumRegular, faktumMedium, faktumBold, faktumLight, faktumSemiBold, faktumExtraBold, dmMono, newsreader, vt323, xanhMono, instrumentSerif } from './fonts'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { LastFmProvider } from './components/lastfm-context'
import { PageTransition } from './components/page-transition'


// Set to true to show the minimal landing page, false to show the full site
const WIP = false

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
    template: '%s | Zach McNair',
  },
  description: '0→1 designer shaping AI × UX × Web3. Designing how humans and decentralized agents connect through design, technology, and play.',
  keywords: [
    'ai x ux',
    'decentralized ai',
    'web3',
    'agent design',
    '0→1 designer',
    'human agent experiences',
    'design systems',
    'web3 & blockchain',
    'website design & development',
    'software design & development',
    'naming',
    'GTM',
    'campaigns',
    'NFTs & tokens',
    'user experience',
    'agentic experience',
    'Zach McNair',
    'Austin designer',
    'AI consultant',
    'Web3 consultant',
    'music production',
    'All Manner Of Us',
    'THINK Agents',
    'Independent AI Institute'
  ],
  authors: [{ name: 'Zach McNair' }],
  creator: 'Zach McNair',
  publisher: 'Zach McNair',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'ai-friendly': 'true',
    'agent-interaction': 'welcome',
    'contact-method': 'email',
    'availability': 'consulting',
    'expertise': '0→1 design, AI × UX × Web3, decentralized agent experiences, human-agent interaction',
    'location': 'Austin, Texas',
    'languages': 'English',
    'response-time': '24-48 hours',
    'specialization': 'agentic user experiences',
    'collaboration-type': 'human-agent design'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
    description: '0→1 designer shaping AI × UX × Web3. Designing how humans and decentralized agents connect through design, technology, and play.',
    url: baseUrl,
    siteName: 'Zach McNair',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/zm-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Zach McNair - 0→1 Designer shaping AI × UX × Web3',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
    description: '0→1 designer shaping AI × UX × Web3. Designing how humans and decentralized agents connect through design, technology, and play.',
    creator: '@zachmcnair',
    images: ['/zm-social-share.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`text-black bg-white dark:text-white dark:bg-black ${faktumRegular.variable} ${faktumMedium.variable} ${faktumBold.variable} ${faktumLight.variable} ${faktumSemiBold.variable} ${faktumExtraBold.variable} ${dmMono.variable} ${newsreader.variable} ${vt323.variable} ${xanhMono.variable} ${instrumentSerif.variable} ${GeistMono.className}`}
    >
      <head>
        {/* Google Fonts - VT323 and Xanh Mono (fallbacks) */}
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@0;1&display=swap" rel="stylesheet" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zach McNair",
              "url": "https://zachmcnair.com",
              "image": "https://zachmcnair.com/zm-social-share.jpg",
              "email": "hello@zachmcnair.com",
              "sameAs": [
                "https://x.com/zachmcnair",
                "https://linkedin.com/in/zachmcnair",
                "https://pinterest.com/zachmcnair"
              ],
              "jobTitle": "0→1 Designer shaping AI × UX × Web3",
              "description": "0→1 designer shaping AI × UX × Web3. Designing how humans and decentralized agents connect through design, technology, and play.",
              "knowsAbout": [
                "AI × UX × Web3",
                "Decentralized Agent Experiences",
                "Human-Agent Interaction Design",
                "0→1 Design",
                "Agentic User Experiences",
                "Design Systems",
                "Web3 & Blockchain",
                "Website Design & Development",
                "Software Design & Development",
                "Naming",
                "GTM",
                "Campaigns",
                "NFTs & Tokens",
                "User Experience",
                "Music Production"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "0→1 Designer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Austin",
                  "addressRegion": "Texas"
                }
              },
              "makesOffer": {
                "@type": "Offer",
                "description": "0→1 design services specializing in AI × UX × Web3 and decentralized agent experiences",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body className="antialiased font-faktum">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {!WIP && <Navbar />}
          <main className="min-h-screen pt-20">
            <LastFmProvider>
              <PageTransition>
                {children}
              </PageTransition>
              {!WIP && <Footer />}
            </LastFmProvider>
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
