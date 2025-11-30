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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient Strip at Top */}
      <div className="gradient-bar h-2 w-full"></div>
      
      <nav className="py-6 px-8 md:px-20 nav-backdrop">
        <div className="flex items-center justify-between">
          {/* Left side - Branding with fixed positioning */}
          <div className="hidden md:flex items-center" style={{ gap: '90px' }}>
            <div>
              <div className="text-sm font-faktum-regular mb-2" style={{ color: 'var(--text-tertiary)' }}>
                From the mind of
              </div>
              <Link 
                href="/" 
                className="text-sm font-faktum-regular transition-colors hover:underline"
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
              <div className="text-sm font-faktum-regular mb-2" style={{ color: 'var(--text-tertiary)' }}>
                Currently at work
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="mailto:hello@zachmcnair.com?subject=I know you have limited availability, but..."
                  className="text-sm font-faktum-regular transition-colors hover:underline"
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
              className="transition-colors hover:underline font-faktum-regular"
              style={{ 
                color: pathname === '/portfolio' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: 'var(--unit-sm)'
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
              className="transition-colors hover:underline font-faktum-regular"
              style={{ 
                color: pathname === '/' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: 'var(--unit-sm)'
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
            <a 
              href="/ZACH MCNAIR - CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline font-faktum-regular flex items-center gap-1"
              style={{ color: 'var(--text-secondary)', fontSize: 'var(--unit-sm)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              CV
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link 
              href="mailto:hello@zachmcnair.com" 
              className="transition-colors hover:underline font-faktum-regular"
              style={{ color: 'var(--text-secondary)', fontSize: 'var(--unit-sm)' }}
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
          <div className="flex items-center gap-2 md:hidden">
            <DarkModeToggle />
            <button
              className="p-1 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
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
      <div className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Background that drops to bottom of viewport */}
        <div 
          className="fixed top-0 left-0 right-0 bottom-0"
          style={{ backgroundColor: 'var(--background)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile nav header with logo, toggle, and close button */}
        <div className="fixed top-0 left-0 right-0 z-40">
          {/* Rainbow gradient bar */}
          <div className="gradient-bar h-2 w-full"></div>
          <div className="py-6 px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <Logo size="md" className="w-12 h-12" />
              </Link>
              
              {/* Toggle and Close button */}
              <div className="flex items-center gap-2">
                <DarkModeToggle />
                <button
                  className="p-1 w-10 h-10 flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Menu items that fade in one by one */}
        <div className="fixed top-20 left-0 right-0 bottom-0 z-40 px-8 py-6 space-y-4">
          <Link 
            href="/" 
            className={`block transition-colors mobile-nav-link font-faktum-regular ${
              isMobileMenuOpen ? 'animate-in fade-in duration-300' : ''
            } ${
              pathname === '/' 
                ? 'cursor-default' 
                : 'cursor-pointer'
            }`}
            style={{ 
              color: pathname === '/' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: 'var(--unit-xl)',
              textDecoration: pathname === '/' ? 'none !important' : 'none !important',
              backgroundColor: 'transparent !important',
              outline: 'none !important',
              border: 'none !important',
              boxShadow: 'none !important',
              pointerEvents: pathname === '/' ? 'none' : 'auto',
              animationDelay: '0.1s'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/portfolio" 
            className={`block transition-colors mobile-nav-link font-faktum-regular ${
              isMobileMenuOpen ? 'animate-in fade-in duration-300' : ''
            } ${
              pathname === '/portfolio' 
                ? 'cursor-default' 
                : 'cursor-pointer'
            }`}
            style={{ 
              color: pathname === '/portfolio' ? 'var(--primary)' : 'var(--text-secondary)',
              fontSize: 'var(--unit-xl)',
              textDecoration: pathname === '/portfolio' ? 'none !important' : 'none !important',
              backgroundColor: 'transparent !important',
              outline: 'none !important',
              border: 'none !important',
              boxShadow: 'none !important',
              pointerEvents: pathname === '/portfolio' ? 'none' : 'auto',
              animationDelay: '0.2s'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <a 
            href="/ZACH MCNAIR - CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className={`block transition-colors mobile-nav-link font-faktum-regular flex items-center gap-2 ${
              isMobileMenuOpen ? 'animate-in fade-in duration-300' : ''
            }`}
            style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'var(--unit-xl)',
              backgroundColor: 'transparent !important',
              outline: 'none !important',
              border: 'none !important',
              boxShadow: 'none !important',
              animationDelay: '0.3s'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link 
            href="mailto:hello@zachmcnair.com" 
            className={`block transition-colors mobile-nav-link font-faktum-regular ${
              isMobileMenuOpen ? 'animate-in fade-in duration-300' : ''
            }`}
            style={{ 
              color: 'var(--text-secondary)',
              fontSize: 'var(--unit-xl)',
              backgroundColor: 'transparent !important',
              outline: 'none !important',
              border: 'none !important',
              boxShadow: 'none !important',
              animationDelay: '0.4s'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Email
          </Link>
          
          {/* Social Media Icons */}
          <div className={`flex items-center gap-4 pt-8 ${
            isMobileMenuOpen ? 'animate-in fade-in duration-300' : ''
          }`} style={{ animationDelay: '0.5s' }}>
            <a href="https://twitter.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/zachmcnair" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://pinterest.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="https://discord.gg/zachmcnair" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}