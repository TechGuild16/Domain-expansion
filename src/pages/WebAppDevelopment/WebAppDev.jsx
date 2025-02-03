import React from 'react';
import { motion } from 'framer-motion';
import BrandingHeroSec from '../../components/BrandingComponents/BrandingHeroSec';
import './WebApp.css';
import PowerFulBrand from '../../components/BrandingComponents/PowerFulBrand';
import BrandSolutions from '../../components/BrandingComponents/BrandSolutions';
import LetsTalk from '../../components/BrandingComponents/LetsTalk';
import ParticlesBackgroundFourth from '../../components/particlecomponent/ParticlesBackgroundFourth';

const WebAppDev = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

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
    <div className='webAppHero'>
      {/* Hero Section */}
      <div className='BrandingHerosec container-fluid'>
        <div className="particles-wrapper4">
        <ParticlesBackgroundFourth />
        </div>
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <motion.div
              className="BrandHeading"
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1>Crafting Digital Dreams,<br />One Code at a Time</h1>
              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Turning Ideas into Seamless Experiences: Your Vision, Our Code.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="row AboutBrand d-flex align-items-center gap-5">
          <div className="col-md-6">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              You Dream It,<br /><span className='boldpart'>We Make It.</span>
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
              In the vast world of the internet and mobile apps, we’re like digital architects, bringing your ideas to life. We don’t just write code; we craft experiences that are easy and enjoyable for people to use. Whether it’s designing beautiful interfaces or making sure everything works seamlessly, we’re here to make your digital dreams a reality. Our goal is to go beyond your expectations, creating a digital world where what you imagine becomes a part of everyday life. Think of us as the builders of a space where your ideas come alive through technology.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <PowerFulBrand boldText="Digital Presence?" />
      <div className='caseStudy'>
        <motion.div
          className="Caseheading"
          initial="hidden"
          whileInView="visible"
          variants={headingVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>Ready to <span className='boldpart'>Create</span> your digital presence?</h1>
        </motion.div>
        <motion.div
          className="whypickus"
          initial="hidden"
          whileInView="visible"
          variants={paragraphVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>Why Pick <span>Us</span> to <span>Boost Digital Presence?</span></h1>
          <p>We’re not just tech-savvy developers; we’re creators of engaging online experiences. We take your ideas and turn them into user-friendly websites and apps that people love to use. Our focus is on bringing your vision to life, making sure your digital footprint is not only functional but also captivating. With us, it’s about more than just code; it’s about creating a digital space that truly represents you and captivates your audience. Your journey to digital success begins here with us.</p>
        </motion.div>
      </div>
      <BrandSolutions
        firstText="Website Development"
        secondText="Mobile App Development"
        thirdText="E-commerce Solutions"
        fourthText="Custom Application development"
      />
      <LetsTalk
        firstText="Ready to"
        secondText="Transform Your Digital Presence?"
        desc="Let’s Build Something Extraordinary Together. Get Started Now!"
      />
    </div>
  );
};

export default WebAppDev;