import ContactUs from "../components/home/ContactUs";
import FAQs from "../components/home/FAQs";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Partner from "../components/home/Partner";
import Slider from "../components/home/Slider";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedProduct></FeaturedProduct>
      <Testimonial></Testimonial>
      <FAQs></FAQs>
      <Partner></Partner>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
