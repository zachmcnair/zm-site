import type { Metadata } from 'next'
import { AboutColumn } from './components/home/about-column'
import { SelectWorkColumn } from './components/home/select-work-column'
import { ResumeColumn } from './components/home/resume-column'
import { HomeLock } from './components/home/home-lock'
import { HomeFooterBar } from './components/home/home-footer-bar'
import { Portrait } from './components/home/portrait'

export const metadata: Metadata = {
  title: 'Zach McNair — 0→1 Designer shaping AI × UX × Web3',
  description:
    '0→1 designer shaping AI × UX × Web3. Portfolio of 25+ case studies including THINK Agents, 6079 AI, SOU.LS, Wistia, Indeed, and more.',
}

const divider = { borderColor: 'var(--raised)' }

export default function LandingPage() {
  return (
    <div className="home-viewport min-h-screen">
      <HomeLock />
      <div className="home-inner px-8 md:px-20 py-10 lg:py-0">
        {/* On mobile, work leads (order-1); on lg the natural tri-column order returns.
            On lg each column is its own scroll area (see .home-col in global.css). */}
        <div className="home-grid grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)_minmax(0,0.9fr)] gap-y-16 lg:gap-y-0">
          {/* About */}
          <div
            className="home-col home-reveal order-2 lg:order-1 lg:pr-8 xl:pr-12 lg:py-12"
            style={{ animationDelay: '0ms' }}
          >
            <AboutColumn portrait={<Portrait />} />
          </div>

          {/* Select Work */}
          <div
            className="home-col home-reveal order-1 lg:order-2 lg:border-l lg:px-8 xl:px-12 lg:py-12"
            style={{ ...divider, animationDelay: '120ms' }}
          >
            <SelectWorkColumn />
          </div>

          {/* Résumé */}
          <div
            className="home-col home-reveal order-3 lg:order-3 lg:border-l lg:pl-8 xl:pl-12 lg:py-12"
            style={{ ...divider, animationDelay: '240ms' }}
          >
            <ResumeColumn />
          </div>
        </div>
      </div>

      {/* Slim footer — full width like the header (mobile uses the full footer) */}
      <HomeFooterBar />
    </div>
  )
}
