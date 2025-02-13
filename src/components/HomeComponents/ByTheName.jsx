import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const ByTheName = () => {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for child elements
      },
    },
  };

  return (
    <motion.div
      className='byTheName'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="bynameContent">
        <div className="byDetails">
          {/* Animated "Our Achievements" text */}
          <motion.p
            variants={textVariants}
          >
            Our Achievements
          </motion.p>

          {/* Animated "By the Numbers" heading */}
          <motion.h1
            variants={textVariants}
            whileInView={{ scale: 1.1, transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" } }}
          >
            By the Numbers
          </motion.h1>

          {/* Animated description text */}
          <motion.p
            variants={textVariants}
          >
            Domain expansion keeps getting better at achieving your goals, just like our impact.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ByTheName;