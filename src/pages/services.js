import BlockOne from "../components/services/block-1";
import BlockTwo from "../components/services/block-2";
import BlockThree from "../components/services/block-3";
import HeroSection from "../components/services/heroSection";
import ServicesCard from "../components/services/serviceCards";
import ContactUs from "../components/main/contactUs";

const Services = () => {
  return (
    <div>
      <HeroSection />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <ServicesCard />
      <ContactUs />
    </div>
  );
};

export default Services;
