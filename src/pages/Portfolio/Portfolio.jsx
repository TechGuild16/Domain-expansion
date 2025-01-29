import { motion } from "framer-motion";
import React from "react";
import LetsTalk from "../../components/PortfolioComponent/LetsTalk";
import "./Portfolio.css";

const Portfolio = () => {
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
              A Glimpse Into Our Domain
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              Design creates culture. Culture shapes values. Values determine
              the future.
            </motion.p>
          </div>
        </div>
      </div>
      <LetsTalk
        firstText="Let's redefine your brand together"
        secondText="We cover it all"
        desc="Ready to transform your brand narrative? Let’s do it."
      />
    </div>
  );
};

export default Portfolio;
