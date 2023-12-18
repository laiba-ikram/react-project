import React from "react";
import "./quote.css";

const AboutQuote = () => {
  return (
    <>
      <div className="container about-quote">
        <div className="about-quote-inner row">
          <div className="col-md-5 col-xs-12">
            <p>
              “Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan
              lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi.
              Nullam maximus lectus libero.”
            </p>
            <footer>JOHN SMITH – CEO</footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutQuote;
