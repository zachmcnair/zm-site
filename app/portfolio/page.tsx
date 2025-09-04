import { Metadata } from 'next'
import { PortfolioMasonry } from '../components/portfolio-masonry'

export const metadata: Metadata = {
  title: 'Portfolio | Zach McNair',
  description: 'Explore my portfolio of brand and product design work, including AI/Web3 projects, creative campaigns, and corporate design solutions.',
  openGraph: {
    title: 'Portfolio | Zach McNair',
    description: 'Explore my portfolio of brand and product design work, including AI/Web3 projects, creative campaigns, and corporate design solutions.',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return (
    <div className="w-screen px-8 md:px-20 py-12">
      <PortfolioMasonry />
    </div>
  )
}
