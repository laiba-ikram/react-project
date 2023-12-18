import React from "react";
import "./block-1.css";
const BlockTwo = () => {
  return (
    <div className=" container-fluid">
      <div className="row">
        <div className="block-1 col">
          <div className="block-1-inner">
            <h2>Repairs & Installations</h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="8"
              viewBox="0 0 55 8"
              fill="none"
            >
              <path d="M0 4L55 4" stroke="#FFB400" strokeWidth="8" />
            </svg>

            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.
            </p>

            <div className="row  lists">
              <div className="col-md-4 col-12">
                <ul>
                  <li>Lectus erat consectetur</li>
                  <li>eu sapien eget</li>
                  <li>rhoncus consectetur sem</li>
                  <li>Proin cursus</li>
                  <li> dolor a mollis consectetur</li>
                </ul>
              </div>
              <div className="col-md-4 col-12">
                <ul>
                  <li>Lectus erat consectetur</li>
                  <li>eu sapien eget</li>
                  <li>rhoncus consectetur sem</li>
                  <li>Proin cursus</li>
                  <li> dolor a mollis consectetur</li>
                </ul>
              </div>
              <div className="col-md-4 col-12">
                <ul>
                  <li>Lectus erat consectetur</li>
                  <li>eu sapien eget</li>
                  <li>rhoncus consectetur sem</li>
                  <li>Proin cursus</li>
                  <li> dolor a mollis consectetur</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6  block-2">
              <span>GET A QUOTE</span>
            </div>
            <div className="col-md-6  block-3">
              <span>LEARN MORE</span>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default BlockTwo;
