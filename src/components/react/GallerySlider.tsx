
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
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
          pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        modules={[Pagination]}
        slidesPerView={4}
        speed={1000}
       >
         {gallery.map((galleryItem, index)=>
         <SwiperSlide key={index}>
          <GalleryItem src={galleryItem.src}/>
         </SwiperSlide>
         )}
    </Swiper>
      </div>
  )
}

export default GallerySlider