import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ScrollHint from './ScrollHint'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [overlayPhase, setOverlayPhase] = useState<'expanding' | 'covering' | 'revealing' | 'exiting' | 'hidden'>('hidden')
  const [isClosing, setIsClosing] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [navLinksVisible, setNavLinksVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const closeNav = () => {
    console.log('CLOSE NAV CALLED')
    if (isClosing) return // Prevent multiple close animations
    
    setIsClosing(true)
    
    // Start the green overlay exit animation (right to left)
    setShowOverlay(true)
    setOverlayPhase('exiting')
    
    // Immediately hide nav menu when green overlay covers the page
    setTimeout(() => {
      setNavOpen(false)
      setNavLinksVisible(false) // Reset nav links animation
    }, 400) // Hide nav menu when overlay covers the page (halfway through animation)
    
    // Wait for exit animation to complete, then hide overlay and reset all states
    setTimeout(() => {
      setShowOverlay(false)
      setOverlayPhase('hidden')
      setIsClosing(false)
      setIsOpening(false) // Reset opening state
      
      // Reset nav button state for next opening animation
      if (buttonRef.current) {
        buttonRef.current.classList.remove('nav-button--pulse')
        // Reset any inline styles that might have been set
        buttonRef.current.style.removeProperty('--ripple-x')
        buttonRef.current.style.removeProperty('--ripple-y')
        buttonRef.current.style.removeProperty('--ripple-size')
      }
    }, 800) // Match CSS animation duration
  }

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
        {!navOpen ? (
          <button
            ref={buttonRef}
            className="nav-module__XP3B7G__navButton"
            aria-label="Open navigation"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={(e) => {
              console.log('NAV BUTTON CLICKED - Opening nav menu')
              // Prevent multiple clicks during animation
              if (overlayPhase !== 'hidden' || isOpening || isClosing) {
                console.log('Animation blocked')
                return
              }
              
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
              
              // Start the green overlay animation sequence
              setIsOpening(true)
              setShowOverlay(true)
              setOverlayPhase('expanding')
              
              // Wait for expansion to complete
              setTimeout(() => {
                setOverlayPhase('covering')

                // Wait for covering to complete, then show nav menu immediately
                setTimeout(() => {
                  setNavOpen(true)
                  
                  // Start the reveal animation (overlay slides left to right) immediately
                  setOverlayPhase('revealing')

                  // Trigger nav links animation when green overlay starts sliding right
                  setTimeout(() => {
                    setNavLinksVisible(true)
                  }, 0) // Start nav links animation immediately when overlay starts sliding

                  // Wait for reveal to complete, then hide overlay
                  setTimeout(() => {
                    setShowOverlay(false)
                    setIsOpening(false)
                  }, 800) // Match CSS animation duration
                }, 200) // Wait for covering to complete
              }, 600) // Match CSS expansion duration
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
        ) : (
          <button
            ref={buttonRef}
            className="nav-module__XP3B7G__navButton nav-close-btn"
            aria-label="Close navigation"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={closeNav}
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
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Green Overlay Animation */}
      {showOverlay && (
        <div 
          className={`nav-green-overlay nav-green-overlay--${overlayPhase}`}
        ></div>
      )}

      {/* Navigation Menu */}
      {navOpen && (
        <div className={`nav-menu-overlay ${isClosing ? 'closing' : ''}`} onClick={closeNav}>
          <div className="nav-menu-container" id="site-nav" onClick={(e) => e.stopPropagation()}>

            <div className="nav-menu-content">
              {/* Left Column - Navigation Links */}
              <div className="nav-left-column">
                <nav className="nav-links">
                  <Link to="/" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.1s' }} onClick={closeNav}>
                    Home
                  </Link>
                  <a href="https://integra-estates.com/search" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.2s' }} target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                    Property Search
                  </a>
                  <Link to="/mortgage-advice" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.3s' }} onClick={closeNav}>
                    Mortgage Advice
                  </Link>
                  <Link to="/marketing-your-property" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.4s' }} onClick={closeNav}>
                    Marketing Your Property
                  </Link>
                  <a href="https://integra-estates.com/360-tours" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.5s' }} target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                    360 Virtual Tours
                  </a>
                  <a href="https://integra-estates.com/virtual-staging" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.6s' }} target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                    Virtual Staging
                  </a>
                  <a href="https://integra-estates.com/probate-properties" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.7s' }} target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                    Probate Properties
                  </a>
                  <Link to="/why-integra-estates" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.8s' }} onClick={closeNav}>
                    Why Integra-Estates?
                  </Link>
                  <Link to="/meet-the-team" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.9s' }} onClick={closeNav}>
                    Meet the Team
                  </Link>
                  <a href="https://integra-estates.com/community-engagement" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '1.0s' }} target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                    Community Engagement
                  </a>
                </nav>
                
                {/* Partner Logos */}
                <div className="nav-partner-logos">
                  <div className={`nav-partner-logo ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '1.1s' }}>
                    <img src="/svg/prime-location-white.svg" alt="PrimeLocation.com" />
                  </div>
                  <div className={`nav-partner-logo ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '1.3s' }}>
                    <img src="/svg/zoopla-white.svg" alt="Zoopla" />
                  </div>
                  <div className={`nav-partner-logo ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '1.5s' }}>
                    <img src="/svg/rightmove-white.svg" alt="Rightmove" />
                  </div>
                </div>
              </div>

              {/* Right Column - Branding */}
              <div className="nav-right-column">
                <div className={`nav-logo ${navLinksVisible ? 'nav-right--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.5s' }}>
                  <img src="/svg/logo-colour.svg" alt="INTEGRA - ESTATES" />
                </div>

                <div className={`nav-contact-section ${navLinksVisible ? 'nav-right--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.6s' }}>
                  <h3 className="nav-contact-title">Contact Us</h3>
                  <div className="nav-contact-info">
                    <div className="nav-contact-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
-                      <span>0203 870 00 00</span>
+                      <a href="tel:02038700000">0203 870 00 00</a>
                    </div>
                    <div className="nav-contact-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
-                      <span>hello@integra-estates.com</span>
+                      <a href="mailto:hello@integra-estates.com">hello@integra-estates.com</a>
                    </div>
                  </div>

                  <div className={`nav-social-section ${navLinksVisible ? 'nav-right--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.7s' }}>
                    <h4 className="nav-social-title">Follow Us</h4>
                    <div className="nav-social-icons">
                      <a href="https://www.facebook.com/integraestates" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                          <path fillRule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path>
                        </svg>
                      </a>
                      <a href="https://twitter.com/IntegraEstates" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/integraestates/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                          <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                          <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* ScrollHint widget in nav menu */}
      {navOpen && <ScrollHint />}
    </div>
  )
}