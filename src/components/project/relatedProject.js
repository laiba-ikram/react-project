import React from "react";
import img1 from "../../img/related-1.jpg";
import img2 from "../../img/related-2.jpg";
import img3 from "../../img/related-3.jpg";
import "./relatedProject.css";

const RelatedProject = () => {
  return (
    <div className="related-project">
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
      <div className="container">
        <div className="cards row">
          <div className="col-lg-3 col-sm-12 ">
            <img src={img1} alt="tower-1" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 ">
            <img src={img2} alt="tower-2" />
            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 ">
            <img src={img3} alt="tower-3" />
            <div className="card-content">
              <h3>project title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum. Cras tristique
                viverra gravida et sit egestas.
              </p>
              <button>learn more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="related-project-footer">
        <button>View All</button>
      </div>
    </div>
  );
};

export default RelatedProject;
