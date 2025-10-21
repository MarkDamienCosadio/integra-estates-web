import { useEffect, useRef } from 'react'

export default function HomeBuyersGuide() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const r = entry.intersectionRatio
          if (r >= 0.4 && titleRef.current) {
            titleRef.current.classList.add('hbg-active')
          }
          if (r >= 0.7) {
            paragraphRef.current?.classList.add('hbg-active')
            if (videoRef.current) {
              ;(videoRef.current as HTMLElement).style.animationDelay = '1s'
              videoRef.current.classList.add('hbg-active')
            }
          }
        })
      },
      { threshold: [0.4, 0.7] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])

  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
    background: '#141414',
  }
  // grid styles moved to CSS class .home-buyers-grid for responsiveness
  const videoStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 12,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
  }


  return (
    <>
      {/* Title outside the section to match site headings */}
      <div className="section-4-module__KR0FYq__inner container">
        <div className="section-4-module__KR0FYq__titleContainer">
          <h2 ref={titleRef} className="ask-us-title hbg-prep hbg-from-up" style={{ marginTop: '4rem' }}>Home Buyers' Guide</h2>
        </div>
      </div>

      <section ref={sectionRef} className="section" style={sectionStyle}>
      <div className="container home-buyers-grid">
        <div>
          <p ref={paragraphRef} className="hbg-prep hbg-from-left" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Whether you are a first-time buyer or a seasoned homeowner needing an update,
            our comprehensive guide is an essential resource for navigating the complex
            real estate market. It demystifies the entire transaction with a clear, step-by-step
            overview of each procedure, from financial planning to closing. This guide will provide
            the clarity and confidence you need to make informed decisions throughout your property journey.
          </p>
        </div>
        <div>
          <video
            ref={videoRef}
            className="hbg-prep hbg-from-right"
            src="https://storage.googleapis.com/integra-estates-website/videos/home-buyers-guide.mp4#t=0.001"
            style={videoStyle}
            controls
            preload="metadata"
            playsInline
            poster="/images/marketing-with-us.jpg"
          />
        </div>
      </div>
      </section>
    </>
  )
}