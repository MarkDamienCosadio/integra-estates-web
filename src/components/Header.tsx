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
                  <Link to="/360-virtual-tour" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.5s' }} onClick={closeNav}>
                    360 Virtual Tours
                  </Link>
                  <Link to="/virtual-staging" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.6s' }} onClick={closeNav}>
                    Virtual Staging
                  </Link>
                  <Link to="/probate-properties" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.7s' }} onClick={closeNav}>
                    Probate Properties
                  </Link>
                  <Link to="/why-integra-estates" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.8s' }} onClick={closeNav}>
                    Why Integra-Estates?
                  </Link>
                  <Link to="/meet-the-team" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '0.9s' }} onClick={closeNav}>
                    Meet the Team
                  </Link>
                  <Link to="/community-engagement" className={`nav-link ${navLinksVisible ? 'nav-link--animate' : 'nav-link--hidden'}`} style={{ animationDelay: '1.0s' }} onClick={closeNav}>
                    Community Engagement
                  </Link>
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
                  <h3 className="nav-contact-title">Get In Touch</h3>
                  <div className="contact-info-module__q5qnla__contactInfo">
                    <a href="tel:02038700000" className="contact-info-module__q5qnla__info contact-info-module__q5qnla__infoAnimate" style={{ animationDelay: '400ms' }}>
                      <span className="contact-info-module__q5qnla__infoIcon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"></path>
                        </svg>
                      </span>
                      0203 870 00 00
                    </a>
                    <a href="mailto:hello@integra-estates.com" className="contact-info-module__q5qnla__info contact-info-module__q5qnla__infoAnimate" style={{ animationDelay: '800ms' }}>
                      <span className="contact-info-module__q5qnla__infoIcon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <rect width="416" height="320" x="48" y="96" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="40" ry="40"></rect>
                          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l144 112 144-112"></path>
                        </svg>
                      </span>
                      hello@integra-estates.com
                    </a>
                    <a href="https://wa.me/447818205098" target="_blank" rel="noreferrer" className="contact-info-module__q5qnla__info contact-info-module__q5qnla__infoAnimate" style={{ animationDelay: '1200ms' }}>
                      <span className="contact-info-module__q5qnla__infoIcon">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"></path>
                        </svg>
                      </span>
                      WhatsApp
                    </a>
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