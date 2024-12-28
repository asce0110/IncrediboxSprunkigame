interface UnderlineProps {
  children: React.ReactNode
  width?: string
}

export function Underline({ children, width = '33%' }: UnderlineProps) {
  return (
    <span className="relative">
      {children}
      <span 
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-[33%]" 
        style={{ '--hover-width': width } as any}
      />
    </span>
  )
}