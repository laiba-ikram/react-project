import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
import about from "./img/about.png";
import "./about.css";

const About = () => {
  return (
    <div className="about Container">
      <div className="row">
        <div className="col-lg-4  section-1 p-0 m-0">
          <div className="section-1-content">
            <h2>About Process</h2>
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
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus.
            </p>
            <ul>
              <li> Maecenas ornare nisl</li>
              <li> A tortor ultrices bibendum</li>
              <li> Nulla fermentum</li>
              <li> Metus quis</li>
              <li> Sodales tristique</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 section-2 p-0 m-0">
          <div className="row">
            <img src={about} alt="about-img" />
          </div>

          <div className="row ">
            <div className="col-md-6">
              <div className="scetion-3">
                <h2>12</h2>
                <h6>YEARS ESTABLISHED</h6>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="section-4">
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

export default About;
