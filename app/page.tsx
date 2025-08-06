import { Logo } from './components/logo'

export default function Page() {
  return (
    <>
      {/* Logo positioned on far right of browser */}
      <div className="fixed top-20 right-8 z-10">
        <Logo size="lg" className="w-12 h-12" />
      </div>

      <div className="pl-20">
        {/* Hero Section */}
        <section className="mb-16 relative">
          <h1 className="text-5xl md:text-6xl font-faktum-medium tracking-tight mb-4">
            Zach McNair
          </h1>
          
          <h2 className="text-xs font-dm-mono mb-6" style={{color: '#6b7280'}}>
            BRAND & PRODUCT DESIGN CONSULTANT
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mb-8">
            I solve brand and product design problems, and I enable you to reach your audience effectively.
          </p>
        </section>
      </div>

      {/* Staging Notice */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-yellow-50 dark:bg-yellow-900/20">
        <div className="pl-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-faktum-medium text-yellow-800 dark:text-yellow-200 mb-4">
              🚧 Staging Environment
            </h2>
            <p className="text-lg text-yellow-700 dark:text-yellow-300 leading-relaxed mb-4">
              This is a staging environment for testing changes. The full site experience will be available soon.
            </p>
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              Current version: Minimal landing page for phased release testing.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section - Minimal */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-white dark:bg-black">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">Contact</h2>
            </div>
            <div className="md:col-span-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-gray-900 dark:text-white">Email</div>
                <div className="text-gray-900 dark:text-white">
                  <a href="mailto:hello@zachmcnair.com" className="hover:underline">hello@zachmcnair.com</a>
                </div>
                <div className="text-gray-900 dark:text-white">LinkedIn</div>
                <div className="text-gray-900 dark:text-white">
                  <a href="https://linkedin.com/in/zachmcnair" target="_blank" rel="noopener noreferrer" className="hover:underline">@zachmcnair</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
