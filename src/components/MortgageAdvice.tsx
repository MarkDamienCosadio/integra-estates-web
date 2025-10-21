import { useEffect, useRef } from 'react'

export default function MortgageAdvice() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const imageColumnRef = useRef<HTMLDivElement | null>(null)
  const articleRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const r = entry.intersectionRatio
          if (r >= 0.4 && titleRef.current) {
            titleRef.current.classList.add('ma-active')
          }
          if (r >= 0.6 && imageColumnRef.current) {
            imageColumnRef.current.classList.add('ma-active')
          }
          if (r >= 0.8 && articleRef.current) {
            articleRef.current.classList.add('ma-active')
            const ps = Array.from(articleRef.current.querySelectorAll('p'))
            ps.forEach((p, i) => {
              (p as HTMLElement).style.animationDelay = `${i * 0.2}s`
              p.classList.add('ma-active')
            })
            const button = articleRef.current.querySelector('.animated-module__Rnzt8a__btn')
            if (button) {
              const buttonDelay = ps.length * 0.2 + 0.3
              setTimeout(() => {
                button.classList.add('ma-active')
              }, buttonDelay * 1000)
            }
          }
        })
      },
      { threshold: [0.4, 0.6, 0.8] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="section-4-module__KR0FYq__inner container">
        <div className="section-4-module__KR0FYq__titleContainer">
          <h2 ref={titleRef} className="ask-us-title ma-prep ma-from-up">Expert Mortgage Advice</h2>
        </div>
      </div>

      <section id="mortgage-advice" ref={sectionRef} className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content">
            {/* Left column - Article */}
            <div className="mortgage-text-column">
              <article ref={articleRef} className="mortgage-article">
                <p className="ma-prep ma-from-left" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Finding the right mortgage can feel overwhelming, but having honest, expert guidance makes all the difference.
                </p>
                <p className="ma-prep ma-from-left" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  That’s why Integra-Estates are proud to be working in partnership with London &amp; Country (L&amp;C) – the UK’s largest fee-free mortgage broker. With access to more lenders than anyone else, as well as exclusive deals you won’t find elsewhere, their award winning team are here to make securing your mortgage simple, clear, and stress-free.
                </p>
                <p className="ma-prep ma-from-left" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Whether you’re buying your first home, moving, remortgaging, investing in buy-to-let, or protecting your mortgage with the right insurance, L&amp;C provide straightforward, reliable advice tailored to your needs.
                </p>
                <p className="ma-prep ma-from-left" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  As an Integra-Estates client, you’ll also receive complimentary Buyers Protection Insurance, giving you added peace of mind. Just mention that you’ve been referred by Integra-Estates when speaking to the L&amp;C team to activate your free cover.
                </p>
                <p className="ma-prep ma-from-left" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  With expert, fee-free advice you can trust, you’ll feel supported and confident every step of the way.
                </p>
                <div className="animated-module__Rnzt8a__btn">
                  <div className="animated-module__Rnzt8a__title">Find out more...</div>
                  <div className="animated-module__Rnzt8a__line">
                    <span className="animated-module__Rnzt8a__lineBar" />
                  </div>
                </div>
              </article>
            </div>

            {/* Right column - Image */}
            <div ref={imageColumnRef} className="mortgage-image-column">
              <img 
                src="/images/mortgage-advice.jpg" 
                alt="Mortgage advice"
                className="mortgage-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}