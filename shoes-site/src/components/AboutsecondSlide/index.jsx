import React from "react";
import "./SecondSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function AboutsecondSlide() {
  return (
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
      className="mySwiper-second"
    >
      <div className="about-second-box">
        <SwiperSlide>
          <div className="slide-cont">
            <h1>&&</h1>
            <p>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The
              <br /> Industry Standard Dummy Text Ever Since The 1500s, When An
              Unknown Printer Took …
            </p>
            <h4>Stephnie MacMohan</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-cont">
            <h1>&&</h1>
            <p>
              Cyrus Lorem Ipsum Is Simply Dummy Text Of The Printing And
              Typesetting Industry. Lorem Ipsum Has Been The
              <br /> Industry Standard Dummy Text Ever Since The 1500s, When An
              Unknown Printer Took …
            </p>
            <h4>Dr.Nidhen Noan</h4>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}

export default AboutsecondSlide;
