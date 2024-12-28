import { useState, useCallback } from 'react'

export function useScratchPlayer() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    setError(null)
  }, [])

  const handleError = useCallback((message: string) => {
    setIsLoading(false)
    setError(message)
  }, [])

  return {
    isLoading,
    error,
    handleLoad,
    handleError
  }
}