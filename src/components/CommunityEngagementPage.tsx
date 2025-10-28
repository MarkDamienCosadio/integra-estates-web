import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'

export default function CommunityEngagementPage() {
  return (
    <>
      {/* Hero section styled like Mortgage Advice */}
      <section className="mortgage-advice-hero hero">
        <video
          className="hero__video visible"
          src="/video/community-engagement-banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background video for Community Engagement"
        />
        <div className="hero__overlay">
          <AnimatedSection>
            <div className="hero-content">
              <h1 className="hero-tag animate-in-up">Community Engagement</h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Only include Get In Touch for now */}
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </>
  )
}