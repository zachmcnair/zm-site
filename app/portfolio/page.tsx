import { Metadata } from 'next'
import { baseUrl } from '../sitemap'
import PortfolioPageClient from './portfolio-client'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A collection of design work for AI-native interfaces, Web3 platforms, and digital products.',
  alternates: {
    canonical: `${baseUrl}/portfolio`,
  },
  openGraph: {
    title: 'Portfolio — Zach McNair',
    description: 'A collection of design work for AI-native interfaces, Web3 platforms, and digital products.',
    url: `${baseUrl}/portfolio`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/zm-social-share.jpg`,
        width: 1200,
        height: 630,
        alt: 'Zach McNair Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Zach McNair',
    description: 'A collection of design work for AI-native interfaces, Web3 platforms, and digital products.',
    images: [`${baseUrl}/zm-social-share.jpg`],
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
