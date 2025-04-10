'use client'

import { useScrollPosition } from '@zl-asica/react'

const ScrollPositionBar = () => {
  const scrollProgress = useScrollPosition(undefined, true)
  return (
    <div
      className="fixed left-0 top-0 z-60 h-[3px] w-full bg-primary-300 transition-all-500"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden
    />
  )
}

export default ScrollPositionBar
