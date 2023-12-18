import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AboutUs from "../../img/aboutUs.png";
import "./aboutUs.css";

const AboutUsSection = () => {
  return (
    <Container className="about-us" fluid>
      <Row>
        <Col xs={12} lg={4} className="col-1 p-0">
          <div className="about-us-content">
            <h2>We’ve Been Building For Over 10 Years</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="6"
              viewBox="0 0 48 6"
              fill="none"
            >
              <path d="M0 3H48" stroke="#FFB400" strokeWidth="5" />
            </svg>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </p>
            <button>About us</button>
          </div>
        </Col>
        <Col xs={12} lg={8} className="p-0">
          <Row>
            <img src={AboutUs} alt="about-us-img" className="img-fit" />
          </Row>
          <Row>
            <Col>
              <div className="call-section">
                <h3>Call for a Quote</h3>
                <h4>(346) 234-6973</h4>
              </div>
            </Col>
            <Col>
              <div className="estimation-form">
                {/* <h3>ONLINE ESTIMATE FORM</h3> */}
                <button>ONLINE ESTIMATE FORM</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection;
