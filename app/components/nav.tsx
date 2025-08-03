import Link from 'next/link'
import { DarkModeToggle } from './dark-mode-toggle'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8">
      <div className="pl-8 w-full flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors no-underline hover:underline">
            About
          </Link>
          <Link href="#portfolio" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors no-underline hover:underline">
            Portfolio
          </Link>
          <Link href="#experience" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors no-underline hover:underline">
            Experience
          </Link>
          <Link href="#references" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors no-underline hover:underline">
            References
          </Link>
          <Link href="#contact" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors no-underline hover:underline">
            Contact
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      </div>
    </nav>
  )
}
