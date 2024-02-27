import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nb from "../../components/img/nb.png";
import adidas from "../img/adidas.png";
import nike from "../img/nike.png";
import puma from "../img/puma.png";
import dc from "../img/DC.jpg";
import lumb from "../img/lumb.webp";
import pullbear from "../img/pullbear.webp";
import "./Brend.css"

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
                
                  <img src={nb} alt="" />
               
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={puma} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={nike} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={dc} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={pullbear} alt="" />
              </div>
            </div>
            <div className="collect-1">
              <div className="img-box1">
                <img src={lumb} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Collection;
