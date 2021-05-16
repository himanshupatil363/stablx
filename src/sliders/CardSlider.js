
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import log from '../assets/log.png'
import cg from '../assets/cg.png'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {
    const data=[
        {
            "img":require("../assets/cs1.jpg"),
            "title":"College education isn't enough to be relevant for the tech Industry.",
            "date":"06 Sep 2020",
            "link":"https://blog.hicoder.in/college-education-isnt-enough-to-be-relevant-for-the-tech-industry/"
        },
        {
            "img":require("../assets/cs2.jpg"),
            "title":"IT project demand increases by 127% as offline businesses shut down.",
            "date":"14 Oct 2020",
            "link":"https://blog.hicoder.in/it-project-demand-increases-by-127-as-offline-businesses-shut-down/"
        },
        {
            "img":require("../assets/cs3.jpg"),
            "title":"13 reasons why businesses love hiring failed entreprneurs.",
            "date":"17 Oct 2020",
            "link":"https://blog.hicoder.in/why-businesses-hire-failed-entrepreneurs/"
        },
        {
            "img":require("../assets/cs4.jpg"),
            "title":"Students having real time experience are less likey to have career gap.",
            "date":"17 Aug 2019",
            "link":"https://blog.hicoder.in/students-having-real-time-experience-are-less-likely-to-have-career-gap/"
        },
    ]
  
  
  return (
    <>
    <Swiper slidesPerView={3} spaceBetween={10} loop={true} grabCursor={true}  breakpoints={{
  "@0.00": {
    "slidesPerView": 1,
    "spaceBetween": 20
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
    "slidesPerView": 3,
    "spaceBetween": 40
  }
}} className="mySwiper">
  {
      data.map((d)=>{
          return(
            <SwiperSlide>
            <div className="flex w-screen lg:w-96 bg-white shadow-lg flex-col">
                    <img className="filter hover:grayscale" src={d.img.default} alt="" />
                    <a href={d.link} className="hover:text-green-600 duration-300 font-bold text-2xl m-6">
                        {d.title}
                    </a>
                    <div className="flex justify-between m-6">
                        <div className="flex items-center">
                            <img className="h-8 mr-1" src={log} alt="" />
                            <p>HiCoder</p>
                        </div>
                        <div className="flex items-center">
                            <img className="h-4 mr-1" src={cg} alt="" />
                            <p>{d.date}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          )
          })
  }
  </Swiper>
    </>
  )
}