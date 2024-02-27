import React from "react";
import "./common.css";
import products from "../../Data/dummydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendProductPage } from "../../redux/Slice/proslice";

function Common() {
  const firstTenProducts = products.slice(0, 8);

  const dispatch = useDispatch();

  const sendId = (id) => {
    dispatch(sendProductPage(id));
  };

  return (
    <div className="common-offer">
      <div className="head-text mb-5">
        <h1>Our offer</h1>
      </div>

      <div className="common-box">
        {firstTenProducts.slice(0.1).map((product, index) => {
          return (
            <div className="content">
              <img src={product.img} />
              <img className="star-img" src={product.star} />
              <h2>{product.name.slice(0, 19)}...</h2>
              <h5>{product.price}$</h5>
              <div className="read-content">
                <Link to={`/singleProductPage/${product.id}`}>
                  <div className="addBtn">Read More</div>
                </Link>
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
          );
        })}
      </div>
      <Link to="/shop">
        <button className="more">More</button>
      </Link>
    </div>
  );
}

export default Common;
