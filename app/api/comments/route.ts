import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { headers } from 'next/headers'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const REPO_OWNER = process.env.GITHUB_REPO_OWNER
const REPO_NAME = process.env.GITHUB_REPO_NAME
const FILE_PATH = 'data/comments.json'

if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
  throw new Error('Missing required GitHub configuration')
}

async function getLocationFromIP(ip: string) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const data = await response.json()
    if (data.status === 'success') {
      return `${data.country}, ${data.regionName}`
    }
    return 'Unknown Location'
  } catch (error) {
    console.error('Error getting location:', error)
    return 'Unknown Location'
  }
}

async function fetchComments() {
  try {
    console.log('Fetching comments from GitHub...')
    console.log('Repository:', `${REPO_OWNER}/${REPO_NAME}`)
    
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': '2022-11-28'
        },
        cache: 'no-store'
      }
    )

    console.log('GitHub API Response Status:', response.status)
    
    if (response.status === 404) {
      console.log('Comments file not found, creating new file')
      const createResponse = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'X-GitHub-Api-Version': '2022-11-28',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Initialize comments.json',
            content: Buffer.from('[]').toString('base64')
          })
        }
      )

      if (!createResponse.ok) {
        const errorText = await createResponse.text()
        console.error('Error creating file:', errorText)
        throw new Error(`Failed to create file: ${createResponse.status} ${errorText}`)
      }

      return []
    }

    if (!response.ok) {
      const errorText = await response.text()
      console.error('GitHub API Error:', errorText)
      throw new Error(`GitHub API error: ${response.status} ${errorText}`)
    }

    const data = await response.json()
    console.log('Fetched data SHA:', data.sha)
    const content = Buffer.from(data.content, 'base64').toString()
    const comments = JSON.parse(content || '[]')
    console.log('Fetched comments count:', comments.length)
    return comments
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

async function saveComments(comments: any[], message: string) {
  try {
    console.log('Saving comments to GitHub...')
    console.log('Comments count:', comments.length)
    
    // First get the current file to get its SHA
    const currentFile = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': '2022-11-28'
        },
        cache: 'no-store'
      }
    ).then(res => {
      if (!res.ok) {
        const error = `Failed to get current file: ${res.status}`
        console.error(error)
        throw new Error(error)
      }
      return res.json()
    })

    console.log('Current file SHA:', currentFile?.sha)

    const content = Buffer.from(JSON.stringify(comments, null, 2)).toString('base64')
    
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          content,
          sha: currentFile?.sha
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error saving comments:', errorText)
      throw new Error(`Failed to save comments: ${response.status} ${errorText}`)
    }

    const result = await response.json()
    console.log('Comments saved successfully')
    return result
  } catch (error) {
    console.error('Error in saveComments:', error)
    throw error
  }
}

export async function GET() {
  try {
    const comments = await fetchComments()
    return NextResponse.json(comments)
  } catch (error) {
    console.error('Error in GET:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const headersList = headers()
    const ip = headersList.get('x-forwarded-for') || ''
    const location = await getLocationFromIP(ip)

    const { content } = await request.json()
    const comments = await fetchComments()

    const newComment = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
      user: {
        name: session.user.name || 'Anonymous',
        image: session.user.image || 'https://github.com/ghost.png'
      },
      location,
      likes: 0,
      shares: 0,
      likedBy: []
    }

    comments.unshift(newComment)
    await saveComments(comments, `Add comment by ${session.user.name}`)

    return NextResponse.json(newComment)
  } catch (error) {
    console.error('Error in POST:', error)
    return new NextResponse(error instanceof Error ? error.message : 'Internal Server Error', { status: 500 })
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession()
  if (!session?.user) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { commentId, action } = await request.json()
    const comments = await fetchComments()
    const comment = comments.find((c: { id: string }) => c.id === commentId)    
    if (!comment) {
      return new NextResponse('Comment not found', { status: 404 })
    }

    if (action === 'like') {
      const userHasLiked = comment.likedBy.includes(session.user.email || '')
      if (userHasLiked) {
        comment.likes -= 1
        comment.likedBy = comment.likedBy.filter((email: string) => email !== session.user?.email)      } else {
        comment.likes += 1
        comment.likedBy.push(session.user.email || '')
      }
    } else if (action === 'share') {
      comment.shares += 1
    }

    await saveComments(comments, `Update comment ${action} by ${session.user.name}`)
    return NextResponse.json(comment)
  } catch (error) {
    console.error('Error in PUT:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 