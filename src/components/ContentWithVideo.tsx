import { useEffect, useRef } from 'react'

export default function ContentWithVideo() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const leftRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const r = entry.intersectionRatio
          if (r >= 0.5 && titleRef.current) {
            titleRef.current.classList.add('cv-active')
          }
          if (r >= 0.8) {
            leftRef.current?.classList.add('cv-active')
            rightRef.current?.classList.add('cv-active')
          }
        })
      },
      { threshold: [0.5, 0.8] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])
  return (
    <section ref={sectionRef} className="content-with-video-module___A_Jma__section section">
      {/* Top-centered section title */}
      <div className="content-with-video-module___A_Jma__title">
        <h2 ref={titleRef} className="ask-us-title cv-prep cv-from-up">Ask Us</h2>
      </div>
      <div className="content-with-video-module___A_Jma__content">
        <div ref={leftRef} className="section-2-module__BLO-eq__info cv-prep cv-from-left">
          <div>
            <h2>How do you sell your property with minimal stress?</h2>
            <h3>It's easy when you use an estate agent you can trust.</h3>
            <p>
              Our business is built on honesty and integrity. This is intrinsic in everything we do, we treat everyone
              individually, offering a bespoke service and advice to all our clients. We believe in putting you first,
              treating your sale or purchase as if it was our very own property.
            </p>
            <div className="animated-module__Rnzt8a__btn">
              <div className="animated-module__Rnzt8a__title animated-module__Rnzt8a__titleRight" style={{ borderColor: 'grey', color: 'white' }}>
                Find out more
              </div>
              <div className="animated-module__Rnzt8a__line animated-module__Rnzt8a__lineRight">
                <div className="line-module__2PkNtW__container" style={{ height: '2px', width: '6rem' }}>
                  <div className="line-module__2PkNtW__line line-module__2PkNtW__right" style={{ backgroundColor: '#6c9830', height: '2px', width: '6rem' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={rightRef} className="content-with-video-module___A_Jma__video cv-prep cv-from-right">
          <div className="console-module__pkht5q__container">
            <video
              src="https://storage.googleapis.com/integra-estates-website/videos/why-integra-estates.mp4#t=0.001"
              className="console-module__pkht5q__video"
              controls
            />
            <div className="console-module__pkht5q__playBtn" aria-hidden="true">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.5l7-4.5-7-4.5v9z"></path>
              </svg>
            </div>
          </div>
      </div>
    </section>
  )
}
