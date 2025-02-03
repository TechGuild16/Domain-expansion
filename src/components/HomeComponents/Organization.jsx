import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import react-slick
import company1 from '../../Assets/company1.png';
import company2 from '../../Assets/company2.png';
import company3 from '../../Assets/company3.png';
import company5 from '../../Assets/company5.png';
import company6 from '../../Assets/company6.png';
import company7 from '../../Assets/company7.png';

const Organization = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Slider settings with autoplay and no previous/next arrows
  const settings = {
    dots: true, // Dots for navigation
    infinite: true, // Infinite scroll
    speed: 500, // Speed of transition
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time interval for autoplay in milliseconds (2 seconds)
    slidesToShow: 4, // Number of visible items at once
    slidesToScroll: 1, // Number of items to scroll at a time
    arrows: false, // Remove previous/next buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='organization'>
      <motion.div
        className="organizationHeading"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={headingVariants}
      >
        <h1>Trusted by<br />20+ Organizations</h1>
      </motion.div>

      <motion.div
        className="companyShowcase"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={logoVariants}
      >
        <Slider {...settings}>
          {[company1, company2, company3, company5, company6, company7].map((company, index) => (
            <motion.div
              key={index}
              className="showcaseBox"
              whileHover="hover"
              initial="initial"
              variants={childVariants}
            >
              <motion.img
                src={company}
                alt="Company Logo"
                variants={{
                  initial: { y: 0 },
                  hover: { y: '-100%' },
                }}
                transition={{ duration: 0.5 }}
              />
              <motion.img
                src={company}
                alt="Company Logo"
                variants={{
                  initial: { y: '100%' },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Organization;
