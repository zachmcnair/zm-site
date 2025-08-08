import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'zachmcnair'
    const apiKey = process.env.LASTFM_API_KEY
    
    console.log('LastFM API Key exists:', !!apiKey) // Debug log
    console.log('LastFM Username:', username) // Debug log
    
    if (!apiKey) {
      console.log('No LastFM API key found') // Debug log
      // Return empty data instead of error to prevent breaking the page
      return NextResponse.json({
        recenttracks: {
          track: []
        }
      })
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=3`
    
    console.log('LastFM API URL:', url.replace(apiKey, '***')) // Debug log (hide API key)
    
    const response = await fetch(url)
    
    console.log('LastFM API Response Status:', response.status) // Debug log
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log('LastFM API Error Response:', errorText) // Debug log
      throw new Error(`Last.fm API responded with status: ${response.status}`)
    }
    
    const data = await response.json()
    
    console.log('LastFM API Success Response:', JSON.stringify(data, null, 2)) // Debug log
    
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