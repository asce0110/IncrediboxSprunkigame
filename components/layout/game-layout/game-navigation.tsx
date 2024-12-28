'use client'

import { useCallback } from 'react'
import { NavigationTrigger } from './navigation-trigger'
import { HomeButton } from './home-button'
import { useNavigationState } from './use-navigation-state'

export function GameNavigation() {
  const { showNav, setShowNav } = useNavigationState()
  
  const handleMouseEnter = useCallback(() => setShowNav(true), [setShowNav])
  const handleMouseLeave = useCallback(() => setShowNav(false), [setShowNav])

  return (
    <>
      <NavigationTrigger 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <HomeButton 
        isVisible={showNav}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  )
}