import React from "react";
import "./AboutContent.css";
import { Col, Container, Row } from "react-bootstrap";

function AboutContent() {
  return (
    <Container>
      <div className="about-content">
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="cont-1">
              <h1>
                Designers And <br />
                Fashion Icons Most <br />
                Famously Shoe Designers
              </h1>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="cont-2">
              <p>
                According To The Center, The Balsam Fir Is Abundant And Nowhere
                Near Endangered, So We Don’t Need To Worry About Running Out Or
                Damaging The Ecosystem Anytime Soon. More Importantly , The
                Essential Oil We Use To Make Our Products Is Distilled From The
                Needles.
              </p>
              <p>
                That Is Why Our Jewelry Is So Soulful And With Its History. In
                Addition, Everyone Can Add Their Own Mea ning And Make Jewelry
                Their Personal Symbol Of Good Lu ck. While Most People May Not
                Find The Fir Too Appetizing, It’s Certainly Edible And May Help
                Sustain You In An Emergency (Let’s Hope It Never Comes To
                That!). The Resin Has Also Historical ly Been Munched On Like A
                Chewing Gum.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AboutContent;
