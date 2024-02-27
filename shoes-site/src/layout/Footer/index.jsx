import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import payment from "../../components/img/payment-3.webp";
import facebook from "../../components/img/06-facebook-512.webp";
import linkedin from "../../components/img/linkedin (1).png";
import twitter from "../../components/img/googleplus.png";
import google from "../../components/img/twitter-icon.webp";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <nav className="foot-navbar">
        <ul className="nav-ul">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">MEDIA</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <Container className="p-3">
        <Row className="text-center">
          <Col lg="4" md="12">
            <h6 className="foot-cont">(+1) 1234 4567 89</h6>
          </Col>
          <Col lg="4" md="12">
            <h6 className="foot-cont">
              1487 Rocky Horse Carrefour 1487 Rocky Horse Arlington, TX 16819
              United
            </h6>
          </Col>
          <Col lg="4" md="12">
            <h6 className="foot-cont">
              <a href="#">Info@Example.Com</a>
            </h6>
          </Col>
        </Row>
      </Container>
      <Container className="text-center p-3 footer-foot">
        <Row>
          <Col lg="4" md="12">
            <div className="foot-sosial">
              <span className="foot-icon">
                <img src={twitter} />
              </span>

              <span className="foot-icon">
                <img src={facebook} />
              </span>

              <span className="foot-icon">
                <img src={linkedin} />
              </span>

              <span className="foot-icon">
                <img src={google} />
              </span>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="copy">
              <h6> Copyright © 2024 CoderPlace</h6>
            </div>
          </Col>
          <Col lg="4" md="6" ms="12">
            <div className="visa">
              <img src={payment} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
