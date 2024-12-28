import { NextResponse } from 'next/server'
import { fetchScratchProject } from '@/lib/api/scratch'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const html = await fetchScratchProject(params.id)
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Scratch proxy error:', error)
    
    if (error instanceof Error) {
      return new NextResponse(
        JSON.stringify({ error: error.message }), 
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
          }
        }
      )
    }
    
    return new NextResponse(
      JSON.stringify({ error: 'Internal Server Error' }), 
      { status: 500 }
    )
  }
}