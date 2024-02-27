import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./AboutSlide.css"

import hd from "../img/hd-4.avif";
import hd2 from "../img/hd-5.avif";
import hd3 from "../img/hd-6.jpg";

function AboutSlide() {
  return (
    <div className="about-slide-box">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperBox"
      >
        <SwiperSlide>
          <img src={hd} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hd2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hd3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AboutSlide;
