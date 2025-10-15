import { useEffect, useRef } from 'react'

export default function MeetTheTeam() {
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
            titleRef.current.classList.add('mt-active')
          }
          if (r >= 0.8 && articleRef.current) {
            const ps = Array.from(articleRef.current.querySelectorAll('p'))
            ps.forEach((p, i) => {
              (p as HTMLElement).style.animationDelay = `${i * 0.2}s`
              p.classList.add('mt-active')
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
      {/* Title above the section */}
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2 ref={titleRef} className="ask-us-title mt-prep mt-from-up" style={{ margin: '0 0 24px 0' }}>Meet the team</h2>
        </div>
      </div>

      {/* Section content with background */}
      <section
        id="meet-the-team"
        ref={sectionRef}
        className="section"
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
          padding: '60px 0',
          background:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/images/meet-the-team.jpg') center / cover no-repeat",
        }}
      >
        <div className="container" style={{ padding: 0, maxWidth: 'none', marginLeft: 'auto', marginRight: '10rem', width: '70%' }}>
          <article ref={articleRef} className="meet-article">
            <p className="mt-prep mt-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              At Integra Estates, we truly believe our team is the heart and soul of our business,
              our dedication is what makes us stand out. Each member of our team is passionate
              about providing exceptional client care, always putting your needs first and going above and beyond
              to deliver an honest, trustworthy, and outstanding service to everyone we work with.
            </p>
            <p className="mt-prep mt-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              We understand that buying, selling, or renting a property can sometimes feel overwhelming, which is why our team is here to make the process as smooth and stress-free as possible. With a sincere commitment to your needs, we take pride in offering clear communication, reliable support, and expert guidance at every step of the way.
            </p>
            <p className="mt-prep mt-from-right" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Our team is not just professional — we are approachable, compassionate, and genuinely invested in ensuring you have a positive and rewarding experience with us. Find out more and meet the people who make Integra Estates what it is.
            </p>
          <div className="animated-module__Rnzt8a__btn" onClick={() => (window.location.href = 'https://integra-estates.com/meet-the-team')}>
            <div className="animated-module__Rnzt8a__title">Find out more...</div>
            <div className="animated-module__Rnzt8a__line">
              <span className="animated-module__Rnzt8a__lineBar" />
            </div>
          </div>
          </article>
        </div>
      </section>
    </>
  )
}