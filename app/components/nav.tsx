import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-8">
      <Link href="/" className="text-xl font-faktum-medium">
        zvpply
      </Link>
      
      <div className="flex items-center gap-6">
        {/* Blog and Case Studies links hidden for now */}
      </div>
    </nav>
  )
}
