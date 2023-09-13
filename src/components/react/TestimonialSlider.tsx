import 'swiper/swiper-bundle.css';
import  '@/components/react/TestimonialItem.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import TestimonialItem from './TestimonialItem'
export default function TetsimonialSlider() {
   return (
     <div className='wrapper'>
       <Swiper 
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination]}
        speed={1000}
       >
         <SwiperSlide>
          <TestimonialItem/>
         </SwiperSlide>
         <SwiperSlide>
          <TestimonialItem/>
         </SwiperSlide>
         <SwiperSlide>
          <TestimonialItem/>
         </SwiperSlide>
       </Swiper>
     </div>
   );
 }
