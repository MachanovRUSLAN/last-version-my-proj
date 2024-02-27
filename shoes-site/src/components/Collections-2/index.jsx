import React from "react";
import cms1 from "../img/Cms-1.jpg";
import cms2 from "../img/Cms-2.jpg";
import cms3 from "../img/Cms-3 (1).jpg";
import "./collect-2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Collect_2() {
  return (
    <Container>
      <Row>
        <Col lg="4" md="6" ms="12">
          <div className="cart-box">
            <div className="img-box-2">
              <img src={cms1} />
              <div className="content-collect2">
                <h6>COLLECTIONS</h6>
                <h3>
                  CASUAL <br />
                  SHOES
                </h3>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" ms="12">
          <div className="cart-box">
            <div className="img-box-2">
              <img src={cms2} />
              <div className="content-collect2">
                <h6>LIMITED</h6>
                <h3>
                  ATHLETIC
                  <br />
                  SHOES
                </h3>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" ms="12">
          <div className="cart-box">
            <div className="img-box-2">
              <img src={cms3} />
              <div className="content-collect2">
                <h6>COLLECTIONS</h6>
                <h3>
                  FORMAL <br />
                  SHOES
                </h3>
                <a href="#">VIEW MORE</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Collect_2;
