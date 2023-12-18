import React from "react";
import { Container } from "react-bootstrap";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <>
      <Container fluid className="hero-section">
        <div className="hero-section-inner">
          <div className="col-md-5">
            <div className="hero-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="104"
                viewBox="0 0 10 104"
                fill="none"
              >
                <path
                  d="M5 104L5 -3.8743e-07"
                  stroke="#FFB400"
                  strokeWidth="10"
                />
              </svg>

              <h2>Our Construction Services</h2>
            </div>
            <div className="hero-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas pellentesque libero dolor in diam consequat ut.{" "}
              </p>
            </div>
            <div className="hero-button">
              <button>GET A FREE QUOTE</button>
            </div>
          </div>
          <div className="col-md-4 services-blocks">
            <h2>What We Do</h2>
            <div className="svg-block">
              <div className="svg-block-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="62"
                  viewBox="0 0 61 62"
                  fill="none"
                >
                  <path
                    d="M24.1464 60.25H2V1.75H30.4143V60.25H58.4107V15.9571H35.8464"
                    stroke="#FFB400"
                    stroke-width="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M2 15.1211H19.9679"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M2 25.1504H19.9679"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M30.4141 25.1504H48.3819"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M2 35.1785H19.9679"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M30.4143 35.1785H48.3821"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M2 45.207H19.9679"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                  <path
                    opacity="0.5"
                    d="M30.4143 45.207H48.3821"
                    stroke="#FFB400"
                    strokeWidth="3.34286"
                  />
                </svg>
              </div>
              <div className="svg-block-content">
                <h5>Building Construction</h5>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
            <div className="svg-block">
              <div className="svg-block-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="65"
                  viewBox="0 0 57 65"
                  fill="none"
                >
                  <path
                    d="M48.3335 32.7112V62.75H36.0659V29.2451C22.4347 17.6917 32.2037 7.10113 38.7922 3.25V14.625C38.7922 16.3187 40.1652 17.6917 41.8589 17.6917V17.6917C43.5527 17.6917 44.9257 16.3187 44.9257 14.625V3.25C51.7413 7.48625 62.2374 18.616 49.6967 29.2451"
                    stroke="#FFB400"
                    strokeWidth="2.55"
                  />
                  <path
                    opacity="0.5"
                    d="M9.65039 32.1502V17.7002"
                    stroke="#FFB400"
                    strokeWidth="2.55"
                  />
                  <path
                    d="M16.3846 34.7H4.61538L2 62.75H19L16.3846 34.7Z"
                    stroke="#FFB400"
                    strokeWidth="2.55"
                  />
                  <path
                    d="M7.42731 17.7002L12.7235 17.7002L13.9004 8.3502L6.25039 8.3502L7.42731 17.7002Z"
                    stroke="#FFB400"
                    strokeWidth="2.55"
                  />
                </svg>
              </div>
              <div className="svg-block-content">
                <h5>Building Repairs</h5>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
            <div className="svg-block">
              <div className="svg-block-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="72"
                  viewBox="0 0 47 72"
                  fill="none"
                >
                  <path
                    d="M8.76471 29.9118H44.6176V2.17651H2V39.3824H17.5588L14.8529 70.5H32.4412L28.3824 39.3824H44.6176V35.3236"
                    stroke="#FFB400"
                    strokeWidth="3"
                  />
                  <path
                    d="M18.9128 2.8527L18.9128 10.2939C18.9128 12.9091 16.7928 15.0292 14.1775 15.0292C11.5623 15.0292 9.44225 12.9091 9.44225 10.2939L9.44225 2.8527L18.9128 2.8527Z"
                    stroke="#FFB400"
                    strokeWidth="2.70588"
                  />
                  <path
                    d="M29.7349 2.8527L29.7349 15.7056C29.7349 18.3209 27.6149 20.4409 24.9997 20.4409C22.3844 20.4409 20.2644 18.3209 20.2644 15.7056L20.2644 2.8527L29.7349 2.8527Z"
                    stroke="#FFB400"
                    strokeWidth="2.70588"
                  />
                </svg>
              </div>
              <div className="svg-block-content">
                <h5>Custom Design</h5>
                <p>
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="quote">
        <h2>Get a Quote For Your Project</h2>
        <button>FREE QUOTE</button>{" "}
      </div>
    </>
  );
};
export default HeroSection;
