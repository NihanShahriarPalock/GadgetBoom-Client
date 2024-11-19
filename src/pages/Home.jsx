import ContactUs from "../components/home/ContactUs"
import FAQs from "../components/home/FAQs"
import Slider from "../components/home/Slider"
import Testimonial from "../components/home/Testimonial"


const Home = () => {
  return (
      <div>
          <Slider></Slider>
          <Testimonial></Testimonial>
          <FAQs></FAQs>
          <ContactUs></ContactUs>
    </div>
  )
}

export default Home