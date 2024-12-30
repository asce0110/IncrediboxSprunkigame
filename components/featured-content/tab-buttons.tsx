import { Gamepad2, Video } from 'lucide-react'

export interface TabButtonsProps {
  activeTab: 'gaming' | 'videos'
  onChange: (tab: 'gaming' | 'videos') => void
}

export function TabButtons({ activeTab, onChange }: TabButtonsProps) {
  return (
    <div className="flex w-full justify-center sm:justify-start gap-4">
      <button
        onClick={() => onChange('gaming')}
        className="group relative min-w-[120px] flex-1 sm:flex-none"
      >
        {/* 不规则背景形状 - 激活状态 */}
        {activeTab === 'gaming' && (
          <>
            <div className="absolute -inset-2 sm:-inset-4 bg-[#2EE59D]/20 blur-2xl rounded-full" />
            <div className="absolute -inset-1.5 sm:-inset-3 bg-[#2EE59D]/30 blur-xl rounded-[30px] rotate-6" />
            <div className="absolute -inset-1 sm:-inset-2 bg-[#2EE59D]/40 blur-lg rounded-[20px] -rotate-3" />
            <div className="absolute inset-0 bg-[#2EE59D] blur-md rounded-2xl" />
          </>
        )}
        
        {/* 悬停状态的发光效果 */}
        <div className={`absolute -inset-2 sm:-inset-4 bg-[#2EE59D]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          activeTab === 'gaming' ? 'hidden' : ''
        }`} />
        
        {/* 按钮内容 */}
        <div className={`relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 rounded-xl transition-all duration-500 w-full ${
          activeTab === 'gaming'
            ? 'bg-[#2EE59D] text-black font-medium'
            : 'text-[#2EE59D] hover:text-white'
        }`}>
          <Gamepad2 className={`w-5 h-5 transition-all duration-300 ${
            activeTab === 'gaming' ? 'scale-110' : 'group-hover:scale-110'
          }`} />
          <span className="text-base sm:text-lg whitespace-nowrap">Gaming</span>
        </div>
      </button>

      <button
        onClick={() => onChange('videos')}
        className="group relative min-w-[120px] flex-1 sm:flex-none"
      >
        {/* 不规则背景形状 - 激活状态 */}
        {activeTab === 'videos' && (
          <>
            <div className="absolute -inset-2 sm:-inset-4 bg-[#2EE59D]/20 blur-2xl rounded-full" />
            <div className="absolute -inset-1.5 sm:-inset-3 bg-[#2EE59D]/30 blur-xl rounded-[30px] rotate-6" />
            <div className="absolute -inset-1 sm:-inset-2 bg-[#2EE59D]/40 blur-lg rounded-[20px] -rotate-3" />
            <div className="absolute inset-0 bg-[#2EE59D] blur-md rounded-2xl" />
          </>
        )}
        
        {/* 悬停状态的发光效果 */}
        <div className={`absolute -inset-2 sm:-inset-4 bg-[#2EE59D]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          activeTab === 'videos' ? 'hidden' : ''
        }`} />
        
        {/* 按钮内容 */}
        <div className={`relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 rounded-xl transition-all duration-500 w-full ${
          activeTab === 'videos'
            ? 'bg-[#2EE59D] text-black font-medium'
            : 'text-[#2EE59D] hover:text-white'
        }`}>
          <Video className={`w-5 h-5 transition-all duration-300 ${
            activeTab === 'videos' ? 'scale-110' : 'group-hover:scale-110'
          }`} />
          <span className="text-base sm:text-lg whitespace-nowrap">Videos</span>
        </div>
      </button>
    </div>
  )
}