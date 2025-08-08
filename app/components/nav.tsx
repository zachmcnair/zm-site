import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toggle'
import { Logo } from './logo'

export function Navbar() {
  return (
    <header className="relative">
      {/* Gradient Strip at Top */}
      <div className="gradient-bar h-2 w-full"></div>
      
      <nav className="flex items-center justify-between py-6 px-20" style={{ backgroundColor: 'var(--background)' }}>
        {/* Left side - Logo and Name */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-5xl md:text-6xl font-faktum-medium tracking-tight mb-4" style={{ color: 'var(--text-secondary)' }}>
            Zach McNair
          </Link>
        </div>
        
        {/* Right side - Theme Toggle and Logo */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Logo size="sm" className="w-8 h-8" />
        </div>
      </nav>
    </header>
  )
}
