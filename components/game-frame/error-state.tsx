interface ErrorStateProps {
  message: string
  height: number | string
}

export function ErrorState({ message, height }: ErrorStateProps) {
  return (
    <div 
      className="relative w-full bg-black/50 rounded-lg"
      style={{ height }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-red-500">{message}</div>
      </div>
    </div>
  )
}