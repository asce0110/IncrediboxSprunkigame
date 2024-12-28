'use client'

import { useState } from 'react'
import { TabButtons } from './tab-buttons'
import { GamingContent } from './gaming-content'
import { VideosContent } from './videos-content'

export function FeaturedContent() {
  const [activeTab, setActiveTab] = useState<'gaming' | 'videos'>('gaming')

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#2EE59D]">Sprunked Games</h2>
          <TabButtons activeTab={activeTab} onChange={setActiveTab} />
        </div>
        
        {activeTab === 'gaming' ? <GamingContent /> : <VideosContent />}
      </div>
    </section>
  )
}