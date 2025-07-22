import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'zachmcnair'
    const apiKey = process.env.LASTFM_API_KEY
    
    if (!apiKey) {
      // Return empty data instead of error to prevent breaking the page
      return NextResponse.json({
        recenttracks: {
          track: []
        }
      })
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=3`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Last.fm API responded with status: ${response.status}`)
    }
    
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching Last.fm data:', error)
    // Return empty data instead of error
    return NextResponse.json({
      recenttracks: {
        track: []
      }
    })
  }
} 