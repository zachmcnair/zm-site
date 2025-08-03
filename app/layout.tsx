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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Zach McNair — Brand & Product Design Consultant',
    template: '%s | Zach McNair',
  },
  description: 'I solve brand and product design problems, and I enable you to reach your audience effectively.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Zach McNair — Brand & Product Design Consultant',
    description: 'I solve brand and product design problems, and I enable you to reach your audience effectively.',
    url: baseUrl,
    siteName: 'Zach McNair',
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
      <body className="antialiased font-faktum">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen py-12 px-6 md:px-8">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
