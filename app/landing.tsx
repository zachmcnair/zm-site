import { Logo } from './components/logo'
import { PortfolioCarousel } from './components/portfolio-carousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zach McNair — Brand & Product Design Consultant',
  description: 'Brand & product design consultant with over 27 years of experience. Specializing in AI, Web3, and digital product design. Currently working on THINK, Mindful Monkz, and music production.',
  openGraph: {
    title: 'Zach McNair — Brand & Product Design Consultant',
    description: 'Brand & product design consultant with over 27 years of experience. Specializing in AI, Web3, and digital product design.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zach McNair — Brand & Product Design Consultant',
    description: 'Brand & product design consultant with over 27 years of experience. Specializing in AI, Web3, and digital product design.',
  },
}

export default function LandingPage() {
  const currentYear = new Date().getFullYear()
  const yearsExperience = currentYear - 1998

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="px-8 md:px-20 mb-12 mt-10 md:mt-24">
        <div className="flex items-center justify-between">
          {/* Desktop - Logo and text with fixed positioning matching header */}
          <div className="hidden md:flex items-center" style={{ gap: '142px' }}>
            {/* Logo aligned with "From the mind of" */}
            <div className="w-[60px] h-[60px]">
              <Logo size="lg" className="w-[60px] h-[60px]" />
            </div>
            
            {/* Hero text aligned with "Currently at work" */}
            <div>
              <p className="font-faktum-light leading-relaxed" style={{ color: 'var(--text)', fontSize: '1.5rem' }}>
                Howdy, I'm Zach. I use design to turn ideas into brands,<br />
                products, and communities people believe in.
              </p>
            </div>
          </div>

          {/* Mobile - Hero text only, left-aligned */}
          <div className="md:hidden w-full" style={{ paddingRight: '30px' }}>
            <p className="font-faktum-light leading-relaxed text-left" style={{ color: 'var(--text)', fontSize: '1.25rem' }}>
              Howdy, I'm Zach. I turn ideas into brands, products, and communities people believe in.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Section - Directly under header */}
      <section className="mb-12" aria-labelledby="portfolio-heading">
        <h2 id="portfolio-heading" className="sr-only">Portfolio Showcase</h2>
        <PortfolioCarousel />
      </section>

      {/* Main Content */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20">
        <div className="px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <h2 className="mb-2 md:sticky md:top-20" style={{color: 'var(--text)', display: 'none'}}>Bio</h2>
            </div>
            <div className="md:col-span-8 flex justify-center">
              <div className="space-y-24 max-w-[540px] w-full">
                <div>
                  {/* Memo Section */}
                  <section className="mb-12" aria-labelledby="memo-heading">
                    <div className="text-base leading-relaxed space-y-4 max-w-[540px] memo-text" role="article">
                      <p className="memo-text" data-agent-context="greeting">
                        Howdy,
                      </p>
                      <p className="memo-text" data-agent-context="introduction">
                        I'm grateful you dropped by. Since 1998, I've been using design to help people hone their ideas and engage their audience.
                      </p>

                      <p className="memo-text" data-agent-context="freelance-work">
                        In 2017, I founded <a href="https://allmannerofus.com" className="hover:underline" style={{ color: 'var(--primary)' }}>All Manner Of Us</a>, a creative studio built for the future of work, where I consult on brand and product design.
                      </p>

                      <p className="memo-text" data-agent-context="current-work">
                        More recently, I've been shaping products at the edge of AI and Web3 with the team behind <a href="https://thinkagents.ai" className="hover:underline" style={{ color: 'var(--primary)' }}>THINK</a>, building everything from a <a href="https://independentai.institute" className="hover:underline" style={{ color: 'var(--primary)' }}>consortium</a> and <a href="https://thinkagents.ai/claim" className="hover:underline" style={{ color: 'var(--primary)' }}>token</a> to <a href="https://thinkagents.ai/products/thinkubator" className="hover:underline" style={{ color: 'var(--primary)' }}>incubators</a>, social platforms, and <a href="https://6079.ai/game" className="hover:underline" style={{ color: 'var(--primary)' }}>games</a>.
                      </p>
                      
                      <p className="memo-text" data-agent-context="personal-life">
                        Outside of client work, I keep creating. That includes contributing to <a href="https://monkz.xyz" className="hover:underline" style={{ color: 'var(--primary)' }}>Mindful Monkz</a>, a mindfulness-driven NFT community, as well as producing music with <a href="https://forennmusic.com" className="hover:underline" style={{ color: 'var(--primary)' }}>Forenn</a> and <a href="https://emmabieniewicz.com" className="hover:underline" style={{ color: 'var(--primary)' }}>Emma Bieniewicz</a>. When I am not building, you will find me with my family, which is my most important work of all.
                      </p>
                      
                      <p className="memo-text" data-agent-context="contact-invitation">
                        I cannot leave well enough alone, and if you are here, chances are we share that drive. Let's connect and make something meaningful together.
                      </p>
                      
                      <p className="memo-text" data-agent-context="closing">
                        Cheers,<br />
                        Zach
                      </p>
                    </div>
                  </section>

                  {/* Signature and Code */}
                  <section className="flex justify-between items-center mb-12" aria-label="Signature and project code">
                    <div className="font-dm-mono-regular text-sm" style={{ color: 'var(--text-tertiary)' }} data-agent-context="project-identifier">
                      // 001
                    </div>
                    <img 
                      src="/zm-signature.svg" 
                      alt="Zach McNair Signature" 
                      className="h-18 w-auto pr-8"
                      style={{ filter: 'var(--signature-filter)' }}
                      data-agent-context="personal-signature"
                    />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20">
        <div className="px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <h2 className="mb-2 md:sticky md:top-20" style={{color: 'var(--text)'}}>Expertise</h2>
            </div>
            <div className="md:col-span-8 flex justify-center">
              <div className="space-y-24 max-w-[540px] w-full">
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="expertise-item">AI</div>
                    <div className="expertise-item">Art Direction</div>
                    <div className="expertise-item">Brand Strategy</div>
                    <div className="expertise-item">Brand Guidelines</div>
                    <div className="expertise-item">Campaigns</div>
                    <div className="expertise-item">Creative Direction</div>
                    <div className="expertise-item">Curation</div>
                    <div className="expertise-item">Design Consulting</div>
                    <div className="expertise-item">Design Systems</div>
                    <div className="expertise-item">Environments</div>
                    <div className="expertise-item">GTM</div>
                    <div className="expertise-item">Identity Design</div>
                    <div className="expertise-item">Installations</div>
                    <div className="expertise-item">Naming</div>
                    <div className="expertise-item">NFTs & Tokens</div>
                    <div className="expertise-item">Original Artwork</div>
                    <div className="expertise-item">Print & Packaging</div>
                    <div className="expertise-item">Product Design</div>
                    <div className="expertise-item">Signage & Wayfinding</div>
                    <div className="expertise-item">Software Design & Development</div>
                    <div className="expertise-item">User Experience</div>
                    <div className="expertise-item">Web3 & Blockchain</div>
                    <div className="expertise-item">Website Design & Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20">
        <div className="px-8 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <h2 className="mb-2 md:sticky md:top-20" style={{color: 'var(--text)'}}>Experience</h2>
            </div>
            <div className="md:col-span-8 flex justify-center">
              <div className="space-y-24 max-w-[540px] w-full">
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div style={{color: 'var(--text)'}}>UX & Digital Product Designer</div>
                        <div className="text-gray-500 dark:text-gray-500">AI Layer Labs</div>
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-right">
                        <div>2024-Present</div>
                        <div>Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="mb-2 body-text">
                      Working to create a truly independent AI ecosystem by bridging the gap between brand and product, focusing on user experience, and utilizing Web3 and AI technologies.
                    </p>
                  </div>
                  <p className="mb-2 body-text">Have helped launch:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 body-text">
                    <li><a href="https://independentai.institute" target="_blank" rel="noopener noreferrer" className="hover:underline">The Independent AI Institute</a></li>
                    <li>A social mission game using X integration (<a href="https://6079.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">6079.ai</a>)</li>
                    <li>A crypto token (<a href="https://www.thinkagents.ai/claim" target="_blank" rel="noopener noreferrer" className="hover:underline">$THINK</a>) in partnership with Futureverse</li>
                    <li>Marcom for <a href="https://wire.network" target="_blank" rel="noopener noreferrer" className="hover:underline">Wire.Network</a> & <a href="https://wire.foundation" target="_blank" rel="noopener noreferrer" className="hover:underline">Wire.Foundation</a></li>
                    <li>A blockchain hub, explorer, and node dashboard for Wire Network</li>
                    <li>The 6079 Foundation</li>
                    <li>A decentralized AI prompt-based Street Fighter game (<a href="https://www.independentai.institute/projects/ai-prize-fight" target="_blank" rel="noopener noreferrer" className="hover:underline">AI Prize Fight</a>)</li>
                    <li>An independent AI news hub (IAI News)</li>
                    <li>A virtual game available on iOS, Android, and Web (<a href="https://6079.ai/game" target="_blank" rel="noopener noreferrer" className="hover:underline">Nodeshifter</a>)</li>
                    <li>$MOR token swap product for Morpheus (<a href="https://mor.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Mor.org</a>)</li>
                  </ul>
                </div>
                
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div style={{color: 'var(--text)'}}>Freelance Consultant</div>
                        <div className="text-gray-500 dark:text-gray-500">Freelance / Self-employed</div>
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-right">
                        <div>1998-Present</div>
                        <div>Austin, TX & Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="body-text">
                      I solve Brand & Product design problems to help people reach their intended audiences. While my experience is vast, I focus on using design and strategy to bridge the gap between brand and product. I currently leverage Web3 and AI technologies to help businesses and design teams work efficiently and to create work that lasts.
                    </p>
                    <p className="mt-2 body-text">
                      Select clients include: Alphi.xyz, AI Layer, Ugmonk, Funsize, Hertz, Johnson & Johnson, Fjord, Accenture, Sapient Razorfish, Underoath, Mutemath, Son Lux, WeWork, Google, The Culinary Institute of America, Humin, SuperFriendly, SerialBox Presents, QRI, Sony BMG / EMI, Jeremy Cowart.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div style={{color: 'var(--text)'}}>Founder & Executive Creative Director</div>
                        <div className="text-gray-500 dark:text-gray-500">All Manner Of Us</div>
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-right">
                        <div>2017-Present</div>
                        <div>Austin, TX & Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="body-text">
                      Helping organizations and artists build deeper relationships with their audience through full-service brand design. Select clients include: Indeed, Wistia, HCA Healthcare, Kistler Rods, Lemburg House, Superset, Hammock.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div style={{color: 'var(--text)'}}>Art Director & Senior Marketing Designer</div>
                        <div className="text-gray-500 dark:text-gray-500">Creative Market (Autodesk)</div>
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-right">
                        <div>2015-2016</div>
                        <div>San Francisco, CA & Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="body-text">
                      Creative Market is an online marketplace platform for design content from independent creatives around the world. I worked on various marketing, product, and brand initiatives. Enhanced product user signup conversion by 17%.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div style={{color: 'var(--text)'}}>Co-founder & Creative Director</div>
                        <div className="text-gray-500 dark:text-gray-500">Dbln llc</div>
                      </div>
                      <div className="text-gray-500 dark:text-gray-500 text-right">
                        <div>2013-2014</div>
                        <div>Houston, TX & Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="body-text">
                      Dbln was a web design, development, and brand studio with a focus on the wedding and hospitality industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
