'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-black/50 rounded-xl text-center">
        <h1 className="text-2xl font-bold text-[#2EE59D] mb-4">Authentication Error</h1>
        <p className="text-gray-300 mb-6">
          {error === 'Configuration' 
            ? 'There is a problem with the server configuration.'
            : 'An error occurred during authentication.'}
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-2 bg-[#2EE59D] text-black rounded-full hover:bg-[#2EE59D]/90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
} 