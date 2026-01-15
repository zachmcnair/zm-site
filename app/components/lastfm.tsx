'use client'

import { useLastFm } from './lastfm-context'

export function LastFmScrobbler() {
  const { tracks, loading, error } = useLastFm()

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center gap-2" role="status" aria-live="polite">
        <div className="w-10 h-10 rounded" style={{ backgroundColor: 'var(--raised)' }} aria-hidden="true"></div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          <div>Loading music data...</div>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center gap-2" role="alert">
        <div className="w-10 h-10 rounded" style={{ backgroundColor: 'var(--raised)' }} aria-hidden="true"></div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          <div>Error: {error}</div>
        </div>
      </div>
    )
  }

  // Show actual track data or empty state
  if (tracks.length === 0) {
    return (
      <div className="flex items-center gap-2" role="status">
        <div className="w-10 h-10 rounded" style={{ backgroundColor: 'var(--raised)' }} aria-hidden="true"></div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          <div>No recent tracks</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2" role="status" aria-live="polite">
      {tracks.map((track, index) => (
        <div key={index} className="flex items-center gap-2">
          {track.image ? (
            <img 
              src={track.image} 
              alt={`Album cover for ${track.name} by ${track.artist}`}
              className="w-10 h-10 rounded object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded" style={{ backgroundColor: 'var(--raised)' }} aria-hidden="true"></div>
          )}
          <div className="text-sm" style={{ color: 'var(--text)' }}>
            <div className="flex items-center gap-1">
              {track.name}
              {track.nowPlaying && (
                <span className="text-xs text-green-500 animate-pulse" aria-label="Now playing" role="status">
                  <span aria-hidden="true">●</span>
                  <span className="sr-only">Now playing</span>
                </span>
              )}
            </div>
            <div>{track.artist}</div>
          </div>
        </div>
      ))}
    </div>
  )
} 