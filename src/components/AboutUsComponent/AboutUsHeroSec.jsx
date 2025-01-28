import { motion } from "framer-motion";
import React from "react";

const AboutUHeroSec = () => {
  return (
    <div className="BrandingHerosec container-fluid">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
          <div className="BrandHeading">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Think Outside The Box
              <br />
              is not just our tagline
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              It’s our philosophy. We approach every project with innovation and
              creativity, pushing the boundaries to achieve exceptional results.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="row AboutBrand d-flex align-items-center gap-5">
        <div className="col-md-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            _DOMAIN EXPANSION_
            <br />
            <span className="boldpart">We are more than just an agency</span>
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
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          >
            our success stories are a testament to our unwavering commitment to
            digital excellence. We take immense pride in every project we
            undertake, transforming challenges into triumphs for our clients.
            From boosting online visibility and engagement to crafting
            compelling brand narratives, our journey is marked by clients’
            achievements.
            <br />
            <br /> Our passion for innovation, client-centric approach, and
            transparent communication have led to remarkable results. Together,
            we’ve unlocked new digital horizons, and we’re excited to continue
            the journey with you.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutUHeroSec;
