import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// 内存中模拟存储
let mockComments = [
  {
    id: '1',
    content: 'This game is amazing! The beats are so satisfying to mix and the interface is intuitive.',
    createdAt: '2023-11-15T14:32:00Z',
    user: {
      name: 'MusicLover',
      image: 'https://api.dicebear.com/7.x/personas/svg?seed=MusicLover'
    },
    location: 'United States',
    likes: 24,
    shares: 3,
    likedBy: []
  },
  {
    id: '2',
    content: 'I\'ve been playing for hours! Can\'t get enough of the sound combinations you can create. Definitely my new favorite music game!',
    createdAt: '2023-11-14T09:17:00Z',
    user: {
      name: 'BeatMaker42',
      image: 'https://api.dicebear.com/7.x/personas/svg?seed=BeatMaker42'
    },
    location: 'Germany',
    likes: 18,
    shares: 1,
    likedBy: []
  },
  {
    id: '3',
    content: 'Very creative concept. I wish there were more sound options though.',
    createdAt: '2023-11-13T22:05:00Z',
    user: {
      name: 'RhythmExplorer',
      image: 'https://api.dicebear.com/7.x/personas/svg?seed=RhythmExplorer'
    },
    location: 'Canada',
    likes: 7,
    shares: 0,
    likedBy: []
  },
  {
    id: '4',
    content: "Perfect way to spend a rainy afternoon. I've created some really cool beats!",
    createdAt: '2023-11-12T16:48:00Z',
    user: {
      name: 'MelodyMaster',
      image: 'https://api.dicebear.com/7.x/personas/svg?seed=MelodyMaster'
    },
    location: 'Japan',
    likes: 15,
    shares: 2,
    likedBy: []
  },
  {
    id: '5',
    content: 'Great for stress relief and just having fun with music creation!',
    createdAt: '2023-11-11T11:23:00Z',
    user: {
      name: 'SoundWave',
      image: 'https://api.dicebear.com/7.x/personas/svg?seed=SoundWave'
    },
    location: 'Australia',
    likes: 9,
    shares: 1,
    likedBy: []
  }
];

async function getLocationFromIP(ip: string) {
  try {
    // 为了简化，直接返回一个模拟位置
    return 'Simulated Location'
  } catch (error) {
    console.error('Error getting location:', error)
    return 'Unknown Location'
  }
}

export async function GET() {
  try {
    return NextResponse.json(mockComments)
  } catch (error) {
    console.error('Error in GET:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const headersList = headers()
    const ip = headersList.get('x-forwarded-for') || ''
    const location = await getLocationFromIP(ip)

    const { content, user } = await request.json()

    const newComment = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
      user: {
        name: user?.name || 'Anonymous',
        image: user?.image || 'https://api.dicebear.com/7.x/personas/svg?seed=Anonymous'
      },
      location,
      likes: 0,
      shares: 0,
      likedBy: []
    }

    mockComments.unshift(newComment)

    return NextResponse.json(newComment)
  } catch (error) {
    console.error('Error in POST:', error)
    return new NextResponse(error instanceof Error ? error.message : 'Internal Server Error', { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const { commentId, action, user } = await request.json()
    const comment = mockComments.find((c) => c.id === commentId)    
    if (!comment) {
      return new NextResponse('Comment not found', { status: 404 })
    }

    const userEmail = user?.email || 'anonymous@example.com'

    if (action === 'like') {
      const userHasLiked = comment.likedBy.includes(userEmail)
      if (userHasLiked) {
        comment.likes -= 1
        comment.likedBy = comment.likedBy.filter((email: string) => email !== userEmail)
      } else {
        comment.likes += 1
        comment.likedBy.push(userEmail)
      }
    } else if (action === 'share') {
      comment.shares += 1
    }

    return NextResponse.json(comment)
  } catch (error) {
    console.error('Error in PUT:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 