'use client'

import { X } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  title: string
  onClose: () => void
}

export function VideoPlayer({ src, title, onClose }: VideoPlayerProps) {
  return (
    <div className="video-container relative bg-black rounded-xl overflow-hidden">
      {/* Glowing border */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-[#2EE59D] via-[#2EE59D]/50 to-[#2EE59D] -z-10 blur-sm opacity-50" />

      {/* Video */}
      <div className="relative aspect-video">
        <iframe
          src={`${src}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Title bar */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
    </div>
  )
} 