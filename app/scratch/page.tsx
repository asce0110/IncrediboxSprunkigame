'use client'

import { ScratchPlayer } from '@/components/scratch-player'

export default function ScratchPage() {
  return (
    <div className="min-h-screen bg-black/90">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#2EE59D] mb-6">
            Scratch Project Player
          </h1>
          <div className="bg-black/50 rounded-xl p-4 shadow-lg shadow-[#2EE59D]/10">
            <ScratchPlayer 
              projectId="1113175517"
              width={485}
              height={402}
            />
          </div>
        </div>
      </div>
    </div>
  )
}