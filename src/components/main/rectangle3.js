import React from "react";
import "./rectangle.css";

import image from "../../img/Rectangle.jpg";

const Rectangle3 = () => {
  return (
    <div>
      <div className="container-fluid rectangle3 p-0">
        <div className="row p-0">
          <div className="col-lg-4 part1 p-0 m-0">
            <img src={image} alt="rectangle-img" className="img-fit" />
          </div>

          <div className="col-lg-8 p-0 m-0 part2">
            <div className=" part2">
              <h1>No Project Too Big Or Too Small</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="6"
                viewBox="0 0 48 6"
                fill="none"
                className="icon"
              >
                <path d="M0 3H48" stroke="#FFB400" strokeWidth="5" />
              </svg>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="section3">
                  <div className="content-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </div>
                  <div className="content-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <div className="section4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col rectangle9">
                <h2>12</h2>
                <h6>YEARS ESTABLISHED</h6>
              </div>
              <div className="col  rectangle10">
                <h2>250</h2>
                <h6>COMPLETED PROJECTS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle3;
