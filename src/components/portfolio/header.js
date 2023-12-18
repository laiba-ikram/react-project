import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Container className="header" fluid>
      <Row>
        <Col md={8} className="header-content">
          <div className="header-content-detail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="140"
              viewBox="0 0 10 140"
              fill="none"
            >
              <path
                d="M5 140L5.00001 -4.82798e-06"
                stroke="#FFB400"
                strokeWidth="10"
              />
            </svg>
            <h2>Our Construction Projects</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            egestas pellentesque libero dolor in diam consequat ut.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

// import React from "react";

// const Header = () => {
//   return (
//     <div className="header row">
//       <div className="header-content col-md-6 ">
//         <div className="header-content-inner ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="10"
//             height="140"
//             viewBox="0 0 10 140"
//             fill="none"
//           >
//             <path
//               d="M5 140L5.00001 -4.82798e-06"
//               stroke="#FFB400"
//               strokeWidth="10"
//             />
//           </svg>
//           <h2>Our Construction Projects</h2>
//         </div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
//           egestas pellentesque libero dolor in diam consequat ut.{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Header;
