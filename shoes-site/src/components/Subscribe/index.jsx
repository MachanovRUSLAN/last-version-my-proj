import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cms4 from "../img/Cms-4.jpg";
import "./design.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Subscribe() {
  return (
    <div className="suscribe-main">
      <Container>
        <Row>
          <Col md="6">
            <div className="design">
              <img src={cms4} />
              <div className="des-content">
                <h6>LIMITED TIME OFFER !!</h6>
                <h1>
                  BUY DESIGNER
                  <br />
                  FOOTWEAR
                </h1>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="suscribe">
              <span className="paperPlane">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
              <h4>GET LATEST UPDATES</h4>
              <h5>
                Get All The Latest Information On Events,Sales And Offers Here
                Can Show You.
              </h5>
              <div className="input-box-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Adress..."
                  className="suscrb-input"
                />
              </div>
              <input
                type="submit"
                className="suscrb-button"
                value="SUBSCRIBE"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Subscribe;
