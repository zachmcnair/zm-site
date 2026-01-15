import { Logo } from './components/logo'
import { PortfolioCarousel } from './components/portfolio-carousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
  description: '0→1 designer shaping AI × UX × Web3. Portfolio of 25+ case studies including THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, and more. Designing how humans and decentralized agents connect through design, technology, and play.',
  openGraph: {
    title: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
    description: '0→1 designer shaping AI × UX × Web3. Portfolio of 25+ case studies including THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
    description: '0→1 designer shaping AI × UX × Web3. Portfolio of 25+ case studies including THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, and more.',
  },
}

export default function LandingPage() {
  const currentYear = new Date().getFullYear()
  const yearsExperience = currentYear - 1998

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="px-8 md:px-20 mb-12 mt-10 md:mt-24" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="sr-only">Zach McNair - 0→1 Designer</h1>
        <div className="flex items-center justify-between">
          {/* Desktop - Logo and text with fixed positioning matching header */}
          <div className="hidden md:flex items-center" style={{ gap: '142px' }}>
            {/* Logo aligned with "From the mind of" */}
            <div className="w-[60px] h-[60px]">
              <Logo size="lg" className="w-[60px] h-[60px]" />
            </div>
            
            {/* Hero text aligned with "Currently at work" */}
            <div>
              <p className="font-faktum-light" style={{ color: 'var(--text)', fontSize: 'var(--unit-xl)', lineHeight: '1.5' }}>
              Howdy, I'm Zach. I design how humans experience <br />
              AI, products, and the future of the web.
              </p>
            </div>
          </div>

          {/* Mobile - Hero text only, left-aligned */}
          <div className="md:hidden w-full">
            <p className="font-faktum-light text-left" style={{ color: 'var(--text)', fontSize: '21px', lineHeight: '1.5' }}>
              Howdy, I'm Zach. I design how humans experience AI, products, and the future of the web.
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
                    <div className="space-y-4 memo-text font-faktum-regular" role="article">
                      <p className="memo-text" data-agent-context="greeting">
                        Howdy,
                      </p>
                      <p className="memo-text" data-agent-context="introduction">
                        I'm grateful you dropped by. Since 1998, I've been using design to help people hone their ideas and engage their audiences.
                      </p>

                      <p className="memo-text" data-agent-context="freelance-work">
                        In 2017, I founded <a href="https://allmannerofus.com" className="hover:underline" style={{ color: 'var(--primary)' }}>All Manner Of Us</a>, a design and strategy studio shaping the next era of collaboration between people and intelligent systems. Today, I consult on brand and product design for teams building what’s next.
                      </p>

                      <p className="memo-text" data-agent-context="current-work">
                        Between 2024-2025, I shaped and shipped products at the intersection of AI and Web3 with the team behind <a href="https://thinkagents.ai" className="hover:underline" style={{ color: 'var(--primary)' }}>THINK</a>, building everything from a <a href="https://independentai.institute" className="hover:underline" style={{ color: 'var(--primary)' }}>consortium</a> and <a href="https://thinkagents.ai/claim" className="hover:underline" style={{ color: 'var(--primary)' }}>token</a> to <a href="https://thinkagents.ai/products/thinkubator" className="hover:underline" style={{ color: 'var(--primary)' }}>incubators</a>, social platforms, and <a href="/case-studies/6079-ai" className="hover:underline" style={{ color: 'var(--primary)' }}>games for iOS/Android/Web</a>.
                      </p>

                      <p className="memo-text" data-agent-context="spaceclip">
                      Outside of client work, I’m building <a href="https://spaceclipapp.com" className="hover:underline" style={{ color: 'var(--primary)' }}>Spaceclip</a>: a private, local-first app that transcribes and turns long content into short clips using AI.
                      </p>
                      
                      
                      <p className="memo-text" data-agent-context="personal-life">
                        When I’m not designing, I’m usually producing music with <a href="https://open.spotify.com/artist/73c3uoSWES19r8u3pNWd2K?si=FQDUi5VsSJmLVHPYSZmZ9Q" className="hover:underline" style={{ color: 'var(--primary)' }}>Forenn</a> and <a href="https://open.spotify.com/artist/3Q8oea8QqbpbbgHLzDcjTo?si=VnpW9iLtR6efwN7y0suYjw" className="hover:underline" style={{ color: 'var(--primary)' }}>Emma Bieniewicz</a>. And when I’m not making things at all, I’m with my family, eating tacos, and drinking coffee.
                      </p>
                      
                      <p className="memo-text" data-agent-context="contact-invitation">
                        I believe design should come from a place of truth and that it should have soul. If you are here, chances are we share that drive. Let's connect and create something great together.
                      </p>
                      
                      <p className="memo-text" data-agent-context="closing">
                        Cheers,<br />
                        Zach
                      </p>
                    </div>
                  </section>

                  {/* Signature and Code */}
                  <section className="flex justify-between items-center mb-12" aria-label="Signature and project code">
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
              <h2 className="mb-2 md:sticky md:top-32 md:pl-2 font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-md)'}}>Expertise</h2>
            </div>
            <div className="md:col-span-8 flex justify-center">
              <div className="space-y-24 max-w-[540px] w-full">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
              <h2 className="mb-2 md:sticky md:top-32 md:pl-2 font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-md)'}}>Experience</h2>
            </div>
            <div className="md:col-span-8 flex justify-center">
              <div className="space-y-24 max-w-[540px] w-full">
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-sm)'}}>Founder, Agentic Experience Design (AXD)</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}><a href="https://allmannerofus.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-tertiary)' }}>All Manner Of Us</a></div>
                      </div>
                      <div className="text-right">
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>2017-Present</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Austin, TX & Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="body-text mb-4">
                      <a href="https://allmannerofus.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--primary)' }}>All Manner Of Us</a> (AMOU) is a design and strategy studio shaping the next era of collaboration between people and intelligent systems.
                    </p>
                    <p className="body-text mb-4">
                      We help teams translate intelligence into products people actually trust and use, designing experiences that connect humans, agents, and data into clear, coherent workflows.
                    </p>
                    <p className="body-text mb-4">
                      Blending Agentic Experience Design (AXD), product strategy, and creative direction, we build everything from AI-native interfaces to the systems and brands that support them.
                    </p>
                    <p className="body-text mb-2">How we help:</p>
                    <ul className="body-text list-disc list-inside mb-4 space-y-1">
                      <li>Product & agentic system design</li>
                      <li>AI-native interface architecture</li>
                      <li>Strategic design consulting + coaching</li>
                      <li>Brand and creative direction</li>
                      <li>Web3 + decentralized experiences</li>
                    </ul>
                    <p className="body-text">
                      Select clients: Morpheus • 6079 • THINK • AI Layer Labs • Indeed • Wistia • HCA Healthcare • Son Lux • Superset • Kistler Rods • Lemburg House • Hammock
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-sm)'}}>UX & Digital Product Designer</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>AI Layer Labs</div>
                      </div>
                      <div className="text-right">
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>2024-2025</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="mb-2 body-text">
                      I worked to create a truly independent AI ecosystem by bridging the gap between brand and product, focusing on user experience, and utilizing Web3 and AI technologies.
                    </p>
                  </div>
                  <p className="mb-2 body-text">Have helped launch:</p>
                  <div className="body-text space-y-3 md:space-y-3">
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>THINK Protocol token (<a href="https://www.thinkagents.ai/claim" target="_blank" rel="noopener noreferrer" className="hover:underline">$THINK</a>) in partnership with <a href="https://futureverse.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Futureverse</a></div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}><a href="https://independentai.institute" target="_blank" rel="noopener noreferrer" className="hover:underline">The Independent AI Institute</a></div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>A social mission game using X integration (<a href="/case-studies/6079-ai" target="_blank" rel="noopener noreferrer" className="hover:underline">6079.ai</a>)</div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>Marcom for <a href="https://wire.network" target="_blank" rel="noopener noreferrer" className="hover:underline">Wire.Network</a> & <a href="https://wire.foundation" target="_blank" rel="noopener noreferrer" className="hover:underline">Wire.Foundation</a></div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>A blockchain hub, explorer, and node dashboard for Wire Network</div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>The 6079 Foundation</div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>A decentralized AI PVP Street Fighter game (<a href="https://www.independentai.institute/projects/ai-prize-fight" target="_blank" rel="noopener noreferrer" className="hover:underline">AI Prize Fight</a>)</div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>An independent AI news hub (IAI News)</div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>A virtual game available on iOS, Android, and Web (<a href="/case-studies/6079-ai" target="_blank" rel="noopener noreferrer" className="hover:underline">Nodeshifter</a>)</div>
                    <div className="border-b pb-3" style={{ borderColor: 'var(--raised)' }}>$MOR token swap product for Morpheus (<a href="https://mor.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Mor.org</a>)</div>
                    <div>A business incubator (Thinkubator) supporting <a href="https://gamesyouwin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">WIN</a> (Leading on-chain gaming), <a href="https://supermode.ls" target="_blank" rel="noopener noreferrer" className="hover:underline">Supermode.ls</a> (Building creative tools you own), and <a href="https://money.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">Money.xyz</a> (Enabling all your assets in one place)</div>
                  </div>
                </div>

                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-sm)'}}>Art Director & Senior Marketing Designer</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Creative Market (Autodesk)</div>
                      </div>
                      <div className="text-right">
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>2015-2016</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>San Francisco, CA & Remote</div>
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
                        <div className="font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-sm)'}}>Co-founder & Creative Director</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Dbln llc</div>
                      </div>
                      <div className="text-right">
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>2013-2014</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Houston, TX & Remote</div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="body-text">
                      Dbln was a web design, development, and brand studio with a focus on the wedding and hospitality industries.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-faktum-regular" style={{color: 'var(--text)', fontSize: 'var(--unit-sm)'}}>Freelance Consultant</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Freelance / Self-employed</div>
                      </div>
                      <div className="text-right">
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>1998-Present</div>
                        <div className="font-faktum-regular" style={{color: 'var(--text-tertiary)', fontSize: 'var(--unit-sm)'}}>Austin, TX & Remote</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
