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
      
      <nav className="py-6 px-8 md:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="flex items-center justify-between">
          {/* Left side - Branding with fixed positioning */}
          <div className="hidden md:flex items-center" style={{ gap: '90px' }}>
            <div>
              <div className="text-sm font-faktum-medium mb-2" style={{ color: 'var(--text-tertiary)' }}>
                From the mind of
              </div>
              <Link 
                href="/" 
                className="text-sm font-faktum-medium transition-colors hover:underline"
                style={{ color: 'var(--text)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text)'
                }}
              >
                Zach McNair
              </Link>
            </div>
            <div>
              <div className="text-sm font-faktum-medium mb-2" style={{ color: 'var(--text-tertiary)' }}>
                Currently at work
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="mailto:hello@zachmcnair.com?subject=I know you have limited availability, but..."
                  className="text-sm font-faktum-medium transition-colors hover:underline"
                  style={{ color: 'var(--text)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                >
                  With limited availability
                </Link>
                <div 
                  className="w-2 h-2 rounded-full status-indicator" 
                  style={{ backgroundColor: '#E2B237' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Mobile - Logo instead of "From the mind of" */}
          <div className="md:hidden">
            <Link href="/">
              <Logo size="md" className="w-12 h-12" />
            </Link>
          </div>
          
          {/* Right side - Navigation and Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/portfolio" 
              className={`transition-colors hover:underline ${
                pathname === '/portfolio' ? 'font-medium' : ''
              }`}
              style={{ 
                color: pathname === '/portfolio' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = pathname === '/portfolio' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
            >
              Portfolio
            </Link>
            <Link 
              href="/" 
              className={`transition-colors hover:underline ${
                pathname === '/' ? 'font-medium' : ''
              }`}
              style={{ 
                color: pathname === '/' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = pathname === '/' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
            >
              About
            </Link>
            <Link 
              href="mailto:hello@zachmcnair.com" 
              className="transition-colors hover:underline"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              Email
            </Link>
            <DarkModeToggle />
          </div>

          {/* Mobile - Toggle and Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkModeToggle />
            <button
              className="p-2"
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
                color: pathname === '/' ? 'var(--primary)' : 'var(--text-secondary)',
                textDecoration: pathname === '/' ? 'none !important' : 'none !important',
                backgroundColor: 'transparent !important',
                outline: 'none !important',
                border: 'none !important',
                boxShadow: 'none !important',
                pointerEvents: pathname === '/' ? 'none' : 'auto'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className={`block transition-colors mobile-nav-link ${
                pathname === '/portfolio' 
                  ? 'font-medium cursor-default' 
                  : 'cursor-pointer'
              }`}
              style={{ 
                color: pathname === '/portfolio' ? 'var(--primary)' : 'var(--text-secondary)',
                textDecoration: pathname === '/portfolio' ? 'none !important' : 'none !important',
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
            <Link 
              href="mailto:hello@zachmcnair.com" 
              className="block transition-colors mobile-nav-link"
              style={{ 
                color: 'var(--text-secondary)',
                backgroundColor: 'transparent !important',
                outline: 'none !important',
                border: 'none !important',
                boxShadow: 'none !important'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Email
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
