import { LastFmScrobbler } from './lastfm'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer>
      {/* Call to Action Section */}
      <section className="relative left-1/2 transform -translate-x-1/2 w-screen">
        <div className="bg-purple-600 text-white p-8 md:p-12 lg:p-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 md:px-12 lg:px-16">
            <div className="mb-6 md:mb-0 text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-faktum-medium mb-4" style={{ color: '#1a1a1a !important' }}>Ready to work?</h2>
              <p className="text-lg md:text-xl" style={{ color: '#ffffff !important' }}>Let's create something great together.</p>
            </div>
            <a 
              href="mailto:hello@zachmcnair.com" 
              className="inline-block px-8 py-4 bg-white font-faktum-medium hover:bg-gray-100 transition-colors duration-200 rounded-full text-lg no-underline"
              style={{ textDecoration: 'none', color: '#1a1a1a !important' }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
              Zach McNair is a brand & product design consultant and musician with over 26 years of experience in brand, product design, and creative direction. Based in Austin, TX & Remote.
            </p>
          </div>
          
          <div>
            <LastFmScrobbler />
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-medium mb-4">Contact</h3>
                      <div className="space-y-2 text-gray-900 dark:text-gray-100 mb-6">
            <p className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4" />
              <a href="mailto:hello@zachmcnair.com">hello@zachmcnair.com</a>
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" />
              <span>Austin, TX & Remote</span>
            </p>
          </div>
            
            <div className="flex items-center gap-4 mb-6">
              <a href="https://www.linkedin.com/in/zachmcnair/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <img src="/LinkedIn.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="https://x.com/zvpply" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <img src="/X-Twitter.svg" alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <img src="/Instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="https://pinterest.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <img src="/Pinterest.svg" alt="Pinterest" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8">
          <p className="text-gray-700 dark:text-gray-300 font-newsreader-regular italic" style={{ fontSize: '24px', letterSpacing: '-0.2px' }}>You're Ever Seen™</p>
        </div>
        <div className="flex items-center justify-between">
          <div></div>
          <p className="text-sm text-gray-700 dark:text-gray-300">© 2025 Zach McNair</p>
        </div>
      </div>
    </footer>
  )
}
