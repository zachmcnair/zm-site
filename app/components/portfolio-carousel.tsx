'use client'

import { useEffect, useState } from 'react'

interface PortfolioImage {
  id: string
  src: string
  alt: string
  title: string
}

// Sample portfolio images - replace with your actual images
const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    src: '/portfolio/janes-dine-inn.jpg',
    alt: "Jane's Dine Inn - Manifest your palate",
    title: "Jane's Dine Inn"
  },
  {
    id: '2',
    src: '/portfolio/hammock-love-void.jpg',
    alt: 'Hammock - Love In The Void',
    title: 'Hammock'
  },
  {
    id: '3',
    src: '/portfolio/wistia-talking-loud.jpg',
    alt: 'Wistia - Talking Too Loud',
    title: 'Wistia'
  },
  {
    id: '4',
    src: '/portfolio/indeed-recruiting.jpg',
    alt: 'Indeed - Balancing The Art & Science Of Recruiting',
    title: 'Indeed'
  },
  {
    id: '5',
    src: '/portfolio/hca-healthcare.jpg',
    alt: 'HCA Healthcare - Humanizing Healthcare',
    title: 'HCA Healthcare'
  },
  {
    id: '6',
    src: '/portfolio/underoath-erase-me.jpg',
    alt: 'Underoath - Erase Me',
    title: 'Underoath'
  },
  {
    id: '7',
    src: '/portfolio/lemburg-house.jpg',
    alt: 'Lemburg House - Building a Legacy',
    title: 'Lemburg House'
  },
  {
    id: '8',
    src: '/portfolio/hank-booth-five-star.jpg',
    alt: 'Hank & Booth - Five Star',
    title: 'Hank & Booth'
  },
  {
    id: '9',
    src: '/portfolio/oakwood-market.jpg',
    alt: 'Oakwood Public Market - Feels like coming home',
    title: 'Oakwood Public Market'
  },
  {
    id: '10',
    src: '/portfolio/son-lux-remnants.jpg',
    alt: 'Son Lux - Remnants',
    title: 'Son Lux'
  },
  {
    id: '11',
    src: '/portfolio/wild-pony-encinitas.jpg',
    alt: 'Wild Pony - Encinitas EP Campaign',
    title: 'Wild Pony'
  },
  {
    id: '12',
    src: '/portfolio/avaere-filmmaker.jpg',
    alt: 'Avære - A Filmmaker\'s Brand',
    title: 'Avære'
  }
]

export function PortfolioCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Duplicate images for seamless loop
  const duplicatedImages = [...portfolioImages, ...portfolioImages]

  return (
    <div className="relative overflow-hidden py-8">
      {/* Top row - moves right */}
      <div className={`flex space-x-8 mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-scroll-right">
          {duplicatedImages.map((image, index) => (
            <div key={`top-${index}`} className="flex-shrink-0 w-64 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-faktum-regular text-gray-700 dark:text-gray-300">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - moves left */}
      <div className={`flex space-x-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-scroll-left">
          {duplicatedImages.map((image, index) => (
            <div key={`bottom-${index}`} className="flex-shrink-0 w-64 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-faktum-regular text-gray-700 dark:text-gray-300">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 