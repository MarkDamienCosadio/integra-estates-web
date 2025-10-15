import { useEffect, useRef } from 'react'

export default function MarketingWithUs() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const articleRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const r = entry.intersectionRatio
          if (r >= 0.5 && titleRef.current) {
            titleRef.current.classList.add('mw-active')
          }
          if (r >= 0.8 && articleRef.current) {
            const ps = Array.from(articleRef.current.querySelectorAll('p'))
            ps.forEach((p, i) => {
              (p as HTMLElement).style.animationDelay = `${i * 0.2}s`
              p.classList.add('mw-active')
            })
          }
        })
      },
      { threshold: [0.5, 0.8] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])
  return (
    <>
      {/* Title outside the section, using same inner container for alignment */}
      <div className="section-4-module__KR0FYq__inner container">
        <div className="section-4-module__KR0FYq__titleContainer">
          <h2 ref={titleRef} className="ask-us-title mw-prep mw-from-up">Marketing With Us</h2>
        </div>
      </div>

      <section id="marketing-with-us" ref={sectionRef} className="section-4-module__KR0FYq__section section">
        <div className="section-4-module__KR0FYq__inner container">
          <div className="section-4-module__KR0FYq__content">
            <div className="section-4-module__KR0FYq__left" aria-hidden="true"></div>
            <article ref={articleRef} className="section-4-module__KR0FYq__article">
              <p className="mw-prep mw-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Whether you're thinking about selling, letting, or are still unsure, we are the agents you can trust to support you every step of the way. With decades of experience and a strong reputation, we bring together our extensive knowledge and state-of-the-art, high-quality marketing to present your property at its finest.
              </p>
              <p className="mw-prep mw-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Our complimentary marketing services encompass a range of premium features, including professional photography, immersive 360-degree virtual tours, digital photo staging, tailored promotional videos, and standout featured property listings — to name just a few, all designed to capture the attention of serious buyers and tenants.
              </p>
              <p className="mw-prep mw-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                At Integra Estates, we don’t just market properties — we care deeply about our clients. Your needs are always our priority, and we are committed to providing an honest, transparent, and supportive service from valuation to completion.
              </p>
              <p className="mw-prep mw-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                Discover how our personalised approach and dedication to exceptional service can make a real difference.
              </p>
              <div className="animated-module__Rnzt8a__btn">
                <div className="animated-module__Rnzt8a__title">Find out more</div>
                <div className="animated-module__Rnzt8a__line">
                  <span className="animated-module__Rnzt8a__lineBar" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
