'use client'

import { backToTop, useIsBottom, useIsTop } from '@zl-asica/react'
import { LuArrowUp } from 'react-icons/lu'

const BackToTop = () => {
  const isVisible = !useIsTop(150)
  const isBottom = useIsBottom(100)

  return (
    <button
      type="button"
      onClick={backToTop()}
      className={`transition-all-300
        ${isVisible ? 'opacity-100' : 'opacity-0'} text-background
        fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg hover:scale-110 md:right-16 lg:right-20 xl:right-[calc((100vw-1280px)/2+10px)]
        ${isBottom ? 'bottom-12 scale-125' : ''}`}
      aria-label="Back to Top"
      hidden={!isVisible}
      disabled={!isVisible}
      aria-hidden={!isVisible}
    >
      <LuArrowUp size={24} strokeWidth={3} />
    </button>
  )
}

export default BackToTop
