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
    'Zach McNair'
  ],
  authors: [{ name: 'Zach McNair' }],
  creator: 'Zach McNair',
  publisher: 'Zach McNair',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        faktumRegular.variable,
        faktumMedium.variable,
        faktumBold.variable,
        faktumLight.variable,
        faktumSemiBold.variable,
        faktumExtraBold.variable,
        dmMono.variable,
        newsreader.variable,
        GeistMono.variable
      )}
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
              "sameAs": [
                "https://x.com/zvpply",
                "https://linkedin.com/in/zachmcnair",
                "https://pinterest.com/zachmcnair"
              ],
              "jobTitle": "Brand & Product Design Consultant",
              "worksFor": {
                "@type": "Organization",
                "name": "All Manner Of Us"
              },
              "description": "Brand & product design consultant with over 27 years of experience helping companies reach their intended audiences. Specializing in AI, Web3, and digital product design.",
              "knowsAbout": [
                "Brand Design",
                "Product Design",
                "UI/UX Design",
                "AI Design",
                "Web3 Design",
                "Digital Product Strategy"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased font-faktum">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen">
            {!WIP && <Navbar />}
            {children}
            {!WIP && <Footer />}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
