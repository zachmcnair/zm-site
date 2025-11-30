'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CaseStudyNavigationProps {
  previous?: {
    slug: string
    title: string
    client?: string
    image?: string
  }
  next?: {
    slug: string
    title: string
    client?: string
    image?: string
  }
  currentSlug?: string
  allCaseStudies?: Array<{
    slug: string
    title: string
    client?: string
  }>
}

export function CaseStudyNavigation({ previous, next, currentSlug, allCaseStudies }: CaseStudyNavigationProps) {
  const router = useRouter()

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input/textarea
      if (
        (e.target as HTMLElement).tagName === 'INPUT' ||
        (e.target as HTMLElement).tagName === 'TEXTAREA' ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return
      }

      if (e.key === 'ArrowLeft' && previous) {
        e.preventDefault()
        router.push(`/case-studies/${previous.slug}`)
      } else if (e.key === 'ArrowRight' && next) {
        e.preventDefault()
        router.push(`/case-studies/${next.slug}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previous, next, router])

  // Always show navigation with infinite loop
  // If previous/next are not provided but we have allCaseStudies, calculate them
  let displayPrevious = previous
  let displayNext = next

  if (allCaseStudies && currentSlug && (!previous || !next)) {
    const currentIndex = allCaseStudies.findIndex(cs => cs.slug === currentSlug)
    if (currentIndex !== -1) {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : allCaseStudies.length - 1
      const nextIndex = currentIndex < allCaseStudies.length - 1 ? currentIndex + 1 : 0
      
      if (!displayPrevious) {
        displayPrevious = {
          slug: allCaseStudies[prevIndex].slug,
          title: allCaseStudies[prevIndex].title,
          client: allCaseStudies[prevIndex].client,
        }
      }
      if (!displayNext) {
        displayNext = {
          slug: allCaseStudies[nextIndex].slug,
          title: allCaseStudies[nextIndex].title,
          client: allCaseStudies[nextIndex].client,
        }
      }
    }
  }

  if (!displayPrevious && !displayNext) return null

  return (
    <section className="px-8 md:px-20 py-[60px] md:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Previous Case Study */}
        {displayPrevious ? (
          <Link 
            href={`/case-studies/${displayPrevious.slug}`}
            prefetch={true}
            className="group relative flex flex-col gap-4 p-6 md:p-8 rounded-lg transition-all hover:opacity-90 overflow-hidden"
            style={{ 
              backgroundColor: 'var(--background)',
            }}
          >
            {/* Background Image */}
            {displayPrevious.image && (
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity"
                style={{
                  backgroundImage: `url(${displayPrevious.image.startsWith('/') ? displayPrevious.image : `/${displayPrevious.image}`})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )}
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:-translate-x-1 transition-transform"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  <path 
                    d="M10 12L6 8L10 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-faktum-regular no-underline" style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}>Previous</span>
              </div>
              <div className="flex flex-col gap-[4px] mt-4">
                <p className="font-instrument-serif uppercase tracking-[0.2052px] no-underline group-hover:opacity-80 transition-opacity" style={{ color: 'var(--text)', fontSize: 'var(--unit-xl)', lineHeight: '1.5' }}>
                  {displayPrevious.client || displayPrevious.title}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div /> // Empty div for grid alignment
        )}

        {/* Next Case Study */}
        {displayNext ? (
          <Link 
            href={`/case-studies/${displayNext.slug}`}
            prefetch={true}
            className="group relative flex flex-col gap-4 p-6 md:p-8 rounded-lg transition-all hover:opacity-90 md:text-right overflow-hidden"
            style={{ 
              backgroundColor: 'var(--background)',
            }}
          >
            {/* Background Image */}
            {displayNext.image && (
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity"
                style={{
                  backgroundImage: `url(${displayNext.image.startsWith('/') ? displayNext.image : `/${displayNext.image}`})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )}
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 md:justify-end">
                <span className="font-faktum-regular no-underline" style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}>Next</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  <path 
                    d="M6 12L10 8L6 4" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[4px] mt-4">
                <p className="font-instrument-serif uppercase tracking-[0.2052px] no-underline group-hover:opacity-80 transition-opacity" style={{ color: 'var(--text)', fontSize: 'var(--unit-xl)', lineHeight: '1.5' }}>
                  {displayNext.client || displayNext.title}
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <div /> // Empty div for grid alignment
        )}
      </div>
    </section>
  )
}

