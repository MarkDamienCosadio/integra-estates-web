import { useEffect, useRef, useState } from 'react'
import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'

function CompareImageSlider({
  beforeSrc,
  afterSrc,
  height = 460,
  initialRatio = 0.5
}: {
  beforeSrc: string
  afterSrc: string
  height?: number
  initialRatio?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ratio, setRatio] = useState(initialRatio)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const clientX = 'touches' in e && e.touches.length ? e.touches[0].clientX : (e as MouseEvent).clientX
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
      setRatio(x / rect.width)
    }
    const onUp = () => setDragging(false)
    window.addEventListener('mousemove', onMove as any)
    window.addEventListener('touchmove', onMove as any, { passive: false })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove as any)
      window.removeEventListener('touchmove', onMove as any)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [dragging])

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    // Also update immediately on click/touch
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const clientX = 'touches' in e && (e as React.TouchEvent).touches.length
        ? (e as React.TouchEvent).touches[0].clientX
        : (e as React.MouseEvent).clientX
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
      setRatio(x / rect.width)
    }
  }

  return (
    <div
      ref={containerRef}
      className="compare-image-module__4uvXQa__container"
      style={{ width: '100%', position: 'relative', userSelect: 'none' }}
      onMouseDown={onDown}
      onTouchStart={onDown}
    >
      <div
        data-testid="container"
        style={{
          boxSizing: 'border-box',
          position: 'relative',
          width: '100%',
          height: `${height}px`,
          overflow: 'hidden',
          display: 'block',
          borderRadius: '8px',
          boxShadow:
            '10px 10px 3px -6px rgba(108, 152, 48, 1), 12px 12px 12px -14px rgba(108, 152, 48, 0.92), 14px 14px 18px -18px rgba(108, 152, 48, 0.65), 0 6px 12px rgba(0, 0, 0, 0.16)'
        }}
      >
        {/* Bottom image: Before (left side visible) */}
        <img
          alt="staging before"
          data-testid="left-image"
          src={beforeSrc}
          style={{ display: 'block', height: '100%', objectFit: 'cover', position: 'absolute', width: '100%' }}
        />

        {/* Top image: After (right side visible via left-clip) */}
        <img
          alt="staging after"
          data-testid="right-image"
          src={afterSrc}
          style={{
            display: 'block',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            clipPath: `inset(0px 0px 0px ${Math.round(ratio * 10000) / 100}% )`
          }}
        />

        {/* Handle */}
        <div
          role="slider"
          aria-label="Comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(ratio * 100)}
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            cursor: 'ew-resize',
            flexDirection: 'column',
            height: '100%',
            left: `calc(${Math.round(ratio * 10000) / 100}% - 20px)`,
            top: 0,
            width: '40px'
          }}
        >
          <div style={{ background: '#fff', boxShadow: 'rgba(0,0,0,0.2) 0 3px 1px -2px, rgba(0,0,0,0.14) 0 2px 2px 0, rgba(0,0,0,0.12) 0 1px 5px 0', flex: '0 1 auto', height: '100%', width: '2px' }} />
          <div style={{ alignItems: 'center', border: '2px solid #fff', borderRadius: '100%', boxShadow: 'rgba(0,0,0,0.2) 0 3px 1px -2px, rgba(0,0,0,0.14) 0 2px 2px 0, rgba(0,0,0,0.12) 0 1px 5px 0', boxSizing: 'border-box', display: 'flex', flex: '1 0 auto', height: '40px', justifyContent: 'center', width: '40px', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{ borderWidth: '6px', borderStyle: 'solid', borderColor: 'transparent #fff transparent transparent', height: 0, marginLeft: '-10px', marginRight: '10px', width: 0 }} />
            <div style={{ borderWidth: '6px', borderStyle: 'solid', borderColor: 'transparent transparent transparent #fff', height: 0, marginRight: '-10px', width: 0 }} />
          </div>
          <div style={{ background: '#fff', boxShadow: 'rgba(0,0,0,0.2) 0 3px 1px -2px, rgba(0,0,0,0.14) 0 2px 2px 0, rgba(0,0,0,0.12) 0 1px 5px 0', flex: '0 1 auto', height: '100%', width: '2px' }} />
        </div>

        {/* Labels */}
        <div style={{ position: 'absolute', left: 12, top: 12, color: '#fff', background: 'rgba(0,0,0,0.35)', padding: '6px 10px', borderRadius: 6, fontSize: 14 }}>
          Before
        </div>
        <div style={{ position: 'absolute', right: 12, top: 12, color: '#fff', background: 'rgba(0,0,0,0.35)', padding: '6px 10px', borderRadius: 6, fontSize: 14 }}>
          After
        </div>
      </div>
    </div>
  )
}

export default function VirtualStagingPage() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = heroVideoRef.current
    if (video) {
      video.play().catch(() => {})
    }
  }, [])

  return (
    <>
      <div className="marketing-your-property-page">
        {/* Video Background */}
        <div className="marketing-your-property-hero">
          <video
            ref={heroVideoRef}
            className="marketing-your-property-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Background video for Virtual Staging"
            onLoadedData={() => heroVideoRef.current?.play().catch(() => {})}
          >
            <source src="/video/before-after-30sec.mp4" type="video/mp4" />
          </video>

          {/* Video Overlay */}
          <div className="marketing-your-property-overlay" />

          {/* Hero Content */}
          <div className="marketing-your-property-hero-content">
            <AnimatedSection threshold={0.5}>
              <h1 className="marketing-your-property-title animate-in-up">Virtual Staging</h1>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scoped styles (copied from VirtualTour360 for layout consistency) */}
      <style>{`
        .virtual-bullets-module__bool7G__bulletsContainer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .virtual-bullets-module__bool7G__column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .virtual-bullets-module__bool7G__bulletContainer {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .virtual-bullets-module__bool7G__bulletTickContainer { flex-shrink: 0; }
        .virtual-bullets-module__bool7G__bulletTick { color: #6c9830; }
        .virtual-bullets-module__bool7G__bulletTitle { margin: 0 0 0.5rem 0; }
        .virtual-bullets-module__bool7G__bulletText { margin: 0; }
        .virtual-tour-wide .marketing-your-property-container { max-width: 1400px; }
        .see-in-360-section { margin-top: 3rem; }
        .see-in-360-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: flex-start; }
        .see-in-360-grid article { text-align: center; }
        .see-in-360-grid + .see-in-360-grid { margin-top: 3rem; padding-top: 3rem; padding-bottom: 3rem; }
        .see-in-360-grid iframe { width: 100%; aspect-ratio: 16 / 9; height: auto; border: 2px solid #6c9830; border-radius: 12px; }
        @media (max-width: 768px) {
          .virtual-bullets-module__bool7G__bulletsContainer { grid-template-columns: 1fr; }
          .see-in-360-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Content Section (copied structure for consistency) */}
      <div className="marketing-your-property-content virtual-tour-wide">
        <div className="marketing-your-property-container">
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section">
              <h2 className="marketing-your-property-section-title animate-in-up animate-active" style={{ textAlign: 'center' }}>Unlock Your Property's True Potential</h2>
              <article className="marketing-your-property-text animate-in-up animate-active">
                <p>When it comes to selling property, first impressions are everything. For empty spaces, visualising their potential can be challenging for many buyers, which is why digital photo staging is so important. This innovative service transforms vacant or minimally furnished rooms into beautifully styled spaces, helping buyers see the full potential of your property.</p>
                <p>Whether you’re a developer showcasing a new build, selling a rental property that’s now empty, or handling a probate sale, digital photo staging can make all the difference. At Integra Estates, we offer this cutting-edge service completely free of charge because we know it works. Properties with digitally staged images consistently attract more interest, generate higher online views, and achieve faster sales, often at premium prices.</p>
                <p>This proven technology breathes life into empty spaces, allowing buyers to visualise how they could use each room, helping them form an emotional connection with the property. By presenting your home in its best possible light, we help it stand out in a competitive market, maximising its appeal and ensuring it resonates with a wide audience.</p>
                <p>Our expertly staged images are promoted across property listings, social media, and targeted marketing campaigns, delivering exceptional results. Discover how digital photo staging can transform your property and make an unforgettable impact with Integra Estates. Let us help you unlock its true potential.</p>

                <div
                  className="on-screen-loading-module__zxNEcq__rightAnimation on-screen-loading-module__zxNEcq__rightAnimationActive virtual-bullets-module__bool7G__bulletsContainer"
                  style={{ animationDuration: '1000ms', animationDelay: '0ms' }}
                >
                  <div className="virtual-bullets-module__bool7G__bulletContainer">
                    <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="virtual-bullets-module__bool7G__bulletTick"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="virtual-bullets-module__bool7G__bulletTitle">Increase Buyer Interest</h3>
                      <p className="virtual-bullets-module__bool7G__bulletText">90% or more buyers start looking online, you only have a few moments to catch a buyer’s interest. Digital photo staging does just that.</p>
                    </div>
                  </div>

                  <div className="virtual-bullets-module__bool7G__bulletContainer">
                    <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="virtual-bullets-module__bool7G__bulletTick"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="virtual-bullets-module__bool7G__bulletTitle">Sell Properties Faster</h3>
                      <p className="virtual-bullets-module__bool7G__bulletText">Homes that are staged sell on average 75% faster than those that are not.</p>
                    </div>
                  </div>

                  <div className="virtual-bullets-module__bool7G__bulletContainer">
                    <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="virtual-bullets-module__bool7G__bulletTick"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="virtual-bullets-module__bool7G__bulletTitle">Achieve Higher Sale Price</h3>
                      <p className="virtual-bullets-module__bool7G__bulletText">Staged properties have a higher likelihood of selling for the asking price or above. Compared to those which are not.</p>
                    </div>
                  </div>

                  <div className="virtual-bullets-module__bool7G__bulletContainer">
                    <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="virtual-bullets-module__bool7G__bulletTick"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="virtual-bullets-module__bool7G__bulletTitle">Free Of Charge</h3>
                      <p className="virtual-bullets-module__bool7G__bulletText">Our photo staging is included in our no- sale no-fee service for properties that are free of belongings.</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>

          {/* Optional showcase area using the same single-column pattern */}
          <AnimatedSection threshold={0.3}>
            <section className="see-in-360-section">
              <h2 className="marketing-your-property-section-title animate-in-up animate-active" style={{ textAlign: 'center' }}>From Empty to Sold</h2>
              <div className="see-in-360-grid">
              <article className="marketing-your-property-text animate-in-up animate-active">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                  <div style={{ alignSelf: 'center' }}>
                    <p style={{ textAlign: 'right' }}>
                      In today's competitive property market, it's important for vendors to find new and innovative ways to stand out from the crowd. One such method is digital photo staging. By using computer software to add virtual furniture and decor to photos of empty or sparsely furnished rooms, digital staging can help capture the imagination of potential buyers, speed up the selling process, and give vendors an edge in a crowded marketplace.
                    </p>
                  </div>

                  <div className="half-and-half-module__vLAi-a__imageContainer half-and-half-module__vLAi-a__leftAnimation half-and-half-module__vLAi-a__leftAnimationActive">
                    <CompareImageSlider
                      beforeSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/before-img-1.jpg"
                      afterSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/after-img-1.jpg"
                      height={462}
                      initialRatio={0.6}
                    />
                  </div>
                </div>
              </article>
              </div>
            </section>
          </AnimatedSection>
          
          {/* Additional comparison block with media on left and text on right */}
          <AnimatedSection threshold={0.3}>
            <div className="see-in-360-grid">
              <article className="marketing-your-property-text animate-in-up animate-active">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start', paddingTop: '4rem' }}>
                  {/* Left Column - Interactive slider (replaces static compare) */}
                  <div className="half-and-half-module__vLAi-a__imageContainer half-and-half-module__vLAi-a__leftAnimation half-and-half-module__vLAi-a__leftAnimationActive">
                    <CompareImageSlider
                      beforeSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/before-img-2.jpg"
                      afterSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/after-img-2.jpg"
                      height={462}
                      initialRatio={0.55}
                    />
                  </div>

                  {/* Right Column - Provided paragraph */}
                  <div style={{ alignSelf: 'center' }}>
                    <p style={{ textAlign: 'left' }}>
                      One of the key benefits of digital photo staging is that it allows potential buyers to visualise what a home could look like once it's furnished and decorated. Many people have difficulty envisioning an empty space filled with furniture and decor, which can make it hard for them to get excited about a property. By digitally staging photos, vendors can show buyers the potential of a home and help them see the possibilities for themselves.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>

          {/* Additional comparison block with text left and media right */}
          <AnimatedSection threshold={0.3}>
            <div className="see-in-360-grid" style={{ paddingTop: '4rem' }}>
              <article className="marketing-your-property-text animate-in-up animate-active">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                  {/* Left Column - Provided paragraph */}
                  <div style={{ alignSelf: 'center' }}>
                    <p style={{ textAlign: 'right' }}>
                      Another advantage of digital photo staging is that it can help vendors sell their homes faster. According to a recent study, homes that were digitally staged sold 73% faster than those that were not staged at all. This is because staged homes are more attractive to buyers, who are often willing to pay more for a property that looks move-in ready. By staging a home digitally, vendors can make it more appealing to a wider range of buyers, which can lead to a quicker sale.
                    </p>
                  </div>

                  {/* Right Column - Interactive slider for before/after 3 */}
                  <div className="half-and-half-module__vLAi-a__imageContainer half-and-half-module__vLAi-a__rightAnimation half-and-half-module__vLAi-a__rightAnimationActive">
                    <CompareImageSlider
                      beforeSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/before-img-3.jpg"
                      afterSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/after-img-3.jpg"
                      height={458}
                      initialRatio={0.55}
                    />
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>
          
          {/* New comparison block with media left and article right */}
          <AnimatedSection threshold={0.3}>
            <div className="see-in-360-grid" style={{ paddingTop: '4rem' }}>
              <article className="marketing-your-property-text animate-in-up animate-active">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                  {/* Left Column - Interactive slider for before/after 4 */}
                  <div className="half-and-half-module__vLAi-a__imageContainer half-and-half-module__vLAi-a__leftAnimation half-and-half-module__vLAi-a__leftAnimationActive">
                    <CompareImageSlider
                      beforeSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/before-img-4.jpg"
                      afterSrc="https://storage.googleapis.com/integra-estates-website/imagesv2/staging/after-img-4.jpg"
                      height={463}
                      initialRatio={0.55}
                    />
                  </div>

                  {/* Right Column - Article paragraph (left-aligned) */}
                  <div style={{ alignSelf: 'center' }}>
                    <p style={{ textAlign: 'left' }}>
                      With so many homes for sale, it's important for vendors to find ways to make their properties more memorable and eye-catching. By digitally staging photos, vendors can create stunning images that showcase the best features of their homes and make them more appealing to buyers. This can help them attract more attention and generate more interest in their properties, which can lead to quicker sales and premium values.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Get In Touch Section */}
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </>
  )
}