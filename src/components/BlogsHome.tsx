import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function BlogsHome() {
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

  const [swiperInst, setSwiperInst] = useState<any>(null)
  const CARDS_PER_VIEW = 4
  // Ensure enough slides for robust looping across breakpoints
  const minSlides = CARDS_PER_VIEW * 3
  const repeatTimes = Math.ceil(minSlides / featuredBlogs.length)
  const renderedBlogs = Array.from({ length: repeatTimes }, () => featuredBlogs).flat()

  return (
    <section className="section" aria-label="Blogs">
      <div className="blogs-home-container">
        <div style={{ textAlign: 'center' }}>
          <h2 className="ask-us-title">Blogs</h2>
        </div>
        <Swiper
          className="blogs-home-row"
          spaceBetween={16}
          slidesPerView={CARDS_PER_VIEW}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            900: { slidesPerView: 3, spaceBetween: 16 },
            1200: { slidesPerView: CARDS_PER_VIEW, spaceBetween: 16 },
          }}
          loop={true}
          loopAdditionalSlides={featuredBlogs.length}
          loopPreventsSliding={false}
          slidesPerGroup={1}
          speed={450}
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
        <div className="blogs-home-arrows" aria-label="Slide controls">
          <button
            className="blogs-home-btn"
            aria-label="Previous"
            onClick={() => swiperInst?.slidePrev()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="blogs-home-btn"
            aria-label="Next"
            onClick={() => swiperInst?.slideNext()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}