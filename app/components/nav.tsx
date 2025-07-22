import Link from 'next/link'
import { Logo } from './logo'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8">
      <Link href="/" className="flex items-center">
        <Logo size="md" className="mr-2" />
        <span className="text-xl font-faktum-medium">Zach McNair</span>
      </Link>
      
      <div className="flex items-center gap-6">
        {/* Blog and Case Studies links hidden for now */}
      </div>
    </nav>
  )
}
