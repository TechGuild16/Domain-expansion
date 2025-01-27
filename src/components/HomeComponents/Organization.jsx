import React from 'react';
import { motion } from 'framer-motion';
import company1 from '../../Assets/company1.png';
import company2 from '../../Assets/company2.png';
import company3 from '../../Assets/company3.png';
import company5 from '../../Assets/company5.png';
import company6 from '../../Assets/company6.png';
import company7 from '../../Assets/company7.png';

const Organization = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the company logos
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  // Animation variants for individual logos
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='organization'>
      {/* Animated Heading */}
      <motion.div
        className="organizationHeading"
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }} // Only trigger once
        variants={headingVariants}
      >
        <h1>Trusted by<br />20+ Organizations</h1>
      </motion.div>

      {/* Animated Company Logos */}
      <motion.div
        className="companyShowcase d-flex align-items-center justify-content-center"
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true }} // Only trigger once
        variants={logoVariants}
      >
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
              alt=""
              variants={{
                initial: { y: 0 },
                hover: { y: '-100%' },
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={company}
              alt=""
              variants={{
                initial: { y: '100%' },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Organization;