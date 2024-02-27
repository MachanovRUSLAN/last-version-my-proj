import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blogSlide.css";
import first from "../img/first.jpg";
import hd_3 from "../img/hd-3.jpg";
import second from "../img/scond.jpg";
import nikeslid from "../img/nike-slid.jpg";
import hd_5 from "../img/hd-5.avif";
import hd_6 from "../img/hd-6.jpg";
import hd_4 from "../img/hd-4.avif";

function Blogslide() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={first} alt="" />
          </div>
        </div>
        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={hd_3} alt="" />
          </div>
        </div>
        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={nikeslid} alt="" />
          </div>
        </div>

        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={second} alt="" />
          </div>
        </div>
        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={hd_5} alt="" />
          </div>
        </div>
        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={hd_6} alt="" />
          </div>
        </div>
        <div className="slide-cart">
          <div className="img-cart-slide">
            <img src={hd_4} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Blogslide;
