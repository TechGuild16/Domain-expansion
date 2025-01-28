import { motion } from "framer-motion";
import React from "react";
import BrandSolutions from "../../components/BrandingComponents/BrandSolutions";
import LetsTalk from "../../components/BrandingComponents/LetsTalk";
import PowerFulBrand from "../../components/BrandingComponents/PowerFulBrand";

const CreativeDesign = () => {
  // Animation variants for the heading
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for the paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
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
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="BrandingHerosec container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <motion.div
              className="BrandHeading"
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1>Let's Bring Your Ideas to Life</h1>
              <motion.p
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                Turning Your Ideas into Stunning Visuals: Let’s Make Your Vision
                a Reality.
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
              <span className="boldpart">From Imagination to Impact</span> Where
              Your Ideas Blossom into Vibrant Realities.
              <br />
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
              We believe in the power of visuals to captivate your audience and
              leave a lasting mark. Our Creative Designing Services is your
              gateway to enhancing your brand’s presence and achieving
              remarkable results in the digital world.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <PowerFulBrand boldText="Stunning Visual?" />
      <div className="caseStudy">
        <motion.div
          className="Caseheading"
          initial="hidden"
          whileInView="visible"
          variants={headingVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>
            Ready to <span className="boldpart">elevate</span> your brand?
          </h1>
        </motion.div>
        <motion.div
          className="whypickus"
          initial="hidden"
          whileInView="visible"
          variants={paragraphVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>
            Why Pick <span>Us</span> to <span>Create Life Into Visuals?</span>
          </h1>
          <p>
            We’re not just designers; we’re visual storytellers who understand
            the language of aesthetics. Our approach to creative design goes
            beyond the surface — it’s about crafting visuals that resonate
            deeply with your audience. We are committed to bringing your ideas
            to life through compelling graphics, ensuring that each design
            element reflects your brand’s personality. With us, it’s not just
            about images; it’s about creating a visual identity that speaks
            volumes and leaves a lasting impression.
          </p>
        </motion.div>
      </div>
      <BrandSolutions
        firstText="Graphic Design"
        secondText="UI/UX Design"
        thirdText="Print Design"
        fourthText="Packaging Design"
      />
      <LetsTalk
        firstText="Ready to "
        secondText="Elevate Your Visual Identity?"
        desc="Let’s Bring Your Ideas to Life through Captivating Designs. Start Your Creative Journey Now!"
      />
    </div>
  );
};

export default CreativeDesign;
