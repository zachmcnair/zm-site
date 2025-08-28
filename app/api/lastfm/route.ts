import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const username = 'zachmcnair'
    const apiKey = process.env.LASTFM_API_KEY
    
    console.log('=== LastFM Debug Info ===')
    console.log('Environment:', process.env.NODE_ENV)
    console.log('LastFM API Key exists:', !!apiKey)
    console.log('LastFM API Key length:', apiKey ? apiKey.length : 0)
    console.log('LastFM API Key first 4 chars:', apiKey ? apiKey.substring(0, 4) : 'N/A')
    console.log('LastFM Username:', username)
    console.log('All env vars with LASTFM:', Object.keys(process.env).filter(key => key.includes('LASTFM')))
    console.log('========================')
    
    if (!apiKey) {
      console.log('❌ No LastFM API key found - returning empty data')
      const emptyResponse = NextResponse.json({
        recenttracks: {
          track: []
        }
      })
      emptyResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
      emptyResponse.headers.set('Pragma', 'no-cache')
      emptyResponse.headers.set('Expires', '0')
      return emptyResponse
    }

    console.log('✅ LastFM API key found, making request...')

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=3`
    
    console.log('LastFM API URL:', url.replace(apiKey, '***'))
    
    const response = await fetch(url, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    
    console.log('LastFM API Response Status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log('❌ LastFM API Error Response:', errorText)
      throw new Error(`Last.fm API responded with status: ${response.status}: ${errorText}`)
    }
    
    const data = await response.json()
    
    console.log('✅ LastFM API Success Response:', JSON.stringify(data, null, 2))
    
    const successResponse = NextResponse.json(data)
    successResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    successResponse.headers.set('Pragma', 'no-cache')
    successResponse.headers.set('Expires', '0')
    
    return successResponse
  } catch (error) {
    console.error('❌ Error fetching Last.fm data:', error)
    const errorResponse = NextResponse.json({
      recenttracks: {
        track: []
      }
    })
    errorResponse.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    errorResponse.headers.set('Pragma', 'no-cache')
    errorResponse.headers.set('Expires', '0')
    return errorResponse
  }
} 