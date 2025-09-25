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
  const [currentPath, setCurrentPath] = useState(pathname)
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit' | 'idle'>('idle')
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    // Only trigger transition if pathname actually changed
    if (pathname !== currentPath) {
      // Immediately hide new content to prevent flash
      setShowContent(false)
      
      // Start exit transition
      setTransitionStage('exit')
      setIsTransitioning(true)
      setIsVisible(false)
      
      // After exit completes, update content and start enter transition
      const exitTimer = setTimeout(() => {
        setCurrentPath(pathname)
        setShowContent(true)
        setTransitionStage('enter')
        
        // Small delay before starting enter transition
        const enterTimer = setTimeout(() => {
          setIsVisible(true)
          setIsTransitioning(false)
          
          // Reset transition stage after enter completes
          const resetTimer = setTimeout(() => {
            setTransitionStage('idle')
          }, 300)
          
          return () => clearTimeout(resetTimer)
        }, 50)
        
        return () => clearTimeout(enterTimer)
      }, 300) // Match the exit duration

      return () => clearTimeout(exitTimer)
    }
  }, [pathname, currentPath])

  const getTransitionClass = () => {
    if (transitionStage === 'exit') {
      return 'page-transition-exit-active'
    }
    if (transitionStage === 'enter') {
      return 'page-transition-enter-active'
    }
    return ''
  }

  return (
    <div
      className={`${getTransitionClass()} ${
        isVisible && showContent ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        minHeight: isTransitioning ? '100vh' : 'auto',
        transform: isVisible && showContent ? 'translateY(0)' : 'translateY(10px)',
        visibility: showContent ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  )
}
