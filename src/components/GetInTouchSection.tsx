
import { useEffect, useRef } from 'react'

export default function GetInTouchSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const leftRefs = useRef<HTMLDivElement[]>([])
  const rightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const r = entry.intersectionRatio
          if (r >= 0.5 && titleRef.current) {
            titleRef.current.classList.add('askus-active')
          }
          if (r >= 0.8) {
            leftRefs.current.forEach((el) => el.classList.add('askus-active'))
            rightRef.current?.classList.add('askus-active')
          }
        })
      },
      { threshold: [0.5, 0.8] }
    )
    io.observe(sec)
    return () => io.disconnect()
  }, [])
  return (
    <section ref={sectionRef} className="get-in-touch-module__NVY_Ga__section section">
      <div className="get-in-touch-module__NVY_Ga__content">
        <div className="get-in-touch-module__NVY_Ga__info">
          <div>
            <h2 ref={titleRef} className="askus-prep askus-from-up">Let's Talk</h2>
          </div>
          <div
            ref={(el) => { if (el) leftRefs.current[0] = el }}
            className="askus-prep askus-from-left"
          >
            <p>
              If you want to discuss your property, plans for the future, or just want some friendly advice. There'll be no pressure,
              Just equal measures of common sense and expert advice to point you in the right direction.
            </p>
          </div>
          <div
            ref={(el) => { if (el) leftRefs.current[1] = el }}
            className="askus-prep askus-from-left"
          >
            <div className="get-in-touch-module__NVY_Ga__btn">
              <div className="animated-module__Rnzt8a__btn">
                <div
                  className="animated-module__Rnzt8a__title animated-module__Rnzt8a__titleRight"
                  style={{ borderColor: 'grey', color: 'white' }}
                >
                  Get In Touch
                </div>
                <div className="animated-module__Rnzt8a__line animated-module__Rnzt8a__lineRight">
                  <div className="line-module__2PkNtW__container" style={{ height: '2px', width: '6rem' }}>
                    <div
                      className="line-module__2PkNtW__line line-module__2PkNtW__right"
                      style={{ backgroundColor: '#6c9830', height: '2px', width: '6rem' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={rightRef} className="get-in-touch-module__NVY_Ga__image askus-prep askus-from-right">
        <img
          src="https://storage.googleapis.com/integra-estates-website/imagesv2/get-in-touch.png"
          alt="get in touch"
          style={{ width: '100%', height: '100%' }}
          className="get-in-touch-module__NVY_Ga__img"
        />
      </div>
    </section>
  )
}