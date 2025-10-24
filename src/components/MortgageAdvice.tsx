import AnimatedSection from './AnimatedSection'

export default function MortgageAdvice() {

  return (
    <>
      <div className="section-4-module__KR0FYq__inner container">
        <AnimatedSection threshold={0.5}>
          <div className="section-4-module__KR0FYq__titleContainer">
            <h2 className="ask-us-title animate-in-up">Expert Mortgage Advice</h2>
          </div>
        </AnimatedSection>
      </div>

      <section id="mortgage-advice" className="mortgage-advice-section section">
        <div className="mortgage-advice-container">
          <AnimatedSection threshold={0.5}>
            <div className="mortgage-advice-content">
              {/* Left column - Article */}
              <div className="mortgage-text-column">
                <article className="mortgage-article" style={{ textAlign: 'right' }}>
                  <p className="animate-in-up" data-animate-delay="100" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Finding the right mortgage can feel overwhelming, but having honest, expert guidance makes all the difference.
                  </p>
                  <p className="animate-in-up" data-animate-delay="200" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    That's why Integra-Estates are proud to be working in partnership with London &amp; Country (L&amp;C) – the UK's largest fee-free mortgage broker. With access to more lenders than anyone else, as well as exclusive deals you won't find elsewhere, their award winning team are here to make securing your mortgage simple, clear, and stress-free.
                  </p>
                  <p className="animate-in-up" data-animate-delay="300" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Whether you're buying your first home, moving, remortgaging, investing in buy-to-let, or protecting your mortgage with the right insurance, L&amp;C provide straightforward, reliable advice tailored to your needs.
                  </p>
                  <p className="animate-in-up" data-animate-delay="400" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    As an Integra-Estates client, you'll also receive complimentary Buyers Protection Insurance, giving you added peace of mind. Just mention that you've been referred by Integra-Estates when speaking to the L&amp;C team to activate your free cover.
                  </p>
                  <p className="animate-in-up" data-animate-delay="500" style={{ fontSize: '1.5rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    With expert, fee-free advice you can trust, you'll feel supported and confident every step of the way.
                  </p>
                  <div className="animated-module__Rnzt8a__btn animate-in-up" data-animate-delay="600">
                    <div className="animated-module__Rnzt8a__title">Find out more...</div>
                    <div className="animated-module__Rnzt8a__line">
                      <span className="animated-module__Rnzt8a__lineBar" />
                    </div>
                  </div>
                </article>
              </div>

              {/* Right column - Image */}
              <div className="mortgage-image-column animate-in-up" data-animate-delay="700">
                <img 
                  src="/images/mortgage-advice.jpg" 
                  alt="Mortgage advice"
                  className="mortgage-image"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}