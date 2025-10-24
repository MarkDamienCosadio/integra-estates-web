import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="services-inner container">
        <AnimatedSection threshold={0.5}>
          <div className="services-titleContainer">
            <h2 className="ask-us-title animate-in-up">Our services</h2>
          </div>
          <div className="services-grid">
          <Link
            className="service-card animate-in-up"
            data-animate-delay="400"
            to="/mortgage-advice"
            aria-label="Mortgage Advice"
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
          </Link>

          <button
            type="button"
            className="service-card animate-in-up"
            data-animate-delay="800"
            aria-label="Request a valuation"
            onClick={() => {
              window.dispatchEvent(new Event('openValuationModal'))
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                window.dispatchEvent(new Event('openValuationModal'))
              }
            }}
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
            >
              <div className="animated-module__Rnzt8a__title">Request A Valuation</div>
              <div className="animated-module__Rnzt8a__line">
                <span className="animated-module__Rnzt8a__lineBar" />
              </div>
            </div>
          </button>

          <a
            className="service-card animate-in-up"
            data-animate-delay="1000"
            href="https://integra-estates.com/marketing-your-property"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Advanced Marketing"
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
        </AnimatedSection>
      </div>
    </section>
  )
}