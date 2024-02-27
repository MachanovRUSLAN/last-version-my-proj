import React, { Component } from "react";
import "./slide.css";
import nike_sld from "../img/hd-1.jpg";
import nike_2 from "../img/hd-2.jpg";
import hd from "../img/transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { Col, Row } from "react-bootstrap";

function Slide() {
  return (
    <>
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Row>
            <Col lg="5" md="5" sm="12" className="content-slide">
              <div className="slide">
                <div className="slide-content">
                  <h2>JUST DO IT</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro.</p>
                  <h4>New collection 20% discount</h4>
                  <button className="slidebutton">
                    More{" "}
                    <i>
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </i>
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="7" md="7" sm="12">
              <div className="slide">
                <img className="f-img" src={hd} />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src={nike_sld} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-img">
            <img src={nike_2} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slide;
