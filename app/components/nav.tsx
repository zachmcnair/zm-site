import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toggle'
import { Logo } from './logo'

export function Navbar() {
  return (
    <header className="relative">
      {/* Gradient Strip at Top */}
      <div className="gradient-bar h-2 w-full"></div>
      
      <nav className="flex items-center justify-between pt-8 pb-6 px-8 md:px-20" style={{ backgroundColor: 'var(--background)' }}>
        {/* Left side - Logo and Name */}
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden md:block text-4xl md:text-5xl font-faktum-medium tracking-tight mb-4 no-underline hover:no-underline" style={{ color: 'var(--text-secondary)' }}>
            Zach McNair
          </Link>
          <Logo size="md" className="w-10 h-10 md:hidden" />
        </div>
        
        {/* Right side - Theme Toggle and Logo */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <Logo size="md" className="w-10 h-10 hidden md:block" />
        </div>
      </nav>
    </header>
  )
}
