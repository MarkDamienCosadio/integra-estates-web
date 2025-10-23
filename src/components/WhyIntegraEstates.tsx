import AnimatedSection from './AnimatedSection'
import ScrollHint from './ScrollHint'
import GetInTouchSection from './GetInTouchSection'
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
        "At Integra-Estates, our commitment to honesty and integrity is at the heart of everything we do. We're not your typical estate agency, our exceptional customer care and friendly approach set us apart from the rest. You can trust us to guide you through the process with ease and ensure you'r...",
      image: '/images/honesty-integrity-value.jpg',
      alt: 'Complete Honesty and Integrity',
    },
    {
      title: "We don't just sell homes, we build stronger communities",
      text:
        "At Integra-Estates, we're not just about selling properties, we're about making a positive impact on people's lives. We believe in giving back to our community and helping those in need. That's why we're committed to supporting local charities and individuals through our fundraising campaig...",
      image: '/images/community-value.jpg',
      alt: "We don't just sell homes, we build stronger communities",
    },
    {
      title: 'We are human with a straight forward approach',
      text:
        "At Integra-Estates, we understand that your home is more than just a property, it's a place filled with memories and strong emotions. That's why we're obsessed with providing a service that treats your home as if it was one of our own. - we're human with our approach being honest with a foc...",
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
  const [isSliding, setIsSliding] = useState(false)

  const prev = () => { setIsSliding(true); setIndex((i) => i - 1) }
  const next = () => { setIsSliding(true); setIndex((i) => i + 1) }

  // After each transition, if we landed on a clone, jump to the real slide without animation
  const handleTransitionEnd = () => {
    if (index === total - 1) {
      // Moved onto the appended first-clone, jump to first real slide without visible reverse motion
      setDisableTransition(true)
      requestAnimationFrame(() => {
        setIndex(1)
        requestAnimationFrame(() => {
          setDisableTransition(false)
        })
      })
    } else if (index === 0) {
      // Moved onto the prepended last-clone, jump to last real slide seamlessly
      setDisableTransition(true)
      requestAnimationFrame(() => {
        setIndex(valuesSlides.length)
        requestAnimationFrame(() => {
          setDisableTransition(false)
        })
      })
    }
    // Transition complete; stop dots animation
    setIsSliding(false)
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

  // Reviews slider data (from ClientsSay.tsx)
  type Review = { name: string; text: string }
  const reviews: Review[] = [
    { name: 'Alan Norman', text: 'We recently purchased a property in Little Common, Bexhill on Sea, East Sussex, where the selling agent was Integra Estates. The chain involved five properties and we can’t thank Tom enough for his assistance throughout the negotiations. He was always professional, combined with a friendly manner. Without his tenacity I doubt we would have achieved a successful result. Our experience of dealing with Integra Estates was one of confidence and reliability, showing the benefit of dealing with an organisation where customer service is a priority.' },
    { name: 'Jackie Ross', text: 'Simply could not have asked for better service. Tom was kind, understanding and always communicative. My parents are both in their late eighties so needed some TLC and guidance and Tom was excellent at both. He really went the extra mile with the personal touch. Would highly recommend using Integra for your next move.' },
    { name: 'Adele Caddell', text: "Not enough words to describe how brilliant Tom has been from start to finish. Don't know what I'd had done without him. So professional but equally so personable, a true gem and it has been a privilege to have trusted him with the sale of my property. Can't thank him enough. wish there were more stars to rate him!" },
    { name: 'Lauren Jensch', text: "Our experience with Michael & Tom from Integra Estates has been absolutely brilliant. ... We would highly recommend them!" },
    { name: 'Shirley Saunders', text: 'My experience using integra has been nothing short of outstanding. Nothing was too much trouble, Michael continually goes above and beyond, keeping us always informed while ensuring everything progressed smoothly at all stages of our house sale.' },
    { name: 'Maii Medhat', text: "If I could give Tom and Michael 100 stars, I would... You won't regret it!" },
    { name: 'Frances Brooker', text: 'We had an excellent experience selling with Integra-Estates. Thomas had very good local knowledge and contacts and helped us through the process every step of the way. The communication was superb... We highly recommend Integra-Estates and would definitely use them again.' },
    { name: 'Emma Kondolomo', text: 'We are so pleased that we chose Integra- Estates to sell our property. Tom has guided us through the minefield of selling and buying our properties... We can’t recommend Integra-estates highly enough.' },
    { name: 'Beverley Stanislaus', text: 'Integra-Estates, a top notch Estate Agents that fulfils its values in abundance... I highly recommend and guarantee you will receive exceptional service and great value for money.' },
    { name: 'Lucy Galloway', text: "A huge shout out to Integra Estate Agents. Tom and Michael have been amazing for the sale and purchase of our properties... If you are looking for an agent to sell your home you won't be disappointed with these guys I promise you!" },
    { name: 'Hannah Spiller', text: '5 Star ++++++ I cannot recommend Thomas Bailey , Michael Baggot and the team at Integra-Estates more highly, they were outstanding!... If you are selling your property I highly recommend the team at Integra.' },
    { name: 'Kayleigh Hemmings', text: 'Amazing estate agents, on the ball friendly and knowledgeable about their areas. Cannot speak more highly about Michael as an agent, moved the whole process along smoothly. Would recommend' },
    { name: 'Nick & Rebecca', text: 'A great experience, professional and responsive throughout but with genuine personalised customer service... A refreshingly great experience and would recommend.' },
    { name: 'Matthew Howard', text: 'We found these guys lovely to work with. Very pleasant personally and most helpful and competent when dealing with unforeseen hiccups... Thanks Integra.' },
    { name: 'Anastasia Ustinova', text: 'Working with Michael and Thomas from Integra Estates has been a great experience from start to finish!...' },
    { name: 'Judy Buenfeld', text: 'I need to tell everyone how hard Thomas worked to sell my mixed use property... Absolutely excellent service.' },
    { name: 'Mandy Mulhall', text: 'I would like to say a Big thank you to Integra-Estates for all the help and great service in selling my parents home... I would definitely recommend this company.' },
    { name: "Lauren O'Neill", text: "The best service I have ever received from an Estate agent. Tom and his colleagues are professional and have extensive experience, as well as the all-important personal touch. I wouldn't go to anyone else if I were to buy or sell in the future. Thank you!" },
    { name: 'AMY SHADBOLT', text: 'A great professional company to work with. Tom has extensive knowledge and exactly the right approach... Would definitely recommend!' },
    { name: 'Kate Aujla', text: 'Tom and the team were absolutely amazing from start to finish... I will definitely recommend and should I move again would only use Integra Estates.' },
    { name: 'Wendy Ive', text: 'Extremely good service. I cannot fault the assistance Thomas gave me over a difficult sale and purchase... I can thoroughly recommend Integra Estates.' },
    { name: 'Helen Watts', text: 'Amazing service from Tom & Michael, cannot recommend them highly enough... Property marketing content was outstanding.' },
    { name: 'Amanda Ebbs', text: 'I cannot recommend these guys enough! From the moment we met Michael, he has gone over and above to help through the whole process... If you are thinking of selling or buying a property I would look no further than Integra estates!' },
    { name: 'Chris Gale', text: 'Thomas and Michael at Integra Estates have given me a first class service... I highly recommend them and will certainly work with them again.' },
    { name: 'Claudette Archer', text: "Honestly, having Thomas Bailey in my corner proved to be an absolute God-send... a true professional... who will definitely get you across the finish line." },
    { name: 'Brett Rossi', text: 'Michael has been a pleasure to work with and made us buying our home a great experience... Would recommend!' },
    { name: 'Katie Alderson', text: 'Michael has been brilliant and has turned our first home purchase into a stress free and enjoyable experience... Thank you!' },
    { name: 'Philip Szlapak', text: 'I’m happy to report my experience of Integra was very positive despite a difficult market... Highly recommended and great value for money.' },
    { name: 'Melanie Adams', text: 'So impressed with the professionalism and knowledge of Tom and his team... We were very impressed and will continue to use and recommend' },
    { name: 'Jake Perkins', text: 'Love the 3D tour recommendation and regular updates' },
    { name: 'Debbie Risby', text: 'Fabulous online business. Great communication, honest advice and wonderful team. Would definitely recommend' },
    { name: 'Fiona Price', text: 'Warren and Tom do exactly what they say they will do... Would have no hesitation in recommending these guys.' },
    { name: 'Jamie Robbins', text: 'Easy to deal with, efficient and friendly. Totally breaking the mould of what you expect from an estate agent.' },
    { name: 'Weybudur Rahman', text: 'We dealt with Warren and he was amazing to work with in helping us secure our first family home... Will definitely recommend Warren and Integra Estates' },
    { name: 'Danielle Parker', text: 'Thank you Tom and team for the great communication throughout the process. Your company is second to none.' },
    { name: 'Peter Chiu', text: 'Using Integra-estates was nothing but a pleasure... Great agents and great people. This is how estate agents should be… No pressure.' },
    { name: 'Lennie Dennis', text: 'Thomas is unbelievable, he looks into every fine detail of the job... I strongly recommend them.' },
    { name: 'Elsa Butler', text: 'Excellent caring and efficient service. Nothing is too much trouble. Would recommend highly 5 star care. Many Thanks.' },
    { name: 'Kerry-Jo Reilly', text: 'Integra Estates are definitely the best estate agents I’ve ever dealt with... I can’t recommend them highly enough if you’re looking to buy or sell.' },
    { name: 'Amanda Austen', text: "Tom at Integra was very 'on it' ; available to sort out issues and constructive... I will recommend him to anyone who wants to sell or buy in SE20" },
    { name: 'Sandra Abley', text: 'Can’t speak highly enough of Michael and Tom... Very professional and certainly know their stuff.' },
    { name: 'S Jeffery', text: 'Dealing with Tom and the team has been nothing but a pleasure... I cannot thank them enough for their hard work, patience and commitment.' },
    { name: 'Suna Murrell', text: 'Had a great experience with these guys... Highly recommend using Integra Estate agents.' },
    { name: 'Darren Carpenter', text: '... Such a positive experience mainly down to the communication and regular updates that I had from the guys. I would recommend them in a heartbeat to anyone.' },
    { name: 'Leah Jacobs-Gordon', text: 'From beginning to end Thomas at Integra Estates has been nothing but amazing... Thanks very much Integra!' },
    { name: 'Karen Burke', text: 'We had Thomas look after us and he made the whole long process more bearable... We would highly recommend them in your journey.' },
    { name: 'Kristine Golding', text: 'If I could give more stars I would... I fully recommend Thomas Bailey of Integra Estates.' },
    { name: 'Louise Pinchin', text: 'We used Integra Estates after they were recommended to us by a friend... we cannot thank you enough and won’t hesitate to use you in the future.' },
    { name: 'Ben Whur', text: 'We recently sold a retirement flat through Integra... The sales process was very smooth, carefully managed and sensitively handled.' },
    { name: 'Simon kearsley', text: 'The knowledge and professionalism that Tom brings to the house buying process really shows through.... The whole process was made so easy... whole heartedly recommend Integra-Estates.' },
  ]

  // Build loopable track for reviews
  const reviewsWithClones: Review[] = [
    reviews[reviews.length - 1],
    ...reviews,
    reviews[0],
  ]
  const reviewsTotal = reviewsWithClones.length

  const [reviewsIndex, setReviewsIndex] = useState(1)
  const [reviewsDisableTransition, setReviewsDisableTransition] = useState(false)
  const [reviewsIsSliding, setReviewsIsSliding] = useState(false)

  const reviewsPrev = () => { setReviewsIsSliding(true); setReviewsIndex((i) => i - 1) }
  const reviewsNext = () => { setReviewsIsSliding(true); setReviewsIndex((i) => i + 1) }

  const handleReviewsTransitionEnd = () => {
    if (reviewsIndex === reviewsTotal - 1) {
      setReviewsDisableTransition(true)
      requestAnimationFrame(() => {
        setReviewsIndex(1)
        requestAnimationFrame(() => {
          setReviewsDisableTransition(false)
        })
      })
    } else if (reviewsIndex === 0) {
      setReviewsDisableTransition(true)
      requestAnimationFrame(() => {
        setReviewsIndex(reviews.length)
        requestAnimationFrame(() => {
          setReviewsDisableTransition(false)
        })
      })
    }
    setReviewsIsSliding(false)
  }

  useEffect(() => {
    if (reviewsIndex < 0) setReviewsIndex(0)
    if (reviewsIndex > reviewsTotal - 1) setReviewsIndex(reviewsTotal - 1)
  }, [reviewsIndex, reviewsTotal])

  const reviewsSlideWidthPct = 100 / reviewsTotal
  const reviewsTrackStyle: CSSProperties = {
    width: `${reviewsTotal * 100}%`,
    transform: `translateX(-${reviewsIndex * reviewsSlideWidthPct}%)`,
    transition: reviewsDisableTransition ? 'none' : 'transform 450ms ease',
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
            <h2 className="ask-us-title">Values</h2>

            <div className="values-slider">
              <div className="values-slider__viewport">
                {/* Track spans all slides, including clones; translate by one full slide fraction per index */}
                <div className="values-slider__track" style={trackStyle} onTransitionEnd={handleTransitionEnd}>
                  {slidesWithClones.map((s, i) => (
                    <div className="values-slide" key={i} style={{ flex: `0 0 ${slideWidthPct}%` }}>
                      <div className="values-slide__heading-wrap">
                        <h3 className="values-slide__heading">{s.title}</h3>
                      </div>
                      <div className="values-slide__content">
                        <article>
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
              <div className="values-slider__controls" aria-live="polite">
                <button type="button" aria-label="Previous" className="values-slider__nav values-slider__nav--prev" onClick={prev}>
                  <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
                    <line x1="14" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <polygon points="18,6 6,12 18,18" fill="currentColor" />
                  </svg>
                </button>

                <div className={`values-slider__dots-ellipsis${isSliding ? ' values-slider__dots-ellipsis--animating' : ''}`} aria-hidden="true">
                  <span className="values-slider__dot-ellipse" />
                  <span className="values-slider__dot-ellipse" />
                  <span className="values-slider__dot-ellipse" />
                </div>

                <button type="button" aria-label="Next" className="values-slider__nav values-slider__nav--next" onClick={next}>
                  <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
                    <line x1="4" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <polygon points="26,12 14,6 14,18" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="maximum-exposure section">
          <div className="container">
            <h2 className="ask-us-title animate-in-up" data-animate-delay="0">Maximum Exposure, Minimum Hassle</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'stretch', minHeight: '300px' }}>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%' }}>
                <article>
                  <p>
                    The emergence of the internet has fundamentally transformed how property marketing is conducted, not just in the UK but worldwide. According to rightmove.co.uk, over 96% of people begin their property search online, with a growing number utilising smartphones and tablets. Despite this trend, some traditional estate agents have largely failed to adapt their online strategies with an approach of advertising on property platforms and hoping for the best.
                  </p>
                  <p>
                    At our agency, we take a different approach. We prioritise making your property stand out in a crowded market through professional quality photography, 360° virtual property tours, floorplans, promotional videos, social media engagement, and advertising on leading platforms such as Rightmove, Zoopla, Prime Location, Our goal is to ensure that your property is presented in the most favourable light possible, is seen by the widest audience possible, and ultimately achieves a premium price in a timely manner. By eliminating high street offices, we can provide an exceptional service at highly competitive fees.
                  </p>
                </article>
              </div>
              <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%' }}>
                <img src="/images/section-4-img.jpg" alt="Maximum Exposure, Minimum Hassle" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* New section: Clear Communication for a Stress-Free Sale */}
      <AnimatedSection>
        <section className="clear-communication section">
          <div className="container">
            <h2 className="ask-us-title animate-in-up" data-animate-delay="0">Clear Communication for a Stress-Free Sale</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'stretch', minHeight: '300px' }}>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/section-5-img.jpg" alt="Clear Communication for a Stress-Free Sale" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
              <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%', alignSelf: 'stretch' }}>
                <article style={{ height: '100%' }}>
                  <p>
                    One of the most important aspects of the selling process is deal progression. This refers to the various stages that a sale goes through, from initial negotiations right down to exchange and completion. At Integra-Estates, we recognise the importance of keeping all parties informed at each stage of the process.
                  </p>
                  <p>
                    Our experience in the property market have given us the expertise to manage even the most complex of chains. We understand that property sales can often involve a chain of multiple buyers and sellers, which can be difficult to navigate. However, our experience and knowledge of the industry enable us to overcome any concerns or hurdles that may arise during the selling journey. Our ability to manage complex chains and overcome obstacles ensures that our clients have a seamless selling experience.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* New section: No Highstreet offices. */}
      <AnimatedSection>
        <section className="no-highstreet section">
          <div className="container">
            <h2 className="ask-us-title animate-in-up" data-animate-delay="0">No Highstreet offices.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'stretch', minHeight: '300px' }}>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%', alignSelf: 'stretch' }}>
                <article style={{ height: '100%' }}>
                  <p>
                    The solution to modern estate agency is clear. High street offices are no longer a necessity in today's digital age, as 96% of people now search online for properties, according to Rightmove. It's impossible to imagine someone searching for a property to buy or rent without utilising one of the major UK portals, such as Rightmove, Zoopla, or PrimeLocation.
                  </p>
                  <p>
                    We recognise this trend and don't invest in unnecessary high street offices. Instead, we prioritise bespoke marketing that results in an exceptional service. By avoiding the expenses of pricey high street premises, we can provide customers with access to professional photographers and advanced marketing techniques free of charge, as well as expert valuers and negotiators who prioritise delivering the highest levels of client care.
                  </p>
                  <p>
                    Our streamlined, efficient operations allow us to pass on the savings to our customers with highly competitive rates. In today's market, we believe this approach is the future of estate agency.
                  </p>
                <a className="btn btn--accent" href="#" aria-label="Advanced Marketing Techniques">Advanced Marketing Techniques</a>
                </article>
              </div>
              <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%', alignSelf: 'stretch' }}>
                <img src="/images/section-7-img.jpg" alt="No Highstreet offices." style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* New section: Exceptional Service from Exceptional People */}
      <AnimatedSection>
        <section className="exceptional-service section">
          <div className="container">
            <h2 className="ask-us-title animate-in-up" data-animate-delay="0">Exceptional Service from Exceptional People</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'stretch', minHeight: '300px' }}>
              <div className="animate-in-left" data-animate-delay="120" style={{ height: '100%' }}>
                <article>
                  <p>
                    The backbone of any successful business lies in its people. At our agency, we have carefully curated an exceptional team of property professionals who are masters in their respective fields. Each member possesses an unrivalled attention to detail and work ethic that surpasses the standard level of estate agency services. Our team undergoes extensive training and operates under a strict code of practice in accordance with professional bodies.
                  </p>
                  <p>
                    Our people are committed to delivering exceptional levels of service while achieving optimal results for our clients. They leverage their expertise and guide you through the entire process, providing invaluable insights and personalised attention. Additionally, our team possesses detailed knowledge of the local area and a deep understanding of the communities we serve. We specialise in matching people with the right property.
                  </p>
                </article>
                <a className="btn btn--accent" href="/meet-the-team" aria-label="Meet The Team">Meet The Team</a>
              </div>
              <div className="animate-in-right" data-animate-delay="240" style={{ height: '100%' }}>
                <img src="/images/section-6-img.jpg" alt="Exceptional Service from Exceptional People" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)' }} />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* New section: Take It From Them */}
      <AnimatedSection>
        <section className="take-it-from-them section">
          <div className="values__container">
            <h2 className="ask-us-title">Take It From Them</h2>

            <div className="values-slider">
              <div className="values-slider__viewport">
                <div
                  className="values-slider__track"
                  style={reviewsTrackStyle}
                  onTransitionEnd={handleReviewsTransitionEnd}
                >
                  {reviewsWithClones.map((r, i) => (
                    <div className="values-slide" key={i} style={{ flex: `0 0 ${reviewsSlideWidthPct}%` }}>
                      <div className="values-slide__content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', padding: '1rem' }}>
                        <article style={{ maxWidth: '800px', textAlign: 'center' }}>
                          <p style={{ margin: 0 }}>
                            "{r.text}"
                          </p>
                          <p style={{ marginTop: '0.75rem', fontStyle: 'italic', fontSize: '1.375rem' }}>— {r.name}</p>
                        </article>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="values-slider__controls" aria-live="polite">
                <button type="button" aria-label="Previous" className="values-slider__nav values-slider__nav--prev" onClick={reviewsPrev}>
                  <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
                    <line x1="14" y1="12" x2="36" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <polygon points="18,6 6,12 18,18" fill="currentColor" />
                  </svg>
                </button>

                <div className={`values-slider__dots-ellipsis${reviewsIsSliding ? ' values-slider__dots-ellipsis--animating' : ''}`} aria-hidden="true">
                  <span className="values-slider__dot-ellipse" />
                  <span className="values-slider__dot-ellipse" />
                  <span className="values-slider__dot-ellipse" />
                </div>

                <button type="button" aria-label="Next" className="values-slider__nav values-slider__nav--next" onClick={reviewsNext}>
                  <svg width="40" height="24" viewBox="0 0 40 24" aria-hidden="true">
                    <line x1="4" y1="12" x2="26" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <polygon points="26,12 14,6 14,18" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Get In Touch section */}
      <GetInTouchSection />

      {/* ScrollHint widget for this page */}
      <ScrollHint />
    </>
  )
}
