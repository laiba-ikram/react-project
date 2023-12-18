import { HeaderOne, HeaderTwo } from "../components/home/headers";
import TestimonialSection from "../components/main/testimonialSection";
import ContactUs from "../components/main/contactUs";
import { SvgBlock } from "../components/home/svgBlock";
import HomeRectangle from "../components/home/consultantionBlock";

const Home = () => {
  return (
    <div>
      <HeaderOne />
      <SvgBlock />
      <HomeRectangle />
      <HeaderTwo />
      <TestimonialSection />
      <ContactUs />
    </div>
  );
};

export default Home;
