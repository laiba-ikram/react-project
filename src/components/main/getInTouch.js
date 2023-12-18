import React from "react";
import Accordion from "react-bootstrap/Accordion";
// import Col from "react-bootstrap/Col";
import "./getInTouch.css";

const GetInTouch = () => {
  return (
    <div className="getInTouch container-fluid">
      <div className="getIntouch-inner row">
        <div className="part-1 col-lg-4 col-xs-12">
          <div>
            {" "}
            <h2>Let’s Build Something Together</h2>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="6"
              viewBox="0 0 48 6"
              fill="none"
            >
              <path d="M0 3H48" stroke="#FFB400" strokeWidth="5" />
            </svg>
          </div>
          <div>
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat.
            </p>
          </div>
          <div>
            {" "}
            <span>GET IN TOUCH</span>
          </div>
        </div>
        <div className=" part-2 col-lg-4 col-xs-12">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordian-header">
                Donec rutrum congue leo eget malesuada?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat.
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
  );
};

export default GetInTouch;
