'use client'

export default function ColorboxMustardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  )
} 