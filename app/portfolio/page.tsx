import { Metadata } from 'next'
import { baseUrl } from '../sitemap'
import PortfolioPageClient from './portfolio-client'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A collection of 36+ design projects for AI-native interfaces, Web3 platforms, and digital products. Featured work includes THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, HCA Healthcare, and more.',
  alternates: {
    canonical: `${baseUrl}/portfolio`,
  },
  openGraph: {
    title: 'Portfolio — Zach McNair',
    description: 'A collection of 36+ design projects for AI-native interfaces, Web3 platforms, and digital products. Featured work includes THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, and more.',
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
    description: 'A collection of 36+ design projects for AI-native interfaces, Web3 platforms, and digital products. Featured work includes THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, and more.',
    images: [`${baseUrl}/zm-social-share.jpg`],
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}
