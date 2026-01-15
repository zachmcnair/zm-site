interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video player", className = "my-8" }: YouTubeEmbedProps) {
  return (
    <div className={`w-full ${className} -mx-8 md:-mx-20`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  )
}

interface SpotifyEmbedProps {
  trackId?: string
  playlistId?: string
  albumId?: string
  type: 'track' | 'playlist' | 'album'
  title?: string
  className?: string
}

export function SpotifyEmbed({ 
  trackId, 
  playlistId, 
  albumId, 
  type, 
  title, 
  className = "my-8" 
}: SpotifyEmbedProps) {
  const id = trackId || playlistId || albumId
  const spotifyUrl = `https://open.spotify.com/embed/${type}/${id}`
  const defaultTitle = `Spotify ${type} player`
  
  return (
    <div className={`w-full ${className} -mx-8 md:-mx-20`}>
      <iframe
        className="w-full rounded-lg"
        src={spotifyUrl}
        width="100%"
        height={type === 'track' ? '152' : '352'}
        frameBorder="0"
        allowTransparency={true}
        allow="encrypted-media"
        title={title || defaultTitle}
        loading="lazy"
      />
    </div>
  )
}

interface GenericEmbedProps {
  url: string
  title?: string
  className?: string
  width?: string
  height?: string
}

export function GenericEmbed({ 
  url, 
  title = "Embedded content player", 
  className = "my-8",
  width = "100%",
  height = "400px"
}: GenericEmbedProps) {
  return (
    <div className={`w-full ${className} -mx-8 md:-mx-20`}>
      <iframe
        className="w-full rounded-lg"
        src={url}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
        title={title}
        loading="lazy"
      />
    </div>
  )
}

