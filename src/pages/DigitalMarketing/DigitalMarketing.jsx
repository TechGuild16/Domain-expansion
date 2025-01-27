import React from 'react';
import { motion } from 'framer-motion';
import PowerFulBrand from '../../components/BrandingComponents/PowerFulBrand';
import BrandSolutions from '../../components/BrandingComponents/BrandSolutions';
import LetsTalk from '../../components/BrandingComponents/LetsTalk';

const DigitalMarketing = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for the paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

  // Animation variants for the dots and line
  const dotsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div>
      {/* Hero Section */}
      <div className='BrandingHerosec container-fluid'>
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <motion.div
              className="BrandHeading"
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1>Clicks speak louder than words in<br />the language of marketing</h1>
              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                In the digital marketing jungle, the only survival of the fittest is the one with the best clickbait.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* About Brand Section */}
        <div className="row AboutBrand d-flex align-items-center gap-5">
          <div className="col-md-6">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              You Say It,<br /><span className='boldpart'>We Connect & Sell It.</span>
            </motion.h1>
            <motion.div
              className="d-flex align-items-center pt-4 gap-2"
              variants={dotsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div className="dot" variants={dotVariants} />
              <motion.div className="dot" variants={dotVariants} />
              <motion.div className="dot" variants={dotVariants} />
              <motion.div className="line" variants={lineVariants} />
            </motion.div>
          </div>
          <div className="col-md-5 detailBrand">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={paragraphVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              Step into Digital Dynamo Strategies, where we turn online spaces into vibrant hubs for your brand. In the digital age, a strong strategy is your business’s secret weapon. We’re here not just to keep pace but to lead, making sure your brand captivates, connects, and grows like never before.
            </motion.p>
          </div>
        </div>
      </div>

      <PowerFulBrand boldText="Digital Campaigns?" />
      <div className='caseStudy'>
        <motion.div
          className="Caseheading"
          initial="hidden"
          whileInView="visible"
          variants={headingVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1><span className='boldpart'>Impact</span> of Digital Dynamo Strategies</h1>
        </motion.div>
        <motion.div
          className="whypickus"
          initial="hidden"
          whileInView="visible"
          variants={paragraphVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>Why Pick <span>Us</span> to <span>Drive Real Results?</span></h1>
          <p>We’re not just marketers; we’re storytellers who understand the pulse of your audience. Our approach to digital marketing goes beyond buzzwords — it’s about creating compelling narratives that resonate authentically with your target market. We are committed to crafting digital campaigns that not only boost visibility but also create meaningful connections with your audience. With us, it’s not just about numbers; it’s about fostering engagement and turning clicks into lasting relationships.</p>
        </motion.div>
      </div>
      <BrandSolutions
        firstText="Search Engine Optimization (SEO)"
        secondText="Social Media Marketing"
        thirdText="Content Marketing"
        fourthText="Performance Marketing"
      />
      <LetsTalk
        firstText="Ready to amplify"
        secondText="your online presence and drive real results?"
        desc="Let’s take the first step towards digital success."
      />
    </div>
  );
};

export default DigitalMarketing;