'use client'

import { PortfolioOrganic } from '../components/portfolio-organic'
import { Logo } from '../components/logo'
import { useEffect, useState } from 'react'

export default function PortfolioPageClient() {
  const [logoVisible, setLogoVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [imagesVisible, setImagesVisible] = useState(false)

  useEffect(() => {
    // Logo slides in first (100ms delay)
    setTimeout(() => setLogoVisible(true), 100)
    // Text fades in after logo (400ms delay)
    setTimeout(() => setTextVisible(true), 400)
    // Images fade in after text (700ms delay)
    setTimeout(() => setImagesVisible(true), 700)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      {/* Hero Section */}
      <section className="border-b border-transparent pb-[20px] md:pb-[34px] pt-[60px] md:pt-[100px] px-8 md:px-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] lg:gap-[132px] items-start">
          {/* Logo - slides in from left */}
          <div 
            className="hidden md:flex items-center justify-end min-h-[44px]"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            }}
          >
            <Logo size="lg" className="w-10 h-10" />
          </div>
          
                  {/* Hero Content - fades in */}
                  <div 
                    className="flex flex-col gap-6 md:gap-[30px] md:pl-[6px]"
                    style={{
                      opacity: textVisible ? 1 : 0,
                      transition: 'opacity 0.5s ease-out',
                    }}
                  >
                    <p className="font-faktum-light text-[21px] md:text-[24px] leading-[1.5] max-w-[613px]" style={{ color: 'var(--text)' }}>
                    Since 1998, I design and ship brands, sites, and software that connect artists, communities, and companies to their fans.
                    </p>
                  </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <div 
        className="px-8 md:px-20 py-12"
        style={{
          opacity: imagesVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <PortfolioOrganic />
      </div>
    </div>
  )
}

