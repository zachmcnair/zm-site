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

  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        const response = await fetch('/api/lastfm')
        if (!response.ok) {
          setLoading(false)
          return
        }
        const data: LastFmData = await response.json()
        
        if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length > 0) {
          const recentTracks = data.recenttracks.track.slice(0, 1).map(track => ({
            name: track.name,
            artist: track.artist['#text'],
            album: track.album['#text'],
            url: track.url,
            image: track.image.find(img => img.size === 'small')?.['#text'],
            nowPlaying: track['@attr']?.nowplaying === 'true'
          }))
          
          setTracks(recentTracks)
        }
      } catch (err) {
        console.error('Error fetching Last.fm data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecentTracks()
  }, [])

  // Show loading state or empty state
  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--raised)' }}></div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          <div>Loading...</div>
          <div></div>
        </div>
      </div>
    )
  }

  // Show actual track data or empty state
  if (tracks.length === 0) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--raised)' }}></div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          <div>No recent tracks</div>
          <div></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      {tracks.map((track, index) => (
        <div key={index} className="flex items-center gap-2">
          {track.image ? (
            <img 
              src={track.image} 
              alt={`${track.album} cover`}
              className="w-8 h-8 rounded object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--raised)' }}></div>
          )}
          <div className="text-sm" style={{ color: 'var(--text)' }}>
            <div>{track.name}</div>
            <div>{track.artist}</div>
          </div>
        </div>
      ))}
    </div>
  )
} 