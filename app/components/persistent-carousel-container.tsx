'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { PortfolioCarousel } from './portfolio-carousel'

export function PersistentCarouselContainer() {
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Create a persistent container positioned below hero, above content
    if (!containerRef.current) {
      const container = document.createElement('div')
      container.id = 'persistent-carousel-container'
      container.className = 'relative w-full py-20 bg-white dark:bg-black'
      container.style.marginTop = '80px' // Space below hero
      document.body.appendChild(container)
      containerRef.current = container
    }

    setIsMounted(true)

    return () => {
      // Clean up on unmount
      if (containerRef.current && containerRef.current.parentNode) {
        containerRef.current.parentNode.removeChild(containerRef.current)
        containerRef.current = null
      }
    }
  }, [])

  if (!isMounted || !containerRef.current) {
    return null
  }

  return createPortal(
    <div className="w-full max-w-7xl mx-auto px-8 md:px-20">
      <div className="mb-16">
        <h2 className="text-3xl font-faktum-medium mb-8">Portfolio</h2>
      </div>
      <PortfolioCarousel />
    </div>,
    containerRef.current
  )
}