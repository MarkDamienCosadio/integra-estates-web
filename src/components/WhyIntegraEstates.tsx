import AnimatedSection from './AnimatedSection'
import ScrollHint from './ScrollHint'
import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

type ValueSlide = {
  title: string
  text: string
  image: string
  alt: string
}

export default function WhyIntegraEstates() {
  const valuesSlides: ValueSlide[] = [
    {
      title: 'Complete Honesty and Integrity',
      text:
        "At Integra-Estates, our commitment to honesty and integrity is at the heart of everything we do. We're not your typical estate agency, our exceptional customer care and friendly approach set us apart from the rest. You can trust us to guide you through the process with ease and ensure you're always in good hands.",
      image: '/images/honesty-integrity-value.jpg',
      alt: 'Complete Honesty and Integrity',
    },
    {
      title: "We don't just sell homes, we build stronger communities",
      text:
        "At Integra-Estates, we're not just about selling properties, we're about making a positive impact on people's lives. We believe in giving back to our community and helping those in need. That's why we're committed to supporting local charities and individuals through our fundraising campaigns. From supporting the NHS to helping those less fortunate, we believe in our social responsibilities to make the world a better place. We don't just sell homes, we build stronger communities.",
      image: '/images/community-value.jpg',
      alt: "We don't just sell homes, we build stronger communities",
    },
    {
      title: 'We are human with a straight forward approach',
      text:
        "At Integra-Estates, we understand that your home is more than just a property, it's a place filled with memories and strong emotions. That's why we're obsessed with providing a service that treats your home as if it was one of our own. - we're human with our approach being honest with a focused on building lasting relationships based on trust and compassion. Our mission is to support you every step of the way and ensure that your biggest financial asset and emotional journey is in the best possible hands.",
      image: '/images/human-value.jpg',
      alt: 'We are human with a straight forward approach',
    },
  ]

  // Build an infinite loop by cloning ends: [last, ...slides, first]
  const slidesWithClones: ValueSlide[] = [
    valuesSlides[valuesSlides.length - 1],
    ...valuesSlides,
    valuesSlides[0],
  ]
  const total = slidesWithClones.length

  // Start at the first real slide (index 1)
  const [index, setIndex] = useState(1)
  const [disableTransition, setDisableTransition] = useState(false)

  const prev = () => setIndex((i) => i - 1)
  const next = () => setIndex((i) => i + 1)

  // After each transition, if we landed on a clone, jump to the real slide without animation
  const handleTransitionEnd = () => {
    if (index === total - 1) {
      // Moved onto the appended first-clone, jump to first real slide
      setDisableTransition(true)
      setIndex(1)
      // Re-enable transition on next tick
      setTimeout(() => setDisableTransition(false), 0)
    } else if (index === 0) {
      // Moved onto the prepended last-clone, jump to last real slide
      setDisableTransition(true)
      setIndex(valuesSlides.length)
      setTimeout(() => setDisableTransition(false), 0)
    }
  }

  // Ensure index stays within safe bounds if slides array ever changes
  useEffect(() => {
    if (index < 0) setIndex(0)
    if (index > total - 1) setIndex(total - 1)
  }, [index, total])

  const slideWidthPct = 100 / total
  const trackStyle: CSSProperties = {
    width: `${total * 100}%`,
    transform: `translateX(-${index * slideWidthPct}%)`,
    transition: disableTransition ? 'none' : 'transform 450ms ease',
  }

  return (
    <>
      <section className="why-integra-hero hero">
        <div className="why-integra-hero__bg" aria-hidden="true" />
        <div className="why-integra-hero__overlay" aria-hidden="true" />
        <AnimatedSection className="why-integra-hero__content" threshold={0}>
          <h1 className="hero-tag animate-in-up" data-animate-delay="0">Why Integra-Estates</h1>
        </AnimatedSection>
      </section>
      
      <AnimatedSection>
        <section className="why-integra-article">
          <div className="why-integra-article__container">
            <div className="why-integra-article__content animate-in-up" data-animate-delay="0">
              <h2>Selling with Integra-Estates</h2>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Bottom article with provided copy */}
      <AnimatedSection>
        <section className="sell-article">
          <div className="sell-article__container">
            <article className="sell-article__content">
              <p>
                Selling a home is a significant milestone in a homeowner's life. It is crucial to have a marketing partner that can help make the process smooth, efficient and successful. Integra-estates is the ideal choice to market your home. We challenge the stereotype of estate agents by embodying Integrity, honesty, professionalism and offer clear communication whilst achieving exceptional results.
              </p>
              <p>
                Our approach is straightforward: we provide a personalised and tailored estate agency service that covers both sales and lettings in South East London and Kent. We offer a blend of traditional methods, competitive pricing, outstanding customer service and top- tier marketing strategies to ensure an unparalleled level of service.
              </p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* Values section with two-column slider */}
      <AnimatedSection>
        <section className="values">
          <div className="values__container">
            <h2 className="values__title">Values</h2>

            <div className="values-slider">
              <div className="values-slider__viewport">
                {/* Track spans all slides, including clones; translate by one full slide fraction per index */}
                <div className="values-slider__track" style={trackStyle} onTransitionEnd={handleTransitionEnd}>
                  {slidesWithClones.map((s, i) => (
                    <div className="values-slide" key={i} style={{ flex: `0 0 ${slideWidthPct}%` }}>
                      <div className="values-slide__content">
                        <article>
                          <h3 className="values-slide__heading">{s.title}</h3>
                          <p>{s.text}</p>
                        </article>
                      </div>
                      <div className="values-slide__image">
                        <img src={s.image} alt={s.alt} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom controls */}
              <div className="values-slider__controls">
                <button aria-label="Previous" className="values-slider__nav values-slider__nav--prev" onClick={prev}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button aria-label="Next" className="values-slider__nav values-slider__nav--next" onClick={next}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ScrollHint widget for this page */}
      <ScrollHint />
    </>
  )
}
