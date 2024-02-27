import React from "react";
import Slider from "react-slick";
import "./Team.css";
import hd from "../img/Cms-1.jpg";

function AboutTeam() {
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
    <div className="our-team">
      <Slider {...settings}>
        <div className="team">
          <div className="team-img">
            <img
              src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais"
              alt=""
            />
            <div className="team-cont">
              <h4>Nemo Enimson</h4>
              <p>(CEO)</p>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="team-img">
            <img
              src="https://womanforward.org/wp-content/uploads/elementor/thumbs/Diseno-sin-titulo-1-q5x02g48n3dgqvne0wopcmvnpl2x9sdcdaujjegqgw.jpg"
              alt=""
            />
          </div>
          <div className="team-cont">
            <h4>Nemo Enimson</h4>
            <p>(CEO)</p>
          </div>
        </div>
        <div className="team">
          <div className="team-img">
            <img
              src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.webp?b=1&s=612x612&w=0&k=20&c=zVcDnGEyoHJXgsIVBLapEoAqNEr9nUlmooClC5j_218="
              alt=""
            />
          </div>
          <div className="team-cont">
            <h4>Nemo Enimson</h4>
            <p>(CEO)</p>
          </div>
        </div>
        <div className="team">
          <div className="team-img">
            <img
              src="https://www.shutterstock.com/image-photo/young-asian-woman-professional-entrepreneur-600nw-2127014192.jpg"
              alt=""
            />
          </div>
          <div className="team-cont">
            <h4>Nemo Enimson</h4>
            <p>(CEO)</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AboutTeam;
