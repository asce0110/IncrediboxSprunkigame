'use client'

import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { GithubIcon, ThumbsUp, Share2 } from 'lucide-react'

interface Comment {
  id: string
  content: string
  createdAt: string
  user: {
    name: string
    image: string
  }
  location: string
  likes: number
  shares: number
  likedBy: string[]
}

export function Comments() {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingComments, setIsLoadingComments] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    setIsLoadingComments(true)
    setError('')
    try {
      const response = await fetch('/api/comments')
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      const data = await response.json()
      setComments(data)
    } catch (error) {
      console.error('Failed to fetch comments:', error)
      setError('Failed to load comments. Please try again later.')
    } finally {
      setIsLoadingComments(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim() || !session || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: comment }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Server response:', response.status, errorText)
        throw new Error(`Failed to post comment: ${response.status} ${errorText}`)
      }

      const newComment = await response.json()
      setComments(prev => [newComment, ...prev])
      setComment('')
    } catch (error) {
      console.error('Full error details:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const handleAction = async (commentId: string, action: 'like' | 'share') => {
    if (!session) {
      signIn('github')
      return
    }

    if (action === 'like') {
      try {
        const response = await fetch('/api/comments', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ commentId, action }),
        })

        if (!response.ok) {
          throw new Error('Failed to update comment')
        }

        const updatedComment = await response.json()
        setComments(prev =>
          prev.map(comment =>
            comment.id === commentId ? updatedComment : comment
          )
        )
      } catch (error) {
        console.error('Failed to like comment:', error)
      }
    } else if (action === 'share') {
      const comment = comments.find(c => c.id === commentId)
      if (!comment) return

      // Create simple formatted share content
      const shareText = `💬 Shared from Incredibox Sprunki Mod

"${comment.content}"

Posted by ${comment.user.name}
From: ${comment.location}
${new Date(comment.createdAt).toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}

Join our community at ${window.location.origin}`

      // Set the share content to the comment input
      setComment(shareText)

      try {
        const response = await fetch('/api/comments', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ commentId, action }),
        })

        if (!response.ok) {
          throw new Error('Failed to update share count')
        }

        const updatedComment = await response.json()
        setComments(prev =>
          prev.map(comment =>
            comment.id === commentId ? updatedComment : comment
          )
        )
      } catch (error) {
        console.error('Failed to share comment:', error)
      }
    }
  }

  return (
    <div className="p-6 bg-black/50 rounded-xl">
      <h2 className="text-2xl font-semibold text-[#2EE59D] mb-6">Sprunked Community</h2>
      
      {/* Comments list */}
      {isLoadingComments ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#2EE59D]"></div>
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-400">{error}</p>
          <button
            onClick={fetchComments}
            className="mt-4 px-4 py-2 text-sm text-[#2EE59D] hover:underline"
          >
            Try again
          </button>
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="space-y-6 mb-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 bg-black/30 p-4 rounded-xl">
              <img
                src={comment.user.image}
                alt={comment.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-[#2EE59D]">{comment.user.name}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                  {comment.location && (
                    <span className="text-sm text-gray-500">
                      from {comment.location}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-3 font-mono text-sm leading-relaxed">{comment.content}</p>
                <div className="flex gap-6">
                  <button
                    onClick={() => handleAction(comment.id, 'like')}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      session && comment.likedBy.includes(session.user?.email || '')
                        ? 'text-[#2EE59D]'
                        : 'text-gray-400 hover:text-[#2EE59D]'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => handleAction(comment.id, 'share')}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#2EE59D] transition-colors"
                    title="Share this comment"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{comment.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Login and comment input section */}
      {!session ? (
        <div className="flex flex-col items-center gap-4 p-6 bg-black/30 rounded-xl">
          <p className="text-gray-400">Sign in with GitHub to join the discussion</p>
          <button
            onClick={() => signIn('github')}
            className="flex items-center gap-2 px-6 py-2 bg-[#2EE59D] text-black rounded-full hover:bg-[#2EE59D]/90 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-start gap-4">
              <img
                src={session.user?.image || ''}
                alt={session.user?.name || ''}
                className="w-10 h-10 rounded-full"
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="flex-1 p-4 bg-black/30 rounded-xl text-gray-200 placeholder-gray-500 resize-none h-48 focus:outline-none focus:ring-2 focus:ring-[#2EE59D]/50 font-mono text-sm leading-relaxed"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => signOut()}
                className="text-gray-400 hover:text-[#2EE59D] transition-colors"
              >
                Sign out
              </button>
              <button
                type="submit"
                disabled={!comment.trim() || isLoading}
                className="px-6 py-2 bg-[#2EE59D] text-black rounded-full hover:bg-[#2EE59D]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Posting...' : 'Post Comment'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
} 