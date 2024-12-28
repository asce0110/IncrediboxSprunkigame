interface ErrorStateProps {
  message: string
  height?: number | string
}

export function ErrorState({ message, height = 402 }: ErrorStateProps) {
  return (
    <div 
      className="relative w-full bg-black/50 rounded-lg flex items-center justify-center"
      style={{ height }}
    >
      <div className="text-red-500 text-center p-4">
        <p className="font-semibold mb-2">Failed to load Scratch project</p>
        <p className="text-sm opacity-80">{message}</p>
      </div>
    </div>
  )
}