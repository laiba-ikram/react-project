import React from "react";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-2 ">
      <div className="hero-section-inner-1 col-md-6">
        <div className="hero-section-content   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="80"
            viewBox="0 0 10 104"
            fill="none"
          >
            <path d="M5 104L5 -3.8743e-07" stroke="#FFB400" strokeWidth="10" />
          </svg>
          {""}
          <h2>Monarch HQ Project</h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          egestas pellentesque libero dolor in diam consequat ut.
        </p>
      </div>
      <div className="hero-section-inner-2 col-md-4 ">
        Date: 12 April 2018 <br /> Client: Monarch Group <br /> Project Type:
        Building Renovation
      </div>
    </div>
  );
};

export default HeroSection;
