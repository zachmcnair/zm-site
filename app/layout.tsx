import './global.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { faktumRegular, faktumMedium, faktumBold, faktumLight, faktumSemiBold, faktumExtraBold, dmMono, newsreader } from './fonts'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { LastFmProvider } from './components/lastfm-context'
import { PageTransition } from './components/page-transition'


// Set to true to show the minimal landing page, false to show the full site
const WIP = false

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Zach McNair — Brand & Product Design Consultant',
    template: '%s | Zach McNair',
  },
  description: 'Brand & product design consultant with over 27 years of experience helping companies reach their intended audiences. Specializing in AI, Web3, and digital product design.',
  keywords: [
    'brand design',
    'product design',
    'UI/UX design',
    'AI design',
    'Web3 design',
    'digital product consultant',
    'design consultant',
    'Zach McNair',
    'Austin designer',
    'AI consultant',
    'Web3 consultant',
    'music production',
    'NFT communities'
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
    'expertise': 'design, AI, Web3, music, mindfulness',
    'location': 'Austin, Texas',
    'languages': 'English',
    'response-time': '24-48 hours'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Zach McNair — Brand & Product Design Consultant',
    description: 'Brand & product design consultant with over 27 years of experience helping companies reach their intended audiences. Specializing in AI, Web3, and digital product design.',
    url: baseUrl,
    siteName: 'Zach McNair',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/zm-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Zach McNair - Brand & Product Design Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zach McNair — Brand & Product Design Consultant',
    description: 'Brand & product design consultant with over 27 years of experience helping companies reach their intended audiences.',
    creator: '@zvpply',
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
      className={`text-black bg-white dark:text-white dark:bg-black ${faktumRegular.variable} ${faktumMedium.variable} ${faktumBold.variable} ${faktumLight.variable} ${faktumSemiBold.variable} ${faktumExtraBold.variable} ${dmMono.variable} ${newsreader.variable} ${GeistMono.className}`}
    >
      <head>
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
                "https://x.com/zvpply",
                "https://linkedin.com/in/zachmcnair",
                "https://pinterest.com/zachmcnair"
              ],
              "jobTitle": "Brand & Product Design Consultant",
              "worksFor": {
                "@type": "Organization",
                "name": "All Manner Of Us",
                "url": "https://allmannerofus.com"
              },
              "description": "Brand & product design consultant with over 27 years of experience helping companies reach their intended audiences. Specializing in AI, Web3, and digital product design.",
              "knowsAbout": [
                "Brand Design",
                "Product Design", 
                "UI/UX Design",
                "AI Design",
                "Web3 Design",
                "Digital Product Strategy",
                "Music Production",
                "NFT Communities",
                "Mindfulness Technology"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Design Consultant",
                "occupationLocation": {
                  "@type": "City",
                  "name": "Austin",
                  "addressRegion": "Texas"
                }
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "THINK",
                "url": "https://thinkagents.ai"
              },
              "memberOf": [
                {
                  "@type": "Organization", 
                  "name": "Mindful Monkz",
                  "url": "https://monkz.xyz"
                }
              ],
              "makesOffer": {
                "@type": "Offer",
                "description": "Brand & product design consulting services",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body className="antialiased font-faktum">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen">
            {!WIP && <Navbar />}
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
