'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Start transition
    setIsTransitioning(true)
    setIsVisible(false)
    
    // After a brief moment, fade in the new content
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsTransitioning(false)
    }, 100) // Shorter delay to reduce gap

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`transition-opacity duration-200 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        minHeight: isTransitioning ? '100vh' : 'auto'
      }}
    >
      {children}
    </div>
  )
}
