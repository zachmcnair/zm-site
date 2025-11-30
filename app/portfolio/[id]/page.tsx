import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from '../../sitemap'
import portfolioData from '../../lib/portfolio.json'

interface PortfolioItem {
  id: string
  src: string
  alt: string
  title: string
  client: string
  metatags: string[]
  aspectRatio?: 'portrait' | 'square' | 'landscape' | 'wide' | 'ultra-wide'
  hidden?: boolean
  featured?: boolean
  caseStudyUrl?: string
  projectId?: string
  category?: string
}

interface PortfolioProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  const items = portfolioData as PortfolioItem[]
  return items
    .filter(item => !item.hidden)
    .map((item) => ({
      id: item.id,
    }))
}

export async function generateMetadata({ params }: PortfolioProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const items = portfolioData as PortfolioItem[]
  const item = items.find(i => i.id === id && !i.hidden)

  if (!item) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${item.title} — ${item.client}`,
    description: `${item.title} by ${item.client}. ${item.metatags.join(', ')}`,
    openGraph: {
      title: `${item.title} — ${item.client}`,
      description: `${item.title} by ${item.client}. ${item.metatags.join(', ')}`,
      url: `${baseUrl}/portfolio/${id}`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}${item.src}`,
          width: 1200,
          height: 630,
          alt: item.alt,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.title} — ${item.client}`,
      description: `${item.title} by ${item.client}. ${item.metatags.join(', ')}`,
      images: [`${baseUrl}${item.src}`],
    },
  }
}

// Get related items (same project or category)
function getRelatedItems(currentItem: PortfolioItem, allItems: PortfolioItem[]): PortfolioItem[] {
  const related: PortfolioItem[] = []
  
  // First, get items from same project
  if (currentItem.projectId) {
    const sameProject = allItems.filter(
      item => item.projectId === currentItem.projectId && item.id !== currentItem.id && !item.hidden
    )
    related.push(...sameProject.slice(0, 3))
  }
  
  // Then, get items from same category
  if (currentItem.category && related.length < 3) {
    const sameCategory = allItems.filter(
      item => item.category === currentItem.category && 
              item.id !== currentItem.id && 
              !item.hidden &&
              !related.some(r => r.id === item.id)
    )
    related.push(...sameCategory.slice(0, 3 - related.length))
  }
  
  // Finally, fill with any other items
  if (related.length < 3) {
    const others = allItems.filter(
      item => item.id !== currentItem.id && 
              !item.hidden &&
              !related.some(r => r.id === item.id)
    )
    related.push(...others.slice(0, 3 - related.length))
  }
  
  return related.slice(0, 3)
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { id } = await params
  const items = portfolioData as PortfolioItem[]
  const item = items.find(i => i.id === id && !i.hidden)

  if (!item) {
    notFound()
  }

  const allItems = items.filter(i => !i.hidden)
  const relatedItems = getRelatedItems(item, allItems)

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <article className="max-w-6xl mx-auto px-8 md:px-20 py-12">
        {/* Back Link */}
        <Link 
          href="/portfolio" 
          className="inline-flex items-center gap-2 mb-8 text-sm font-faktum-medium hover:underline"
          style={{ color: 'var(--text-tertiary)' }}
        >
          ← Back to Portfolio
        </Link>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Project Info */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-newsreader-semibold mb-4" style={{ color: 'var(--text)' }}>
                {item.title}
              </h1>
              <p className="text-2xl font-faktum-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                {item.client}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.metatags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-dm-mono-regular rounded"
                    style={{ 
                      backgroundColor: 'var(--raised)', 
                      color: 'var(--text-tertiary)' 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* External Link */}
            {item.caseStudyUrl && (
              <div>
                <a
                  href={item.caseStudyUrl}
                  target={item.caseStudyUrl.startsWith('http') ? '_blank' : '_self'}
                  rel={item.caseStudyUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="gradient-border-button inline-block"
                >
                  {item.caseStudyUrl.startsWith('http') ? 'VIEW LIVE SITE' : 'VIEW CASE STUDY'}
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Project Details Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {item.category && (
              <div>
                <h3 className="text-sm font-dm-mono-medium mb-2 uppercase" style={{ color: 'var(--text-tertiary)' }}>
                  Category
                </h3>
                <p className="font-faktum-medium" style={{ color: 'var(--text)' }}>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </p>
              </div>
            )}
            {item.projectId && (
              <div>
                <h3 className="text-sm font-dm-mono-medium mb-2 uppercase" style={{ color: 'var(--text-tertiary)' }}>
                  Project
                </h3>
                <p className="font-faktum-medium" style={{ color: 'var(--text)' }}>
                  {item.projectId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </p>
              </div>
            )}
            {item.aspectRatio && (
              <div>
                <h3 className="text-sm font-dm-mono-medium mb-2 uppercase" style={{ color: 'var(--text-tertiary)' }}>
                  Format
                </h3>
                <p className="font-faktum-medium" style={{ color: 'var(--text)' }}>
                  {item.aspectRatio.charAt(0).toUpperCase() + item.aspectRatio.slice(1).replace(/-/g, ' ')}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects */}
        {relatedItems.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-newsreader-semibold mb-8" style={{ color: 'var(--text)' }}>
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  href={`/portfolio/${relatedItem.id}`}
                  className="group"
                >
                  <div className="relative w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src={relatedItem.src}
                      alt={relatedItem.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-newsreader-medium mb-1" style={{ color: 'var(--text)' }}>
                    {relatedItem.title}
                  </h3>
                  <p className="text-sm font-dm-mono-regular" style={{ color: 'var(--text-tertiary)' }}>
                    {relatedItem.client}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}

