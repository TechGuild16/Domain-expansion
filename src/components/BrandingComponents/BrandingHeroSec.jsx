import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackgroundThird from '../particlecomponent/ParticleBackgroundThird'
const BrandingHeroSec = () => {
  return (
    <div className='brandingHead'>
    <div className="BrandingHerosec container-fluid">
    <div className="particles-wrapper3">
    <ParticleBackgroundThird />
    </div>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <div className="BrandHeading">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Beauty Does Not Lie In The<br />
              Eyes Of The Beholder
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
              >
              Your brand deserves to stand out, and we’re here to make that happen
            </motion.p>
          </div>
        </div>
      </div>
      <div className="row AboutBrand pb-5 d-flex align-items-center gap-5">
        <div className="col-md-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            >
            Where Ideas Take Shape,<br />
            <span className="boldpart">Brands Take Flight.</span>
          </motion.h1>
          <div className="d-flex align-items-center pt-4 gap-2">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="col-md-5 detailBrand">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
            >
            Unleash the power of your brand with our comprehensive suite of<br /> services.
            From strategic planning to captivating design, we bring your brand to life, making it memorable and impactful.
          </motion.p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BrandingHeroSec;
