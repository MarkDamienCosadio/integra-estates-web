import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useEffect, useRef, useState } from 'react'
// @ts-ignore
import { motion } from 'framer-motion'

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

const properties: Property[] = [
  // Sample property copied from provided details
  {
    id: 553472,
    title: 'Wellmeadow Road',
    price: '£675,000',
    location: 'Catford, London. SE6',
    beds: 4,
    baths: 1,
    area: '—',
    image: 'https://fs-03.apex27.co.uk/data_a4e8/listing_553472_0024_afde086f.jpg',
    url: '/property/553472',
    status: 'For Sale',
    photosCount: 21,
    propertyType: 'House',
    address1: 'Wellmeadow Road',
    address2: 'Catford, London SE6',
  },
  { id: 1, title: 'Modern Apartment — St Albans', price: '£415,000', location: 'St Albans, Hertfordshire', beds: 2, baths: 1, area: '820 sq ft', image: 'https://picsum.photos/id/1018/800/600', propertyType: 'Apartment', address1: 'Modern Apartment', address2: 'St Albans, Hertfordshire' },
  { id: 2, title: 'Semi-Detached — Harpenden', price: '£625,000', location: 'Harpenden, Hertfordshire', beds: 3, baths: 2, area: '1,150 sq ft', image: 'https://picsum.photos/id/1025/800/600', propertyType: 'Semi-Detached', address1: 'Semi-Detached', address2: 'Harpenden, Hertfordshire' },
  { id: 3, title: 'Detached Family Home — Welwyn', price: '£875,000', location: 'Welwyn Garden City', beds: 4, baths: 3, area: '1,860 sq ft', image: 'https://picsum.photos/id/103/800/600', propertyType: 'Detached', address1: 'Detached Family Home', address2: 'Welwyn Garden City' },
  { id: 4, title: 'City Loft — Hertford', price: '£350,000', location: 'Hertford, Hertfordshire', beds: 1, baths: 1, area: '620 sq ft', image: 'https://picsum.photos/id/1041/800/600', propertyType: 'Loft', address1: 'City Loft', address2: 'Hertford, Hertfordshire' },
  { id: 5, title: 'Country Cottage — Redbourn', price: '£495,000', location: 'Redbourn, Hertfordshire', beds: 3, baths: 2, area: '980 sq ft', image: 'https://picsum.photos/id/1050/800/600', propertyType: 'Cottage', address1: 'Country Cottage', address2: 'Redbourn, Hertfordshire' },
  { id: 6, title: 'Riverside Flat — Ware', price: '£325,000', location: 'Ware, Hertfordshire', beds: 2, baths: 1, area: '780 sq ft', image: 'https://picsum.photos/id/1067/800/600', propertyType: 'Flat', address1: 'Riverside Flat', address2: 'Ware, Hertfordshire' },
  { id: 7, title: 'New Build — Stevenage', price: '£550,000', location: 'Stevenage, Hertfordshire', beds: 3, baths: 2, area: '1,200 sq ft', image: 'https://picsum.photos/id/1074/800/600', propertyType: 'New Build', address1: 'New Build', address2: 'Stevenage, Hertfordshire' },
  { id: 8, title: 'Penthouse — Hatfield', price: '£725,000', location: 'Hatfield, Hertfordshire', beds: 3, baths: 2, area: '1,450 sq ft', image: 'https://picsum.photos/id/1084/800/600', propertyType: 'Penthouse', address1: 'Penthouse', address2: 'Hatfield, Hertfordshire' },
  { id: 9, title: 'Townhouse — St Albans', price: '£685,000', location: 'St Albans, Hertfordshire', beds: 4, baths: 2, area: '1,400 sq ft', image: 'https://picsum.photos/id/1080/800/600', propertyType: 'Townhouse', address1: 'Townhouse', address2: 'St Albans, Hertfordshire' },
  { id: 10, title: 'Studio — Hemel Hempstead', price: '£210,000', location: 'Hemel Hempstead', beds: 1, baths: 1, area: '420 sq ft', image: 'https://picsum.photos/id/1057/800/600', propertyType: 'Studio', address1: 'Studio', address2: 'Hemel Hempstead' },
]

export default function PropertyForSale() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const prevRef = useRef<HTMLDivElement | null>(null)
  const nextRef = useRef<HTMLDivElement | null>(null)
  const pagRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [swiperInst, setSwiperInst] = useState<any>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio
          if (ratio >= 0.5 && titleRef.current) {
            titleRef.current.classList.add('pfs-active')
          }
          if (ratio >= 0.8 && sliderRef.current) {
            sliderRef.current.classList.add('pfs-active')
          }
        })
      },
      { threshold: [0.5, 0.8] }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])
  return (
    <section id="property-for-sale" ref={sectionRef} className="section-4-module__K9P0s__section section">
      <div className="section-4-module__K9P0s__inner container">
        {/* Top-centered section title - slides from right at 50% viewport */}
        <motion.div 
          className="section-4-module__K9P0s__titleContainer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h2 className="ask-us-title">Properties for sale</h2>
        </motion.div>
        <div ref={sliderRef} className="section-4-module__K9P0s__slider pfs-prep pfs-from-right">
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
            {properties.map((p) => (
              <SwiperSlide key={p.id}>
              <article className="property-card-module__K9P0s__card">
                <div className="property-card-module__K9P0s__media">
                  <img src={p.image} alt={p.title} />
                  {/* Overlay icons and status on image */}
                  <div className="property-image-overlay-module__K9P0s__overlay">
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
                          <path d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2z"></path>
                        </svg>
                        <div className="property-image-overlay-module__K9P0s__number">{p.baths}</div>
                      </div>
                      {typeof p.photosCount === 'number' && (
                        <div className="property-image-overlay-module__K9P0s__iconSpan" aria-label={`${p.photosCount} photos`}>
                          {/* Photos icon */}
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd"></path>
                          </svg>
                          <div className="property-image-overlay-module__K9P0s__number">{p.photosCount}</div>
                        </div>
                      )}
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
            <div id="swiper-prev" ref={prevRef} onClick={() => swiperInst?.slidePrev()}>
              <div className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Previous">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div id="swiper-pagination" ref={pagRef} className="property-slide-swiper-module__ZWA3Ca__swiperPagination"></div>
            <div id="swiper-next" ref={nextRef} onClick={() => swiperInst?.slideNext()}>
              <div className="property-slide-swiper-module__ZWA3Ca__swiperBtn" aria-label="Next">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}