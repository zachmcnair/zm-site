'use client'

import { useEffect, useRef } from 'react'

interface CaseStudyHeroProps {
  title: string
  client?: string
  roles?: string[]
  description?: string
  collaborators?: string[]
  featuredImage?: { src: string; alt: string }
  textVisible?: boolean
}

export function CaseStudyHero({ title, client, roles, description, collaborators, featuredImage, textVisible = false }: CaseStudyHeroProps) {
  const heroContentRef = useRef<HTMLDivElement>(null)

  // Force visibility with !important when state changes
  useEffect(() => {
    if (textVisible && heroContentRef.current) {
      heroContentRef.current.style.setProperty('opacity', '1', 'important')
    }
  }, [textVisible])

  return (
    <section className="border-b border-transparent pb-[20px] md:pb-[34px] pt-[60px] md:pt-[100px] px-8 md:px-20" data-page-transition="hero-section">
      {/* Hero Content — text is left-aligned to the page margin (no logo) */}
      <div
        ref={heroContentRef}
        className="flex flex-col lg:flex-row gap-8 lg:gap-[132px] items-start"
        style={{
          opacity: textVisible ? 1 : 0,
          transition: textVisible ? 'opacity 0.5s ease-out' : 'none',
        }}
      >
        {/* Left: Featured Image (mobile only), Client, Tags, Description, Project Credits (on tablet/mobile) */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Featured Image - Mobile only, above client name */}
          {featuredImage && (
            <div className="md:hidden relative w-full overflow-hidden mb-4">
              <img
                src={featuredImage.src}
                alt={featuredImage.alt}
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
          )}
          {client && (
            <h2 className="font-instrument-serif text-[48px] md:text-[64px] leading-[1.1] uppercase tracking-tight" style={{ color: 'var(--text)' }}>
              {client}
            </h2>
          )}
          {roles && roles.length > 0 && (
            <p className="font-faktum-regular -mt-3" style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}>
              {roles.join(', ')}
            </p>
          )}
          {description && (
            <p className="font-faktum-regular md:mb-8 lg:mb-0" style={{ color: 'var(--text)', fontSize: 'var(--unit-md)', lineHeight: '1.5' }}>
              {description}
            </p>
          )}
          {/* Project Credits - On tablet/mobile, show here. On desktop, show on right */}
          {collaborators && collaborators.length > 0 && (
            <div className="lg:hidden max-w-md">
              <h2 className="font-instrument-serif uppercase mb-2" style={{ color: 'var(--text)', fontSize: 'var(--unit-xl)', lineHeight: '1.5' }}>
                Project Credits
              </h2>
              <div>
                {collaborators.map((line, idx) => (
                  <p key={idx} className="mb-1 font-faktum-regular" style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Project Credits - Desktop only */}
        {collaborators && collaborators.length > 0 && (
          <div className="hidden lg:block flex-1 max-w-md">
            <h2 className="font-instrument-serif uppercase mb-2" style={{ color: 'var(--text)', fontSize: 'var(--unit-xl)', lineHeight: '1.5' }}>
              Project Credits
            </h2>
            <div>
              {collaborators.map((line, idx) => (
                <p key={idx} className="mb-1 font-faktum-regular" style={{ color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)' }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
