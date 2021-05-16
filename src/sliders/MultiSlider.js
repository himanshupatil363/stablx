
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const MultiSlider = () => {
    const data=[{
        "img":require("../assets/m1.jpg")   
    },
    {"img":require("../assets/m2.jpg")},
    {"img":require("../assets/m3.jpg")},
    {"img":require("../assets/m4.jpg")},
    {"img":require("../assets/m5.jpg")},
    {"img":require("../assets/m6.jpg")},
    {"img":require("../assets/m7.jpg")}
]
  return (
    <>
    <Swiper slidesPerView={4} spaceBetween={10}
    grabCursor={true}  breakpoints={{
  "@0.00": {
    "slidesPerView": 2,
    "spaceBetween": 10
  },
  "@0.75": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "@1.00": {
    "slidesPerView": 3,
    "spaceBetween": 40
  },
  "@1.50": {
    "slidesPerView": 4,
    "spaceBetween": 40
  }
}} className="mySwiper">
  {
      data.map((d)=>{
          return(
            <SwiperSlide><img src={d.img.default} alt="" /></SwiperSlide>
          )
          })
  }

  </Swiper>
    </>
  )
}
export default MultiSlider