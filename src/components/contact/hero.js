import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container-fluid contact-hero">
      <div className="row contact-hero-inner">
        <div className="col-md-8 hero-1">
          <div className="hero-1-content">
            <div className="hero-inner">
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
                  stroke-width="10"
                />
              </svg>
              <h2>Contact Us</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
              egestas pellentesque libero dolor in diam consequat ut. Mi nibh
              amet viverra id aliquet neque odio.
            </p>
            <button>SEND A MESSAGE</button>
          </div>
        </div>
        <div className="col-md-4 hero-2">
          <div className="hero-2-inner">
            {" "}
            <h2>Contact info</h2>
            <div>
              <h5>Our Office</h5>
              <p>1234 Divi St. #1000, San Francisc, CA 93251</p>
            </div>
            <div>
              <h5>Open Office Hours</h5>
              <p>M-F: 9am – 6pm </p>
              <p>S-S: 10am – 4pm</p>
            </div>
            <div>
              <h5>Get in Touch</h5>
              <p>constructioninc.com </p>
              <p>(346) 426-2351</p>
            </div>
            <div className="svg-section">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="facebook">
                  <path
                    id="Vector"
                    d="M17.2499 1.83337H14.3749C13.1041 1.83337 11.8853 2.31626 10.9867 3.1758C10.0881 4.03534 9.58325 5.20113 9.58325 6.41671V9.16671H6.70825V12.8334H9.58325V20.1667H13.4166V12.8334H16.2916L17.2499 9.16671H13.4166V6.41671C13.4166 6.17359 13.5176 5.94043 13.6973 5.76853C13.877 5.59662 14.1208 5.50004 14.3749 5.50004H17.2499V1.83337Z"
                    fill="#2A2A2A"
                  />
                </g>
              </svg>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="twitter">
                  <path
                    id="Vector"
                    d="M21.0834 2.74994C20.2056 3.36913 19.2337 3.84271 18.2051 4.15244C17.653 3.51766 16.9193 3.06774 16.1032 2.86354C15.2871 2.65934 14.428 2.7107 13.642 3.01069C12.856 3.31068 12.1812 3.84481 11.7086 4.54085C11.2361 5.23689 10.9888 6.06125 11.0001 6.90244V7.81911C9.38916 7.86088 7.79292 7.5036 6.35351 6.7791C4.9141 6.0546 3.67621 4.98536 2.75008 3.66661C2.75008 3.66661 -0.916585 11.9166 7.33342 15.5833C5.44557 16.8647 3.19664 17.5073 0.916748 17.4166C9.16675 21.9999 19.2501 17.4166 19.2501 6.87494C19.2492 6.61961 19.2247 6.3649 19.1768 6.11411C20.1123 5.19148 20.7725 4.02659 21.0834 2.74994Z"
                    fill="#2A2A2A"
                  />
                </g>
              </svg>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="linkedin">
                  <path
                    id="Vector"
                    d="M16 7.33337C17.5913 7.33337 19.1174 7.91284 20.2426 8.94429C21.3679 9.97574 22 11.3747 22 12.8334V19.25H18V12.8334C18 12.3471 17.7893 11.8808 17.4142 11.537C17.0391 11.1932 16.5304 11 16 11C15.4696 11 14.9609 11.1932 14.5858 11.537C14.2107 11.8808 14 12.3471 14 12.8334V19.25H10V12.8334C10 11.3747 10.6321 9.97574 11.7574 8.94429C12.8826 7.91284 14.4087 7.33337 16 7.33337Z"
                    fill="#2A2A2A"
                  />
                  <path
                    id="Vector_2"
                    d="M6 8.25H2V19.25H6V8.25Z"
                    fill="#2A2A2A"
                  />
                  <path
                    id="Vector_3"
                    d="M4 5.50004C5.10457 5.50004 6 4.67923 6 3.66671C6 2.65419 5.10457 1.83337 4 1.83337C2.89543 1.83337 2 2.65419 2 3.66671C2 4.67923 2.89543 5.50004 4 5.50004Z"
                    fill="#2A2A2A"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Call = () => {
  return (
    <div className="call">
      <div className="call-1 col-lg-8">
        <h5>Call: (541) 931-3526</h5>
        <p>We Can’t Wait to Make Your Ideas a Reality</p>
      </div>
      <div className="call-2 col-lg-4">
        <p>ONLINE ESTIMATE FORM</p>
      </div>
    </div>
  );
};

export default Hero;
