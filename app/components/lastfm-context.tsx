'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react'

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

interface LastFmContextType {
  tracks: Track[]
  loading: boolean
  error: string | null
}

const LastFmContext = createContext<LastFmContextType | undefined>(undefined)

export function useLastFm() {
  const context = useContext(LastFmContext)
  if (context === undefined) {
    throw new Error('useLastFm must be used within a LastFmProvider')
  }
  return context
}

interface LastFmProviderProps {
  children: ReactNode
}

export function LastFmProvider({ children }: LastFmProviderProps) {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRecentTracks = async () => {
    try {
      setError(null)
      
      const response = await fetch('/api/lastfm')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
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
      } else {
        setError('No tracks found')
        // Provide fallback data to prevent breaking
        setTracks([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
      // Provide fallback data to prevent breaking
      setTracks([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchRecentTracks()

    // Set up polling every 60 seconds (reduced from 120 seconds for testing)
    // This significantly reduces the frequency of state updates that could cause parent re-renders
    const interval = setInterval(() => {
      // Only set updating if we're actually going to fetch
      fetchRecentTracks()
    }, 60000) // 60 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [])

  const value: LastFmContextType = useMemo(() => ({
    tracks,
    loading,
    error
  }), [tracks, loading, error])

  return (
    <LastFmContext.Provider value={value}>
      {children}
    </LastFmContext.Provider>
  )
}
