import { useEffect, useRef, useState } from 'react'
// @ts-expect-error: framer-motion ESM types mismatch with tsconfig
import { motion } from 'framer-motion'

export default function Hero({ onStarted, introComplete }: { onStarted?: () => void; introComplete?: boolean }) {
  const v0 = useRef<HTMLVideoElement | null>(null)
  const v1 = useRef<HTMLVideoElement | null>(null)
  const [animationsReady, setAnimationsReady] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const a = v0.current
    const b = v1.current
    if (!a || !b) return

    const setup = (el: HTMLVideoElement) => {
      el.muted = true
      el.setAttribute('muted', '')
      el.playsInline = true
      el.setAttribute('playsinline', '')
      el.preload = 'auto'
      try { el.currentTime = 0 } catch { void 0 }
      if (el.readyState < 2) el.load()
    }

    setup(a)
    setup(b)

    let current = a
    let next = b

    const ensurePlay = (el: HTMLVideoElement) => {
      el.play().catch(() => void 0)
    }

    const onEnd = () => {
      try { next.currentTime = 0 } catch { void 0 }
      ensurePlay(next)
      current.classList.remove('visible')
      current.classList.add('hidden')
      next.classList.remove('hidden')
      next.classList.add('visible')
      current.removeEventListener('ended', onEnd)
      const tmp = current
      current = next
      next = tmp
      current.addEventListener('ended', onEnd)
    }

    // Start with first video visible
    a.classList.add('visible')
    b.classList.add('hidden')
    
        ensurePlay(a)
        a.addEventListener('ended', onEnd)

        // Notify parent that hero has started
        try { if (onStarted) { onStarted() } } catch { void 0 }

        return () => {
          a.removeEventListener('ended', onEnd)
          b.removeEventListener('ended', onEnd)
        }
  }, [onStarted])

  // Start animations when intro animation is completely finished
  useEffect(() => {
    if (introComplete) {
      console.log('Intro animation finished, starting hero animations')
      setAnimationsReady(true)
    }
  }, [introComplete])

  // Listen for cross-component open event from Services to open the valuation modal
  useEffect(() => {
    const onOpenValuationModal = () => setShowWelcome(true)
    window.addEventListener('openValuationModal', onOpenValuationModal as EventListener)
    return () => {
      window.removeEventListener('openValuationModal', onOpenValuationModal as EventListener)
    }
  }, [])

  return (
    <section className="hero section-1-module__KWVB3q__section">
      <video
        ref={v0}
        className="hero__video visible"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/background/home-section-1-1.mp4" type="video/mp4" />
      </video>
      <video
        ref={v1}
        className="hero__video hidden"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/background/home-section-1-2.mp4" type="video/mp4" />
      </video>
      <div className="hero__overlay">
        <div className="hero-content">
          {/* animationsReady debug removed */}
          <motion.h1 
            className="hero-tag"
            initial={{ opacity: 0, x: -100 }}
            animate={animationsReady ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            The agent you can trust
          </motion.h1>
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, x: 100 }}
            animate={animationsReady ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Delivering exceptional customer service, communication and results.
            <br />
            With honesty and integrity at all times.
          </motion.p>
          <div className="hero-ctas">
            {/* button animationsReady debug removed */}
            <motion.a 
              className="cta" 
              href="#valuation"
              initial={{ opacity: 0, y: 50 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={(e: { preventDefault: () => void; }) => { e.preventDefault(); setShowWelcome(true) }}
            >
              <div className="section-1-module__KWVB3q__btn">Book A Valuation</div>
            </motion.a>
            <motion.a 
              className="cta secondary" 
              href="https://integra-estates.com/search" 
              target="_blank" 
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Property Search
            </motion.a>
          </div>
        </div>
      </div>
      {showWelcome && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Welcome"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            padding: '1rem'
          }}
        >
          <div
            className="modal-content"
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(40,40,40,0.95) 100%)',
              color: '#fff',
              padding: '1.25rem',
              borderRadius: '0.9rem',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)',
              width: '100%',
              maxWidth: '640px',
              maxHeight: '90vh',
              overflowY: 'auto',
              textAlign: 'left'
            }}
          >
            <div className="modal-header" style={{ marginBottom: '1rem', textAlign: 'center' }}>
              <h2 style={{ 
                margin: 0, 
                fontSize: '1.75rem', 
                fontWeight: '700',
                background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}>Request A Valuation</h2>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>If you wish to obtain a valuation of your property, we kindly invite you to reach out to us through either of the following means of communication:</p>
            </div>
            <div className="contact-info" style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <a href="tel:02038700000" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: '#fff', 
                  textDecoration: 'none',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                    borderRadius: '50%',
                    padding: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>Phone</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '500' }}>0203 870 00 00</p>
                  </div>
                </a>
                <a href="mailto:hello@integra-estates.com" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  color: '#fff', 
                  textDecoration: 'none',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    borderRadius: '50%',
                    padding: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.25rem' }}>Email</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '500' }}>hello@integra-estates.com</p>
                  </div>
                </a>
              </div>
            </div>
             <div className="form-divider" style={{ 
               textAlign: 'center', 
               margin: '1rem 0',
               position: 'relative'
             }}>
               <div style={{
                 position: 'absolute',
                 top: '50%',
                 left: 0,
                 right: 0,
                 height: '1px',
                 background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                 transform: 'translateY(-50%)'
               }}></div>
               <p style={{ 
                 background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(40,40,40,0.95) 100%)',
                 padding: '0 1rem',
                 margin: 0,
                 fontSize: '0.85rem',
                 color: 'rgba(255,255,255,0.8)',
                 position: 'relative'
               }}>Or fill out the form below and we'll get back to you</p>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="form-field">
                <label htmlFor="firstName" style={{ 
                  display: 'block', 
                  marginBottom: '0.35rem', 
                  fontSize: '0.85rem', 
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.9)'
                }}>First Name</label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(255,255,255,0.5)',
                    zIndex: 1
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="e.g. John"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                      borderRadius: '0.6rem',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="lastName" style={{ 
                  display: 'block', 
                  marginBottom: '0.35rem', 
                  fontSize: '0.85rem', 
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.9)'
                }}>Last Name</label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(255,255,255,0.5)',
                    zIndex: 1
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <input 
                    id="lastName"
                    name="lastName"
                    type="text" 
                    placeholder="e.g. Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                      borderRadius: '0.6rem',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </div>
              </div>
            </div>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="form-field">
                <label htmlFor="email" style={{ 
                  display: 'block', 
                  marginBottom: '0.35rem', 
                  fontSize: '0.85rem', 
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.9)'
                }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(255,255,255,0.5)',
                    zIndex: 1
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="e.g. name@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                      borderRadius: '0.6rem',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="phone" style={{ 
                  display: 'block', 
                  marginBottom: '0.35rem', 
                  fontSize: '0.85rem', 
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.9)'
                }}>Phone Number</label>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'rgba(255,255,255,0.5)',
                    zIndex: 1
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="e.g. +44 7123 456789"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                      borderRadius: '0.6rem',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </div>
              </div>
            </div>
             <div className="form-field" style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{ 
                display: 'block', 
                marginBottom: '0.35rem', 
                fontSize: '0.85rem', 
                fontWeight: '500',
                color: 'rgba(255,255,255,0.9)'
              }}>Message</label>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '0.75rem',
                  color: 'rgba(255,255,255,0.5)',
                  zIndex: 1
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                </div>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your property valuation needs..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                    borderRadius: '0.6rem',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(10px)',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
             <div className="privacy-policy" style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '0.75rem', 
              marginBottom: '1rem',
              padding: '0.75rem',
              borderRadius: '0.75rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ 
                position: 'relative',
                marginTop: '0.125rem'
              }}>
                <input 
                  type="checkbox" 
                  id="privacy-policy"
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '0.25rem',
                    border: '2px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    accentColor: '#3b82f6'
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="privacy-policy" style={{ 
                  fontSize: '0.9rem', 
                  color: 'rgba(255,255,255,0.9)',
                  cursor: 'pointer',
                  lineHeight: '1.4'
                }}>
                  I have read and agree to the{' '}
                  <a 
                    href="/pdfs/privacy-policy.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#3b82f6', 
                      textDecoration: 'underline',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
             <div className="form-buttons" style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              justifyContent: 'flex-end',
              flexWrap: 'wrap'
            }}>
              <button 
                type="button" 
                onClick={() => setShowWelcome(false)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.6rem',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  minWidth: '100px'
                }}
              >
                Cancel
              </button>
              <button 
                type="submit"
                style={{
                  padding: '0.7rem 1.5rem',
                  borderRadius: '0.6rem',
                  border: 'none',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  minWidth: '110px'
                }}
              >
                Submit Request
              </button>
            </div>
             <button
              className="modal-close"
              onClick={() => setShowWelcome(false)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                color: '#fff',
                fontSize: '1.25rem',
                cursor: 'pointer',
                padding: '0.5rem',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

// Crossfade sequencing
// Initialize playback and manage fade between two videos
// Minimal logic: timeupdate/ended-based scheduling, no external libs
// Crossfade sequencer removed here to mirror base site’s
// simultaneous side-by-side hero videos. If you want
// the previous crossfade behavior back, I can re-enable it.