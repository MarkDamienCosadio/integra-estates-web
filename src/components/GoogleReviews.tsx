import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type Review = {
  name: string
  text: string
}

const reviews: Review[] = [
  {
    name: "Lauren O'Neill",
    text:
      "The best service I have ever received from an Estate agent. Tom and his colleagues are professional and have extensive experience, as well as the all-important personal touch. I wouldn't go to anyone else if I were to buy or sell in the future. Thank you!",
  },
  {
    name: 'Debbie Risby',
    text:
      'Fabulous online business. Great communication, honest advice and wonderful team. Would definitely recommend.',
  },
  {
    name: 'Louise Pinchin',
    text:
      "We used Integra Estates after they were recommended to us by a friend. From the moment we spoke to Tom it felt different to other estate agents we've dealt with. Tom was friendly, helpful, knowledgeable and his customer service was exceptional. We received regular correspondence and were kept well up to date with progress resulting in a fast and easy sale of our home. We cannot thank you enough and won’t hesitate to use you in the future.",
  },
  {
    name: 'Philip Szlapak',
    text:
      'My experience of Integra was very positive despite a difficult market. They provided a boutique service with honest advice and strong communication throughout the process.',
  },
  {
    name: 'Gregory Samson',
    text:
      'Exceptional service from start to finish. Professional, transparent, and always responsive. Highly recommend.',
  },
  {
    name: 'Emilia Jennings',
    text:
      'A truly stress-free experience. The team went above and beyond to help us secure our dream home. Thank you!',
  },
]

export default function GoogleReviews() {
  const [swiperInst, setSwiperInst] = useState<any>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const REVIEWS_PER_VIEW = 4
  const baseReviews: Review[] = reviews
  // Ensure enough slides for robust looping by repeating base reviews
  const minSlides = REVIEWS_PER_VIEW * 3
  const repeatTimes = Math.ceil(minSlides / baseReviews.length)
  const renderedReviews: Review[] = Array.from({ length: repeatTimes }, () => baseReviews).flat()

  // Reviews render independently of global `.section` visibility.










  const openModal = (review: Review) => {
    setSelectedReview(review)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedReview(null)
  }
  




  

  const handlePrev = () => swiperInst?.slidePrev()
  const handleNext = () => swiperInst?.slideNext()

  return (
    <section className="google-reviews">
      <div className="container">
        <div className="reviews-layout">
          {/* Section title above the cards (column 2, row 1) */}
          <div className="reviews-title">
            <h2 className="ask-us-title">What our clients say</h2>
          </div>
          {/* Google logo block on the left, centered next to cards (column 1, row 2) */}
          <aside className="reviews-aside">
            <div className="section-8-module__F4CToW__google">
              <div className="section-8-module__F4CToW__googleLogo">
                <img
                  alt="google logo"
                  src="/svg/google-logo-with-stars.svg"
                />
              </div>
              <p className="section-8-module__F4CToW__logoReviews">Excellent</p>
            </div>
          </aside>

          {/* Google logo block on the left, centered next to cards (column 1, row 2) */}
          {/* Cards scroller (column 2, row 2) using Swiper for smooth one-card sliding */}
          <div className="reviews-swiper-wrap">
            <Swiper
              className="reviews-swiper"
              spaceBetween={20}
              slidesPerView={REVIEWS_PER_VIEW}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 8 },
                640: { slidesPerView: 2, spaceBetween: 12 },
                900: { slidesPerView: 3, spaceBetween: 16 },
                1200: { slidesPerView: REVIEWS_PER_VIEW, spaceBetween: 20 },
              }}
              loop={true}
              loopAdditionalSlides={baseReviews.length}
              loopPreventsSliding={false}
              slidesPerGroup={1}
              speed={550}
              autoHeight={true}
              observeParents={true}
              onSwiper={setSwiperInst}
              onSlideChange={(s) => setCurrentIndex(s.realIndex % baseReviews.length)}
            >
              {renderedReviews.map((r, idx) => (
                <SwiperSlide key={idx}>
                  <article className="google-review-card">

                    {/* Name (top) and stars below, left-aligned */}
                    <h3 className="google-review-name">{r.name}</h3>
                    {/* Inline meta row: stars + Google icon inline */}
                    <div className="google-review-meta">
                      <img
                        className="google-review-logo-inline"
                        src="/svg/google-icon.svg"
                        alt="Google"
                      />
                      <img
                        className="google-review-stars"
                        src="/svg/five-star.svg"
                        alt="Five star"
                      />
                    </div>

                    {/* Review text */}
                    <p className="google-review-text">{r.text}</p>

                    {/* Read More button at bottom-left */}
                    <button type="button" className="reviews-read-more" onClick={() => openModal(r)}>
                      Read More
                    </button>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Slider controls below cards using provided markup */}
          <div className="section-8-module__F4CToW__swiperControls reviews-controls">
            <div id="swiper-prev-reviews" onClick={handlePrev}>
              <div className="section-8-module__F4CToW__swiperBtn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <div
              id="swiper-pagination-reviews"
              className="section-8-module__F4CToW__swiperPagination swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic"
              
            >
              {baseReviews.map((_, i) => (
                <span
                  key={i}
                  className={
                    'swiper-pagination-bullet' +
                    (i === currentIndex ? ' swiper-pagination-bullet-active swiper-pagination-bullet-active-main' : '')
                  }
                  onClick={() => swiperInst?.slideToLoop(i)}
                ></span>
              ))}
            </div>

            <div id="swiper-next-reviews" onClick={handleNext}>
              <div className="section-8-module__F4CToW__swiperBtn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {isModalOpen && selectedReview && (
            <div role="dialog" aria-modal="true" className="reviews-modal-overlay" onClick={closeModal}>
              <div className="reviews-modal" onClick={(e) => e.stopPropagation()}>
                <button type="button" aria-label="Close" className="reviews-modal-close" onClick={closeModal}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>

                <h3 className="google-review-name">{selectedReview.name}</h3>
                <img className="google-review-stars" src="/svg/five-star.svg" alt="Five star" />
                <p>{selectedReview.text}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}