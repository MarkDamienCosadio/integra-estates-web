import React from 'react'

export default function MortgageAdvice() {
  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '540px',
    width: '100%',
    overflow: 'hidden',
  }

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    filter: 'brightness(0.78)',
  }

  const infoStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    maxWidth: '1200px',
    color: 'var(--text)',
  }



  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.15), rgba(0,0,0,0.45))',
  }

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: '8px',
    cursor: 'pointer',
  }

  const btnTitleStyle: React.CSSProperties = {
    border: '1px solid grey',
    color: 'white',
    padding: '10px 14px',
    borderRadius: '4px',
    fontFamily: 'trajan-pro-3, serif',
    letterSpacing: '0.1rem',
  }

  const lineContainerStyle: React.CSSProperties = {
    height: '2px',
    width: '6rem',
  }

  const lineStyle: React.CSSProperties = {
    backgroundColor: 'rgb(108, 152, 48)',
    height: '2px',
    width: '6rem',
  }

  return (
    <>
      <div className="section-4-module__KR0FYq__inner container">
        <div className="section-4-module__KR0FYq__titleContainer">
          <h2 className="ask-us-title">Expert Mortgage Advice</h2>
        </div>
      </div>
      <section className="background-image-with-ani-btn-module__KzAnOq__section section" style={sectionStyle}>
      <img
        alt="mortgage advice image"
        className="background-image-with-ani-btn-module__KzAnOq__backgroundImage"
        src="/images/mortgage-advice.jpg"
        style={imageStyle}
      />
      <div style={overlayStyle} />
      <div className="background-image-with-ani-btn-module__KzAnOq__info" style={infoStyle}>
        <div className="on-screen-loading-module__zxNEcq__rightAnimation on-screen-loading-module__zxNEcq__rightAnimationActive">
          <p className="background-image-with-ani-btn-module__KzAnOq__desc mortgage-desc" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Finding the right mortgage can feel overwhelming, but having honest, expert guidance makes all the difference.
            <br /><br />
            That’s why Integra-Estates are proud to be working in partnership with London &amp; Country (L&amp;C) – the UK’s largest fee-free mortgage broker. With access to more lenders than anyone else, as well as exclusive deals you won’t find elsewhere, their award winning team are here to make securing your mortgage simple, clear, and stress-free.
            <br /><br />
            Whether you’re buying your first home, moving, remortgaging, investing in buy-to-let, or protecting your mortgage with the right insurance, L&amp;C provide straightforward, reliable advice tailored to your needs.
            <br /><br />
            As an Integra-Estates client, you’ll also receive complimentary Buyers Protection Insurance, giving you added peace of mind. Just mention that you’ve been referred by Integra-Estates when speaking to the L&amp;C team to activate your free cover.
            <br /><br />
            With expert, fee-free advice you can trust, you’ll feel supported and confident every step of the way.
          </p>
        </div>
        <div className="on-screen-loading-module__zxNEcq__rightAnimation on-screen-loading-module__zxNEcq__rightAnimationActive">
          <div className="animated-module__Rnzt8a__btn" style={btnStyle}>
            <div className="animated-module__Rnzt8a__title animated-module__Rnzt8a__titleRight" style={btnTitleStyle}>Find out more...</div>
            <div className="animated-module__Rnzt8a__line animated-module__Rnzt8a__lineRight">
              <div className="line-module__2PkNtW__container" style={lineContainerStyle}>
                <div className="line-module__2PkNtW__line line-module__2PkNtW__right" style={lineStyle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}