'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ThumbsUp, Share, Send } from 'lucide-react'

// 模拟评论数据
const MOCK_COMMENTS = [
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
    shares: 3
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
    shares: 1
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
    shares: 0
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
    shares: 2
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
    shares: 1
  }
]

export function CommentsMock() {
  const [comments, setComments] = useState(MOCK_COMMENTS)
  const [newComment, setNewComment] = useState('')
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  }

  const handleLike = (id: string) => {
    setLiked(prev => {
      const wasLiked = prev[id]
      const newLiked = { ...prev, [id]: !wasLiked }
      
      setComments(prevComments => 
        prevComments.map(comment => 
          comment.id === id 
            ? { ...comment, likes: comment.likes + (wasLiked ? -1 : 1) }
            : comment
        )
      )
      
      return newLiked
    })
  }

  const handleShare = (id: string) => {
    setComments(prevComments => 
      prevComments.map(comment => 
        comment.id === id 
          ? { ...comment, shares: comment.shares + 1 }
          : comment
      )
    )
    alert('Shared successfully! (This is a demo)')
  }

  const handleSubmitComment = () => {
    if (!newComment.trim()) return
    
    const newCommentObj = {
      id: Date.now().toString(),
      content: newComment,
      createdAt: new Date().toISOString(),
      user: {
        name: 'You',
        image: 'https://api.dicebear.com/7.x/personas/svg?seed=You'
      },
      location: 'Your Location',
      likes: 0,
      shares: 0
    }
    
    setComments([newCommentObj, ...comments])
    setNewComment('')
  }

  return (
    <div className="space-y-4">
      {/* 评论输入框 */}
      <div className="flex items-start gap-3 mb-6">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://api.dicebear.com/7.x/personas/svg?seed=You" alt="Your avatar" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="bg-gray-100 dark:bg-black/40 rounded-lg p-2 mb-2">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full bg-transparent text-gray-800 dark:text-white resize-none outline-none min-h-[60px]"
            />
          </div>
          <div className="flex justify-end">
            <Button 
              onClick={handleSubmitComment}
              disabled={!newComment.trim()}
              className="bg-[#1D9E6F]/10 hover:bg-[#1D9E6F]/20 dark:bg-[#2EE59D]/10 dark:hover:bg-[#2EE59D]/20 text-[#1D9E6F] dark:text-[#2EE59D] px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Post</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* 评论列表 */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 dark:bg-black/40 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.user.image} alt={comment.user.name} />
                <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-medium">{comment.user.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{formatDate(comment.createdAt)} • {comment.location}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{comment.content}</p>
                <div className="mt-3 flex gap-4">
                  <button 
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-1 text-xs ${liked[comment.id] ? 'text-[#1D9E6F] dark:text-[#2EE59D]' : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'}`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button 
                    onClick={() => handleShare(comment.id)}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Share className="w-4 h-4" />
                    <span>{comment.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 