import React from "react";
import img1 from "../../img/tower2.jpg";
import img2 from "../../img/about-img.jpg";
import img3 from "../../img/project1.jpg";
import "./about.css";

const AboutThisProject = () => {
  return (
    <div className="about-project container ">
      <div className="about-section-1 row">
        <div className="text col-md-5 ">
          <h2>About this project</h2>
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

        <div className="col-md-5">
          <img src={img1} alt="img" className="fit-image" />
        </div>
      </div>
      <div className="about-section-2 row">
        <img src={img2} alt="imggg" />
      </div>
      <div className="about-section-3 row">
        <div className="col-md-5">
          <img src={img3} alt="imgggs" className="image-fit" />
        </div>
        <div className="col-md-5">
          <p>
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
            cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
            commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
            ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
            augue mauris molestie augue non feugiat ligula neque nec felis.
          </p>
          <p>
            {" "}
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutThisProject;
