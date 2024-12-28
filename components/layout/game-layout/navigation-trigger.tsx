interface NavigationTriggerProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function NavigationTrigger({ onMouseEnter, onMouseLeave }: NavigationTriggerProps) {
  return (
    <div 
      className="absolute top-0 left-0 right-0 h-2 z-50 bg-gradient-to-b from-black/20 to-transparent"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
}