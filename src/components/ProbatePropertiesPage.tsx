import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'

export default function ProbatePropertiesPage() {
  return (
    <>
      {/* Hero section styled like Community Engagement */}
      <section className="mortgage-advice-hero hero">
        <video
          className="hero__video visible"
          src="/video/probate-video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video for Probate Properties"
        />
        <div className="hero__overlay">
          <AnimatedSection>
            <div className="hero-content">
              <h1 className="hero-tag animate-in-up">Probate Properties</h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Supporting You Section */}
      <AnimatedSection>
        <section
          id="supporting-you"
          className="mortgage-advice-section section"
          style={{ padding: '4rem 0' }}
        >
          <div className="mortgage-advice-container">
            <h2
              className="animate-in-up"
              style={{ color: 'var(--accent)', textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}
            >
              Supporting You Every Step Of The Way
            </h2>
            <article className="animate-in-up" style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '1000px', margin: '0 auto' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                At Integra-Estates, we understand how overwhelming things can feel after losing a loved one.
                The pressure of managing property matters during such an emotional time can add significant stress.
                Whether you’re an executor navigating the legal responsibilities or a family member simply unsure of
                where to begin, we’re here to help with compassionate, expert support.
              </p>
              <p>
                Our experienced team is trained to handle these sensitive situations with the utmost care and discretion.
                We provide clear, straightforward advice to help you manage the journey ahead. From providing the prompt and
                accurate probate valuations required for legal proceedings, to stepping in with comprehensive property
                management for a vacant home—including security, maintenance, and preparations—we handle the practical details.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* Only include Get In Touch for now */}
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </>
  )
}