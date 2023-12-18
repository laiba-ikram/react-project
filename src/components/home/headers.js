import React from "react";
import "./headers.css";

export const HeaderOne = () => {
  return (
    <div className="home-header-one container-fluid">
      <div className="col-md-6 home-header-inner ">
        <div className=" home-header-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="6"
            viewBox="0 0 52 6"
            fill="none"
          >
            <path d="M0 3H52" stroke="#FFB400" strokeWidth="6" />
          </svg>
          <h2>Construction Inc</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
          <h6>VIEW OUR WORK</h6>
        </div>
      </div>
    </div>
  );
};

export const HeaderTwo = () => {
  return (
    <div className="home-header-two container-fluid">
      <div className="col-md-6 home-header-inner ">
        <div className=" home-header-detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="6"
            viewBox="0 0 52 6"
            fill="none"
          >
            <path d="M0 3H52" stroke="#FFB400" strokeWidth="6" />
          </svg>
          <h2>We’ve Been Building For Over 20 years</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lectus erat consectetur eu sapien eget, rhoncus consectetur sem.
          </p>
          <h6>About us</h6>
        </div>
      </div>
    </div>
  );
};
