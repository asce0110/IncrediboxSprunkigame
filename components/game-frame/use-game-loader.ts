import { useState, useCallback } from 'react'

export function useGameLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    setError(null)
  }, [])

  const handleError = useCallback((message = 'Failed to load game') => {
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