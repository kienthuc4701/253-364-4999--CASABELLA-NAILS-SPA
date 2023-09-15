
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryItem from'./GalleryItem'

const GallerySlider = () => {
  const gallery = [
     {
      id:1,
      src:"/1.png"
     },
     {
      id:2,
      src:"/2.png"
     },
     {
      id:3,
      src:"/3.png"
     },
     {
      id:4,
      src:"/4.png"
     },
     {
      id:5,
      src:"/5.png"
     },
     {
      id:6,
      src:"/6.png"
     },
     {
      id:7,
      src:"/7.png"
     },
     {
      id:8,
      src:"/8.png"
     },
     {
      id:9,
      src:"/9.png"
     },
     {
      id:10,
      src:"/10.png"
     },
     {
      id:11,
      src:"/11.png"
     },
     {
      id:12,
      src:"/12.png"
     },
     {
      id:13,
      src:"/13.png"
     },
     {
      id:14,
      src:"/14.png"
     },
     {
      id:15,
      src:"/15.png"
     },
     {
      id:16,
      src:"/16.png"
     },
     {
      id:17,
      src:"/17.png"
     },
     {
      id:18,
      src:"/18.png"
     },
     {
      id:19,
      src:"/19.png"
     },
     {
      id:20,
      src:"/20.png"
     },
     {
      id:21,
      src:"/21.png"
     },
  ]
  return (
      <div className="wrapper">
        <Swiper 
          className='relative'
          pagination={{
          clickable: true,
          dynamicBullets:true,
          dynamicMainBullets: 3,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="width:8px; height:8px"></span>`;
          },
          }}
        navigation= {{
          prevEl: '.prev-btn',
          nextEl: '.next-btn'
        }}
        modules={[Pagination]}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView:1,
            spaceBetween:10
          },
          800: {
            slidesPerView:4,
            spaceBetween:20
          },
          1200: {
            slidesPerView:5,
            spaceBetween:10
          }
         }}
        speed={1000}
       >
         {gallery.map((galleryItem, index)=>
         <SwiperSlide key={index}>
          <GalleryItem src={galleryItem.src}/>
         </SwiperSlide>
         )}
          <div className="prev-btn absolute left-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          </div>
          <div className="next-btn absolute right-0 z-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
          </div>
    </Swiper>
      </div>
  )
}

export default GallerySlider