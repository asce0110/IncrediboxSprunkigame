import { useState, useCallback } from 'react'

export function useNavigationState() {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = useCallback(() => {
    setShowNav(prev => !prev)
  }, [])

  return {
    showNav,
    setShowNav,
    toggleNav
  }
}