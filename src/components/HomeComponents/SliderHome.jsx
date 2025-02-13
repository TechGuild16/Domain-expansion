import React from "react";
import Slider from "react-slick"; 
import person2 from "../../Assets/Saginala.webp";
import { FaQuoteLeft } from "react-icons/fa";
import person1 from "../../Assets/ajeetKumar.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
  const Replies = [
    {
      companyName: "Jeev Organo India Pvt Ltd",
      description:
        "The Graphic/Creative Designing Services from Domain Expansion have been instrumental in creating a powerful brand identity for us. Their design team crafted a logo that perfectly represents our company and has left a lasting impression. The cohesive branding has given us a professional edge in the market. We highly recommend Domain Expansion for their commitment to our brand's visual communication.",
      stars: 5,
      personName: "Ajeet Kumar Singh",
      designation: "Managing Director",
      imgLink: person1,
    },
    {
      companyName: "Cropwings Technology",
      description:
        "Domain Expansion has been our trusted partner in the digital landscape. Their Digital Marketing Services package completely transformed our online presence. Their expert SEO strategies significantly increased our website traffic, bringing us more potential customers. Our engagement on social media soared, and their email campaigns had a direct impact on our conversions. Domain Expansion truly understands our goals and consistently delivers outstanding results.",
      stars: 5,
      personName: "Saginala Manjunath",
      designation: "Co-Founder",
      imgLink: person2,
    },
  ];

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 5000,
    draggable: true, 
  };

  return (
    <div className="sliderHome">
      <Slider {...settings}>
        {Replies.map((reply, index) => (
          <div key={index}>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <h3 className="company-name">{reply.companyName}</h3>
                <p className="testimonial-description">{reply.description}</p>
                <div className="testimonial-stars">
                  {Array(reply.stars)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
                <div className="testimonial-footer">
                  <img
                    src={reply.imgLink}
                    alt={reply.personName}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h5 className="person-name">{reply.personName}</h5>
                    <p className="designation">{reply.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHome;
