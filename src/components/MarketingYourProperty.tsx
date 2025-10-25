import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'
import GetInTouchSection from './GetInTouchSection'
import { Camera, Box, Palette, Video, Globe, FileText } from 'lucide-react'

export default function MarketingYourProperty() {
  const navigate = useNavigate()
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const promoVideoRef = useRef<HTMLVideoElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [animatingButton, setAnimatingButton] = useState<string | null>(null)
  const [pulseDots, setPulseDots] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50) // 50% default position
  const [, setIsVideoPlaying] = useState(false)
  const [showPlayOverlay, setShowPlayOverlay] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [videoDuration, setVideoDuration] = useState(0)
  const photographySectionRef = useRef<HTMLDivElement>(null)
  const virtualToursSectionRef = useRef<HTMLDivElement>(null)
  const photoStagingSectionRef = useRef<HTMLDivElement>(null)
  const promotionalVideosSectionRef = useRef<HTMLDivElement>(null)
  const onlineExposureSectionRef = useRef<HTMLDivElement>(null)
  const floorPlansSectionRef = useRef<HTMLDivElement>(null)
  const experiencedStaffSectionRef = useRef<HTMLDivElement>(null)
  const waitingBuyersSectionRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  
  const slideWidth = 370 // 350px width + 20px margin
  const totalSlides = 9 // Number of unique images
  const dotsToShow = 3 // Show only 3 dots

  useEffect(() => {
    const video = heroVideoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }, [])

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
    setTranslateX(-slideIndex * slideWidth)
  }

  const nextSlide = () => {
    setAnimatingButton('next')
    setPulseDots(true)
    const next = (currentSlide + 1) % totalSlides
    goToSlide(next)
    setTimeout(() => {
      setAnimatingButton(null)
      setPulseDots(false)
    }, 300)
  }

  const prevSlide = () => {
    setAnimatingButton('prev')
    setPulseDots(true)
    const prev = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    goToSlide(prev)
    setTimeout(() => {
      setAnimatingButton(null)
      setPulseDots(false)
    }, 300)
  }

  const scrollToPhotography = () => {
    if (photographySectionRef.current) {
      photographySectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToVirtualTours = () => {
    if (virtualToursSectionRef.current) {
      virtualToursSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToPhotoStaging = () => {
    if (photoStagingSectionRef.current) {
      photoStagingSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToPromotionalVideos = () => {
    if (promotionalVideosSectionRef.current) {
      promotionalVideosSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToOnlineExposure = () => {
    if (onlineExposureSectionRef.current) {
      onlineExposureSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToFloorPlans = () => {
    if (floorPlansSectionRef.current) {
      floorPlansSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }



  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    setShowPlayOverlay(false)
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
    setShowPlayOverlay(true)
  }

  const handlePlayButtonClick = () => {
    if (promoVideoRef.current) {
      if (promoVideoRef.current.paused) {
        promoVideoRef.current.play()
      } else {
        promoVideoRef.current.pause()
      }
    }
  }

  const handleVideoTimeUpdate = () => {
    if (promoVideoRef.current) {
      const progress = (promoVideoRef.current.currentTime / promoVideoRef.current.duration) * 100
      setVideoProgress(progress)
    }
  }

  const handleVideoLoadedMetadata = () => {
    if (promoVideoRef.current) {
      setVideoDuration(promoVideoRef.current.duration)
    }
  }

  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (promoVideoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const newTime = percentage * videoDuration
      promoVideoRef.current.currentTime = newTime
      setVideoProgress(percentage * 100)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <>
      <style>{`
        .impulse {
          animation: impulse 0.3s ease-in-out;
        }
        
        .pulse {
          animation: pulse 0.3s ease-in-out;
        }
        
        @keyframes impulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        .section-7-module__vdeoZG__icons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .section-7-module__vdeoZG__portalIcons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-7-module__vdeoZG__portalIcon {
          width: 120px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .section-7-module__vdeoZG__portalIcon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .section-7-module__vdeoZG__socialIcons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-7-module__vdeoZG__socialIcon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .section-7-module__vdeoZG__socialIcon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px) scale(1.1);
        }

        .section-7-module__vdeoZG__socialIcon svg {
          color: white;
          transition: color 0.3s ease;
        }

        .section-7-module__vdeoZG__socialIcon:hover svg {
          color: #6c9830;
        }
      `}</style>
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
              <button className="explore-marketing-btn animate-in-up" data-animate-delay="100" onClick={scrollToPhotography}>
                <div className="explore-marketing-btn-icon">
                  <Camera size={24} />
                </div>
                <span className="explore-marketing-btn-text">Photography</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="200" onClick={scrollToVirtualTours}>
                <div className="explore-marketing-btn-icon">
                  <Box size={24} />
                </div>
                <span className="explore-marketing-btn-text">360 Virtual Tours</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="300" onClick={scrollToPhotoStaging}>
                <div className="explore-marketing-btn-icon">
                  <Palette size={24} />
                </div>
                <span className="explore-marketing-btn-text">Photo Staging</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="400" onClick={scrollToPromotionalVideos}>
                <div className="explore-marketing-btn-icon">
                  <Video size={24} />
                </div>
                <span className="explore-marketing-btn-text">Promotional Videos</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="500" onClick={scrollToOnlineExposure}>
                <div className="explore-marketing-btn-icon">
                  <Globe size={24} />
                </div>
                <span className="explore-marketing-btn-text">On-Line Exposure</span>
              </button>

              <button className="explore-marketing-btn animate-in-up" data-animate-delay="600" onClick={scrollToFloorPlans}>
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
            <div className="marketing-your-property-section" ref={photographySectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Photography</h2>
              <article className="marketing-your-property-text animate-in-up">
                <p>A well-captured photograph can be worth a thousand or more compliments. We acknowledge that when perusing property listings, prospective buyers' initial focus is often on the imagery. We cannot overstate the importance of these photographs as they can prompt a prospective buyer to request a viewing. To ensure that we present your property in the best light possible. Our photography is handled internally to guarantee that it adheres to our elevated standards and accurately portrays your property.</p>
                
                <p>Additionally, this service is included in our 'no-sale no-fee agreement at no extra cost to you. After all, why should you be responsible for paying for photos when it is our responsibility as Estate Agents to market your property effectively.</p>

                <div className="swiper swiper-initialized swiper-horizontal section-3-module__U8BUtW__swiper" style={{ position: 'relative' }}>
                  <div className="swiper-wrapper" style={{cursor: 'grab', transitionDuration: '300ms', transform: `translate3d(${translateX}px, 0px, 0px)`}}>
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
                  
                  {/* Swiper Controls */}
                  <div className="property-slide-swiper-module__ZWA3Ca__swiperControls">
                    <button 
                      type="button" 
                      className={`property-slide-swiper-module__ZWA3Ca__swiperBtn ${animatingButton === 'prev' ? 'impulse' : ''}`} 
                      aria-label="Previous" 
                      onClick={prevSlide}
                    >
                      ←
                    </button>
                    <div className="property-slide-swiper-module__ZWA3Ca__swiperPagination">
                      {Array.from({ length: dotsToShow }, (_, index) => {
                        // Calculate which slide this dot represents
                        const slideIndex = Math.floor((currentSlide / totalSlides) * dotsToShow) + index
                        const actualSlideIndex = slideIndex % totalSlides
                        const isActive = actualSlideIndex === currentSlide
                        
                        return (
                          <span 
                            key={index}
                            className={`slider-dot ${isActive ? 'active' : ''} ${pulseDots ? 'pulse' : ''}`}
                            onClick={() => goToSlide(actualSlideIndex)}
                            style={{ cursor: 'pointer' }}
                          ></span>
                        )
                      })}
                    </div>
                    <button 
                      type="button" 
                      className={`property-slide-swiper-module__ZWA3Ca__swiperBtn ${animatingButton === 'next' ? 'impulse' : ''}`} 
                      aria-label="Next" 
                      onClick={nextSlide}
                    >
                      →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </AnimatedSection>

          {/* 360 Virtual Tours Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={virtualToursSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>360 Virtual Property Tours</h2>
              
              {/* Article */}
              <article className="marketing-your-property-text animate-in-up">
                <p>Our cutting-edge 360 degree virtual tours utilise advanced technology to provide potential buyers with the ability to virtually tour your property before scheduling an in-person viewing. This approach means that a greater proportion of viewings are from serious prospects, who have already virtually experienced the layout, flow, and presentation of your property.</p>
                
                <p>Our 360 virtual property tours significantly reduce the number of "just looking" candidates and increase the number of serious buyers who have already fallen in love with your home. This service is included in our 'no-sale no-fee agreement at no extra cost.</p>
              </article>
              
              {/* Iframe */}
              <div className="animate-in-up" style={{ marginTop: '2rem' }}>
                <iframe 
                  src="https://your3dperspective.co.uk/Integra2" 
                  className="on-screen-loading-module__zxNEcq__leftAnimation on-screen-loading-module__zxNEcq__leftAnimationActive section-4-module__d54Knq__iframe" 
                  style={{ 
                    animationDuration: '1000ms', 
                    animationDelay: '0ms', 
                    height: '374.625px',
                    width: '100%',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  title="360 Virtual Tour"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Digital Photo Staging Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={photoStagingSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Digital Photo Staging</h2>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                {/* Left Column - Interactive Comparison (60%) */}
                <div className="animate-in-up" style={{ flex: '0 0 60%' }}>
                  <div className="on-screen-loading-module__zxNEcq__rightAnimation on-screen-loading-module__zxNEcq__rightAnimationActive" style={{ width: '100%', animationDuration: '1000ms', animationDelay: '0ms' }}>
                    <div className="compare-image-module__4uvXQa__container" style={{ height: '100%', width: '100%' }}>
                      <div 
                        ref={sliderRef}
                        style={{ 
                          boxSizing: 'border-box', 
                          position: 'relative', 
                          width: '100%', 
                          height: '420.479px', 
                          overflow: 'hidden', 
                          display: 'block',
                          cursor: isDragging ? 'ew-resize' : 'default'
                        }} 
                        data-testid="container"
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img 
                          alt="staging after" 
                          data-testid="right-image" 
                          src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/staging-after.jpg" 
                          style={{ 
                            clipPath: `inset(0px 0px 0px ${sliderPosition}%)`, 
                            display: 'block', 
                            height: '100%', 
                            objectFit: 'cover', 
                            position: 'absolute', 
                            width: '100%' 
                          }} 
                        />
                        <img 
                          alt="staging before" 
                          data-testid="left-image" 
                          src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/staging-before.jpg" 
                          style={{ 
                            clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)`, 
                            display: 'block', 
                            height: '100%', 
                            objectFit: 'cover', 
                            position: 'absolute', 
                            width: '100%' 
                          }} 
                        />
                        <div 
                          style={{ 
                            alignItems: 'center', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            position: 'absolute', 
                            cursor: 'ew-resize', 
                            flexDirection: 'column', 
                            height: '100%', 
                            left: `${sliderPosition}%`, 
                            top: '0px', 
                            width: '40px',
                            transform: 'translateX(-50%)'
                          }}
                          onMouseDown={handleMouseDown}
                        >
                          <div style={{ background: '#ffffff', boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)', flex: '0 1 auto', height: '100%', width: '2px' }}></div>
                          <div style={{ alignItems: 'center', border: '2px solid #ffffff', borderRadius: '100%', boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)', boxSizing: 'border-box', display: 'flex', flex: '1 0 auto', height: '40px', justifyContent: 'center', width: '40px', transform: 'none' }}>
                            <div style={{ border: 'inset 6px rgba(0,0,0,0)', borderRight: '6px solid #ffffff', height: '0px', marginLeft: '-10px', marginRight: '10px', width: '0px' }}></div>
                            <div style={{ border: 'inset 6px rgba(0,0,0,0)', borderLeft: '6px solid #ffffff', height: '0px', marginRight: '-10px', width: '0px' }}></div>
                          </div>
                          <div style={{ background: '#ffffff', boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)', flex: '0 1 auto', height: '100%', width: '2px' }}></div>
                        </div>
                        
                        {/* Before Label - positioned on the image */}
                        <p 
                          className="compare-image-module__4uvXQa__leftLabel compare-image-module__4uvXQa__labelInactive"
                          style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                            margin: 0,
                            padding: '8px 16px',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: '4px',
                            opacity: sliderPosition < 50 ? 1 : Math.max(0, 1 - (sliderPosition - 50) / 30),
                            transform: `translateX(${sliderPosition < 50 ? 0 : -20}px)`,
                            transition: 'opacity 0.3s ease, transform 0.3s ease'
                          }}
                        >
                          Before
                        </p>
                        
                        {/* After Label - positioned on the image */}
                        <p 
                          className="compare-image-module__4uvXQa__rightLabel compare-image-module__4uvXQa__labelInactive"
                          style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                            margin: 0,
                            padding: '8px 16px',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            borderRadius: '4px',
                            opacity: sliderPosition > 50 ? 1 : Math.max(0, (sliderPosition - 20) / 30),
                            transform: `translateX(${sliderPosition > 50 ? 0 : 20}px)`,
                            transition: 'opacity 0.3s ease, transform 0.3s ease'
                          }}
                        >
                          After
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Article (40%) */}
                <article className="marketing-your-property-text animate-in-up" style={{ flex: '0 0 40%' }}>
                  <p>Estate agency professionals recognise that vacant homes tend to stay on the market longer because potential clients have difficulty imagining themselves in an empty property. By utilising Virtual Staging technology, clients can better visualise a property's full potential. Digital photos of empty rooms can be transformed with furnishings, rugs, and décor, providing clients with a more realistic and emotionally engaging experience. This service is included in our 'no-sale no-fee agreement at no extra cost.</p>
                </article>
              </div>
            </div>
          </AnimatedSection>

          {/* Property Promotional Videos Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={promotionalVideosSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Property Promotional Videos</h2>
              
              {/* Article */}
              <article className="marketing-your-property-text animate-in-up">
                <p>In today's market, effective property marketing is crucial as you're competing for potential buyers' attention against numerous other properties on well-known portals such as Rightmove and Zoopla. High-quality photographs, intriguing descriptions, and clear floor plans are essential, but we believe that more engagement is required to capture the viewer's attention. Consequently, we have developed our exclusive property videos. These property advertisements are meticulously crafted to highlight the standout features of your property, providing viewers with a more immersive and contemporary experience. Furthermore, our videos are easily accessible on Rightmove, Zoopla, PrimeLocation, as well as all of our social media platforms (Facebook, Twitter, Instagram & YouTube), at no additional cost as it is an in-house service. Below is an example of our promotional videos.</p>
              </article>
              
              {/* Video */}
              <div 
                className="animate-in-up" 
                style={{ marginTop: '2rem', position: 'relative' }}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                <video 
                  ref={promoVideoRef}
                  src="https://storage.googleapis.com/integra-estates-website/videos/marketing-promo.mp4#t=0.001" 
                  className="console-module__pkht5q__video"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    display: 'block'
                  }}
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onTimeUpdate={handleVideoTimeUpdate}
                  onLoadedMetadata={handleVideoLoadedMetadata}
                  onClick={handlePlayButtonClick}
                  preload="metadata"
                />
                
                {/* Play Control Overlay */}
                {showPlayOverlay && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={handlePlayButtonClick}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div 
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ color: '#333', marginLeft: '4px' }}
                      >
                        <polygon points="5,3 19,12 5,21"></polygon>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Video Controls Overlay */}
                {showControls && !showPlayOverlay && (
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                      padding: '20px',
                      borderRadius: '0 0 8px 8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Progress Bar */}
                    <div 
                      style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        marginBottom: '10px'
                      }}
                      onClick={handleSeekClick}
                    >
                      <div 
                        style={{
                          width: `${videoProgress}%`,
                          height: '100%',
                          backgroundColor: '#6c9830',
                          borderRadius: '3px'
                        }}
                      />
                    </div>
                    {/* Time and duration */}
                    <div style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                      <span>{formatTime(promoVideoRef.current?.currentTime || 0)}</span>
                      <span style={{ margin: '0 8px' }}>/</span>
                      <span>{formatTime(videoDuration || 0)}</span>
                    </div>
                    {/* Play/Pause Button */}
                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                      <button 
                        className="animated-module__Rnzt8a__btn"
                        onClick={handlePlayButtonClick}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="animated-module__Rnzt8a__title">{showPlayOverlay ? 'Play' : 'Pause'}</div>
                        <div className="animated-module__Rnzt8a__line">
                          <span className="animated-module__Rnzt8a__lineBar" />
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* On-Line Exposure Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={onlineExposureSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>On-Line Exposure</h2>
              
              {/* Article */}
              <article className="marketing-your-property-text animate-in-up">
                <p>Online marketing is a pivotal instrument in the promotion of your property, our website, Integra-estates.com, is a reputable destination for the latest sales instructions in the local area. It not only boasts an aesthetically pleasing appearance but also features advanced functionality to ensure that your property gains the attention of potential purchasers.</p>
                
                <p>Furthermore, when you list your property with us, it will be advertised on prominent property portals such as Rightmove, Zoopla, and Prime location, in addition to achieving extensive social media engagement. We give your property listing the exposure it deserves.</p>
              </article>
              
              {/* Portal and Social Icons */}
              <div className="animate-in-up" style={{ marginTop: '2rem' }}>
                <div className="on-screen-loading-module__zxNEcq__leftAnimation on-screen-loading-module__zxNEcq__leftAnimationActive section-7-module__vdeoZG__icons" style={{ animationDuration: '1000ms', animationDelay: '0ms' }}>
                  <div className="section-7-module__vdeoZG__portalIcons">
                    <img alt="rightmove" src="/svg/rightmove-white.svg" style={{ width: 'auto', height: '4rem' }} />
                    <img alt="zoopla" src="/svg/zoopla-white.svg" style={{ width: 'auto', height: '4rem' }} />
                    <img alt="prime-location" src="/svg/prime-location-white.svg" style={{ width: 'auto', height: '4rem' }} />
                  </div>
                  <div className="section-7-module__vdeoZG__socialIcons">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ width: '50px', height: '50px', color: 'white' }}>
                      <path fillRule="evenodd" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ width: '50px', height: '50px', color: 'white' }}>
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ width: '50px', height: '50px', color: 'white' }}>
                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                    </svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ width: '50px', height: '50px', color: 'white' }}>
                      <path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Floor Plans Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={floorPlansSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Floor Plans</h2>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                {/* Left Column - Article (50%) */}
                <article className="marketing-your-property-text animate-in-up" style={{ flex: '0 0 50%' }}>
                  <p>A floor plan is a crucial component of a property's marketing materials as it provides reliable and accurate information about the layout and dimensions of a home. Unlike images, which can be edited or taken from flattering angles, a floor plan presents an objective view of the property's layout, allowing buyers to make informed decisions. By including a floor plan in your property's marketing materials, you enable potential buyers to visualise the layout and flow of the property and make more informed decisions about whether the property suits their needs.</p>
                  
                  <p>Providing a floor plan is an essential element of effective property marketing, allowing potential buyers to access the information they need to make informed decisions about your property.</p>
                </article>
                
                {/* Right Column - Floor Plan Image (50%) */}
                <div className="animate-in-up" style={{ flex: '0 0 50%' }}>
                  <img alt="floorplan 1" src="https://storage.googleapis.com/integra-estates-website/imagesv2/marketing/floorplan-1.jpg" style={{ width: '100%', height: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Experienced Staff Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={experiencedStaffSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Experienced Staff</h2>
              
              {/* Article */}
              <article className="marketing-your-property-text animate-in-up">
                <p>At Integra-Estates, we ensure that only our full-time sales staff, who possess extensive knowledge of your property handle all viewings and sales negotiations. We refrain from employing Saturday staff or requesting that you conduct viewings, guaranteeing that your property receives expert and dedicated attention from our experienced professionals. We take pride in our ability to sell your property and treat it with the same level of care and consideration as we would our own home.</p>
              </article>
              
              {/* Meet the Team Button */}
              <div className="animate-in-up" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button 
                  className="animated-module__Rnzt8a__btn"
                  onClick={() => navigate('/meet-the-team')}
                  style={{ 
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #6c9830 0%, #5a7f28 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1rem 2rem',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Meet the team
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Waiting Buyers Section */}
          <AnimatedSection threshold={0.3}>
            <div className="marketing-your-property-section" ref={waitingBuyersSectionRef}>
              <h2 className="marketing-your-property-section-title animate-in-up" style={{ textAlign: 'center' }}>Waiting Buyers</h2>
              
              {/* Article */}
              <article className="marketing-your-property-text animate-in-up">
                <p>We maintain a database of active and qualified buyers, allowing us to promptly notify them when your property is launched in the market. This strategy jumpstarts your property marketing and generates interest among potential buyers. Moreover, buyers appreciate this approach as it assures them that they will not miss out on any valuable opportunities.</p>
                
                <p>We are dedicated to providing the highest level of service to ensure that your property is showcased in the most favourable way possible, leading to a speedy sale and top market value. Our meticulous attention to detail and free marketing strategies demonstrate our commitment to delivering the best possible outcome for you.</p>
              </article>
            </div>
          </AnimatedSection>

          {/* Get In Touch Section moved below to match homepage full-width */}
        </div>
      </div>
      </div>
      <AnimatedSection>
        <GetInTouchSection />
      </AnimatedSection>
    </>
  )
}
