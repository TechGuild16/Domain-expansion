import React from 'react';
import { motion } from 'framer-motion';

const CaseStudy = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className='caseStudy'>
      <motion.div
        className="Caseheading"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1>
          Ready to <span className='boldpart'>elevate</span> your brand?
        </h1>
      </motion.div>

      <motion.div
        className="whypickus"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 variants={textVariants}>
          Why Pick <span>Us</span> to <span>Shape Your Brand?</span>
        </motion.h1>

        <motion.p variants={paragraphVariants}>
          Choose us to shape your brand because we’re not just creators; we’re storytellers who understand the essence of your business. Our approach to branding goes beyond design—it delves into the soul of your company, unraveling its unique narrative. We’re committed to crafting a brand identity that resonates authentically with your audience, ensuring that every element reflects your values and aspirations. With us, it’s not just about logos and visuals; it’s about building a brand that speaks to people on a profound level, establishing a connection that lasts.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CaseStudy;