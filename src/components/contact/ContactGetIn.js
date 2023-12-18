import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./contactGetIn.css";
import img2 from "./img/contact-2.jpeg";

export const ContactGetInTouch = () => {
  return (
    <>
      <div className="Contact-get-in-touch container-fluid">
        <div className="row contact-get-in-touch-inner">
          <div className="part-1 col-lg-4 ">
            <div>
              <h2>Get in touch</h2>

              <svg
                className="mb-30"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="6"
                viewBox="0 0 48 6"
                fill="none"
              >
                <path d="M0 3H48" stroke="#FFB400" strokeWidth="5" />
              </svg>

              <div className="row contact-fields">
                <div className="col-md-12 col-xs-12 div-1">Name</div>
                <div className="col-md-12  col-xs-12 div-2">Email</div>
                <div className="col-md-12  col-xs-12 div-3">Message</div>
                <div className="col-md-12 col-xs-12 div-4">Subscribe Now</div>
              </div>
            </div>
          </div>

          <div className=" part-2 col-lg-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordian-header">
                  Donec rutrum congue leo eget malesuada?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="accordian-header">
                  Vivamus suscipit tortor eget felis porttitor volutpat?
                </Accordion.Header>
                <Accordion.Header className="accordian-header">
                  Curabitur non nulla sit amet nisl tempus?
                </Accordion.Header>

                <Accordion.Header className="accordian-header">
                  Pellentesque in ipsum id orci porta dapibus?
                </Accordion.Header>

                <Accordion.Header className="accordian-header">
                  Curabitur non nulla sit amet nisl?
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-0 "
        style={{ filter: "brightness(50%)" }}
      >
        <img src={img2} alt="img-2" />
      </div>
    </>
  );
};
