import { useEffect, useRef } from 'react'

export default function Hero() {
  const v0 = useRef<HTMLVideoElement | null>(null)
  const v1 = useRef<HTMLVideoElement | null>(null)

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
    ensurePlay(a)
    a.addEventListener('ended', onEnd)

    return () => {
      a.removeEventListener('ended', onEnd)
      b.removeEventListener('ended', onEnd)
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
          <h1 className="hero-tag">The agent you can trust</h1>
          <p className="hero-desc">
            Delivering exceptional customer service, communication and results.
            <br />
            With honesty and integrity at all times.
          </p>
          <div className="hero-ctas">
            <a className="cta" href="#valuation">Book A Valuation</a>
            <a className="cta secondary" href="https://integra-estates.com/search" target="_blank" rel="noreferrer">
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