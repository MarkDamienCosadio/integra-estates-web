import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const header = document.querySelector('.main-header-module__hE-5va__top') as HTMLElement | null

    const getScrollY = () => {
      return (
        window.pageYOffset ||
        (document.scrollingElement ? document.scrollingElement.scrollTop : 0) ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      )
    }

    const applySolid = (nextSolid: boolean) => {
      if (!header) return
      setSolid(nextSolid)
      header.classList.toggle('header--solid', nextSolid)
      header.setAttribute('data-solid', String(nextSolid))
      const solidColor = '#1b1b1b'
      header.style.background = nextSolid ? solidColor : 'transparent'
      header.style.backgroundColor = nextSolid ? solidColor : 'transparent'
      header.style.boxShadow = 'none'
    }

    const update = () => {
      if (!header) return
      const section = document.querySelector('.content-with-video-module___A_Jma__section') as HTMLElement | null
      const headerHeight = header.offsetHeight || 0
      const scrollY = getScrollY()
      let nextSolid = false
      if (section) {
        const rect = section.getBoundingClientRect()
        // Become solid when the section's top reaches the top of the header
        nextSolid = rect.top <= headerHeight
        console.debug('Header update (section top <= header)', {
          scrollY,
          headerHeight,
          sectionTop: rect.top,
          sectionBottom: rect.bottom,
          nextSolid,
        })
      } else {
        // Fallback: if the section is missing, use minimal behavior
        nextSolid = scrollY > 0
        console.debug('Header update (fallback no section)', { scrollY, headerHeight, nextSolid })
      }
      applySolid(nextSolid)
    }

    update()
    // Listen to multiple potential scroll sources
    window.addEventListener('scroll', update, { passive: true })
    document.addEventListener('scroll', update, { passive: true })
    const mainEl = document.querySelector('main')
    if (mainEl) mainEl.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // Removed wheel/touch immediate solid triggers to strictly follow section-pass rule

    // Polling fallback to catch non-window scroll changes
    let rafId = 0
    let lastScroll = -1
    const poll = () => {
      const y = getScrollY()
      if (y !== lastScroll) {
        lastScroll = y
        update()
      }
      rafId = requestAnimationFrame(poll)
    }
    rafId = requestAnimationFrame(poll)

    return () => {
      window.removeEventListener('scroll', update)
      document.removeEventListener('scroll', update)
      if (mainEl) mainEl.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      // wheel/touch handlers removed
      cancelAnimationFrame(rafId)
    }
  }, [])
  return (
    <div className={`main-header-module__hE-5va__top${solid ? ' main-header-module__hE-5va__solid' : ''}`}>
      <div className="main-header-module__hE-5va__logo">
        <Link to="/" style={{ display: 'block', width: '100%', height: '100%' }}>
          <img
            src="/svg/logo-colour.svg"
            alt="Integra-Estates Logo"
            style={{ objectFit: 'contain', width: '100%', height: '100%', cursor: 'pointer' }}
          />
        </Link>
      </div>
      <div className="nav-module__v4Ym_W__nav">
        <button
          ref={buttonRef}
          className={`nav-module__XP3B7G__navButton${navOpen ? ' nav-button--active' : ''}`}
          aria-label="Open navigation"
          aria-pressed={navOpen}
          onClick={(e) => {
            const btn = buttonRef.current
            if (!btn) return
            const rect = btn.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const size = Math.max(rect.width, rect.height) * 1.8
            btn.style.setProperty('--ripple-x', `${x}px`)
            btn.style.setProperty('--ripple-y', `${y}px`)
            btn.style.setProperty('--ripple-size', `${size}px`)
            btn.classList.add('nav-button--pulse')
            setTimeout(() => btn.classList.remove('nav-button--pulse'), 500)
            setNavOpen((prev) => !prev)
          }}
        >
          <span className="alt-icon-module__X-Do-a__icon alt-icon-module__X-Do-a__enterDone" aria-hidden="true">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}