'use client'

import { useEffect } from 'react'
import { useGameLoader } from './use-game-loader'
import { LoadingState } from './loading-state'
import { ErrorState } from './error-state'
import type { GameFrameProps } from './types'

export function GameFrame({ url, height = 402 }: GameFrameProps) {
  const { isLoading, error, handleLoad, handleError } = useGameLoader()

  useEffect(() => {
    if (!url) {
      handleError('No game URL provided')
    }
  }, [url, handleError])

  if (error) {
    return <ErrorState message={error} height={height} />
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {isLoading && <LoadingState height={height} />}
      <iframe
        src={url}
        style={{ width: '100%', height, border: 'none' }}
        onLoad={handleLoad}
        onError={() => handleError()}
      />
    </div>
  )
}