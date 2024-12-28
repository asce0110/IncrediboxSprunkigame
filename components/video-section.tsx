'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { VideoPlayer } from './ui/video-player'

interface VideoCard {
  title: string
  videoId: string
  thumbnail: string
}

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null)
  const videos: VideoCard[] = [
    {
      title: 'Drop Game Tutorial',
      videoId: 'E21UVchYFag',
      thumbnail: 'https://img.youtube.com/vi/E21UVchYFag/maxresdefault.jpg'
    },
    {
      title: 'Sprunki Mod Gameplay',
      videoId: 'EXAMPLE1',
      thumbnail: 'https://959c13b.webp.li/public/images/sprunki.jpg'
    },
    {
      title: 'Cool As Ice Preview',
      videoId: 'EXAMPLE2',
      thumbnail: 'https://959c13b.webp.li/public/images/coolasice.jpg'
    },
    {
      title: 'Behind the Scenes',
      videoId: 'EXAMPLE4',
      thumbnail: 'https://959c13b.webp.li/public/images/card4.jpg'
    }
  ]

  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2EE59D] mb-8">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedVideo(video)}
                className="group relative cursor-pointer text-left"
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-[#2EE59D] via-[#2EE59D]/50 to-[#2EE59D] rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Card container */}
                <div className="relative bg-black/90 rounded-2xl overflow-hidden">
                  {/* Thumbnail */}
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Play button glow */}
                        <div className="absolute inset-0 bg-[#2EE59D]/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="relative w-16 h-16 rounded-full bg-[#2EE59D]/10 border border-[#2EE59D]/50 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                          <div className="absolute inset-0 bg-[#2EE59D]/20 rounded-full animate-pulse" />
                          <Play className="w-8 h-8 text-[#2EE59D] transform translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#2EE59D] group-hover:text-white transition-colors duration-300">
                      {video.title}
                    </h3>
                  </div>
                  
                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2EE59D]/30 via-[#2EE59D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl">
            <VideoPlayer
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
              title={selectedVideo.title}
              onClose={() => setSelectedVideo(null)}
            />
          </div>
        </div>
      )}
    </>
  )
}