import { LastFmScrobbler } from 'app/components/lastfm'
import { PortfolioCarousel } from 'app/components/portfolio-carousel'

export default function Page() {
  return (
    <>
      <header className="mb-12">
        <h1 className="text-4xl font-faktum-medium tracking-tight mb-4">
          Zach McNair
        </h1>
        
        <h2 className="text-lg md:text-xl font-faktum-light text-gray-600 dark:text-gray-400 mb-2">
          Brand & Product Design Consultant
        </h2>
        
        <p className="text-sm font-faktum-light text-gray-500 dark:text-gray-500 mb-4">
          Based in Austin, Texas
        </p>

        <div className="mb-6">
          <LastFmScrobbler />
        </div>
      </header>

      <section className="mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I solve brand and product design problems, and I enable you to reach your audience effectively.
        </p>
      </section>

      {/* Portfolio Carousel */}
      <section className="mb-12">
        <PortfolioCarousel />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">About</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a deeply relational and collaborative designer and founder with over 26 years of experience in brand, product design, and creative direction. As a polymath, I have always been curious about new technologies and methodologies. I currently leverage Web3 and AI technologies to help businesses and design teams work efficiently and to create work that lasts.
          </p>
          <p>
            My approach is human‑centric, systematic, and practical. The result is work that connects with your audience and empowers them to move.
          </p>
          <p>
            I have directed and produced successful campaigns for enterprises, small businesses, and artists alike. I have been just as comfortable in a room of executives at Indeed, Wistia, and HCA Healthcare as well as in a room with Academy Award and Grammy‑nominated musicians and artists. VSCO once referred to me as a "renaissance man in the creative realm," but these days I prefer helping others become the best versions of themselves. When I am not at work, you will find me being a husband, a father of boys, a music producer, and a sojourner who values collaboration, authenticity, and curiosity.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">Experience</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">UX & Digital Product Designer, Ai Layer Labs</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-faktum-light">Remote • 2024 – Present</p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Working to create a truly independent AI ecosystem by bridging the gap between brand and product, focusing on user experience, and utilizing Web3 and AI technologies.
            </p>
            <p className="text-sm font-faktum-regular mb-2">Launched & worked on:</p>
            <ul className="text-sm space-y-1 mb-2 text-gray-700 dark:text-gray-300">
              <li>• The Independent AI Institute</li>
              <li>• A social mission game using X integration (6079.ai)</li>
              <li>• A crypto token ($THINK) in partnership with Futureverse</li>
              <li>• Marcom for Wire.Network & Wire.Foundation</li>
              <li>• A blockchain hub, explorer, and node dashboard for Wire Network</li>
              <li>• The 6079 Foundation</li>
              <li>• A decentralized AI prompt‑based Street Fighter game (Ai Prize Fight)</li>
              <li>• An independent AI news hub (IAI News)</li>
              <li>• A virtual game available on iOS, Android, and Web (Nodeshifter)</li>
              <li>• $MOR token swap product for Morpheus (Mor.org)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Freelance Consultant</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-faktum-light">Austin, TX & Remote • 1998 – Present</p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              I solve Brand & Product design problems to help people reach their intended audiences. While my experience is vast, I focus on using design and strategy to bridge the gap between brand and product. I currently leverage Web3 and AI technologies to help businesses and design teams work efficiently and to create work that lasts.
            </p>
            <p className="text-sm font-faktum-regular mb-1">Select clients:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Alphi.xyz, Ai Layer, Ugmonk, Funsize, Hertz, Johnson & Johnson, Fjord, Accenture, Sapient Razorfish, Underoath, Mutemath, Son Lux, WeWork, Google, The Culinary Institute of America, Humin, SuperFriendly, SerialBox Presents, QRI, Sony BMG / EMI, Jeremy Cowart.</p>
          </div>

          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Founder & Executive Creative Director, All Manner Of Us</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-faktum-light">Austin, TX & Remote • 2017 – Present</p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Helping organizations and artists build deeper relationships with their audience through full‑service brand design.
            </p>
            <p className="text-sm font-faktum-regular mb-1">Select clients:</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Indeed, Wistia, HCA Healthcare, Kistler Rods, Lemburg House, Superset, Hammock.</p>
          </div>

          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Art Director & Senior Marketing Designer, Creative Market (Autodesk)</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-faktum-light">San Francisco, CA & Remote • 2015 – 2016</p>
            <p className="text-gray-700 dark:text-gray-300">
              Creative Market is an online marketplace platform for design content from independent creatives around the world. I worked on various marketing, product, and brand initiatives. Enhanced product user signup conversion by 17%.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Co‑founder & Creative Director, Dbln llc</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-faktum-light">Houston, TX & Remote • 2013 – 2014</p>
            <p className="text-gray-700 dark:text-gray-300">
              Dbln was a web design, development, and brand studio with a focus on the wedding and hospitality industries.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">Volunteering</h2>
        
        <div>
          <h3 className="text-lg font-faktum-regular mb-2">Alphi Leadership Academy</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-faktum-light">Alphi.xyz • Remote • 2023 – Present</p>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Alphi is a community‑powered digital library built to organize all the information in the metaverse. Our platform brings accessibility and transparency to the world of digital collectibles, enabling everyone to make well‑informed decisions about the projects they get involved with — because we believe that the more you give, the more you have.
          </p>
          <p className="text-sm font-faktum-regular text-gray-700 dark:text-gray-300">Focus areas: Blockchain & AI</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">Personal Projects</h2>
        
        <div>
          <h3 className="text-lg font-faktum-regular mb-2">Music Producer & Writer</h3>
          <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <li>• <strong>Forenn</strong> — Texas, USA & Nairobi, Kenya • 2012 – Present</li>
            <li>• <strong>Emma Bieniewcz</strong> — Grand Rapids, MI & Remote • 2021 – Present</li>
            <li>• <strong>Mezzanines</strong> — Austin, TX & Remote • 2021 – Present</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">Portfolio Highlights</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Below is a highlight of work completed, listed with roles I was responsible for. Detailed portfolio available upon request.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Manifest your palate — Jane's Dine Inn</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Naming, Strategy, Brand Development, Creative Direction, Design, Brand Identity, Website Design, Print, Copywriting</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Love In The Void — Hammock</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Creative Direction, Art Direction, Photography, Design, Packaging</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Talking Too Loud — Wistia</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Creative Direction, Art Direction, Design</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Balancing The Art & Science Of Recruiting — Indeed</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Art Direction, Design, Packaging, Consulting</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Humanizing Healthcare — HCA Healthcare</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Creative Direction, Art Direction, Design, Photography, Film, Copywriting</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Erase Me — Underoath</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Website Design</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Building a Legacy — Lemburg House</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">AOR, Strategy, Creative Direction, Design</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Five Star — Hank & Booth</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Titling Design, Movie Poster Design</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Feels like coming home — Oakwood Public Market</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Creative Direction, Website Design, Brand Identity, Collateral, Copywriting</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Remnants — Son Lux</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Creative Direction, Art Direction, Design, Photography, Packaging</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Encinitas EP Campaign — Wild Pony</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Art Direction, Design, Photography</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">A Filmmaker's Brand — Avære</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Art Direction, Design, Website Design, Copywriting</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Play Dead — Mutemath</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Brand Development, Creative Direction, Art Direction, Design, Packaging</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">LTD Edition Merch Drop — W—Co</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Art Direction, Design</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">Branding Food For The Rebel Souls — Jane Wild</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">AOR, Strategy, Brand Development, Creative Direction, Art Direction, Design, Packaging</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">How far can you take a dream? — Forenn</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Strategy, Campaign, Creative Direction, Brand Development, Design, Photography, Film</p>
          </div>
          
          <div>
            <h3 className="text-lg font-faktum-regular mb-2">The Path Became A Ghost — A Boy & His Kite</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Naming, Strategy, Brand Development, Creative Direction, Art Direction, Design, Packaging</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-6">References</h2>
        
        <div className="space-y-6">
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
            <p className="mb-2">"Zach has been a true pleasure to work with at Indeed. He always delivered quality, thoughtful design work that enhanced our startup product brand and gave our UX the polish of a much more mature product. He showed a strong spirit of partnership with UX Research, and it was always heartening to see how our reported user needs and perspectives were reflected in his work."</p>
            <footer className="text-sm font-faktum-regular">— <strong>Margaret Becker</strong>, Director of UX Research, Indeed</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
            <p className="mb-2">"Zach helped my team create the visual brand identity for one of our core content properties—a podcast. He designed the show artwork (including unique cover art for each episode), created promotional assets for all social platforms, and helped with digital campaigns outside of social. An attentive listener and great designer, Zach worked hard to experiment and incorporate our feedback, and ultimately helped us create a strong brand identity for our show. Would absolutely work with Zach again."</p>
            <footer className="text-sm font-faktum-regular">— <strong>Adam Day</strong>, Creative Director, Wistia</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
            <p className="mb-2">"Zach worked with the Creative Market team for over a year as a contractor, and produced a variety of creative and design projects for the brand across marketing, product, and community initiatives. Zach has a ton of passion that he brings to the table. He cares deeply about the team and community of users that he produces work for. While at CM, he gave holistic, constructive feedback on team projects, company objectives and brand culture. Zach imparted a double‑dose of user empathy and perspective into every project conversation and meeting that he participated in, and was very easy to work with. He helped our team stay focused on the member's experience of Creative Market, and gave thoughtful feedback about how various projects and choices impact the user's experience and perception of the Creative Market brand."</p>
            <footer className="text-sm font-faktum-regular">— <strong>Gerren Lamson</strong>, Senior UX Director, Indeed; Head of Design, Creative Market</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
            <p className="mb-2">"Zach designed a course‑based website for a client of mine. 'Easy to read' and 'navigate' were the goals. He managed to make those happen and make it extremely beautiful. The site is still heavily used after more than four years and hasn't once needed a single facelift or design modification. That's impressive."</p>
            <footer className="text-sm font-faktum-regular">— <strong>Stephen Callender</strong>, Owner, Foster Commerce</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
            <p className="mb-2">"Zach is a multi‑talented designer and director. His background in Photography and Visual Design brings an interesting mix of skills to the table. Zach is always thinking outside of the box and trying to break tradition design patterns to come up with unique solutions. His easy‑going attitude allows him to get on well with internal staff and clients alike. He leads teams well and inspires great outcomes from those who work alongside him."</p>
            <footer className="text-sm font-faktum-regular">— <strong>James Hobbs</strong>, VP of Design, Metalab; Founder & CD, Octopus</footer>
          </blockquote>
          
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
            <p className="mb-2">"Zach has an acute eye for detail and cohesiveness. Visually he produces concepts, designs, brands, ideas, etc. that are at a whole new level of professionalism and creativity. I recommend Zach to anyone!"</p>
            <footer className="text-sm font-faktum-regular">— <strong>Ryan Kutter</strong>, Consultant Lead, Connect Realty</footer>
          </blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-faktum-medium mb-4">Ready to work?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 font-faktum-regular mb-6">Let's create something great together.</p>
        
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong className="font-faktum-regular">Email:</strong> <a href="mailto:hello@zachmcnair.com">hello@zachmcnair.com</a></p>
          <p><strong className="font-faktum-regular">LinkedIn:</strong> <a href="https://www.linkedin.com/in/zachmcnair/" target="_blank" rel="noopener noreferrer">@zachmcnair</a></p>
          <p><strong className="font-faktum-regular">X / Twitter:</strong> <a href="https://twitter.com/zachmcnair" target="_blank" rel="noopener noreferrer">@zachmcnair</a></p>
          <p><strong className="font-faktum-regular">Instagram:</strong> <a href="https://instagram.com/zachmcnair" target="_blank" rel="noopener noreferrer">@zachmcnair</a></p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 dark:text-gray-500 mt-16">
        <p>© 2025 Zach McNair — You're Ever Seen™</p>
      </footer>
    </>
  )
}
