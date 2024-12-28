interface GameCardContentProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function GameCardContent({ title, description, children }: GameCardContentProps) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#2EE59D] mb-2 line-clamp-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>
      {children}
    </div>
  )
}