import fullStar from "../../assets/icons/star.svg"
import halfStar from "../../assets/icons/star-half.svg"
import user from "../../assets/icons/user.svg"
// TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css"; // optional for custom styling

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, ExampleCorp",
    quote: "Amazing design team! They transformed our office beautifully.",
    image: "/images/client1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Interior Blogger",
    quote: "They understood my vision perfectly and brought it to life.",
    image: "/images/client2.jpg",
  },
  {
    name: "Mike Brown",
    title: "Homeowner",
    quote: "Exceeded expectations in every way — highly recommend!",
    image: "/images/client3.jpg",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-content">
              <div className="cardRow">
              <div className="t_profile">
                <img src={user} alt="" width="45px" />
              </div>
                  <div className="userName">
                    <span>{t.name}</span>
                </div>
              <div className="t_rating">
                  <img src={fullStar} alt="" width="18px"/>
                  <img src={fullStar} alt="" width="18px"/>
                  <img src={fullStar} alt="" width="18px"/>
                  <img src={fullStar} alt="" width="18px"/>
                  <img src={halfStar} alt="" width="18px"/>
              </div>
              </div>
              <div className="t_message">
                <p>{t.quote}</p>
              </div>
              

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
