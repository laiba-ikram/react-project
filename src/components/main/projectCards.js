import React from "react";
import image1 from "../../img/tower.jpg";
import image2 from "../../img/tower2.jpg";
import image3 from "../../img/tower3.jpg";
import "./projectCard.css";

const ProjectCards = () => {
  return (
    <>
      <div className="project-cards container">
        <div>
          <h2>Latest Project</h2>
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
        <div className="cards row">
          <div className="col-lg-3 col-md-12">
            <img src={image1} alt="tower-1" />

            <div className="card-content">
              <h3>project title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <img src={image2} alt="tower-2" />
            <div className="card-content">
              <h3>project title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <img src={image3} alt="tower-3" />
            <div className="card-content">
              <h3>project title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button>View All</button>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
