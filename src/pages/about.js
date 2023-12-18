import Rectangle from "../components/about/aboutRectangle";
import Header from "../components/about/hero";
import AboutQuote from "../components/about/quote";
import Text from "../components/about/text";
import ContactUs from "../components/main/contactUs";

const About = () => {
  return (
    <div>
      <Header />
      <Text />
      <Rectangle />
      <AboutQuote />
      <ContactUs />
    </div>
  );
};

export default About;
