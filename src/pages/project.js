import React from "react";
import HeroSection from "../components/project/heroSection";
import AboutThisProject from "../components/project/about";
import RelatedProject from "../components/project/relatedProject";
import ContactUs from "../components/main/contactUs";

const Project = () => {
  return (
    <div>
      <HeroSection />
      <AboutThisProject />
      <RelatedProject />
      <ContactUs />
    </div>
  );
};

export default Project;
