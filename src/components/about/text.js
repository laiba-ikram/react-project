import React from "react";
import "./text.css";

const Text = () => {
  return (
    <div className="about-text container">
      <div>
        <div className="row about-text-header">
          <h2> About Divi Construction</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="8"
            viewBox="0 0 55 8"
            fill="none"
          >
            <path d="M0 4L55 4" stroke="#FFB400" strokeWidth="8" />
          </svg>
        </div>

        <div className="about-text-detail row">
          <div className="col-md-5">
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed nibh dignissim, cursus tellus sit amet, ultrices mauris.
              Aliquam blandit est in eros elementum, quis vehicula est suscipit.
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Text;
