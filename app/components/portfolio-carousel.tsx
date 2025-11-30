'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import portfolioData from '../lib/portfolio.json'

interface PortfolioImage {
  id: string
  src: string
  alt: string
  title: string
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide' | 'ultra-wide'
  hidden?: boolean
}

// Get portfolio images from portfolio.json, filter for featured items
const portfolioImages: PortfolioImage[] = portfolioData
  .filter(item => !item.hidden && item.featured)
  .map(item => ({
    id: item.id,
    src: item.src,
    alt: item.alt,
    title: item.client || item.title,
    aspectRatio: item.aspectRatio as PortfolioImage['aspectRatio'],
    hidden: item.hidden,
  }))

export function PortfolioCarousel() {
  const [topRowImages, setTopRowImages] = useState<PortfolioImage[]>([])
  const [bottomRowImages, setBottomRowImages] = useState<PortfolioImage[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Create randomized rows with no duplicate images between rows
  const createRowImages = useCallback(() => {
    // Shuffle the portfolio images array using Fisher-Yates algorithm
    const shuffled = [...portfolioImages]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    
    // Split into two completely different sets - no overlap
    const half = Math.ceil(shuffled.length / 2)
    setTopRowImages(shuffled.slice(0, half)) // First half
    setBottomRowImages(shuffled.slice(half)) // Second half (completely different images)
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
    const topScrollSpeed = 1.5 // pixels per frame for top row
    const bottomScrollSpeed = 1.125 // 25% slower than top row (1.5 * 0.75)
    let topPosition = 0
    let bottomPosition = 0

    const animate = () => {
      // Move top row left
      topPosition -= topScrollSpeed
      topRow.style.transform = `translateX(${topPosition}px)`

      // Move bottom row left (same direction but slower for visual variety)
      bottomPosition -= bottomScrollSpeed
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

      // Reset bottom row when it has scrolled one complete set width (same logic as top row)
      if (Math.abs(bottomPosition) >= bottomRowWidth) {
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