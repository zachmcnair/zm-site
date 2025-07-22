import './global.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { DarkModeToggle } from './components/dark-mode-toggle'
import { baseUrl } from './sitemap'
import { faktumRegular, faktumMedium, faktumBold, faktumLight, faktumSemiBold, faktumExtraBold } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Zvpply — Designing products for AI & Web3',
    template: '%s | Zvpply',
  },
  description: 'I solve brand and product design problems, and I enable you to reach your audience effectively.',
  icons: {
    icon: '/icon.jpg',
    shortcut: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    title: 'Zvpply — Designing products for AI & Web3',
    description: 'I solve brand and product design problems, and I enable you to reach your audience effectively.',
    url: baseUrl,
    siteName: 'Zvpply',
    locale: 'en_US',
    type: 'website',
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
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        faktumRegular.variable,
        faktumMedium.variable,
        faktumBold.variable,
        faktumLight.variable,
        faktumSemiBold.variable,
        faktumExtraBold.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased font-faktum">
        <DarkModeToggle />
        <main className="min-h-screen py-12 px-4 md:px-8">
          <Navbar />
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
