import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main";
import NavBar from "./navBar";
import Home from "../../pages/home";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Project from "../../pages/project";
import Blog from "../../pages/blog";
import Portfolio from "../../pages/portfolio";
import Service from "../../pages/service";
import Services from "../../pages/services";
import AddToCart from "../../pages/addToCart";

import "../../App.css";

const NavRoute = () => {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addToCart" element={<AddToCart />} />
        </Routes>
      </div>
    </>
  );
};

export default NavRoute;
