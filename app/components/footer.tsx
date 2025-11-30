import Link from 'next/link'
import { WeatherWidget } from './weather'
import { LastFmScrobbler } from './lastfm'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const yearsExperience = currentYear - 1998

  return (
    <footer className="relative">
      {/* Main Footer Content */}
      <div className="py-12 pb-4 md:pb-12 px-8 md:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto md:max-w-none md:mx-0">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Left - Description */}
            <div>
              <p className="max-w-[460px] text-base font-faktum-regular" style={{ color: 'var(--text)', lineHeight: '1.5' }}>
                Zach McNair is a brand and product designer with over {yearsExperience} years of experience using design to turn ideas into brands, products, and communities people believe in.
              </p>
            </div>

            {/* Right - Get In Touch */}
            <div className="md:flex md:justify-end">
              <div className="md:min-w-[240px]">
                <h3 className="text-sm font-faktum-regular mb-2" style={{ color: 'var(--text-tertiary)' }}>Get In Touch</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:hello@zachmcnair.com" 
                    className="block hover:underline transition-colors text-sm font-faktum-regular"
                    style={{ color: 'var(--primary)' }}
                  >
                    hello@zachmcnair.com
                  </a>
                  <div className="flex items-center gap-4 mt-4">
                    <a href="https://discord.gg/zvpply" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: 'var(--text)' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/zvpply" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: 'var(--text)' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/zachmcnair" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: 'var(--text)' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://pinterest.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: 'var(--text)' }}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 md:mb-8">
            {/* Left - Recently Spinning */}
            <div>
              <h3 className="text-sm font-faktum-regular mb-2" style={{ color: 'var(--text-tertiary)' }}>Recently Spinning</h3>
              <LastFmScrobbler />
            </div>
            
            {/* Right - Currently Feeling */}
            <div className="md:flex md:justify-end">
              <div className="md:min-w-[240px]">
                <h3 className="text-sm font-faktum-regular mb-2" style={{ color: 'var(--text-tertiary)' }}>Currently Feeling</h3>
                <WeatherWidget />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You're Ever Seen */}
      <div className="px-8 md:px-20 py-6" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto md:max-w-none md:mx-0">
          <p className="font-newsreader-regular italic text-2xl md:text-center" style={{ letterSpacing: '-0.2px', color: 'var(--text-secondary)' }}>
            You're Ever Seen™
          </p>
        </div>
      </div>

      {/* Gradient Strip at Bottom */}
      <div className="gradient-bar-inverted h-2 w-full"></div>
    </footer>
  )
}
