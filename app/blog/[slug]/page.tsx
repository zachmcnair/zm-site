import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from 'app/lib/mdx'
import { MDXContent } from 'app/components/mdx'
import { ShareButtons } from 'app/components/share-buttons'
import { Metadata } from 'next'
import Link from 'next/link'
import { baseUrl } from 'app/sitemap'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts('blog')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug, 'blog')
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `${baseUrl}/blog/${slug}`,
      type: 'article',
      publishedTime: post.meta.date,
      tags: post.meta.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug, 'blog')

  if (!post) {
    notFound()
  }

  const postUrl = `${baseUrl}/blog/${slug}`
  
  // Get all posts for navigation
  const allPosts = getAllPosts('blog')
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <article className="max-w-4xl mx-auto px-8 md:px-20">
      <header className="mb-8">
        <Link 
          href="/blog" 
          className="hover:underline mb-4 inline-block"
          style={{ color: 'var(--link)' }}
        >
          ← Back to Blog
        </Link>
        
        <h1 className="text-4xl font-faktum-medium tracking-tight mb-4">
          {post.meta.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {post.meta.description}
          </p>
        )}
      </header>

      <div className="max-w-[680px] mx-auto">
        <MDXContent source={post.content} />
      </div>

      <ShareButtons 
        title={post.meta.title}
        url={postUrl}
        description={post.meta.description}
        tags={post.meta.tags}
      />

      {/* Prev/Next Navigation */}
      {(prevPost || nextPost) && (
        <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start gap-8">
            {/* Previous Post */}
            <div className="flex-1">
              {prevPost ? (
                <Link 
                  href={`/blog/${prevPost.slug}`}
                  className="group block"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors" style={{ color: 'var(--text-tertiary)' }}>
                    ← Prev
                  </div>
                  <div className="text-lg font-faktum-medium text-gray-900 dark:text-gray-100 transition-colors" style={{ color: 'var(--text)' }}>
                    {prevPost.meta.title}
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            {/* Next Post */}
            <div className="flex-1 text-right">
              {nextPost ? (
                <Link 
                  href={`/blog/${nextPost.slug}`}
                  className="group block"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors" style={{ color: 'var(--text-tertiary)' }}>
                    Next →
                  </div>
                  <div className="text-lg font-faktum-medium text-gray-900 dark:text-gray-100 transition-colors" style={{ color: 'var(--text)' }}>
                    {nextPost.meta.title}
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </nav>
      )}
    </article>
  )
} 