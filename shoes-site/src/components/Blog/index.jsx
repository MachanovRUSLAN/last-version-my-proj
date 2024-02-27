import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import black_2 from "../img/black-2.jpg";
import wht_1 from "../img/white-1.jpg";
import black from "../img/black-1.jpg";
import wht_2 from "../img/white-2.jpg";
import "./Blog.css";

export default class Blog extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
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
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <div className="blog-box">
        <h2 className="text-center mt-4 mb-4">FROM THE BLOG</h2>
        <Slider {...settings}>
          <div>
            <div className="blog-content">
              <div className="img-box-3">
                <img src= "https://cdn.sanity.io/images/c1chvb1i/production/2a2a692acb75142f6f55f157b95472fa1214aaba-1100x579.jpg"/>
                <div className="blog-info">
                  <a href="#">salam</a>
                  <a href="#">sagol</a>
                </div>
              </div>

              <div className="blog-content">
                <h6>01AUG,2023</h6>
                <h3>Lorem ipsum dolor sit.</h3>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, possimus.
                </h4>
              </div>
            </div>
          </div>

          <div>
            <div className="blog-content">
              <div className="img-box-3">
                <img src="https://marathonhandbook.com/wp-content/uploads/Nike-vs-Asics.jpg" />
                <div className="blog-info">
                  <a href="#">salam</a>
                  <a href="#">sagol</a>
                </div>
              </div>
              <div className="blog-content">
                <h6>01AUG,2023</h6>
                <h3>Lorem ipsum dolor sit.</h3>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, possimus.
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="blog-content">
              <div className="img-box-3">
                <img src="https://cdn.thewirecutter.com/wp-content/media/2023/08/watershoes-2048px-1243.jpg?auto=webp&quality=75&width=1024" />
                <div className="blog-info">
                  <a href="#">salam</a>
                  <a href="#">sagol</a>
                </div>
              </div>
              <div className="blog-content">
                <h6>01AUG,2023</h6>
                <h3>Lorem ipsum dolor sit.</h3>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, possimus.
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="blog-content">
              <div className="img-box-3">
                <img src="https://www.rsole.in/cdn/shop/products/15_7ae1ee36-acf3-4950-bec5-56ee664a4d40.jpg?v=1673967227" />
                <div className="blog-info">
                  <a href="#">salam</a>
                  <a href="#">sagol</a>
                </div>
              </div>
              <div className="blog-content">
                <h6>01AUG,2023</h6>
                <h3>Lorem ipsum dolor sit.</h3>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, possimus.
                </h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
