'use client'

import { useEffect, useState } from 'react'

interface Track {
  name: string
  artist: string
  album?: string
  url: string
  image?: string
  nowPlaying?: boolean
}

interface LastFmData {
  recenttracks: {
    track: Array<{
      name: string
      artist: { '#text': string }
      album: { '#text': string }
      url: string
      image: Array<{ '#text': string; size: string }>
      '@attr'?: { nowplaying: string }
    }>
  }
}

export function LastFmScrobbler() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        // Using a proxy to avoid CORS issues with Last.fm API
        const response = await fetch('/api/lastfm')
        if (!response.ok) {
          throw new Error('Failed to fetch recent tracks')
        }
        const data: LastFmData = await response.json()
        
        const recentTracks = data.recenttracks.track.slice(0, 3).map(track => ({
          name: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
          url: track.url,
          image: track.image.find(img => img.size === 'small')?.['#text'],
          nowPlaying: track['@attr']?.nowplaying === 'true'
        }))
        
        setTracks(recentTracks)
      } catch (err) {
        setError('Unable to load recent tracks')
        console.error('Error fetching Last.fm data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentTracks()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
        <div className="animate-spin rounded-full h-3 w-3 border-b border-current"></div>
        <span>Loading recent tracks...</span>
      </div>
    )
  }

  if (error || tracks.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <div className="text-sm text-neutral-600 dark:text-neutral-400">
        Recently listening to:
      </div>
      <div className="space-y-1">
        {tracks.map((track, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            {track.image && (
              <img 
                src={track.image} 
                alt={`${track.artist} - ${track.name}`}
                className="w-8 h-8 rounded"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="block truncate">
                <span className="font-medium">{track.name}</span>
                <span className="text-neutral-600 dark:text-neutral-400"> by {track.artist}</span>
                {track.nowPlaying && (
                  <span className="ml-2 text-green-600 dark:text-green-400">●</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 