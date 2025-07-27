import Link from 'next/link'
import { Logo } from './logo'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-faktum-medium">Zach McNair</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link href="#portfolio" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Portfolio
          </Link>
          <Link href="#experience" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Experience
          </Link>
          <Link href="#references" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            References
          </Link>
          <Link href="#contact" className="text-sm font-faktum-regular hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
      
      <div className="flex items-center">
        <Logo size="md" className="w-8 h-8" />
      </div>
    </nav>
  )
}
