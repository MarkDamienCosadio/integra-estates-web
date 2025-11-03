import { useEffect, useState, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

export default function ScrollHint() {
  // Detect whether the hero section is currently in the viewport
  const [inHeroView, setInHeroView] = useState(true)
  // Use centralized mobile detection hook
  const isMobile = useIsMobile()
  const [scrollActive, setScrollActive] = useState(false)
  const hideTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const hero = document.querySelector('.hero') as HTMLElement | null
    if (!hero) {
      // If no hero section exists, default to showing both arrows
      setInHeroView(false)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Consider hero "in view" when at least ~15% is visible
          setInHeroView(entry.isIntersecting && entry.intersectionRatio >= 0.15)
        })
      },
      { threshold: [0, 0.15, 0.5] }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  // Mobile-only: show widget while scrolling, hide shortly after scroll stops
  useEffect(() => {
    const triggerVisible = () => {
      if (!isMobile) return
      setScrollActive(true)
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current)
        hideTimerRef.current = null
      }
      hideTimerRef.current = window.setTimeout(() => {
        setScrollActive(false)
      }, 2000)
    }
    const onScroll = () => triggerVisible()
    const onTouchMove = () => triggerVisible()
    const onTouchStart = () => triggerVisible()
    const onWheel = () => triggerVisible()
    
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })
    const mainEl = document.querySelector('main')
    if (mainEl) mainEl.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('wheel', onWheel)
      if (mainEl) mainEl.removeEventListener('scroll', onScroll)
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current)
        hideTimerRef.current = null
      }
    }
  }, [isMobile])

  // When hero is in view: only display the right arrow animation
  // When other sections are in view: display both right and left
  const leftIconClass = `scroll-module__YhOxhG__icon${inHeroView ? ' scroll-module__YhOxhG__iconHidden' : ''}`
  const rightIconClass = `scroll-module__YhOxhG__icon`

  const leftLineClass = `line-module__2PkNtW__line line-module__2PkNtW__left${inHeroView ? '' : ' line-module__2PkNtW__active'}`
  const rightLineClass = `line-module__2PkNtW__line line-module__2PkNtW__right line-module__2PkNtW__active`

  // Click handlers: right arrow scrolls down 100px, left arrow scrolls up 100px
  const scrollByAmount = (delta: number) => {
    try {
      window.scrollBy({ top: delta, behavior: 'smooth' })
    } catch {
      window.scrollTo({ top: window.scrollY + delta })
    }
  }
  const onLeftClick = () => scrollByAmount(-100)
  const onRightClick = () => scrollByAmount(100)

  const baseWidgetClass = 'scroll-module__YhOxhG__widget scroll-module__YhOxhG__fixed'
  const visibilityClass = isMobile ? (scrollActive ? ' is-visible' : ' is-hidden') : ' is-visible'

  return (
    <div
      className={`${baseWidgetClass}${visibilityClass}`}
      aria-label="Scroll"
      aria-hidden={isMobile && !scrollActive}
    >
      {/* Left icon: replaced with provided SVG, behavior unchanged */}
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        aria-hidden="true"
        className={leftIconClass}
        role="button"
        tabIndex={0}
        onClick={onLeftClick}
        aria-label="Scroll up"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 6l-6 6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Left line container rendered only when not in hero view */}
      {!inHeroView && (
        <div className="line-module__2PkNtW__container">
          <div className={leftLineClass}></div>
        </div>
      )}

      <p className="scroll-module__YhOxhG__text">Scroll</p>

      <div className="line-module__2PkNtW__container">
        <div className={rightLineClass}></div>
      </div>

      {/* Right icon: replaced with provided SVG, behavior unchanged */}
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        aria-hidden="true"
        className={rightIconClass}
        role="button"
        tabIndex={0}
        onClick={onRightClick}
        aria-label="Scroll down"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}