import Link from 'next/link'
import { Logo } from './logo'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8">
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
      
      <div className="flex items-center">
        <Link href="/">
          <Logo size="lg" className="w-12 h-12 hover:opacity-70 transition-opacity" />
        </Link>
      </div>
    </nav>
  )
}
