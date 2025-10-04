'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface PortfolioItem {
  id: string
  src: string
  alt: string
  title: string
  client: string
  metatags: string[]
  aspectRatio: 'portrait' | 'square' | 'landscape' | 'wide' | 'ultra-wide'
  hidden?: boolean
  caseStudyUrl?: string
}

// Enhanced portfolio data with client names and metatags
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    src: '/portfolio/6079-nodeshifter.png',
    alt: '6079 - NodeShifter Interface',
    title: 'NodeShifting for independent AI',
    client: '6079',
    metatags: ['Product Design', 'Interface Design', 'UX Design'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://6079.ai/game'
  },
  {
    id: '2',
    src: '/portfolio/janes-dine-inn.avif',
    alt: "Jane's Dine Inn - Manifest your palate",
    title: "Manifest Your Palate",
    client: "Jane's Dine Inn",
    metatags: ['Visual Identity', 'Website Design', 'Ecommerce'],
    aspectRatio: 'portrait',
    hidden: true,
    caseStudyUrl: 'https://thinkagents.ai'
  },
  {
    id: '3',
    src: '/portfolio/hammock-litv.webp',
    alt: 'Hammock - Love In The Void',
    title: 'Love In The Void',
    client: 'Hammock',
    metatags: ['Creative Direction','Album Packaging', 'Visual Identity'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '4',
    src: '/portfolio/SOULS-1c(compressed).jpg',
    alt: 'Souls - AI Agent Experience',
    title: 'Designing independent AI for the consumer market',
    client: 'SOU.LS',
    metatags: ['AI', 'UX Design', 'Product Design'],
    aspectRatio: 'portrait',
    hidden: false,
    caseStudyUrl: 'https://sou.ls'
  },
  {
    id: '5',
    src: '/portfolio/wistia-talking-loud.webp',
    alt: 'Wistia - Talking Too Loud',
    title: 'Talking Too Loud',
    client: 'Wistia',
    metatags: ['Brand Campaign', 'Art Direction', 'Podcast'],
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '6',
    src: '/portfolio/think-agents.png',
    alt: 'THINK Agents - AI Platform Homepage',
    title: 'AI you own',
    client: 'THINK Agents',
    metatags: ['AI', 'Platform Design', 'Product Design'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://thinkagents.ai'
  },
  {
    id: '7',
    src: '/portfolio/indeed-hire-book.webp',
    alt: 'Indeed - Balancing The Art & Science Of Recruiting',
    title: 'The Art & Science of Recruiting',
    client: 'Indeed',
    metatags: ['Art Direction', 'Book Design', 'Brand Strategy'],
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '8',
    src: '/portfolio/think-agents-dashboard.png',
    alt: 'THINK Agents - Dashboard',
    title: 'A dashboard for independent AI',
    client: 'THINK Agents',
    metatags: ['Web3', 'Dashboard Design', 'UX Design'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://thinkagents.ai'
  },
  {
    id: '9',
    src: '/portfolio/hca-healthcare.webp',
    alt: 'HCA Healthcare - Humanizing Healthcare',
    title: 'Humanizing Healthcare',
    client: 'HCA Healthcare',
    metatags: ['Campaign', 'Photography', 'Film'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '10',
    src: '/portfolio/SOULS-2c(compressed).jpg',
    alt: 'Souls - AI Agent Experience',
    title: 'Designing independent AI for the consumer market',
    client: 'SOU.LS',
    metatags: ['AI', 'Dashboard Design', 'UX Design'],
    aspectRatio: 'portrait',
    hidden: false,
    caseStudyUrl: 'https://sou.ls'
  },
  {
    id: '11',
    src: '/portfolio/underoath.webp',
    alt: 'Underoath',
    title: 'Erase Me',
    client: 'Underoath',
    metatags: ['Website Design', 'Front-end'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '12',
    src: '/portfolio/6079-home.png',
    alt: '6079 - Home Interface',
    title: 'Securing Independent AI',
    client: '6079',
    metatags: ['Product Design', 'Interface Design', 'UX Design'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://6079.ai'
  },
  {
    id: '13',
    src: '/portfolio/son-lux-remnants.webp',
    alt: 'Son Lux - Remnants',
    title: 'Remnants',
    client: 'Son Lux',
    metatags: ['Creative Direction', 'Photography', 'Album Art'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '14',
    src: '/portfolio/think-agents-claim.png',
    alt: 'THINK Agents - Claim Interface',
    title: '$THINK token claim interface',
    client: 'THINK Agents',
    metatags: ['Web3', 'Interface Design', 'Front-end Development'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://thinkagents.ai/claim'
  },
  {
    id: '16',
    src: '/portfolio/SOULS-3c(compressed).jpg',
    alt: 'Souls - AI Agent Experience',
    title: 'Designing independent AI for the consumer market',
    client: 'SOU.LS',
    metatags: ['AI', 'Interface Design', 'Product Design'],
    aspectRatio: 'portrait',
    hidden: false,
    caseStudyUrl: 'https://sou.ls'
  },
  {
    id: '17',
    src: '/portfolio/monkz-xyz.png',
    alt: 'Mindful Monkz - NFT Community Platform',
    title: 'Mindful NFT art generator',
    client: 'Mindful Monkz',
    metatags: ['Art Direction', 'Product Design', 'Community Platform'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://monkz.xyz/studio'
  },
  {
    id: '18',
    src: '/portfolio/6079-S1.png',
    alt: '6079 - S1 Interface',
    title: 'The end is the beginning',
    client: '6079',
    metatags: ['Product Design', 'Interface Design', 'UX Design'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://6079.ai/dashboard'
  },
  {
    id: '19',
    src: '/portfolio/mutemath-playdead.webp',
    alt: 'Mutemath - Playdead',
    title: 'PLAY DEAD album and tour campaign',
    client: 'Mutemath',
    metatags: ['Creative Direction', 'Campaign Design', 'Packaging'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '20',
    src: '/portfolio/think-agents-thinkubator.png',
    alt: 'THINK Agents - Thinkubator',
    title: 'Thinkubator',
    client: 'THINK Agents',
    metatags: ['Product Design', 'Front-end Development'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://thinkagents.ai/products/thinkubator'
  },
  {
    id: '21',
    src: '/portfolio/lemburg-house.webp',
    alt: 'Lemburg House',
    title: 'Building a legacy',
    client: 'Lemburg House',
    metatags: ['Brand Strategy', 'Art Direction', 'AOR'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '22',
    src: '/portfolio/wistia-talking-loud-web.webp',
    alt: 'Wistia - Talking Too Loud Website',
    title: 'Talking Too Loud',
    client: 'Wistia',
    metatags: ['Web Design', 'Art Direction'],
    aspectRatio: 'landscape',
    hidden: false,
    caseStudyUrl: 'https://wistia.com/series/talking-too-loud'
  },
  {
    id: '24',
    src: '/portfolio/think-agents-token-claimed.png',
    alt: 'THINK Agents - Token Claimed',
    title: '$THINK token claim interface',
    client: 'THINK Agents',
    metatags: ['Web3', 'Product Design', 'Front-end Development'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://thinkagents.ai/claim'
  },
  {
    id: '25',
    src: '/portfolio/forenn-forenn.webp',
    alt: 'Forenn',
    title: 'How far can you take a dream?',
    client: 'Forenn',
    metatags: ['Creative Direction', 'Visual Identity', 'Packaging'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '26',
    src: '/portfolio/wire-network.png',
    alt: 'Wire Network - Decentralized Infrastructure',
    title: 'L1 Blockchain Explorer',
    client: 'Wire Network',
    metatags: ['Product Design', 'UX Design'],
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '27',
    src: '/portfolio/caleb-mabrey-cover.webp',
    alt: 'Caleb Mabrey - Album Cover',
    title: 'Caleb Mabrey',
    client: 'Caleb Mabrey',
    metatags: ['Creative Direction', 'Album Packaging'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '28',
    src: '/portfolio/think-agents-token-claimed-2.png',
    alt: 'THINK Agents - Token Claimed 2',
    title: '$THINK token claim interface',
    client: 'THINK Agents',
    metatags: ['Web3', 'Product Design', 'Front-end Development'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://thinkagents.ai/claim'
  },
  {
    id: '29',
    src: '/portfolio/iai.png',
    alt: 'IAI - Independent AI Institute',
    title: 'Making Independent AI the global standard',
    client: 'Independent AI Institute',
    metatags: ['Website Design', 'UX'],
    aspectRatio: 'wide',
    hidden: false,
    caseStudyUrl: 'https://independentai.institute'
  },
  {
    id: '30',
    src: '/portfolio/caleb-mabrey-cover-2.webp',
    alt: 'Caleb Mabrey - Album Cover - In The Spaces',
    title: 'In The Spaces',
    client: 'Caleb Mabrey',
    metatags: ['Creative Direction', 'Album Packaging'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '31',
    src: '/portfolio/mor-swap.png',
    alt: 'MOR Swap - DeFi Interface',
    title: 'MOR Token Swap',
    client: 'Mor.org',
    metatags: ['DeFi', 'Interface Design', 'Web3'],
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '32',
    src: '/portfolio/creative-market-video.webp',
    alt: 'Creative Market Video',
    title: 'Community Matters campaign',
    client: 'Creative Market',
    metatags: ['Creative Direction', 'Marketing', 'Film'],
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '33',
    src: '/portfolio/humin-web.avif',
    alt: 'Humin Web',
    title: 'Humin Platform',
    client: 'Humin',
    metatags: ['Creative Direction', 'Website Design', 'UX Design'],
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '35',
    src: '/portfolio/avaere.webp',
    alt: 'Avaere',
    title: 'Avaere',
    client: 'Avaere',
    metatags: ['Creative Direction', 'Website Design', 'Visual Identity'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '36',
    src: '/portfolio/w-co.webp',
    alt: 'W-Co',
    title: 'Merchline Design',
    client: 'W-Co',
    metatags: ['Merch Design'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '37',
    src: '/portfolio/hank-booth-fire-star.webp',
    alt: 'Hank & Booth - Five Star',
    title: 'Five Star',
    client: 'Hank & Booth',
    metatags: ['Title Design', 'Movie Poster Design', 'Art Direction'],
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '38',
    src: '/portfolio/arrow-pattern.webp',
    alt: 'Arrow Pattern',
    title: 'Arrow Pattern',
    client: 'Pattern Design',
    metatags: ['Pattern Design', 'Visual Identity', 'Creative Direction'],
    aspectRatio: 'square',
    hidden: true
  }
]

// Images will now display at their natural aspect ratios

export function PortfolioMasonry() {
  const [visibleItems, setVisibleItems] = useState<PortfolioItem[]>([])

  useEffect(() => {
    // Filter out hidden items
    const filtered = portfolioItems.filter(item => !item.hidden)
    setVisibleItems(filtered)
  }, [])

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {visibleItems.map((item) => {
        const CardContent = () => (
          <>
            {/* Image with hover overlay */}
            <div className="relative w-full group">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="w-full h-auto"
                style={{ aspectRatio: 'auto' }}
                unoptimized
              />
              
              {/* Hover overlay for case studies */}
              {item.caseStudyUrl && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div 
                    className="px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-200 hover:bg-[#21232B]"
                    style={{ 
                      backgroundColor: 'rgba(14, 15, 18, 0.95)',
                      color: '#f8f8f8',
                      fontWeight: '500'
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-sm font-faktum-medium">VIEW LIVE SITE</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="px-0 py-4">
              {/* Title */}
              <h3 className="text-lg font-faktum-medium text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              
              {/* Client Name */}
              <h4 className="text-sm font-faktum-medium text-gray-700 dark:text-gray-300 mb-1">
                {item.client}
              </h4>
              
              {/* Metatags */}
              <p className="text-xs text-gray-500 dark:text-gray-500 font-mono uppercase">
                {item.metatags.join(', ')}
              </p>
            </div>
          </>
        )

        return (
          <div
            key={item.id}
            className="break-inside-avoid mb-6 overflow-hidden"
          >
            {item.caseStudyUrl ? (
              <a
                href={item.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer no-underline hover:no-underline"
              >
                <CardContent />
              </a>
            ) : (
              <CardContent />
            )}
          </div>
        )
      })}
    </div>
  )
}
