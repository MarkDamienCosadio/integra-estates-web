import { useEffect, useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import { Camera, Box, Palette, Video, Globe, FileText } from 'lucide-react'

export default function MarketingYourProperty() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  return (
    <div className="marketing-your-property-page">
      {/* Video Background */}
      <div className="marketing-your-property-hero">
        <video
          ref={videoRef}
          className="marketing-your-property-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/advanced-marketing-cover.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="marketing-your-property-overlay" />
        
        {/* Hero Content */}
        <div className="marketing-your-property-hero-content">
          <AnimatedSection threshold={0.5}>
            <h1 className="marketing-your-property-title animate-in-up">Marketing your property</h1>
            <h2 className="marketing-your-property-subtitle animate-in-up">Our advanced marketing techniques enable your property to stand out from the competition</h2>
          </AnimatedSection>
        </div>
      </div>

      {/* Advanced Marketing Techniques Section - appears immediately when scrolling */}
      <section className="marketing-your-property-intro section">
        <div className="marketing-your-property-container">
          <AnimatedSection threshold={0.3}>
            <h2 className="marketing-your-property-intro-title animate-in-up">Advanced Marketing Techniques</h2>
            <article className="marketing-your-property-intro-article animate-in-up">
              <p>At Integra Estates, we are proud to provide our clients with the very best in high-end, top-tier marketing — completely free of charge. We offer this complimentary service because we know it delivers proven results, ensuring your property gets the attention it deserves and achieves swift sales at premium prices.</p>
              
              <p>Our philosophy is simple: your property is unique, and it deserves to stand out in a competitive marketplace. That's why we combine tried-and-tested traditional methods with cutting-edge technologies to create a bespoke approach that showcases your property's full potential. From professional photography that highlights every feature to immersive 360-degree virtual tours, bespoke promotional videos, and expertly crafted digital staging, every element of our advanced complimentary marketing is designed to captivate potential buyers and leave a lasting impression.</p>
              
              <p>At Integra Estates, we view marketing not as an expense but as an investment — an investment in your property's success and ours. We believe in going the extra mile to ensure that every client benefits from outstanding results.</p>
              
              <p>With trust, transparency, and exceptional service at the core of everything we do, we make sure your property doesn't just sell — it stands out. Discover the difference our complimentary high-end marketing can make. Here's how we promote your property to ensure it rises above the rest:</p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Explore Advanced Marketing Section */}
      <section className="explore-advanced-marketing section">
        <div className="explore-advanced-marketing-container">
          <AnimatedSection threshold={0.3}>
            <div className="explore-advanced-marketing-grid">
              <button className="explore-marketing-btn animate-in-up" data-animate-delay="100">
                <div className="explore-marketing-btn-icon">
                  <Camera size={24} />
                </div>
                <span className="explore-marketing-btn-text">Photography</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="200">
                <div className="explore-marketing-btn-icon">
                  <Box size={24} />
                </div>
                <span className="explore-marketing-btn-text">360 Virtual Tours</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="300">
                <div className="explore-marketing-btn-icon">
                  <Palette size={24} />
                </div>
                <span className="explore-marketing-btn-text">Photo Staging</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="400">
                <div className="explore-marketing-btn-icon">
                  <Video size={24} />
                </div>
                <span className="explore-marketing-btn-text">Promotional Videos</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="500">
                <div className="explore-marketing-btn-icon">
                  <Globe size={24} />
                </div>
                <span className="explore-marketing-btn-text">On-Line Exposure</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="600">
                <div className="explore-marketing-btn-icon">
                  <FileText size={24} />
                </div>
                <span className="explore-marketing-btn-text">Floor Plans</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Spacer to push content below fixed video */}

      {/* Scrollable Content */}
      <div className="marketing-your-property-content">
        <div className="marketing-your-property-container">


          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section">
              <h2 className="marketing-your-property-section-title animate-in-up">Photography</h2>
              <article className="marketing-your-property-text animate-in-up">
                <p>A well-captured photograph can be worth a thousand or more compliments. We acknowledge that when perusing property listings, prospective buyers' initial focus is often on the imagery. We cannot overstate the importance of these photographs as they can prompt a prospective buyer to request a viewing. To ensure that we present your property in the best light possible. Our photography is handled internally to guarantee that it adheres to our elevated standards and accurately portrays your property.</p>
                
                <p>Additionally, this service is included in our 'no-sale no-fee agreement at no extra cost to you. After all, why should you be responsible for paying for photos when it is our responsibility as Estate Agents to market your property effectively.</p>

                <div className="swiper swiper-initialized swiper-horizontal section-3-module__U8BUtW__swiper">
                  <div className="swiper-wrapper" style={{cursor: 'grab', transitionDuration: '0ms', transform: 'translate3d(-3145px, 0px, 0px)'}}>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="9">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-3.jpg" alt="Photography Image 3" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="10">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-5.jpg" alt="Photography Image 5" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="11">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-6.jpg" alt="Photography Image 6" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="12">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-8.jpg" alt="Photography Image 8" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" data-swiper-slide-index="13" style={{width: '350px', marginRight: '20px'}}>
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-9.jpg" alt="Photography Image 9" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="0">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-1.jpg" alt="Photography Image 1" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="1">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-2.jpg" alt="Photography Image 2" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="2">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-3.jpg" alt="Photography Image 3" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="3">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-5.jpg" alt="Photography Image 5" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide swiper-slide-prev" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="4">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-6.jpg" alt="Photography Image 6" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide swiper-slide-active" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="5">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-8.jpg" alt="Photography Image 8" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide swiper-slide-next" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="6">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-9.jpg" alt="Photography Image 9" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="7">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-1.jpg" alt="Photography Image 1" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                    <div className="swiper-slide" style={{width: '350px', marginRight: '20px'}} data-swiper-slide-index="8">
                      <img src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/marketing-2.jpg" alt="Photography Image 2" style={{objectFit: 'cover', width: '355px', height: '199.688px'}} />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
