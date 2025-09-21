import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { BlogImage } from './blog-image'
import { YouTubeEmbed, SpotifyEmbed, GenericEmbed } from './embeds'

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-faktum-medium mb-6 text-gray-900 dark:text-gray-100" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-faktum-medium mb-4 text-gray-900 dark:text-gray-100" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-faktum-medium mb-3 text-gray-900 dark:text-gray-100" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-faktum-medium mb-2 text-gray-900 dark:text-gray-100" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 text-gray-700 dark:text-gray-300 list-disc list-outside" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-4 text-gray-700 dark:text-gray-300 list-decimal list-outside" {...props} />
  ),
  li: (props: any) => (
    <li className="mb-1 text-gray-700 dark:text-gray-300" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 mb-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  a: (props: any) => (
    <a className="hover:underline" style={{ color: 'var(--link)' }} {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-faktum-medium text-gray-900 dark:text-gray-100" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-700 dark:text-gray-300" {...props} />
  ),
  BlogImage: (props: any) => <BlogImage {...props} />,
  YouTubeEmbed: (props: any) => <YouTubeEmbed {...props} />,
  SpotifyEmbed: (props: any) => <SpotifyEmbed {...props} />,
  GenericEmbed: (props: any) => <GenericEmbed {...props} />,
  img: (props: any) => {
    // Handle relative image paths in blog posts
    const src = props.src?.startsWith('images/') 
      ? `/blog/images/${props.src.replace('images/', '')}`
      : props.src
    
    // Check if this image has a caption (next sibling is a figcaption)
    const hasCaption = props.title || props.alt?.includes('caption:')
    
    if (hasCaption) {
      const caption = props.title || props.alt?.replace('caption:', '').trim()
      return (
        <figure className="my-8 -mx-8 md:-mx-20">
          <Image 
            {...props} 
            src={src}
            className="w-full h-auto rounded-lg"
            unoptimized
          />
          <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
            {caption}
          </figcaption>
        </figure>
      )
    }
    
    return (
      <div className="my-8 -mx-8 md:-mx-20">
        <Image 
          {...props} 
          src={src}
          className="w-full h-auto rounded-lg"
          unoptimized
        />
      </div>
    )
  },
}

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
