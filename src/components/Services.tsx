import { useEffect, useRef } from 'react'

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const r = entry.intersectionRatio
          if (r >= 0.3 && titleRef.current) {
            titleRef.current.classList.add('srv-active')
          }
          if (r >= 0.5 && gridRef.current) {
            // Add reveal-active class to cards for staggered animation
            const cards = gridRef.current.querySelectorAll('.service-card')
            cards.forEach((card, i) => {
              const delays = [100, 300, 500] // 100ms, 300ms, 500ms delays
              setTimeout(() => {
                card.classList.add('reveal-active')
              }, delays[i] || 100) // Use specific delays or fallback to 100ms
            })
          }
        })
      },
      { threshold: [0.3, 0.5] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])
  return (
    <section id="services" ref={sectionRef} className="services-section section">
      <div className="services-inner container">
        <div className="services-titleContainer">
          <h2 ref={titleRef} className="ask-us-title srv-prep srv-from-up">Our services</h2>
        </div>
        <div ref={gridRef} className="services-grid">
          <a
            className="service-card"
            href="https://integra-estates.com/mortgage-advice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="service-card-img"
              src="https://storage.googleapis.com/integra-estates-website/imagesv2/mortgage-advice-service-still.png"
              alt="Mortgage Advice"
              loading="lazy"
            />
            <h3 className="service-card-title">Mortgage Advice</h3>
            <ul className="service-card-list">
              <li>Access to 1000's of mortgage deals</li>
              <li>Personal and trusted service</li>
              <li>Mortgage in Principal documents</li>
              <li>Friendly and helpful team</li>
              <li>Easy Application Process</li>
            </ul>
            <div className="animated-module__Rnzt8a__btn">
              <div className="animated-module__Rnzt8a__title">More Info</div>
              <div className="animated-module__Rnzt8a__line">
                <span className="animated-module__Rnzt8a__lineBar" />
              </div>
            </div>
          </a>

          <a
            className="service-card"
            href="https://integra-estates.com/valuation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="service-card-img"
              src="https://storage.googleapis.com/integra-estates-website/imagesv2/property-valuation-service-still.png"
              alt="Property Valuation"
              loading="lazy"
            />
            <h3 className="service-card-title">Property Valuation</h3>
            <ul className="service-card-list">
              <li>Free, honest and accurate valuations.</li>
              <li>Personal and professional service</li>
              <li>Dedicated deal progression expert</li>
              <li>Accompanied viewings by experienced staff</li>
              <li>Over two decades of combined local housing market experience</li>
            </ul>
            <div className="animated-module__Rnzt8a__btn">
              <div className="animated-module__Rnzt8a__title">Request A Valuation</div>
              <div className="animated-module__Rnzt8a__line">
                <span className="animated-module__Rnzt8a__lineBar" />
              </div>
            </div>
          </a>

          <a
            className="service-card"
            href="https://integra-estates.com/marketing-your-property"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="service-card-img"
              src="https://storage.googleapis.com/integra-estates-website/imagesv2/advanced-marketing-service-still.png"
              alt="Advanced Marketing"
              loading="lazy"
            />
            <h3 className="service-card-title">Advanced Marketing</h3>
            <ul className="service-card-list">
              <li>360-degree virtual property tours</li>
              <li>Personalised property marketing video</li>
              <li>Social media engagement</li>
              <li>Digital photo staging</li>
              <li>Advertisement on Rightmove, Zoopla, Primelocation and more</li>
            </ul>
            <div className="animated-module__Rnzt8a__btn">
              <div className="animated-module__Rnzt8a__title">More Info</div>
              <div className="animated-module__Rnzt8a__line">
                <span className="animated-module__Rnzt8a__lineBar" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}