'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { DarkModeToggle } from './dark-mode-toggle'
import { Logo } from './logo'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="relative">
      {/* Gradient Strip at Top */}
      <div className="gradient-bar h-2 w-full"></div>
      
      <nav className="flex items-center pt-20 pb-6 px-8 md:px-20" style={{ backgroundColor: 'var(--background)' }}>
        {/* Left side - Name and Navigation Links */}
        <div className="flex items-center gap-10">
          {/* Mobile: Logo, Desktop: Name */}
          <div className="md:hidden">
            <Link 
              href="/" 
              className="no-underline hover:no-underline" 
              style={{ 
                textDecoration: 'none !important'
              }}
            >
              <Logo size="md" className="w-12 h-12" />
            </Link>
          </div>
          <Link 
            href="/" 
            className="hidden md:block text-5xl font-faktum-medium tracking-tight mb-4 no-underline hover:no-underline" 
            style={{ 
              color: 'var(--text-secondary)', 
              textDecoration: 'none !important'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'none !important'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none !important'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            Zach McNair
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                pathname === '/' 
                  ? 'font-medium cursor-default' 
                  : 'hover:underline cursor-pointer'
              }`}
              style={{ 
                color: pathname === '/' ? 'rgba(113, 128, 150, 0.4)' : 'var(--link)',
                textDecoration: pathname === '/' ? 'line-through' : 'none',
                pointerEvents: pathname === '/' ? 'none' : 'auto'
              }}
              onMouseEnter={(e) => {
                if (pathname !== '/') {
                  e.currentTarget.style.color = 'var(--link)'
                  e.currentTarget.style.textDecoration = 'underline'
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== '/') {
                  e.currentTarget.style.color = 'var(--link)'
                  e.currentTarget.style.textDecoration = 'none'
                }
              }}
            >
              Bio
            </Link>
            <Link 
              href="/portfolio" 
              className={`transition-colors ${
                pathname === '/portfolio' 
                  ? 'font-medium cursor-default' 
                  : 'hover:underline cursor-pointer'
              }`}
              style={{ 
                color: pathname === '/portfolio' ? 'rgba(113, 128, 150, 0.4)' : 'var(--link)',
                textDecoration: pathname === '/portfolio' ? 'line-through' : 'none',
                pointerEvents: pathname === '/portfolio' ? 'none' : 'auto'
              }}
              onMouseEnter={(e) => {
                if (pathname !== '/portfolio') {
                  e.currentTarget.style.color = 'var(--link)'
                  e.currentTarget.style.textDecoration = 'underline'
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== '/portfolio') {
                  e.currentTarget.style.color = 'var(--link)'
                  e.currentTarget.style.textDecoration = 'none'
                }
              }}
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* Right side - Theme Toggle and Logo */}
        <div className="flex items-center gap-4 ml-auto">
          <DarkModeToggle />
          <Logo size="md" className="w-10 h-10 hidden md:block" />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-8 py-4 space-y-4">
            <Link 
              href="/" 
              className={`block transition-colors mobile-nav-link ${
                pathname === '/' 
                  ? 'font-medium cursor-default' 
                  : 'cursor-pointer'
              }`}
              style={{ 
                color: pathname === '/' ? 'rgba(113, 128, 150, 0.4)' : 'var(--link)',
                textDecoration: pathname === '/' ? 'line-through !important' : 'none !important',
                backgroundColor: 'transparent !important',
                outline: 'none !important',
                border: 'none !important',
                boxShadow: 'none !important',
                pointerEvents: pathname === '/' ? 'none' : 'auto'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bio
            </Link>
            <Link 
              href="/portfolio" 
              className={`block transition-colors mobile-nav-link ${
                pathname === '/portfolio' 
                  ? 'font-medium cursor-default' 
                  : 'cursor-pointer'
              }`}
              style={{ 
                color: pathname === '/portfolio' ? 'rgba(113, 128, 150, 0.4)' : 'var(--link)',
                textDecoration: pathname === '/portfolio' ? 'line-through !important' : 'none !important',
                backgroundColor: 'transparent !important',
                outline: 'none !important',
                border: 'none !important',
                boxShadow: 'none !important',
                pointerEvents: pathname === '/portfolio' ? 'none' : 'auto'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
