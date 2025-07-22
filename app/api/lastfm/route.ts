import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'zachmcnair'
    const apiKey = process.env.LASTFM_API_KEY
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Last.fm API key not configured' },
        { status: 500 }
      )
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
    return NextResponse.json(
      { error: 'Failed to fetch recent tracks' },
      { status: 500 }
    )
  }
} 