import Link from 'next/link'
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
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-4">
        </div>
      </header>

      {/* Portfolio Carousel Section - Directly under header */}
      <section className="mb-12" aria-labelledby="portfolio-heading">
        <h2 id="portfolio-heading" className="sr-only">Portfolio Showcase</h2>
        <PortfolioCarousel />
      </section>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-8 py-12" role="main" aria-label="About Zach McNair">
        <div className="max-w-4xl mx-auto">
          {/* Memo Section */}
          <section className="mb-12" aria-labelledby="memo-heading">
            <h1 id="memo-heading" className="sr-only">Zach McNair - Professional Introduction</h1>
            <div className="text-base leading-relaxed space-y-4 max-w-[540px] memo-text" role="article">
              <p className="memo-text" data-agent-context="greeting">
                Howdy,
              </p>
              <p className="memo-text" data-agent-context="introduction">
                I'm so glad you dropped by. I've been designing in some form or fashion with a desire to help folks like yourself build deeper relationships with their audiences since 1998.
              </p>
              
              <p className="memo-text" data-agent-context="current-work">
                For the past couple of years, I've been designing and building products at the intersection of AI and Web3 with the team responsible for <a href="https://thinkagents.ai" className="hover:underline" style={{ color: 'var(--primary)' }}>THINK</a>. It's been a great joy working with the <a href="https://thinkagents.ai/about" className="hover:underline" style={{ color: 'var(--primary)' }}>best people</a> to help people have AI they own. We've made some wild shit including a <a href="https://independentai.institute" className="hover:underline" style={{ color: 'var(--primary)' }}>consortium</a>, a <a href="https://thinkagents.ai/claim" className="hover:underline" style={{ color: 'var(--primary)' }}>token</a>, an <a href="https://thinkagents.ai/products/thinkubator" className="hover:underline" style={{ color: 'var(--primary)' }}>incubator</a>, an <a href="https://6079.ai/game" className="hover:underline" style={{ color: 'var(--primary)' }}>ios/web game</a>, a <a href="https://6079.ai" className="hover:underline" style={{ color: 'var(--primary)' }}>social mission game</a>, and we still have more up our sleeves.
              </p>
              
              <p className="memo-text" data-agent-context="freelance-work">
                Occasionally, I take on freelance work through <a href="https://allmannerofus.com" className="hover:underline" style={{ color: 'var(--primary)' }}>All Manner Of Us</a>, the design studio I founded in 2017.
              </p>
              
              <p className="memo-text" data-agent-context="personal-life">
                When I'm not working, I'm making things with my friends and collaborators as well as spending time with my family.
              </p>
              
              <p className="memo-text" data-agent-context="side-projects">
                <a href="https://monkz.xyz" className="hover:underline" style={{ color: 'var(--primary)' }}>Mindful Monkz</a> is a mindfulness and wellness NFT community, and we're chasing a couple of pursuits including a smart journal app and a lifestyle brand. I'd love for folks to jump in with me on these pursuits, if you're interested.
              </p>
              
              <p className="memo-text" data-agent-context="music-production">
                Music production has been a passion of mine, and I get to regularly release music with my friends, <a href="https://forennmusic.com" className="hover:underline" style={{ color: 'var(--primary)' }}>Forenn</a> and <a href="https://emmabieniewicz.com" className="hover:underline" style={{ color: 'var(--primary)' }}>Emma Bieniewicz</a>.
              </p>
              
              <p className="memo-text" data-agent-context="contact-invitation">
                I'm thankful you're here. I hope we get to connect and make something great together. Feel free to hit me up <a href="mailto:hello@zachmcnair.com?subject=let's make something great together" className="hover:underline" style={{ color: 'var(--primary)' }}>here</a>.
              </p>
              
              <p className="memo-text" data-agent-context="closing">
                Cheers!
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
      </main>

      {/* Experience Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium md:sticky md:top-20" style={{color: '#fefcf4'}}>Experience</h2>
            </div>
            <div className="md:col-span-4">
              <div className="space-y-24 max-w-[540px]">
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="style={{color: '#fefcf4'}}">UX & Digital Product Designer</div>
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
                        <div className="style={{color: '#fefcf4'}}">Freelance Consultant</div>
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
                        <div className="style={{color: '#fefcf4'}}">Founder & Executive Creative Director</div>
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
                        <div className="style={{color: '#fefcf4'}}">Art Director & Senior Marketing Designer</div>
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
                        <div className="style={{color: '#fefcf4'}}">Co-founder & Creative Director</div>
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
