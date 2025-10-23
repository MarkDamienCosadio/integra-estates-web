import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import type { Swiper as SwiperType } from 'swiper'
import { useEffect, useRef, useState } from 'react'

type Property = {
  id: number
  title: string
  price: string
  location: string
  beds: number
  baths: number
  area: string
  image: string
  url?: string
  status?: string
  photosCount?: number
  propertyType: string
  address1: string
  address2: string
}

// Recently sold sample data, mirrored from base site content
const soldProperties: Property[] = [
  { id: 1001, title: 'Barton Court', price: '£250,000', location: 'Bromley, Kent', beds: 1, baths: 1, area: '—', image: 'https://picsum.photos/id/1060/800/600', url: '#', status: 'Sold', photosCount: 10, propertyType: 'Apartment', address1: 'Barton Court', address2: '12 Shortlands Grove, Bromley, Kent' },
  { id: 1002, title: 'Sutherland Avenue', price: '£475,000', location: 'Welling, Kent', beds: 3, baths: 2, area: '—', image: 'https://picsum.photos/id/1068/800/600', url: '#', status: 'Sold', photosCount: 16, propertyType: 'House', address1: 'Sutherland Avenue', address2: 'Welling, Kent' },
  { id: 1003, title: 'Wilberforce Court', price: '£575,000', location: 'Keston, Kent', beds: 2, baths: 2, area: '—', image: 'https://picsum.photos/id/1070/800/600', url: '#', status: 'Sold', photosCount: 12, propertyType: 'Apartment', address1: 'Wilberforce Court', address2: 'Westerham Road, Keston, Kent' },
  { id: 1004, title: 'Dacre Park', price: '£625,000', location: 'London, SE13', beds: 3, baths: 2, area: '—', image: 'https://picsum.photos/id/1073/800/600', url: '#', status: 'Sold', photosCount: 14, propertyType: 'House', address1: 'Dacre Park', address2: 'London, SE13' },
  { id: 1005, title: 'Harrington Road', price: '£500,000', location: 'London', beds: 3, baths: 2, area: '—', image: 'https://picsum.photos/id/1076/800/600', url: '#', status: 'Sold', photosCount: 9, propertyType: 'House', address1: 'Harrington Road', address2: 'London' },
  { id: 1006, title: 'Pickford Lane', price: '£475,000', location: 'Bexleyheath, Kent', beds: 3, baths: 2, area: '—', image: 'https://picsum.photos/id/1081/800/600', url: '#', status: 'Sold', photosCount: 11, propertyType: 'House', address1: 'Pickford Lane', address2: 'Bexleyheath, Kent' },
  { id: 1007, title: 'Transmere Road', price: '£360,000', location: 'Petts Wood, Orpington, Kent', beds: 3, baths: 1, area: '—', image: 'https://picsum.photos/id/1082/800/600', url: '#', status: 'Sold', photosCount: 8, propertyType: 'House', address1: 'Transmere Road', address2: 'Petts Wood, Orpington, Kent' },
  { id: 1008, title: 'Archways — Blakeney Road', price: '£400,000', location: 'Beckenham, Kent', beds: 2, baths: 1, area: '—', image: 'https://picsum.photos/id/1083/800/600', url: '#', status: 'Sold', photosCount: 7, propertyType: 'Apartment', address1: 'Archways', address2: '4 Blakeney Road, Beckenham, Kent' },
]

export default function RecentlySold() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const pagRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [swiperInst, setSwiperInst] = useState<SwiperType | null>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio
          if (ratio >= 0.5 && titleRef.current) {
            titleRef.current.classList.add('rs-active')
          }
          if (ratio >= 0.8 && sliderRef.current) {
            sliderRef.current.classList.add('rs-active')
          }
        })
      },
      { threshold: [0.4, 0.8] }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])
  return (
    <section id="recently-sold" ref={sectionRef} className="section-4-module__K9P0s__section section">
      <div className="section-4-module__K9P0s__inner container">
        {/* Title styled identically to Properties for sale */}
        <div className="section-4-module__K9P0s__titleContainer">
          <h2 ref={titleRef} className="ask-us-title rs-prep rs-from-left">Recently sold properties</h2>
        </div>
        <div ref={sliderRef} className="section-4-module__K9P0s__slider rs-prep rs-from-right">
          <Swiper
            spaceBetween={5}
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 1 },
              560: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
            }}
            onSwiper={setSwiperInst}
          >
            {soldProperties.map((p) => (
              <SwiperSlide key={p.id}>
                <article className="property-card-module__K9P0s__card">
                  <div className="property-card-module__K9P0s__media">
                    <img src={p.image} alt={p.title} />
                    {/* Overlay status + icons */}
                    <div className="property-image-overlay-module__K9P0s__overlay">
                      <div className="property-image-overlay-module__K9P0s__status">{p.status || 'Sold'}</div>
                      <div className="property-image-overlay-module__K9P0s__icons">
                        <div className="property-image-overlay-module__K9P0s__iconSpan" aria-label={`${p.beds} bedrooms`}>
                          {/* Bed icon */}
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="property-image-overlay-module__K9P0s__bedroomIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M168.7 264.5c29 0 52.4-22.9 52.4-51.2s-23.4-51.2-52.4-51.2-52.4 22.9-52.4 51.2 23.5 51.2 52.4 51.2zm209.5-102.4H238.5v119.5H98.9V128H64v256h34.9v-51.2h314.2V384H448V230.4c0-37.7-31.2-68.3-69.8-68.3z"></path>
                          </svg>
                          <div className="property-image-overlay-module__K9P0s__number">{p.beds}</div>
                        </div>
                        <div className="property-image-overlay-module__K9P0s__iconSpan" aria-label={`${p.baths} bathrooms`}>
                          {/* Bath icon */}
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="property-image-overlay-module__K9P0s__bathroomIcon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <circle cx="7" cy="7" r="2"></circle>
                            <path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2 2 0 006 10c-1.1 0-2 .9-2 2v3a3 3 0 003 3h11a3 3 0 003-3v-2h-1z"></path>
                          </svg>
                          <div className="property-image-overlay-module__K9P0s__number">{p.baths}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-card-module__K9P0s__body">
                    <div className="property-card-module__K9P0s__line property-card-module__K9P0s__price">{p.price}</div>
                    <div className="property-card-module__K9P0s__line property-card-module__K9P0s__type">{p.propertyType}</div>
                    <div className="property-card-module__K9P0s__line">{p.address1}</div>
                    <div className="property-card-module__K9P0s__line">{p.address2}</div>
                    <div className="property-card-module__K9P0s__cta">
                      <a className="btn btn--accent" href={p.url || '#'} aria-label={`View details for ${p.title}`}>View details</a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom controls below the cards */}
          <div className="property-slide-swiper-module__ZWA3Ca__swiperControls">
            <button type="button" id="swiper-prev" ref={prevRef} onClick={() => swiperInst?.slidePrev()} className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Previous">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            <div id="swiper-pagination" ref={pagRef} className="property-slide-swiper-module__ZWA3Ca__swiperPagination" aria-live="polite"></div>
            <button type="button" id="swiper-next" ref={nextRef} onClick={() => swiperInst?.slideNext()} className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Next">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}