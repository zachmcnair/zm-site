import Link from 'next/link'
import { getAllPosts } from 'app/lib/mdx'
import { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on design, AI, Web3, and building products that matter.',
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/feed`,
    },
  },
  openGraph: {
    title: 'Blog — Zach McNair',
    description: 'Thoughts on design, AI, Web3, and building products that matter.',
    url: `${baseUrl}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Zach McNair',
    description: 'Thoughts on design, AI, Web3, and building products that matter.',
  },
}

export default function BlogPage() {
  const posts = getAllPosts('blog')

  return (
    <div className="max-w-4xl mx-auto px-8 md:px-20">
      <header className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-faktum-medium tracking-tight">
            Blog
          </h1>
          <Link 
            href="/feed" 
            className="text-sm hover:underline"
            style={{ color: 'var(--link)' }}
          >
            RSS Feed
          </Link>
        </div>
      </header>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-faktum-medium mb-2 transition-colors" style={{ color: 'var(--text)' }}>
                  {post.meta.title}
                </h2>
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <time dateTime={post.meta.date}>
                  {post.meta.date}
                </time>
                {post.meta.tags && post.meta.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono uppercase text-gray-500 dark:text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {post.meta.description && (
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.meta.description}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
} 