import { getAllPosts } from './lib/mdx'

export const baseUrl = 'https://zachmcnair.com'

export default async function sitemap() {
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Add all case studies
  const caseStudies = getAllPosts('case-studies')
  caseStudies.forEach((caseStudy) => {
    if (caseStudy.meta.published !== false) {
      routes.push({
        url: `${baseUrl}/case-studies/${caseStudy.slug}`,
        lastModified: caseStudy.meta.date 
          ? new Date(caseStudy.meta.date).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      })
    }
  })

  // Add all blog posts
  const blogPosts = getAllPosts('blog')
  blogPosts.forEach((post) => {
    if (post.meta.published !== false) {
      routes.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.meta.date 
          ? new Date(post.meta.date).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })
    }
  })

  return routes
}
