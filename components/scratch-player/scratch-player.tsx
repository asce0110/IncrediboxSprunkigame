'use client'

import { useScratchPlayer } from './use-scratch-player'
import { LoadingState } from './loading-state'
import { ErrorState } from './error-state'

export function ScratchPlayer({ 
  projectId,
  width = 485,
  height = 402
}: {
  projectId: string
  width?: number | string
  height?: number | string
}) {
  const { isLoading, error, handleLoad, handleError } = useScratchPlayer()

  if (error) {
    return <ErrorState message={error} height={height} />
  }

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {isLoading && <LoadingState height={height} />}
      <iframe 
        src={`https://scratch.mit.edu/projects/${projectId}/embed`}
        width={width}
        height={height}
        style={{ 
          border: 'none',
          backgroundColor: 'transparent' 
        }}
        onLoad={handleLoad}
        onError={() => handleError('Failed to load Scratch project')}
      />
    </div>
  )
}