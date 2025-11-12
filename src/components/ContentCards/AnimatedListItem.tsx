'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks'

interface AnimatedListItemProps {
  index: number
  children: React.ReactNode
  className?: string
}

/**
 * One animated <li> that reveals when it first enters the viewport.
 * - If user prefers reduced motion: shows immediately, no animation.
 * - If any part of the item is visible (even partially), it will reveal.
 * - On-scroll reveal uses 50% of the base delay used for initial loading stagger.
 */
const AnimatedListItem = ({ index, children, className }: AnimatedListItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null)
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Any intersection at all (even partial) should count
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0, // any pixel visible is enough
      },
    )

    observer.observe(node)
    return () => {
      observer.unobserve(node)
      observer.disconnect()
    }
  }, [prefersReducedMotion])

  // Base delay use for initial load
  const baseDelayMs = Math.min(index, 10) * 70

  // After loading / on-scroll: use 50% of base delay
  const effectiveDelayMs = visible ? baseDelayMs * 0.5 : 0

  return (
    <li
      ref={ref}
      style={{
        transitionDelay: prefersReducedMotion ? '0ms' : `${effectiveDelayMs}ms`,
      }}
      className={`
        ${className ?? ''}
        will-change-transform
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
    >
      {children}
    </li>
  )
}

export default AnimatedListItem
