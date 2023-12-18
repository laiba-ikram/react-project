import React from "react";
import img1 from "../../img/port-card-1.jpg";
import img2 from "../../img/port-card-2.jpg";
import img3 from "../../img/port-card-3.jpg";
import img4 from "../../img/port-card-4.jpg";
import img5 from "../../img/port-card-5.jpg";
import img6 from "../../img/port-card-6.jpg";
import img7 from "../../img/port-card-7.jpg";
import img8 from "../../img/port-card-8.jpg";
import img9 from "../../img/port-card-9.jpg";
import "./portfolioCard.css";

const PortfolioCards = () => {
  return (
    <>
      <div className="container portfolio-cards ">
        <div className=" row  justify-content-center">
          <div className="col-lg-3">
            <img src={img1} alt="img-1" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={img2} alt="img-2" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={img3} alt="img-3" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>

        <div className=" row  justify-content-center">
          <div className="col-lg-3">
            <img src={img4} alt="img-4" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={img5} alt="img-5" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={img6} alt="img-6" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>

        <div className=" row  justify-content-center">
          <div className="col-lg-3">
            <img src={img7} alt="img-7" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={img8} alt="img-8" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="col-lg-3">
            <img src={img9} alt="img-9" />

            <div className="card-content">
              <h3>Service title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h2>Have a Project in Mind?</h2>
        <h2> Let’s Get Building!</h2>
      </div>
    </>
  );
};

export default PortfolioCards;
