import React from "react";
import HeroSection from "../components/main/heroSection";
import Rectangle3 from "../components/main/rectangle3";
import ProjectCards from "../components/main/projectCards";
import AboutUsSection from "../components/main/aboutUs";
import GetInTouch from "../components/main/getInTouch";
import TestimonialSection from "../components/main/testimonialSection";
import ContactUs from "../components/main/contactUs";
// import LatestProject from "../components/main/latestProject";
// import BasicExample from "../components/main/card";

const Main = () => {
  return (
    <>
      <HeroSection />
      <Rectangle3 />
      <ProjectCards />
      <AboutUsSection />
      <GetInTouch />
      <TestimonialSection />
      <ContactUs />
    </>
  );
};
export default Main;
