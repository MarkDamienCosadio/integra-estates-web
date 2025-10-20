import { type ReactNode, useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /**
   * Intersection threshold for the section to trigger animations.
   * Defaults to 0.4
   */
  threshold?: number
  /**
   * If true (default), animations trigger only once.
   */
  once?: boolean
  /**
   * Stagger delay (ms) between child animations when not using data-animate-delay.
   * Defaults to 120ms
   */
  staggerMs?: number
  /**
   * Optional root margin for the observer.
   */
  rootMargin?: string
}

/**
 * AnimatedSection
 *
 * A lightweight scroll-trigger wrapper. It observes its container and, when it
 * passes the provided threshold, adds `animate-active` to any descendant that has
 * one of the initial animation classes: `.animate-in`, `.animate-in-up`,
 * `.animate-in-left`, `.animate-in-right`.
 *
 * Staggering:
 * - Respects per-element `data-animate-delay` (milliseconds) when present
 * - Otherwise staggers by `staggerMs` (default 120ms) in DOM order
 *
 * Accessibility:
 * - If `prefers-reduced-motion` is enabled, elements are activated immediately
 */
export default function AnimatedSection({
  children,
  className,
  threshold = 0.4,
  once = true,
  staggerMs = 120,
  rootMargin,
}: AnimatedSectionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // Gather targets that should animate when active
    const targets: HTMLElement[] = Array.from(
      root.querySelectorAll<HTMLElement>(
        '.animate-in, .animate-in-up, .animate-in-left, .animate-in-right'
      )
    )

    if (targets.length === 0) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const activate = () => {
      targets.forEach((el, idx) => {
        // Skip if already active
        if (el.classList.contains('animate-active')) return
        const attr = el.getAttribute('data-animate-delay')
        const explicitDelay = attr ? Number(attr) : NaN
        const delay = Number.isFinite(explicitDelay) ? explicitDelay : idx * staggerMs
        window.setTimeout(() => {
          el.classList.add('animate-active')
        }, Math.max(0, delay))
      })
    }

    if (prefersReduced) {
      activate()
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            activate()
            if (once) {
              obs.disconnect()
            }
            break
          }
        }
      },
      { threshold: [threshold], rootMargin }
    )

    io.observe(root)
    return () => io.disconnect()
  }, [threshold, once, staggerMs, rootMargin])

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  )
}
