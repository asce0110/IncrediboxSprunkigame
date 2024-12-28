'use client'

import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'default' | 'lg'
}

export function GradientButton({ children, className, size = 'default', ...props }: GradientButtonProps) {
  return (
    <div className="group relative inline-block">
      <div className="absolute -inset-[6px] bg-[#2EE59D]/15 blur-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-[4px] bg-[#2EE59D]/20 blur-[1.5px] rounded-xl rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-[2px] bg-[#2EE59D]/25 blur-[1px] rounded-xl -rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <button 
        className={cn(
          "relative bg-[#2EE59D] text-black font-semibold hover:bg-[#2EE59D]/90",
          "transform transition-all duration-500",
          "rounded-xl",
          "inline-flex items-center justify-center",
          "hover:scale-105",
          size === 'lg' && "text-lg h-12 px-8",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </div>
  )
}