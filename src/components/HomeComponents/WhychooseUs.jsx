import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandDetail from '../BrandingComponents/BrandDetail';
import brandBack from '../../Assets/brandingBackground.png';
import webback from '../../Assets/webbackground.png';
import connect from '../../Assets/connectbackground.png';
import creative from '../../Assets/creativeImage.png';
import custBackground from '../../Assets/customBackground.png';

const WhychooseUs = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    "Branding",
    "Web/App Development",
    "Digital Marketing",
    "Creative Designing",
    "Custom Services",
  ];

  const serviceVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="whychooseus">
      <motion.div
        className="chooseContent"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        variants={textVariants}
      >
        <p>Why Choose Domain Expansion?</p>
        <h1>Our Growing Suite of Solutions</h1>
        <p>
          Our solutions cover all aspects of your digital journey, from strategy and<br /> design to development and
          content creation. We're your one-stop-shop for digital success.
        </p>
      </motion.div>

      <div className="aboutContent">
        <div className="services">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service ${selectedService === index ? "active" : ""} ${index === 3 || index === 4 ? "responseService" : ""}`}
              onClick={() => setSelectedService(index)}
            >
              {service}
              {selectedService === index && <div className="diamond"></div>}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedService === 0 && (
          <motion.div
            key="branding"
            className="service-detail"
            variants={serviceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <BrandDetail
              mainHeading="“Where Ideas Take Shape, Brands Take Flight.”"
              check1="Brand Audits and Analysis"
              check2="Brand Creation & Strategy Development"
              check3="Brand Revamp"
              check4="Logo Design & Brand Guidelines Development"
              linkname="branding"
              imgLink={brandBack}
            />
          </motion.div>
        )}
        {selectedService === 1 && (
          <motion.div
            key="webdev"
            className="service-detail"
            variants={serviceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            >
            <BrandDetail
              mainHeading="“You Dream It, We Make It.”"
              linkname="web-app-development"
              check1="Website Development"
              check2="Mobile App Development"
              check3="E-commerce Solutions"
              check4="E-commerce Solutions"
              imgLink={webback}
            />
          </motion.div>
        )}
        {selectedService === 2 && (
          <motion.div
            key="digitalmarketing"
            className="service-detail"
            variants={serviceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <BrandDetail
              mainHeading="“You Say It, We Connect & Sell It.”"
              check1="Search Engine Optimization (SEO)"
              check2="Social Media Marketing"
              check3="Content Marketing"
              check4="Performance Marketing"
              imgLink={connect}
              linkname="digital-marketing"
              check5="Analytics and Performance Tracking"
            />
          </motion.div>
        )}
        {selectedService === 3 && (
          <motion.div
            key="creativedesign"
            className="service-detail"
            variants={serviceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <BrandDetail
              mainHeading="“Let’s Bring Your Ideas to Life.”"
              check1="Graphic Design"
              check2="UI/UX Design"
              check3="Print Design"
              check4="Packaging Design"
              linkname="creative-designing"
              imgLink={creative}
            />
          </motion.div>
        )}
        {selectedService === 4 && (
          <motion.div
            key="customservices"
            className="service-detail"
            variants={serviceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <BrandDetail
              mainHeading="“Made Just for You”"
              check1="Clients Requirements"
              check2="Get Required Services"
              check3="Sit Back & Enjoy Business Growing"
              imgLink={custBackground}
              linkname="customer-service"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhychooseUs;