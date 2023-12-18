import React from "react";
import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import blog4 from "../../img/blog4.jpg";
import blog5 from "../../img/blog5.jpg";
import blog6 from "../../img/blog6.jpg";
import "./blogCard.css";

const BlogCards = () => {
  return (
    <div className="blog-cards conatiner">
      <div className="col-md-3">
        <div style={{ marginBottom: "40px" }}>
          <img src={blog1} alt="blog-1" />

          <div className="blog-card-content">
            <h3>Nunc Volutpat Venenatis</h3>
            <h6>May 9, 2014 | Category</h6>
            <p>
              Nulla a odio sed magna congue condimentum. Pellentesque convallis
              enim nec libero vulputate, et rhoncus urna placerat. Phasellus
              mattis, diam vel vehicula facilisis, erat leo dapibus augue, at
              mollis tellus ex non nisi.
            </p>
          </div>
        </div>
        <div>
          <img src={blog4} alt="blog-4" />

          <div className="blog-card-content">
            <h3>Nunc Volutpat Venenatis</h3>
            <h6>May 9, 2014 | Category</h6>
            <p>
              Nulla a odio sed magna congue condimentum. Pellentesque convallis
              enim nec libero vulputate, et rhoncus urna placerat. Phasellus
              mattis, diam vel vehicula facilisis, erat leo dapibus augue, at
              mollis tellus ex non nisi. Maecenas urna sapien, dignissim a augue
              vitae, porttitor luctus urna. Morbi scelerisque semper congue.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div style={{ marginBottom: "40px" }}>
          <img src={blog2} alt="blog-2" />

          <div className="blog-card-content">
            <h3>Vestibulum Nisl Felis</h3>
            <h6>May 9, 2014 | Category</h6>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquam justo et nibh venenatis aliquet.
            </p>{" "}
          </div>
        </div>
        <div>
          <img src={blog5} alt="blog-4" />

          <div className="blog-card-content">
            <h3>Donec Sit Amet Nibh</h3>
            <h6>May 9, 2014 | Category</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquam justo et nibh venenatis aliquet.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div style={{ marginBottom: "40px" }}>
          <img src={blog3} alt="blog-3" />

          <div className="blog-card-content">
            <h3>Proin Eu Augue Efficitur</h3>
            <h6>May 9, 2014 | Category</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquam justo et nibh venenatis aliquet.
            </p>
          </div>
        </div>
        <div>
          <img src={blog6} alt="blog-6" />

          <div className="blog-card-content">
            <h3>Maecenas Fringilla Augue</h3>
            <h6>May 9, 2014 | Category</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquam justo et nibh venenatis aliquet.Donec quis felis
              imperdiet, vestibulum est ut, pulvinar dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
