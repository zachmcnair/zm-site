'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import portfolioData from '../lib/portfolio.json'

interface PortfolioItem {
  id: string
  src: string
  alt: string
  title: string
  client: string
  metatags: string[]
  aspectRatio?: 'portrait' | 'square' | 'landscape' | 'wide' | 'ultra-wide'
  hidden?: boolean
  featured?: boolean
  caseStudyUrl?: string
  caseStudySlug?: string
  projectId?: string
  category?: string
}

interface PortfolioOrganicProps {
  featuredOnly?: boolean
  limit?: number
}

// Fisher-Yates shuffle algorithm
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Hash function for consistent column spanning
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

export function PortfolioOrganic({ featuredOnly = false, limit }: PortfolioOrganicProps) {
  const [displayItems, setDisplayItems] = useState<PortfolioItem[]>([])
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set())
  const imageRefs = useRef<Map<string, HTMLImageElement>>(new Map())

  useEffect(() => {
    const items = portfolioData as PortfolioItem[]
    
    // Filter out hidden items
    let filtered = items.filter(item => !item.hidden)

    if (featuredOnly) {
      // Intelligent featured mode selection
      const priorityCategories = ['music', 'hospitality', 'ai', 'game', 'brand', 'web3']
      
      // Group by projectId (or client if no projectId)
      const projectGroups = new Map<string, PortfolioItem[]>()
      filtered.forEach(item => {
        const key = item.projectId || item.client
        if (!projectGroups.has(key)) {
          projectGroups.set(key, [])
        }
        projectGroups.get(key)!.push(item)
      })

      // Select one random item per project
      const selectedByProject: PortfolioItem[] = []
      projectGroups.forEach((groupItems) => {
        if (groupItems.length > 0) {
          const randomItem = groupItems[Math.floor(Math.random() * groupItems.length)]
          selectedByProject.push(randomItem)
        }
      })

      // Group by category
      const categoryGroups = new Map<string, PortfolioItem[]>()
      selectedByProject.forEach(item => {
        if (item.category) {
          if (!categoryGroups.has(item.category)) {
            categoryGroups.set(item.category, [])
          }
          categoryGroups.get(item.category)!.push(item)
        }
      })

      // Select one item per priority category from unused clients
      const selected: PortfolioItem[] = []
      const usedClients = new Set<string>()

      // First pass: prioritize featured items
      priorityCategories.forEach(category => {
        const categoryItems = categoryGroups.get(category) || []
        const available = categoryItems.filter(item => !usedClients.has(item.client))
        if (available.length > 0) {
          const randomItem = available[Math.floor(Math.random() * available.length)]
          selected.push(randomItem)
          usedClients.add(randomItem.client)
        }
      })

      // Second pass: fill remaining slots from any category
      const remaining = selectedByProject.filter(item => !usedClients.has(item.client))
      while (selected.length < 6 && remaining.length > 0) {
        const randomItem = remaining[Math.floor(Math.random() * remaining.length)]
        selected.push(randomItem)
        usedClients.add(randomItem.client)
        const index = remaining.indexOf(randomItem)
        remaining.splice(index, 1)
      }

      // Limit to 6 items
      const limited = selected.slice(0, 6)
      
      // Shuffle final selection
      filtered = shuffle(limited)
    } else {
      // Full mode: shuffle all non-hidden items
      filtered = shuffle(filtered)
      
      // Apply limit if provided
      if (limit) {
        filtered = filtered.slice(0, limit)
      }
    }

    setDisplayItems(filtered)

    // Preload first 6 images
    const preloadImages = filtered.slice(0, 6)
    preloadImages.forEach(item => {
      const img = new Image()
      img.src = item.src
    })
  }, [featuredOnly, limit])

  // Intersection Observer for image visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
          const imgId = entry.target.getAttribute('data-image-id')
          if (imgId) {
            setVisibleImages(prev => new Set(prev).add(imgId))
          }
        }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px 0px 0px',
      }
    )

    // Observe all images
    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img)
      }
    })

    // Check initial visibility
    imageRefs.current.forEach((img) => {
      if (img) {
        const rect = img.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > 0
        if (isVisible) {
          const imgId = img.getAttribute('data-image-id')
          if (imgId) {
            setVisibleImages(prev => new Set(prev).add(imgId))
          }
        }
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [displayItems])

  // Determine if item should span 2 columns
  const shouldSpanTwoColumns = (item: PortfolioItem): boolean => {
    // Check aspectRatio first (if provided)
    if (item.aspectRatio === 'wide' || item.aspectRatio === 'ultra-wide') {
      return true
    }

    // If no aspectRatio, use hash-based pattern for variety (~25% span 2 columns)
    // This allows items without aspectRatio to still have some variety
    const hash = hashString(item.id)
    return hash % 4 === 0
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {displayItems.map((item) => {
        const spanTwo = shouldSpanTwoColumns(item)
        const isVisible = visibleImages.has(item.id)
        
        // Determine link destination: case study (priority) > external URL > no link
        let linkHref: string | null = null
        let isExternal = false
        let buttonText = 'View Project'
        
        if (item.caseStudySlug) {
          // Priority 1: Case study page
          linkHref = `/case-studies/${item.caseStudySlug}`
          buttonText = 'View Case Study'
        } else if (item.caseStudyUrl?.startsWith('http')) {
          // Priority 2: External URL
          linkHref = item.caseStudyUrl
          isExternal = true
          buttonText = 'View Live Site'
        }
        // Priority 3: No link (linkHref remains null)

        const cardContent = (
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full overflow-hidden mb-2">
                      <img
                        ref={(el) => {
                          if (el) {
                            imageRefs.current.set(item.id, el)
                            el.setAttribute('data-image-id', item.id)
                          }
                        }}
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-auto motion-reduce:filter-none"
                        style={{
                          filter: isVisible ? 'blur(0px)' : 'blur(20px)',
                          transition: 'filter 0.7s ease-out',
                        }}
                        loading={displayItems.indexOf(item) < 6 ? 'eager' : 'lazy'}
                        fetchPriority={displayItems.indexOf(item) < 6 ? 'high' : 'low'}
                      />
              
              {/* Hover overlay - only show if there's a link */}
              {linkHref && (
                <>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div 
                      className="px-6 py-3 text-sm font-faktum-regular rounded"
                      style={{ 
                        color: 'var(--text)',
                        backgroundColor: 'var(--background)',
                        border: '1px solid var(--text-tertiary)'
                      }}
                    >
                      {buttonText}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-faktum-regular" style={{ color: 'var(--text)', fontSize: 'var(--unit-sm)' }}>
                {item.title}
              </p>
              <p className="font-faktum-regular" style={{ color: 'var(--text-secondary)', fontSize: 'var(--unit-sm)' }}>
                {item.client}
              </p>
              <div className="flex flex-wrap gap-x-1 gap-y-0" style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}>
                {item.metatags.map((tag, index) => (
                  <span key={index} className="font-faktum-regular whitespace-nowrap">
                    {tag}{index < item.metatags.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )

        return (
          <div
            key={item.id}
            className={spanTwo ? 'col-span-1 md:col-span-2' : 'col-span-1'}
          >
            {linkHref ? (
              <Link
                href={linkHref}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="no-underline"
                style={{ textDecoration: 'none' }}
              >
                {cardContent}
              </Link>
            ) : (
              cardContent
            )}
          </div>
        )
      })}
    </div>
  )
}

