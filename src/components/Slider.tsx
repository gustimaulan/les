import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GALLERYIMAGES } from '../utils/GALLERYIMAGES';


const Slider: React.FC = () => {
  return (
    <div className='py-8 border-t'>
    <h2 className='text-2xl font-semibold pb-4'>
        Lihat Keseruan Belajar Siswa Lainnya
    </h2>
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          '--swiper-pagination-color': '#000',
        } as React.CSSProperties} // Type assertion for CSS properties
        pagination={{
          dynamicBullets: true
        }}
        autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false 
        }}
        slidesPerView={1}
        className="mySwiper pb-8"
      >
        {GALLERYIMAGES.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center justify-center gap-2'>
            <img src={slide.url} alt={slide.alt} className="relative w-full rounded-lg" />
            <span className='absolute text-center bg-yellow-300/70 bottom-8 w-full px-4 py-2'>{slide.caption}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
    </div>
  );
};

export default Slider;
