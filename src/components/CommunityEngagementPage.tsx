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

      {/* Charity Partners Section */}
      <AnimatedSection>
        <section id="charity-partners" className="section" style={{ backgroundColor: '#141414', padding: '4rem 0', position: 'relative', zIndex: 10 }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 className="animate-in-up" style={{ color: 'var(--accent)', fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
              Our Commitment to Community
            </h2>
            
            <div className="two-col animate-in-left" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
              {/* Left Column - Paragraph */}
              <div className="animate-in-left">
                <p style={{ color: '#fff', fontSize: '1.15rem', lineHeight: 1.8, margin: 0, textAlign: 'right' }}>
                  At Integra-Estates, we firmly believe in the power of community engagement to bring positive change and uplift the lives of those in need. As a local business, we understand our responsibility towards the community we serve. Hence, every year, we run a heartfelt campaign where we contribute considerable donations to well-deserving charities such as the NHS and St. Christopher's Hospice. Moreover, we recognise the importance of providing extra support and assistance to our local community during challenging times. Our mission is to be an agent of positive change, giving back more and more to enhance the lives of others and fostering a strong sense of community spirit.
                </p>
              </div>
              {/* Right Column - Image */}
              <div className="animate-in-right">
                <img 
                  src="/images/st_christophers-image.jpg" 
                  alt="St. Christopher's Hospice" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            </div>

            {/* Additional Two-Column Block */}
            <div className="two-col animate-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', paddingTop: '4rem' }}>
              {/* Left Column - Image */}
              <div className="animate-in-left">
                <img 
                  src="/images/our-values-community.jpg" 
                  alt="Our Values Community" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
              {/* Right Column - Paragraph */}
              <div className="animate-in-right">
                <p style={{ color: '#fff', fontSize: '1.15rem', lineHeight: 1.8, margin: 0, textAlign: 'left' }}>
                  Being an Agent of Positive Change:Our vision goes beyond property transactions; we aspire to be an agent of positive change in the lives of our community. With every successful listing resulting in a successful sale from January to March, we donate a considerable portion of the proceeds to charities that align with our mission. These carefully selected charities work tirelessly to support the community in ways that uplift and empower individuals from all walks of life. Through this initiative, we channel our business success into making a tangible difference in the lives of those who need it most.
                </p>
              </div>
            </div>

            {/* Third Two-Column Block */}
            <div className="two-col animate-in-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', paddingTop: '4rem' }}>
              {/* Left Column - Paragraph */}
              <div className="animate-in-left">
                <p style={{ color: '#fff', fontSize: '1.15rem', lineHeight: 1.8, margin: 0, textAlign: 'right' }}>
                  Integra-Estates is committed to ensuring that our community engagement efforts have a lasting and sustainable impact. We regularly assess the effectiveness of our contributions and initiatives, seeking feedback from the community and partners to improve and refine our approach continuously. We believe that by working hand in hand with the community and supporting initiatives that align with our values, we can create a positive ripple effect that extends far beyond our immediate reach.
                </p>
              </div>
              {/* Right Column - Image */}
              <div className="animate-in-right">
                <img 
                  src="/images/community%20engagement.jpg" 
                  alt="Community Engagement" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            </div>
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