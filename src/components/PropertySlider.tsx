import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PropertySlider() {
  return (
    <section id="featured" className="section section--featured">
      <div className="container">
        <h2 className="section__title">Featured Properties</h2>
        <div className="property-slider">
          <Swiper spaceBetween={5} slidesPerView={1} breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}>
            <SwiperSlide>
              <div className="property-card">Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="property-card">Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="property-card">Slide 3</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}