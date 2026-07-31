'use client'

import { PortfolioOrganic } from '../components/portfolio-organic'
import { useEffect, useState } from 'react'

export default function PortfolioPageClient() {
  const [textVisible, setTextVisible] = useState(false)
  const [imagesVisible, setImagesVisible] = useState(false)

  useEffect(() => {
    // Text fades in first, then the grid
    setTimeout(() => setTextVisible(true), 100)
    setTimeout(() => setImagesVisible(true), 400)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      {/* Hero Section — text is left-aligned to the page margin */}
      <section className="border-b border-transparent pb-[20px] md:pb-[34px] pt-[60px] md:pt-[100px] px-8 md:px-20">
        <div
          className="flex flex-col gap-6 md:gap-[30px]"
          style={{
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <p
            className="font-faktum-light text-[21px] md:text-[24px] leading-[1.5] max-w-[613px] md:max-w-[54rem]"
            style={{ color: 'var(--text)', textWrap: 'balance' }}
          >
            Since 1998, I design and ship brands, sites, and software that connect artists, communities, and companies to their fans.
          </p>
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
