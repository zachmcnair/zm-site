interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video", className = "my-8" }: YouTubeEmbedProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
  title = "Spotify content", 
  className = "my-8" 
}: SpotifyEmbedProps) {
  const id = trackId || playlistId || albumId
  const spotifyUrl = `https://open.spotify.com/embed/${type}/${id}`
  
  return (
    <div className={`w-full ${className}`}>
      <iframe
        className="w-full rounded-lg"
        src={spotifyUrl}
        width="100%"
        height={type === 'track' ? '152' : '352'}
        frameBorder="0"
        allowTransparency={true}
        allow="encrypted-media"
        title={title}
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
  title = "Embedded content", 
  className = "my-8",
  width = "100%",
  height = "400px"
}: GenericEmbedProps) {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        className="w-full rounded-lg"
        src={url}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  )
}

