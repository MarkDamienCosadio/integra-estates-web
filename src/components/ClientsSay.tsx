import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function ClientsSay() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const [swiperInst, setSwiperInst] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<{ name: string; text: string } | null>(null)

  useEffect(() => {
    const el = titleRef.current
    const logo = logoRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          if (el.classList.contains('rs-prep')) {
            el.classList.add('rs-active')
          } else {
            el.classList.add('animate-active')
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    if (logo) io.observe(logo)
    if (gridRef.current) io.observe(gridRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section">
      <div className="section-4-module__KR0FYq__inner container">
        <div className="section-4-module__KR0FYq__titleContainer" style={{ marginTop: '2rem' }}>
          <h2 ref={titleRef} className="ask-us-title animate-in-up">What Our Clients Say</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img
            ref={logoRef}
            className="animate-in-left"
            src="/svg/google-logo-with-stars.svg"
            alt="Google rating"
            style={{ height: '90px' }}
          />
          <p className="ask-us-title" style={{ fontSize: '1.25rem', borderBottom: 'none', margin: '1.5rem 0 0 0' }}>Excellent</p>
        </div>

        {/* Reviews slider (single row with arrows) */}
        <div
          ref={gridRef}
          className="section-4-module__K9P0s__slider rs-prep rs-from-right rs-active"
          style={{
            marginTop: '1.5rem',
            width: 'calc(100vw - 6rem)',
            marginLeft: 'calc(50% - 50vw + 3rem)',
            marginRight: 'calc(50% - 50vw + 3rem)'
          }}
        >
          <Swiper
            spaceBetween={8}
            slidesPerView={5}
            loop={true}
            loopAdditionalSlides={50}
            loopPreventsSliding={false}
            slidesPerGroup={1}
            rewind={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              560: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
            }}
            onSwiper={setSwiperInst}
          >
          {[ 
            { name: 'alan norman', text: 'We recently purchased a property in Little Common, Bexhill on Sea, East Sussex, where the selling agent was Integra Estates. The chain involved five properties and we can’t thank Tom enough for his assistance throughout the negotiations. He was always professional, combined with a friendly manner. Without his tenacity I doubt we would have achieved a successful result. Our experience of dealing with Integra Estates was one of confidence and reliability, showing the benefit of dealing with an organisation where customer service is a priority.' },
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
            { name: "Melanie Adams", text: 'So impressed with the professionalism and knowledge of Tom and his team... We were very impressed and will continue to use and recommend' },
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
          ].map((r, i) => (
            <SwiperSlide key={i}>
              <div className="review-module__9BlZDW__review" style={{ height: '100%' }}>
                <div>
                  <div className="review-module__9BlZDW__topLine">
                    <h3 className="review-module__9BlZDW__name">{r.name}</h3>
                    <div className="review-module__9BlZDW__googleIcon">
                      <img src="/svg/google-icon.svg" alt="google icon" style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div className="review-module__9BlZDW__stars">
                    <img src="/svg/five-star.svg" alt="five star" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <p className="review-module__9BlZDW__text">{r.text}</p>
                </div>
                <button
                  type="button"
                  className="review-module__9BlZDW__btn"
                  onClick={() => { setSelectedReview(r); setIsModalOpen(true) }}
                >
                  Read More
                </button>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          <div className="property-slide-swiper-module__ZWA3Ca__swiperControls">
            <div onClick={() => swiperInst?.slidePrev()}>
              <div className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Previous">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="property-slide-swiper-module__ZWA3Ca__swiperPagination" style={{ width: '120px' }}></div>
            <div onClick={() => swiperInst?.slideNext()}>
              <div className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Next">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && selectedReview && (
          <div role="dialog" aria-modal="true" className="clients-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="clients-modal" onClick={(e) => e.stopPropagation()}>
              <button type="button" aria-label="Close" className="clients-modal-close" onClick={() => setIsModalOpen(false)}>
                ✕
              </button>
              <h3 className="ask-us-title" style={{ borderBottom: 'none', marginTop: 0 }}>{selectedReview.name}</h3>
              <img src="/svg/five-star.svg" alt="Five star" style={{ height: '18px' }} />
              <p style={{ lineHeight: 1.6 }}>{selectedReview.text}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


