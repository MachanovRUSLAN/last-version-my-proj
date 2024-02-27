import React from "react";
import "./ContactForms.css";
import { Row, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
  faEnvelopeOpenText,
  faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";

function ContactForms() {
  return (
    <div className="Form-box">
      <Container>
        <Row>
          <Col lg="6">
            <div className="headForm">
              <h2>DO YOU HAVE SOME QUESTION</h2>
              <p>
                We’re Talking About Clean Beauty Gift Sets, Of Course – And
                We’ve Got A Bouquet Of Beauties For Yourself Or Someone You
                Love.
              </p>
            </div>
            <h2>NEED HELP</h2>
            <div className="contact-by">
              <i>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </i>
              <div className="number">
                <h6>
                  0000-456-7892
                  <br />
                  <span>1800-222-7560</span>
                </h6>
              </div>
            </div>
            <div className="contact-by">
              <i>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </i>
              <div className="number">
                <p>Info@Example.Com</p>
              </div>
            </div>
            <div className="contact-by">
              <i>
                <FontAwesomeIcon icon={faHouseChimneyWindow} />
              </i>
              <div className="number">
                <p>
                  Rocky Horse Carrefour
                  <br />
                  1487 Rocky Horse Arlington, TX 16819 United
                </p>
              </div>
            </div>
            <div className="contact-by">
              <i>
                <FontAwesomeIcon icon={faClock} />
              </i>
              <div className="number">
                <p>
                  Monday - Friday 10AM - 8PM <br />
                  Sunday Close
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="headForm">
              <h2>SEND US A MESSAGE</h2>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Dummy Eiusmod Tempor Incididunt.Text Dummy Consectetur
                Adipisicing Elit
              </p>
            </div>
            <div className="Form-message">
              <input type="text" placeholder="*Name" />
              <input type="email" placeholder="*Email" />
              <input type="text" name="" id="" placeholder="*Subject" />
              <textarea
                name=""
                id=""
                cols="20"
                rows="5"
                placeholder="*Your Message"
              ></textarea>
              <button>send</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForms;
