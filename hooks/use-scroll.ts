'use client'

import { useEffect, useState } from 'react'

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始化状态

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled }
} 