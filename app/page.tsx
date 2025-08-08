import { PortfolioCarousel } from 'app/components/portfolio-carousel'
import { Logo } from './components/logo'
import LandingPage from './landing'

// Set to true to show the minimal landing page, false to show the full site
const WIP = true

export default function Page() {
  // If WIP is true, show the minimal landing page
  if (WIP) {
    return <LandingPage />
  }

  // Otherwise show the full site
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

      {/* Portfolio Grid - Full Width */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2">
        <section id="portfolio" className="mb-20">
          <PortfolioCarousel />
        </section>
      </div>

      {/* About Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">About</h2>
            </div>
            <div className="md:col-span-4">
              <div className="max-w-2xl">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a deeply relational and collaborative designer and founder with over 26 years of experience in brand, product design, and creative direction. As a polymath, I have always been curious about new technologies and methodologies. I currently leverage Web3 and AI technologies to help businesses and design teams work efficiently and to create work that lasts.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                My approach is human-centric, systematic, and practical. The result is work that connects with your audience and empowers them to move.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I have directed and produced successful campaigns for enterprises, small businesses, and artists alike. I have been just as comfortable in a room of executives at Indeed, Wistia, and HCA Healthcare as well as in a room with Academy Award and Grammy-nominated musicians and artists. VSCO once referred to me as a "renaissance man in the creative realm," but these days I prefer helping others become the best versions of themselves. When I am not at work, you will find me being a husband, a father of boys, a music producer, and a sojourner who values collaboration, authenticity, and curiosity.
              </p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Full Width Content Blade */}
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
                <div className="text-gray-900 dark:text-white">X / Twitter</div>
                <div className="text-gray-900 dark:text-white">
                  <a href="https://x.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="hover:underline">@zachmcnair</a>
                </div>
                <div className="text-gray-900 dark:text-white">Instagram</div>
                <div className="text-gray-900 dark:text-white">
                  <a href="https://instagram.com/zachmcnair" target="_blank" rel="noopener noreferrer" className="hover:underline">@zachmcnair</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">Expertise</h2>
            </div>
            <div className="md:col-span-4">
              <div className="max-w-2xl">
                <div className="flex flex-wrap gap-4">
                <div className="expertise-item">Advertising</div>
                <div className="expertise-item">AI</div>
                <div className="expertise-item">Art Direction</div>
                <div className="expertise-item">Brand Strategy</div>
                <div className="expertise-item">Brand Guidelines</div>
                <div className="expertise-item">Campaigns</div>
                <div className="expertise-item">Consulting</div>
                <div className="expertise-item">Curation</div>
                <div className="expertise-item">Design</div>
                <div className="expertise-item">Environments</div>
                <div className="expertise-item">Filmmaking</div>
                <div className="expertise-item">Identity</div>
                <div className="expertise-item">Installations</div>
                <div className="expertise-item">Naming</div>
                <div className="expertise-item">Original Artwork</div>
                <div className="expertise-item">Print & Packaging</div>
                <div className="expertise-item">Product Design</div>
                <div className="expertise-item">Signage & Wayfinding</div>
                <div className="expertise-item">Web3 & Blockchain</div>
                <div className="expertise-item">Website Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">Experience</h2>
            </div>
            <div className="md:col-span-4">
              <div className="space-y-24">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">UX & Digital Product Designer</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>AI Layer Labs</div>
                      <div className="text-gray-600 dark:text-gray-500">Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2024-Present</div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Working to create a truly independent AI ecosystem by bridging the gap between brand and product, focusing on user experience, and utilizing Web3 and AI technologies.
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Have helped launch:</p>
                  <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 ml-4">
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Freelance Consultant</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Freelance / Self-employed</div>
                      <div className="text-gray-600 dark:text-gray-500">Austin, TX & Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">1998-Present</div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-gray-600 dark:text-gray-300">
                      I solve Brand & Product design problems to help people reach their intended audiences. While my experience is vast, I focus on using design and strategy to bridge the gap between brand and product. I currently leverage Web3 and AI technologies to help businesses and design teams work efficiently and to create work that lasts.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Select clients include: Alphi.xyz, AI Layer, Ugmonk, Funsize, Hertz, Johnson & Johnson, Fjord, Accenture, Sapient Razorfish, Underoath, Mutemath, Son Lux, WeWork, Google, The Culinary Institute of America, Humin, SuperFriendly, SerialBox Presents, QRI, Sony BMG / EMI, Jeremy Cowart.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Founder & Executive Creative Director</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>All Manner Of Us</div>
                      <div className="text-gray-600 dark:text-gray-500">Austin, TX & Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2017-Present</div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-gray-600 dark:text-gray-300">
                      Helping organizations and artists build deeper relationships with their audience through full-service brand design. Select clients include: Indeed, Wistia, HCA Healthcare, Kistler Rods, Lemburg House, Superset, Hammock.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Art Director & Senior Marketing Designer</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Creative Market (Autodesk)</div>
                      <div className="text-gray-600 dark:text-gray-500">San Francisco, CA & Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2015-2016</div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-gray-600 dark:text-gray-300">
                      Creative Market is an online marketplace platform for design content from independent creatives around the world. I worked on various marketing, product, and brand initiatives. Enhanced product user signup conversion by 17%.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Co-founder & Creative Director</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Dbln llc</div>
                      <div className="text-gray-600 dark:text-gray-500">Houston, TX & Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2013-2014</div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-gray-600 dark:text-gray-300">
                      Dbln was a web design, development, and brand studio with a focus on the wedding and hospitality industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteering Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">Volunteering</h2>
            </div>
            <div className="md:col-span-4">
              <div className="space-y-6">
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                      <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Alphi Leadership Academy</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Alphi.xyz</div>
                      <div className="text-gray-600 dark:text-gray-500">Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2023-Current</div>
                  </div>
                  <div className="max-w-2xl">
                    <p className="text-gray-600 dark:text-gray-300">
                      Alphi is a community-powered digital library built to organize all the information in the metaverse. Our platform brings accessibility and transparency to the world of digital collectibles, enabling everyone to make well-informed decisions about the projects they get involved with—because we believe that the more you give, the more you have.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Areas of focus: Blockchain & AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Personal Projects Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 bg-white dark:bg-black">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">Personal Projects</h2>
            </div>
            <div className="md:col-span-4">
              <div className="space-y-6">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Music Producer, Writer</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Forenn — <a href="https://open.spotify.com/artist/73c3uoSWES19r8u3pNWd2K?si=8UDhAsx5SFCIlzFQ19crYg" target="_blank" rel="noopener noreferrer" className="hover:underline">Listen here →</a></div>
                      <div className="text-gray-600 dark:text-gray-500">Texas, USA & Nairobi, Kenya</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2012-Present</div>
                  </div>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-gray-900 dark:text-white">Music Producer</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Emma Bieniewcz — <a href="https://open.spotify.com/artist/3Q8oea8QqbpbbgHLzDcjTo?si=97yZmPGASN-BPZCzEIxJlQ" target="_blank" rel="noopener noreferrer" className="hover:underline">Listen here →</a></div>
                      <div className="text-gray-600 dark:text-gray-500">Grand Rapids, MI & Remote</div>
                    </div>
                    <div className="text-gray-900 dark:text-white">2021-Present</div>
                  </div>
                </div>
                
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    <div className="text-xl font-faktum-medium text-white">Music Producer, Writer, Mixer</div>
                    <div className="text-white">
                      <div>Mezzanines — <a href="https://open.spotify.com/artist/73c3uoSWES19r8u3pNWd2K?si=8UDhAsx5SFCIlzFQ19crYg" target="_blank" rel="noopener noreferrer" className="hover:underline">Listen here →</a></div>
                      <div className="text-gray-500 dark:text-gray-500">Austin, TX & Remote</div>
                    </div>
                    <div className="text-white">2021-Present</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* References Section - Full Width Content Blade */}
      <div className="w-screen relative left-1/2 transform -translate-x-1/2 py-20 mb-32 bg-gray-50 dark:bg-gray-900">
        <div className="pl-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-faktum-medium text-gray-800 dark:text-gray-400">References</h2>
            </div>
            <div className="md:col-span-4">
              <div className="space-y-20">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-gray-900 dark:text-white font-faktum-medium">Margaret Becker</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Director of UX Research</div>
                      <div className="text-gray-600 dark:text-gray-500">Indeed Enterprise at Indeed.com</div>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
                      "Zach has been a true pleasure to work with at Indeed. He always delivered quality, thoughtful design work that enhanced our startup product brand and gave our UX the polish of a much more mature product. He showed a strong spirit of partnership with UX Research, and it was always heartening to see how our reported user needs and perspectives were reflected in his work."
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-gray-900 dark:text-white font-faktum-medium">Adam Day</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Creative Director</div>
                      <div className="text-gray-600 dark:text-gray-500">Wistia</div>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
                      "Zach helped my team create the visual brand identity for one of our core content properties—a podcast. He designed the show artwork (including unique cover art for each episode), created promotional assets for all social platforms, and helped with digital campaigns outside of social. An attentive listener and great designer, Zach worked hard to experiment and incorporate our feedback, and ultimately helped us create a strong brand identity for our show. Would absolutely work with Zach again."
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-gray-900 dark:text-white font-faktum-medium">Gerren Lamson</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Senior UX Director, Indeed</div>
                      <div className="text-gray-600 dark:text-gray-500">Head of Design, Creative Market</div>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
                      "Zach worked with the Creative Market team for over a year as a contractor, and produced a variety of creative and design projects for the brand across marketing, product, and community initiatives. Zach has a ton of passion that he brings to the table. He cares deeply about the team and community of users that he produces work for. While at CM, he gave holistic, constructive feedback on team projects, company objectives and brand culture. Zach imparted a double-dose of user empathy and perspective into every project conversation and meeting that he participated in, and was very easy to work with. He helped our team stay focused on the member's experience of Creative Market, and gave thoughtful feedback about how various projects and choices impact the user's experience and perception of the Creative Market brand."
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-gray-900 dark:text-white font-faktum-medium">Stephen Callender</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Owner</div>
                      <div className="text-gray-600 dark:text-gray-500">Foster Commerce</div>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
                      "Zach designed a course-based website for a client of mine. 'Easy to read' and 'navigate' were the goals. He managed to make those happen and make it extremely beautiful. The site is still heavily used after more than four years and hasn't once needed a single facelift or design modification. That's impressive."
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-gray-900 dark:text-white font-faktum-medium">James Hobbs</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>VP of Design, Metalab</div>
                      <div className="text-gray-600 dark:text-gray-500">Founder & CD, Octopus</div>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
                      "Zach is a multi-talented designer and director. His background in Photography and Visual Design brings an interesting mix of skills to the table. Zach is always thinking outside of the box and trying to break tradition design patterns to come up with unique solutions. His easy-going attitude allows him to get on well with internal staff and clients alike. He leads teams well and inspires great outcomes from those who work alongside him."
                    </blockquote>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-gray-900 dark:text-white font-faktum-medium">Ryan Kutter</div>
                    <div className="text-gray-900 dark:text-white">
                      <div>Consultant Lead</div>
                      <div className="text-gray-600 dark:text-gray-500">Connect Realty</div>
                    </div>
                  </div>
                  <div className="max-w-3xl">
                    <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic">
                      "Zach has an accute eye for detail and cohesiveness. Visually he produces concepts, designs, brands, ideas, etc. that are at a whole new level of professionalism and creativity. I recommend Zach to anyone!"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
