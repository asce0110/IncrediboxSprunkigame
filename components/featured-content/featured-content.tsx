'use client'

import { useState } from 'react'
import { TabButtons } from './tab-buttons'
import { GamingContent } from './gaming-content'
import { VideosContent } from './videos-content'

export function FeaturedContent() {
  const [activeTab, setActiveTab] = useState<'gaming' | 'videos'>('gaming')

  return (
    <section className="py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2EE59D] text-center sm:text-left">Sprunked Games</h2>
          <div className="w-full">
            <TabButtons activeTab={activeTab} onChange={setActiveTab} />
          </div>
        </div>
        
        {activeTab === 'gaming' ? <GamingContent /> : <VideosContent />}
      </div>
    </section>
  )
}