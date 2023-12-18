import React from "react";
import image from "./img/rectangle.png";
import "./aboutRectangle.css";

const Rectangle = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 about-1 ">
          <div className="about-1-inner">
            <h2>Only the Best</h2>
            <div className="about-1-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
              >
                <path
                  d="M3 3L19.5332 19.5332C19.9697 19.9697 19.9697 20.6774 19.5332 21.1138L3.55882 37.0882"
                  stroke="#FFB400"
                  strokeWidth="5.58824"
                  strokeLinecap="round"
                />
                <path
                  d="M23.6768 3L40.21 19.5332C40.6465 19.9697 40.6465 20.6774 40.21 21.1138L24.2356 37.0882"
                  stroke="#FFB400"
                  strokeWidth="5.58824"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h5>Eco Friendly Construction</h5>
                <p>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </div>
            </div>
            <div className="about-1-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
              >
                <path
                  d="M3 3L19.5332 19.5332C19.9697 19.9697 19.9697 20.6774 19.5332 21.1138L3.55882 37.0882"
                  stroke="#FFB400"
                  strokeWidth="5.58824"
                  strokeLinecap="round"
                />
                <path
                  d="M23.6768 3L40.21 19.5332C40.6465 19.9697 40.6465 20.6774 40.21 21.1138L24.2356 37.0882"
                  stroke="#FFB400"
                  strokeWidth="5.58824"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h5>The Newest Technology Repairs</h5>
                <p>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </div>
            </div>
            <div className="about-1-detail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
              >
                <path
                  d="M3 3L19.5332 19.5332C19.9697 19.9697 19.9697 20.6774 19.5332 21.1138L3.55882 37.0882"
                  stroke="#FFB400"
                  strokeWidth="5.58824"
                  strokeLinecap="round"
                />
                <path
                  d="M23.6768 3L40.21 19.5332C40.6465 19.9697 40.6465 20.6774 40.21 21.1138L24.2356 37.0882"
                  stroke="#FFB400"
                  strokeWidth="5.58824"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <h5>High Quality Construction Management</h5>
                <p>
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </div>
            </div>
            <div>
              <h6>FREE QUOTE</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-8 p-0">
          <img src={image} alt="rectangle-img" className="about-image" />
          <div className="row">
            <div className=" col-lg-6 rectangle-3">
              <h2>12</h2>
              <h6>YEARS ESTABLISHED</h6>
            </div>
            <div className="col-lg-6 rectangle-4">
              <h2>250</h2>
              <h6>COMPLETED PROJECTS</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row about-footer">
        <div className="col-md-4"></div>
        <div className=" col-md-4 rectangle-5">
          <h2>24</h2>
          <h6>FIELD WORKERS</h6>
        </div>
        <div className="col-md-4 rectangle-6">
          <h2>18</h2>
          <h6>OFFICE STAFF</h6>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
