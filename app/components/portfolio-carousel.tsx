'use client'

import { useEffect, useState } from 'react'

interface PortfolioImage {
  id: string
  src: string
  alt: string
  title: string
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide' // Fallback if auto-detection fails
}

interface PortfolioImageWithDimensions extends PortfolioImage {
  naturalWidth?: number
  naturalHeight?: number
  calculatedAspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide'
}

// Sample portfolio images - replace with your actual images
const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    src: '/portfolio/janes-dine-inn.avif',
    alt: "Jane's Dine Inn - Manifest your palate",
    title: "Jane's Dine Inn",
    aspectRatio: 'portrait'
  },
  {
    id: '2',
    src: '/portfolio/hammock-litv.webp',
    alt: 'Hammock - Love In The Void',
    title: 'Hammock',
    aspectRatio: 'portrait'
  },
  {
    id: '3',
    src: '/portfolio/wistia-talking-loud.webp',
    alt: 'Wistia - Talking Too Loud',
    title: 'Wistia',
    aspectRatio: 'landscape'
  },
  {
    id: '4',
    src: '/portfolio/indeed-hire-book.webp',
    alt: 'Indeed - Balancing The Art & Science Of Recruiting',
    title: 'Indeed',
    aspectRatio: 'landscape'
  },
  {
    id: '5',
    src: '/portfolio/hca-healthcare.webp',
    alt: 'HCA Healthcare - Humanizing Healthcare',
    title: 'HCA Healthcare',
    aspectRatio: 'portrait'
  },
  {
    id: '6',
    src: '/portfolio/underoath.webp',
    alt: 'Underoath - Erase Me',
    title: 'Underoath',
    aspectRatio: 'landscape'
  },
  {
    id: '7',
    src: '/portfolio/lemburg-house.webp',
    alt: 'Lemburg House - Building a Legacy',
    title: 'Lemburg House',
    aspectRatio: 'portrait'
  },
  {
    id: '8',
    src: '/portfolio/hank-booth-fire-star.webp',
    alt: 'Hank & Booth - Five Star',
    title: 'Hank & Booth',
    aspectRatio: 'portrait'
  },
  {
    id: '9',
    src: '/portfolio/oakwood-public-market.webp',
    alt: 'Oakwood Public Market - Feels like coming home',
    title: 'Oakwood Public Market',
    aspectRatio: 'portrait'
  },
  {
    id: '10',
    src: '/portfolio/son-lux-remnants.webp',
    alt: 'Son Lux - Remnants',
    title: 'Son Lux',
    aspectRatio: 'portrait'
  },
  {
    id: '11',
    src: '/portfolio/forenn-forenn.webp',
    alt: 'Forenn - Forenn',
    title: 'Forenn',
    aspectRatio: 'portrait'
  },
  {
    id: '12',
    src: '/portfolio/avaere.webp',
    alt: 'Avære - A Filmmaker\'s Brand',
    title: 'Avære',
    aspectRatio: 'portrait'
  }
]

// Calculate aspect ratio from actual image dimensions
const calculateAspectRatio = (width: number, height: number): 'portrait' | 'landscape' | 'square' | 'wide' => {
  const ratio = width / height
  
  if (ratio < 0.8) {
    return 'portrait'
  } else if (ratio > 1.5) {
    return 'wide'
  } else if (ratio > 1.1) {
    return 'landscape'
  } else if (ratio < 0.95) {
    return 'portrait'
  } else {
    return 'square'
  }
}

// Get card width based on image type - optimized to match live site performance
const getCardWidth = (aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide') => {
  switch (aspectRatio) {
    case 'portrait':
      return 'w-24 md:w-48' // 96px on mobile, 192px on desktop
    case 'landscape':
      return 'w-48 md:w-96' // 192px on mobile, 384px on desktop
    case 'square':
      return 'w-36 md:w-72' // 144px on mobile, 288px on desktop
    case 'wide':
      return 'w-60 md:w-[30rem]' // 240px on mobile, 480px on desktop
    default:
      return 'w-40 md:w-80' // 160px on mobile, 320px on desktop
  }
}



export function PortfolioCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const [imagesWithDimensions, setImagesWithDimensions] = useState<PortfolioImageWithDimensions[]>([])

  useEffect(() => {
    // Load images and get their dimensions
    const loadImageDimensions = async () => {
      const loadedImages: PortfolioImageWithDimensions[] = []
      
      for (const image of portfolioImages) {
        try {
          const img = new Image()
          
          await new Promise((resolve) => {
            img.onload = () => {
              if (img.naturalWidth > 10 && img.naturalHeight > 10) {
                const calculatedAspectRatio = calculateAspectRatio(img.naturalWidth, img.naturalHeight)
                loadedImages.push({
                  ...image,
                  naturalWidth: img.naturalWidth,
                  naturalHeight: img.naturalHeight,
                  calculatedAspectRatio
                })
              } else {
                // Fallback to manual aspect ratio if dimensions seem wrong
                loadedImages.push({
                  ...image,
                  calculatedAspectRatio: image.aspectRatio || 'landscape'
                })
              }
              resolve(true)
            }
            img.onerror = () => {
              console.error(`Failed to load image: ${image.src}`)
              // Fallback to manual aspect ratio if image fails to load
              loadedImages.push({
                ...image,
                calculatedAspectRatio: image.aspectRatio || 'landscape'
              })
              resolve(true)
            }
            
            img.src = image.src
          })
        } catch (error) {
          console.error(`Error loading image ${image.src}:`, error)
          loadedImages.push({
            ...image,
            calculatedAspectRatio: image.aspectRatio || 'landscape'
          })
        }
      }
      
      setImagesWithDimensions(loadedImages)
    }

    loadImageDimensions()
  }, [])

  useEffect(() => {
    // Trigger animation after component mounts and images are loaded
    const timer = setTimeout(() => setIsVisible(true), 500) // Increased delay to ensure images are loaded
    return () => clearTimeout(timer)
  }, [imagesWithDimensions])

  // Create independent random arrays for each row - ensure different content
  const createRowImages = (images: PortfolioImageWithDimensions[], isTopRow: boolean) => {
    if (images.length === 0) return []
    
    // Split the array into two halves
    const halfLength = Math.ceil(images.length / 2)
    
    if (isTopRow) {
      // Top row gets first half, shuffled
      const topHalf = images.slice(0, halfLength).sort(() => Math.random() - 0.5)
      return [...topHalf, ...topHalf, ...topHalf] // Triple the images for seamless loop
    } else {
      // Bottom row gets second half, shuffled
      const bottomHalf = images.slice(halfLength).sort(() => Math.random() - 0.5)
      return [...bottomHalf, ...bottomHalf, ...bottomHalf] // Triple the images for seamless loop
    }
  }

  const topRowImages = createRowImages(imagesWithDimensions, true)
  const bottomRowImages = createRowImages(imagesWithDimensions, false)

  if (imagesWithDimensions.length === 0) {
    return (
      <div className="relative overflow-visible py-8">
        <div className="flex justify-center items-center h-48">
          <div className="text-gray-500">Loading portfolio...</div>
        </div>
      </div>
    )
  }

  // Check if all images have dimensions (are loaded)
  const allImagesLoaded = imagesWithDimensions.every(img => img.naturalWidth && img.naturalHeight)
  
  if (!allImagesLoaded) {
    return (
      <div className="relative overflow-visible py-8">
        <div className="flex justify-center items-center h-48">
          <div className="text-gray-500">Loading images...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden py-8">
      {/* Top row - moves right */}
      <div className={`flex gap-4 mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex gap-4 animate-scroll-right">
          {topRowImages.map((image, index) => {
            const cardWidth = getCardWidth(image.calculatedAspectRatio)
            return (
              <div key={`top-${index}`} className={`flex-shrink-0 ${cardWidth} h-48 md:h-72 overflow-hidden`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`)
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom row - moves left */}
      <div className={`flex gap-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex gap-4 animate-scroll-left">
          {bottomRowImages.map((image, index) => {
            const cardWidth = getCardWidth(image.calculatedAspectRatio)
            return (
              <div key={`bottom-${index}`} className={`flex-shrink-0 ${cardWidth} h-48 md:h-72 overflow-hidden`}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${image.src}`)
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 