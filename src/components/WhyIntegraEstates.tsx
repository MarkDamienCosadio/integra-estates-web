import { useEffect, useRef } from 'react'

export default function WhyIntegraEstates() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="why-integra-section">
      <div className="why-integra-container">
        <div className="why-integra-content">
          <div className="why-integra-text">
            <h2 className="why-integra-title">
              Why Choose Integra Estates?
            </h2>
            <p className="why-integra-subtitle">
              We're not just another estate agency. We're your trusted partners in property, 
              committed to delivering exceptional results through innovation, expertise, and genuine care.
            </p>
            
            <div className="why-integra-features">
              <div className="why-integra-feature">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Proven Track Record</h3>
                  <p>With years of experience in the property market, we've successfully helped thousands of clients buy, sell, and rent properties across London and beyond.</p>
                </div>
              </div>

              <div className="why-integra-feature">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Cutting-Edge Technology</h3>
                  <p>We leverage the latest technology including 360° virtual tours, virtual staging, and advanced marketing tools to showcase your property in the best possible light.</p>
                </div>
              </div>

              <div className="why-integra-feature">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01.99L12 10l-1.99-2.01A2.5 2.5 0 0 0 8 7H5.46c-.8 0-1.54.37-2.01.99L1 8.5V22h2v-6h2.5l2.5 2.5V22h2v-4h2v4h2v-4h2v4h2z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Personalised Service</h3>
                  <p>Every client is unique, and so is our approach. We take the time to understand your specific needs and tailor our services accordingly.</p>
                </div>
              </div>

              <div className="why-integra-feature">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Transparent Communication</h3>
                  <p>We believe in keeping you informed every step of the way. No hidden fees, no surprises - just honest, clear communication throughout your property journey.</p>
                </div>
              </div>

              <div className="why-integra-feature">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Local Expertise</h3>
                  <p>Our deep knowledge of local markets, trends, and regulations ensures you get the most accurate advice and best possible outcomes for your property needs.</p>
                </div>
              </div>

              <div className="why-integra-feature">
                <div className="feature-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Community Focus</h3>
                  <p>We're not just about property transactions - we're committed to building stronger communities and supporting local initiatives that matter to our clients.</p>
                </div>
              </div>
            </div>

            <div className="why-integra-cta">
              <h3>Ready to Experience the Integra Difference?</h3>
              <p>Get in touch with our team today and discover how we can help you achieve your property goals.</p>
              <div className="why-integra-buttons">
                <a href="tel:02038700000" className="cta-button cta-button--primary">
                  Call Us: 0203 870 00 00
                </a>
                <a href="mailto:hello@integra-estates.com" className="cta-button cta-button--secondary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
