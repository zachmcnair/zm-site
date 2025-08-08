import Link from 'next/link'
import { Logo } from './components/logo'
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
    </div>
  )
}
