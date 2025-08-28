'use client'

import { useLastFm } from './lastfm-context'

export function LastFmScrobbler() {
  const { tracks, loading, error } = useLastFm()

  // Show loading state
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

  // Show error state
  if (error) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded" style={{ backgroundColor: 'var(--raised)' }}></div>
        <div className="text-sm" style={{ color: 'var(--text)' }}>
          <div>Error: {error}</div>
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
            <div className="flex items-center gap-1">
              {track.name}
              {track.nowPlaying && (
                <span className="text-xs text-green-500 animate-pulse">●</span>
              )}
            </div>
            <div>{track.artist}</div>
          </div>
        </div>
      ))}
    </div>
  )
} 