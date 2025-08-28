'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

interface PortfolioImage {
  id: string
  src: string
  alt: string
  title: string
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide' | 'ultra-wide'
  hidden?: boolean
}

// Portfolio images data
const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    src: '/portfolio/janes-dine-inn.avif',
    alt: "Jane's Dine Inn - Manifest your palate",
    title: "Jane's Dine Inn",
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '2',
    src: '/portfolio/hammock-litv.webp',
    alt: 'Hammock - Love In The Void',
    title: 'Hammock',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '3',
    src: '/portfolio/wistia-talking-loud.webp',
    alt: 'Wistia - Talking Too Loud',
    title: 'Wistia',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '4',
    src: '/portfolio/indeed-hire-book.webp',
    alt: 'Indeed - Balancing The Art & Science Of Recruiting',
    title: 'Indeed',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '5',
    src: '/portfolio/hca-healthcare.webp',
    alt: 'HCA Healthcare - Humanizing Healthcare',
    title: 'HCA Healthcare',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '6',
    src: '/portfolio/underoath.webp',
    alt: 'Underoath',
    title: 'Underoath',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '7',
    src: '/portfolio/son-lux-remnants.webp',
    alt: 'Son Lux - Remnants',
    title: 'Son Lux',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '8',
    src: '/portfolio/oakwood-public-market.webp',
    alt: 'Oakwood Public Market',
    title: 'Oakwood Public Market',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '9',
    src: '/portfolio/mutemath-playdead.webp',
    alt: 'Mutemath - Playdead',
    title: 'Mutemath',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '10',
    src: '/portfolio/lemburg-house.webp',
    alt: 'Lemburg House',
    title: 'Lemburg House',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '11',
    src: '/portfolio/jane-wild.webp',
    alt: 'Jane Wild',
    title: 'Jane Wild',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '12',
    src: '/portfolio/indeed-hire-book.webp',
    alt: 'Indeed - Hire Book',
    title: 'Indeed',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '13',
    src: '/portfolio/humin-web.avif',
    alt: 'Humin Web',
    title: 'Humin Web',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '14',
    src: '/portfolio/hank-booth-fire-star.webp',
    alt: 'Hank Booth - Fire Star',
    title: 'Hank Booth',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '15',
    src: '/portfolio/hammock-litv.webp',
    alt: 'Hammock - LITV',
    title: 'Hammock',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '16',
    src: '/portfolio/forenn-forenn.webp',
    alt: 'Forenn',
    title: 'Forenn',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '17',
    src: '/portfolio/creative-market-video.webp',
    alt: 'Creative Market Video',
    title: 'Creative Market',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '18',
    src: '/portfolio/capital-one-app.webp',
    alt: 'Capital One App',
    title: 'Capital One',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '19',
    src: '/portfolio/caleb-mabrey-cover.webp',
    alt: 'Caleb Mabrey',
    title: 'Caleb Mabrey',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '20',
    src: '/portfolio/avaere.webp',
    alt: 'Avaere',
    title: 'Avaere',
    aspectRatio: 'portrait',
    hidden: false
  },
  {
    id: '21',
    src: '/portfolio/wistia-talking-loud-web.webp',
    alt: 'Wistia - Talking Too Loud Web',
    title: 'Wistia Web',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '22',
    src: '/portfolio/w-co.webp',
    alt: 'W-Co',
    title: 'W-Co',
    aspectRatio: 'landscape',
    hidden: false
  },
  {
    id: '23',
    src: '/portfolio/souls-1.png',
    alt: 'Souls - AI Agent Experience',
    title: 'Souls',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '24',
    src: '/portfolio/souls-2.png',
    alt: 'Souls - AI Agent Interface',
    title: 'Souls',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '25',
    src: '/portfolio/souls-3.png',
    alt: 'Souls - AI Agent System',
    title: 'Souls',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '26',
    src: '/portfolio/monkz-xyz.png',
    alt: 'Mindful Monkz - NFT Community Platform',
    title: 'Mindful Monkz',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '27',
    src: '/portfolio/think-agents.png',
    alt: 'THINK Agents - AI Platform',
    title: 'THINK Agents',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '28',
    src: '/portfolio/wire-network.png',
    alt: 'Wire Network - Decentralized Infrastructure',
    title: 'Wire Network',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '29',
    src: '/portfolio/iai.png',
    alt: 'Independent AI Institute - Research Consortium',
    title: 'IAI',
    aspectRatio: 'wide',
    hidden: false
  },
  {
    id: '30',
    src: '/portfolio/mor-swap.png',
    alt: 'MOR Swap - DeFi Interface',
    title: 'MOR Swap',
    aspectRatio: 'landscape',
    hidden: false
  }
]

export function PortfolioCarousel() {
  const [topRowImages, setTopRowImages] = useState<PortfolioImage[]>([])
  const [bottomRowImages, setBottomRowImages] = useState<PortfolioImage[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Create stable, non-resetting rows
  const createRowImages = useCallback(() => {
    // Use deterministic ordering based on image ID hashes
    const ordered = [...portfolioImages].sort((a, b) => {
      const hashA = a.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      const hashB = b.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      return hashA - hashB
    })
    
    const half = Math.ceil(ordered.length / 2)
    setTopRowImages(ordered.slice(0, half))
    setBottomRowImages(ordered.slice(half))
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    createRowImages()
  }, [createRowImages])

  // JavaScript-based continuous scrolling
  useEffect(() => {
    if (!isLoaded || !topRowRef.current || !bottomRowRef.current) return

    const topRow = topRowRef.current
    const bottomRow = bottomRowRef.current
    const scrollSpeed = 1.5 // pixels per frame - adjust for speed
    let topPosition = 0
    let bottomPosition = 0

    const animate = () => {
      // Move top row left
      topPosition -= scrollSpeed
      topRow.style.transform = `translateX(${topPosition}px)`

      // Move bottom row right
      bottomPosition += scrollSpeed
      bottomRow.style.transform = `translateX(${bottomPosition}px)`

      // Get the total width of all images in each row
      const topImages = Array.from(topRow.children) as HTMLElement[]
      const bottomImages = Array.from(bottomRow.children) as HTMLElement[]
      
      // Calculate total width of one complete set of images
      let topRowWidth = 0
      let bottomRowWidth = 0
      
      // Only count the first set (not duplicates)
      const topSetCount = topImages.length / 2
      const bottomSetCount = bottomImages.length / 2
      
      for (let i = 0; i < topSetCount; i++) {
        topRowWidth += topImages[i].offsetWidth + 16 // 16px for margin
      }
      
      for (let i = 0; i < bottomSetCount; i++) {
        bottomRowWidth += bottomImages[i].offsetWidth + 16 // 16px for margin
      }

      // Reset top row when it has scrolled one complete set width
      if (Math.abs(topPosition) >= topRowWidth) {
        topPosition = 0
        topRow.style.transform = `translateX(${topPosition}px)`
      }

      // Reset bottom row when it has scrolled one complete set width
      if (bottomPosition >= bottomRowWidth) {
        bottomPosition = 0
        bottomRow.style.transform = `translateX(${bottomPosition}px)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading portfolio...</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {/* Top Row - Scrolls Left */}
      <div ref={topRowRef} className="flex mb-4" style={{ transform: 'translateX(0)' }}>
        {topRowImages.map((image, index) => (
          <div key={`top-${image.id}`} className="flex-shrink-0 mx-2">
            <img
              src={image.src}
              alt={image.alt}
              title={image.title}
              className="h-64 w-auto object-cover"
              style={{ maxHeight: '256px' }}
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {topRowImages.map((image, index) => (
          <div key={`top-duplicate-${image.id}`} className="flex-shrink-0 mx-2">
            <img
              src={image.src}
              alt={image.alt}
              title={image.title}
              className="h-64 w-auto object-cover"
              style={{ maxHeight: '256px' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Bottom Row - Scrolls Right */}
      <div ref={bottomRowRef} className="flex" style={{ transform: 'translateX(0)' }}>
        {bottomRowImages.map((image, index) => (
          <div key={`bottom-${image.id}`} className="flex-shrink-0 mx-2">
            <img
              src={image.src}
              alt={image.alt}
              title={image.title}
              className="h-64 w-auto object-cover"
              style={{ maxHeight: '256px' }}
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {bottomRowImages.map((image, index) => (
          <div key={`bottom-duplicate-${image.id}`} className="flex-shrink-0 mx-2">
            <img
              src={image.src}
              alt={image.alt}
              title={image.title}
              className="h-64 w-auto object-cover"
              style={{ maxHeight: '256px' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}