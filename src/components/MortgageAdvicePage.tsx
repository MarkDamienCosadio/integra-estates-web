import ScrollHint from './ScrollHint'

export default function MortgageAdvicePage() {
  return (
    <>
      <section className="mortgage-advice-hero hero">
        <video
          className="hero__video visible"
          src="/video/Mortgage%20Video.mov"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video for Mortgage Advice"
        />
        <div className="hero__overlay">
          <div className="hero-content">
            <h1 className="hero-tag">Valuable Independent Mortgage Advice</h1>
            <h3 className="hero-desc">Helping You Unlock new opportunities and possibilities</h3>
          </div>
        </div>
      </section>

      {/* New column section with matching h2 title */}
      <section className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <div className="mortgage-advice-content" style={{ rowGap: 0 }}>
            {/* Centered, full-width title across the grid */}
            <h2 className="ask-us-title" style={{ gridColumn: '1 / -1', textAlign: 'center', margin: '0 auto', paddingBottom: 0 }}>
              Get Expert Mortgage Help Today
            </h2>

            {/* Centered article content */}
            <article
              className="mortgage-article"
              style={{ gridColumn: '1 / -1', textAlign: 'center', margin: '0 auto', maxWidth: '900px' }}
              aria-label="Expert mortgage help information"
            >
              <p style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
                Over 2 million people have trusted L&amp;C Mortgages - the UK's No.1 fee-free broker - with access to exclusive deals from across the market, expert advice 7 days a week.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: 1.7 }}>
                Tel: <a href="tel:08009234018" aria-label="Call L and C Mortgages">0800 923 4018</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ScrollHint widget for mortgage page */}
      <ScrollHint />
    </>
  )
}