import Image from 'next/image'

interface BlogImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  caption?: string
}

export function BlogImage({ 
  src, 
  alt, 
  width = 800, 
  height = 600, 
  className = "w-full h-auto rounded-lg",
  caption 
}: BlogImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        unoptimized
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

