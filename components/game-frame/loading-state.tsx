interface LoadingStateProps {
  height: number | string
}

export function LoadingState({ height }: LoadingStateProps) {
  return (
    <div 
      className="relative w-full bg-black/50 rounded-lg"
      style={{ height }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[#2EE59D] animate-pulse">Loading game...</div>
      </div>
    </div>
  )
}