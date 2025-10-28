import { useEffect, useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'

export default function VirtualTour360Page() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = heroVideoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  return (
    <>
      <div className="marketing-your-property-page">
        {/* Video Background */}
        <div className="marketing-your-property-hero">
          <video
            ref={heroVideoRef}
            className="marketing-your-property-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/cover-image.jpg"
            onLoadedData={() => heroVideoRef.current?.play().catch(() => {})}
            onError={() => { /* gracefully fallback to poster; avoid noisy errors */ }}
          >
            <source src="/video/360-video.mp4" type="video/mp4" />
          </video>

          {/* Video Overlay */}
          <div className="marketing-your-property-overlay" />

          {/* Hero Content */}
          <div className="marketing-your-property-hero-content">
            <AnimatedSection threshold={0.5}>
              <h1 className="marketing-your-property-title animate-in-up">360 Virtual Tour</h1>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scoped styles for virtual bullets layout */}
      <style>{`
        .virtual-bullets-module__bool7G__bulletsContainer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .virtual-bullets-module__bool7G__column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .virtual-bullets-module__bool7G__bulletContainer {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .virtual-bullets-module__bool7G__bulletTickContainer {
          flex-shrink: 0;
        }
        .virtual-bullets-module__bool7G__bulletTick {
          color: #6c9830;
        }
        .virtual-bullets-module__bool7G__bulletTitle {
          margin: 0 0 0.5rem 0;
        }
        .virtual-bullets-module__bool7G__bulletText {
          margin: 0;
        }
        /* Make the section wider on this page only */
        .virtual-tour-wide .marketing-your-property-container {
          max-width: 1400px;
        }
        /* See-in-360 layout */
        .see-in-360-section {
          margin-top: 3rem;
        }
        .see-in-360-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: 3rem;
           align-items: flex-start;
         }
         .see-in-360-grid article {
           text-align: center;
         }
         /* Add vertical spacing between consecutive grid rows */
         .see-in-360-grid + .see-in-360-grid {
           margin-top: 3rem;
           padding-top: 3rem;
           padding-bottom: 3rem;
         }
         .see-in-360-grid iframe {
           width: 100%;
           aspect-ratio: 16 / 9;
           height: auto;
           border: 2px solid #6c9830;
           border-radius: 12px;
         }
        @media (max-width: 768px) {
           .virtual-bullets-module__bool7G__bulletsContainer {
             grid-template-columns: 1fr;
           }
           .see-in-360-grid {
             grid-template-columns: 1fr;
           }
         }
       `}</style>

      {/* Content Section */}
      <div className="marketing-your-property-content virtual-tour-wide">
        <div className="marketing-your-property-container">
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section">
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Virtual Property tours</h2>
              <article className="marketing-your-property-text animate-in-up">
                <p>Virtual property tours have transformed the way homes are marketed, providing an immersive and interactive experience that brings your property to life online. Research shows that listings with virtual tours can generate significantly more enquiries and can drastically reduce time on the market. These 360-degree tours allow potential buyers to explore every corner of your home from the comfort of their own space, saving valuable time and effort for both sellers and buyers.</p>
                <p>At Integra Estates, we are proud to offer this innovative service completely free of charge because we’ve witnessed first-hand the exceptional results it delivers. Virtual tours not only significantly increase property exposure but also enhance buyer engagement, attracting serious interest and helping to secure faster, more competitive offers. They enable prospective buyers to visualise themselves in the property, with the majority of viewers saying they find virtual tours helpful in their decision-making process.</p>
                <p>By offering this advanced marketing solution, we ensure your property stands out in a competitive market. Promoted through property portals, social media platforms, and email campaigns, our high-quality, user-friendly virtual tours maximise reach and ensure your home gets the attention it truly deserves.</p>
                <p>Discover the power of virtual property tours and see why so many clients trust Integra Estates to showcase their homes. Let us help you achieve outstanding results while giving your property the edge it needs to succeed.</p>

                {/* Two-column bullets */}
                <div className="on-screen-loading-module__zxNEcq__rightAnimation on-screen-loading-module__zxNEcq__rightAnimationActive virtual-bullets-module__bool7G__bulletsContainer">
                  {/* Left column */}
                  <div className="virtual-bullets-module__bool7G__column">
                    <div className="virtual-bullets-module__bool7G__bulletContainer">
                      <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="virtual-bullets-module__bool7G__bulletTick" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="virtual-bullets-module__bool7G__bulletTitle">Increase Buyer Interest</h3>
                        <p className="virtual-bullets-module__bool7G__bulletText">With over 90% of buyers beginning their property search online, our 360° virtual property tours enable prospective buyers to conveniently explore your property, setting it apart from the competition.</p>
                      </div>
                    </div>

                    <div className="virtual-bullets-module__bool7G__bulletContainer">
                      <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="virtual-bullets-module__bool7G__bulletTick" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="virtual-bullets-module__bool7G__bulletTitle">Sell Properties Faster</h3>
                        <p className="virtual-bullets-module__bool7G__bulletText">Our virtual tours reduce the number of just-looking candidates and attract committed buyers, minimising disruptions for you and inviting more serious buyers requesting a physical viewing.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="virtual-bullets-module__bool7G__column">
                    <div className="virtual-bullets-module__bool7G__bulletContainer">
                      <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="virtual-bullets-module__bool7G__bulletTick" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="virtual-bullets-module__bool7G__bulletTitle">Achieve Higher Sale Price</h3>
                        <p className="virtual-bullets-module__bool7G__bulletText">Our 360° virtual tours often captivate multiple potential buyers, resulting in multiple offers and higher sale prices.</p>
                      </div>
                    </div>

                    <div className="virtual-bullets-module__bool7G__bulletContainer">
                      <div className="virtual-bullets-module__bool7G__bulletTickContainer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="virtual-bullets-module__bool7G__bulletTick" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="virtual-bullets-module__bool7G__bulletTitle">Free Of Charge</h3>
                        <p className="virtual-bullets-module__bool7G__bulletText">We believe our virtual tours significantly help with the sale of your home. As a testament to this belief, we provide them free of charge on our no-sale no-fee service.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>

          {/* See The Difference in 360° - no card container */}
          <AnimatedSection threshold={0.3}>
            <section className="see-in-360-section">
              <h2 className="marketing-your-property-section-title animate-in-up animate-active" style={{ textAlign: 'center' }}>See The Difference in 360°</h2>
              <div className="see-in-360-grid">
                <div className="animate-in-up animate-active">
                  <iframe
                    src="https://your3dperspective.co.uk/Integra4/"
                    className="half-and-half-module__vLAi-a__iframe half-and-half-module__vLAi-a__leftAnimation half-and-half-module__vLAi-a__leftAnimationActive"
                    style={{ width: '100%', aspectRatio: '16 / 9', height: 'auto' }}
                    loading="lazy"
                    allowFullScreen
                    title="See The Difference in 360°"
                  />
                </div>
                <article className="marketing-your-property-text animate-in-up animate-active">
                  <p>We at Integra-estates believe in the power of 360-degree virtual tours so much that we offer it to our vendors free of charge. This is because we understand the impact it can have on a property's saleability. Not only does it increase the number of interested buyers, but it also enhances the marketing of the property, making it stand out from the crowded competition.</p>
                </article>
              </div>

              {/* Additional two-column row: left iframe, right article */}
              <div className="see-in-360-grid">
                <div className="animate-in-up animate-active">
                  <iframe
                    src="https://your3dperspective.co.uk/Integra2/"
                    className="half-and-half-module__vLAi-a__iframe half-and-half-module__vLAi-a__rightAnimation half-and-half-module__vLAi-a__rightAnimationActive"
                    style={{ width: '100%', aspectRatio: '16 / 9', height: 'auto' }}
                    loading="lazy"
                    allowFullScreen
                    title="360° Tour - Additional"
                  />
                </div>
                <article className="marketing-your-property-text animate-in-up animate-active">
                  <p>Any potential purchaser is able to share the virtual tour with loved ones to get their opinion on the property on offer. This feature is particularly useful. It allows them to share the experience of viewing the property and receive feedback from trusted family and friends, which can help to confirm their decision and enhance the experience when friends and family are involved. This helps to cement the purchaser’s decision-making, which results in a significantly higher success rate.</p>
                </article>
              </div>

               {/* New single-column row: iframe (Integra3) then article (transparency) */}
               <div className="see-in-360-grid">
                 <div className="animate-in-up animate-active">
                   <iframe
                     src="https://your3dperspective.co.uk/Integra3/"
                     className="half-and-half-module__vLAi-a__iframe half-and-half-module__vLAi-a__leftAnimation half-and-half-module__vLAi-a__leftAnimationActive"
                     style={{ width: '100%', aspectRatio: '16 / 9', height: 'auto' }}
                     loading="lazy"
                     allowFullScreen
                     title="360° Tour - Revisit"
                   />
                 </div>
                 <article className="marketing-your-property-text animate-in-up animate-active">
                   <p>Furthermore, virtual tours offer a level of transparency that traditional video tours cannot match. Buyers can see every detail of the property. This level of transparency builds trust and confidence in the buying process, which can ultimately lead to a successful sale.</p>
                   <p>Like Integra-estates, 360-degree virtual tours are becoming an increasingly popular and effective way to market and sell properties.</p>
                 </article>
               </div>

            </section>
          </AnimatedSection>
        </div>
      </div>

      {/* Get In Touch Section */}
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </>
  )
}