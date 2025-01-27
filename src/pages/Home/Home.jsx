import React from "react";
import { motion } from "framer-motion"; 
import "./Home.css";
import WhychooseUs from "../../components/HomeComponents/WhychooseUs";
import Organization from "../../components/HomeComponents/Organization";
import ByTheName from "../../components/HomeComponents/ByTheName";
import BestSolutions from "../../components/HomeComponents/BestSolutions";
import SliderHome from "../../components/HomeComponents/SliderHome";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
    hover: { scale: 1.1, y: -5, transition: { duration: 0.3 } },
    float: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="HomePage">
      <motion.div
        className="background-gradient"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      ></motion.div>

      <div className="BrandingHerosec container-fluid">
        <div className="row">
          <motion.p
            className="outbox"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Think out of the box
          </motion.p>

          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="BrandHeading">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{color: "#fff"}}
              >
                As Long As We Are Here There
              </motion.h2>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={staggerVariants}
              >
                {"Will Be Infinite Digital Ways To Succeed".split(" ").map((word, wordIndex) => (
                  <motion.span
                 
                    key={wordIndex}
                    variants={staggerVariants}
                    style={{ display: "inline-block", marginRight: "8px", color:"#7c58ff" }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        variants={letterVariants}
                        style={{ display: "inline-block" }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="button"
                id="homebutton"
                initial="hidden"
                animate={["visible", "float"]}
                variants={buttonVariants}
                whileHover="hover"
              >
                <button>Let's talk</button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <WhychooseUs />
      <Organization />
      <ByTheName />
      <BestSolutions />
      <SliderHome />
    </div>
  );
};

export default Home;