import { useEffect, useRef } from 'react'

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const titleEl = titleRef.current
    const gridEl = gridRef.current

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && titleEl) {
            titleEl.classList.add('services-active')
          }
        })
      },
      { threshold: 0.4 }
    )

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && gridEl) {
            gridEl.classList.add('services-active')
            
            // Add staggered animation to each card
            const cards = gridEl.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              const delays = [400, 800, 1000] // Card 1: 400ms, Card 2: 800ms, Card 3: 1000ms
              setTimeout(() => {
                card.classList.add('services-active')
              }, delays[index] || 1000) // Use defined delays or fallback to 1000ms
            })
          }
        })
      },
      { threshold: 0.4 }
    )

    if (titleEl) titleObserver.observe(titleEl)
    if (gridEl) gridObserver.observe(gridEl)

    return () => {
      titleObserver.disconnect()
      gridObserver.disconnect()
    }
  }, [])
  return (
    <section id="services" ref={sectionRef} className="services-section section">
      <div className="services-inner container">
        <div className="services-titleContainer">
          <h2 ref={titleRef} className="ask-us-title services-prep services-from-right">Our services</h2>
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
            <div
              className="animated-module__Rnzt8a__btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.dispatchEvent(new CustomEvent('openValuationModal'));
              }}
            >
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