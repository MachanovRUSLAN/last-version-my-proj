import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./BestProduct.css";

import products from "../../Data/dummydata";

class BestProduct extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: false,
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
    const firstTenProducts = products.slice(0, 12);
    return (
      <div className="main-box-1">
        <h2 className="collect-name1">SHOP BY COLLECTION</h2>
        <div className="main-slide">
          <Slider {...settings}>
            {firstTenProducts.slice(0.3).map((product, index) => {
              return (
                <div className="container" key={index}>
                  <div className="content-2">
                    <img src={product.img} />
                    <img className="star-img" src={product.star} />
                    <h2>{product.name}</h2>
                    <h5>{product.price}$</h5>
                    <div className="read-content">
                      <div className="addBtn">Read More</div>
                    </div>
                    <div className="options">
                      <div className="option-content">
                        <span>
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faRepeat} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default BestProduct;
