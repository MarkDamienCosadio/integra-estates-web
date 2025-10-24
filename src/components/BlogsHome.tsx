import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

export default function BlogsHome() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const dotsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          el.classList.add('animate-active')
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const featuredBlogs = [
    {
      image: 'https://storage.googleapis.com/integra-estates/Integra-estates%20Sold.jpg',
      title: 'When Is the Best Time to Sell Your Home?',
      link: '/blogs/Best-Time-To-Sell',
      author: 'Integra Estates',
      date: 'Sep 2024'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Green%20energy.jpg',
      title: 'What EPC Changes Mean for Landlords – And Why South East London & Kent Sellers Should Act Now',
      link: '/blogs/EPC-Changes',
      author: 'Integra Estates',
      date: 'Aug 2024'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Outdoor%20space.jpg',
      title: 'Why Outdoor Space is Key In Todays Property Market',
      link: '/blogs/Outdoor-Space',
      author: 'Integra Estates',
      date: 'Jul 2024'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/5%20years%20on.jpg',
      title: 'From Lockdown to Now: How the Housing Market Has Evolved',
      link: '/blogs/Five-years-after-Covid',
      author: 'Integra Estates',
      date: 'Jun 2024'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Hand%20House.jpg',
      title: 'Homebuying Expectations vs. Conveyancing Realities: Why The Process Takes Time.',
      link: '/blogs/Homebuying-Expectations',
      author: 'Integra Estates',
      date: 'May 2024'
    },
    {
      image: 'https://storage.googleapis.com/integra-estates/Traffic.jpg',
      title: 'Properties on Main Roads vs Quieter Roads: What You Need to Know',
      link: '/blogs/main-road-properties',
      author: 'Integra Estates',
      date: 'Apr 2024'
    }
  ]

  const [swiperInst, setSwiperInst] = useState<SwiperType | null>(null)

  const handlePrevClick = () => {
    swiperInst?.slidePrev()
    if (dotsRef.current) {
      dotsRef.current.classList.remove('slider-dots-slide-right')
      dotsRef.current.classList.add('slider-dots-slide-left')
      setTimeout(() => {
        if (dotsRef.current) {
          dotsRef.current.classList.remove('slider-dots-slide-left')
        }
      }, 400)
    }
  }

  const handleNextClick = () => {
    swiperInst?.slideNext()
    if (dotsRef.current) {
      dotsRef.current.classList.remove('slider-dots-slide-left')
      dotsRef.current.classList.add('slider-dots-slide-right')
      setTimeout(() => {
        if (dotsRef.current) {
          dotsRef.current.classList.remove('slider-dots-slide-right')
        }
      }, 400)
    }
  }
  const CARDS_PER_VIEW = 4
  // Ensure enough slides for robust looping across breakpoints
  const minSlides = CARDS_PER_VIEW * 3
  const repeatTimes = Math.ceil(minSlides / featuredBlogs.length)
  const renderedBlogs = Array.from({ length: repeatTimes }, () => featuredBlogs).flat()

  return (
    <section className="section" aria-label="Blogs">
      <div className="section-4-module__KR0FYq__inner container">
        <div className="section-4-module__KR0FYq__titleContainer">
          <h2 ref={titleRef} className="ask-us-title animate-in-up">Blogs</h2>
        </div>
      </div>
      <div
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
          {renderedBlogs.map((blog, idx) => (
            <SwiperSlide key={`${blog.link}-${idx}`}>
              <Link
                to={blog.link}
                className="blogs-home-card"
                role="listitem"
                aria-label={`Read: ${blog.title}`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blogs-home-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="blogs-home-title">{blog.title}</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="property-slide-swiper-module__ZWA3Ca__swiperControls">
          <div onClick={handlePrevClick}>
            <div className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Previous">
              ←
            </div>
          </div>
          <div ref={dotsRef} className="property-slide-swiper-module__ZWA3Ca__swiperPagination">
            <span className="slider-dot"></span>
            <span className="slider-dot"></span>
            <span className="slider-dot"></span>
          </div>
          <div onClick={handleNextClick}>
            <div className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Next">
              →
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}