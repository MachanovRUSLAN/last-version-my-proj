import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import run from "../img/run s.png";
import heel from "../img/heel.png";
import laced from "../img/laced.png";
import boot from "../img/boot.png";
import court from "../img/court.png";
import "./collection.css";

class Collection extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
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
      <div className="main-box-1">
        <h2 className="collect-name1">SHOP BY COLLECTION</h2>
        <div className="main-slide">
          <Slider {...settings}>
            <div className="collect-1">
              <div className="img-box1">
                <a href="#">
                  <img src={run} alt="" />
                </a>
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={heel} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={laced} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={boot} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={court} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={run} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={laced} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={heel} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Collection;

