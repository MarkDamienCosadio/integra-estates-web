import { useEffect, useMemo, useRef } from 'react'

export default function Hero({ onStarted, reveal }: { onStarted?: () => void, reveal?: boolean }) {
  const v0 = useRef<HTMLVideoElement | null>(null)
  const v1 = useRef<HTMLVideoElement | null>(null)
  const delays = useMemo(() => {
    const j = () => +(Math.random() * 0.15).toFixed(2)
    const h1 = 0.5 + j()        // start 0.5s after intro logo
    const p = h1 + 0.3 + j()    // paragraph starts shortly after h1
    const b1 = p + 0.4 + j()   // first button after paragraph
    const b2 = p + 0.6 + j()   // second button with delay
    return { h1, p, b1, b2 }
  }, [])

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
      try { el.currentTime = 0 } catch {}
      if (el.readyState < 2) el.load()
    }

    setup(a)
    setup(b)

    let current = a
    let next = b

    const ensurePlay = (el: HTMLVideoElement) => {
      el.play().catch(() => {})
    }

    const onEnd = () => {
      try { next.currentTime = 0 } catch {}
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
    // Notify when hero actually starts playing
    const onPlaying = () => {
      try { onStarted && onStarted() } catch {}
      a.removeEventListener('playing', onPlaying)
    }
    a.addEventListener('playing', onPlaying)
    ensurePlay(a)
    a.addEventListener('ended', onEnd)

    return () => {
      a.removeEventListener('playing', onPlaying)
      a.removeEventListener('ended', onEnd)
      b.removeEventListener('ended', onEnd)
    }
  }, [onStarted])

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
          <h1
            className={`hero-tag hero-zoom-prep${reveal ? ' hero-zoom-prep' : ''}`}
            style={reveal ? { animationDelay: `${delays.h1}s` } : undefined}
          >
            The agent you can trust
          </h1>
          <p
            className={`hero-desc hero-zoom-prep${reveal ? ' hero-zoom-prep' : ''}`}
            style={reveal ? { animationDelay: `${delays.p}s` } : undefined}
          >
            Delivering exceptional customer service, communication and results.
            <br />
            With honesty and integrity at all times.
          </p>
          <div className="hero-ctas">
            <a
              className={`cta hero-slide-prep${reveal ? ' hero-slide-prep' : ''}`}
              style={reveal ? { animationDelay: `${delays.b1}s` } : undefined}
              href="#valuation"
            >
              Book A Valuation
            </a>
            <a
              className={`cta secondary hero-slide-prep${reveal ? ' hero-slide-prep' : ''}`}
              style={reveal ? { animationDelay: `${delays.b2}s` } : undefined}
              href="https://integra-estates.com/search" target="_blank" rel="noreferrer"
            >
              Property Search
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Crossfade sequencing
// Initialize playback and manage fade between two videos
// Minimal logic: timeupdate/ended-based scheduling, no external libs
// Crossfade sequencer removed here to mirror base site’s
// simultaneous side-by-side hero videos. If you want
// the previous crossfade behavior back, I can re-enable it.