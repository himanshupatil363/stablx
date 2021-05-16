import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import quote from '../assets/quote.png'
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const UniSlider = ({data}) => {
    
  return (
    <>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
      {data.map((d)=>{return(
        <SwiperSlide>
        <div className="flex flex-col p-20 items-center justify-center">
                <img className="w-12 mb-4" src={quote} alt="" />
                <span className="mb-10 italic text-lg">{d.desc}</span>
                <img className="h-20 mb-4 w-20 rounded-full" src={d.img.default} alt="" />
                <p className="mb-2 text-xl font-semibold">{d.name}</p>
                <p className="">{d.desg}</p>
            </div>
        </SwiperSlide>
      )})}
      </Swiper>
    </>
  );
}

export default UniSlider;
