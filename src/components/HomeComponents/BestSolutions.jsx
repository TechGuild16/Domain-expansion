import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import img1 from "../../Assets/solImg1.png";
import img2 from "../../Assets/solImg2.png";
import img3 from "../../Assets/solImg3.png";
import img4 from "../../Assets/solImg4.png";
import img5 from "../../Assets/solImg5.png";
import img6 from "../../Assets/solImg6.png";
import img7 from "../../Assets/solImg7.png";
import img8 from "../../Assets/solImg8.png";
import img9 from "../../Assets/solImg9.png";
import img10 from "../../Assets/solImg10.png";
import img11 from "../../Assets/solImg11.png";
import img12 from "../../Assets/solImg12.png";
import img13 from "../../Assets/solImg13.png";
import img14 from "../../Assets/solImg14.png";
import img15 from "../../Assets/solImg15.png";
import img16 from "../../Assets/solImg16.png";
import img17 from "../../Assets/solImg17.png";
import img18 from "../../Assets/solImg18.png";
import img19 from "../../Assets/solImg19.png";
import img20 from "../../Assets/solImg20.png";
import SolutionsCard from "./SolutionsCard";

const BestSolutions = () => {
  const Solutions = [
    { Highlight: "CD Solutions", title: "Logo Design", imgLink: img1 },
    { Highlight: "CC Solutions", title: "Website Content", imgLink: img2 },
    { Highlight: "CC Solutions", title: "Blog and Article Writing", imgLink: img3 },
    { Highlight: "DM Solutions", title: "Content Marketing", imgLink: img4 },
    { Highlight: "WAD Solutions", title: "E-Commerce Development", imgLink: img5 },
    { Highlight: "CC Solutions", title: "Social Media Copy", imgLink: img6 },
    { Highlight: "WAD Solutions", title: "Mobile App Development", imgLink: img7 },
    { Highlight: "CD Solutions", title: "Print Design", imgLink: img8 },
    { Highlight: "DM Solutions", title: "Email Marketing", imgLink: img9 },
    { Highlight: "CD Solutions", title: "Website and App Design", imgLink: img10 },
    { Highlight: "DM Solutions", title: "Analytics and Reporting", imgLink: img11 },
    { Highlight: "CD Solutions", title: "Social Media Graphics", imgLink: img12 },
    { Highlight: "WAD Solutions", title: "Website Development", imgLink: img13 },
    { Highlight: "WAD Solutions", title: "Maintenance and Support", imgLink: img14 },
    { Highlight: "DM Solutions", title: "Performance Marketing", imgLink: img15 },
    { Highlight: "DM Solutions", title: "Social Media Management", imgLink: img16 },
    { Highlight: "CC Solutions", title: "Product Descriptions", imgLink: img17 },
    { Highlight: "DM Solutions", title: "Search Engine Optimization", imgLink: img18 },
    { Highlight: "CD Solutions", title: "Branding and Identity Design", imgLink: img20 },
    { Highlight: "WAD Solutions", title: "Custom Web Applications", imgLink: img19 },
  ];

  const [nameMatch, setNameMatch] = useState("All");

  const handleEffect = (item) => {
    setNameMatch(item);
  };

  const filteredSolutions =
    nameMatch === "All"
      ? Solutions
      : Solutions.filter((solution) => solution.Highlight === nameMatch);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10, x: -50 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    exit: { opacity: 0, scale: 0.8, rotate: 10, x: 50 },
  };

  const hoverEffect = {
    scale: 1.05,
    y: -10,
    transition: { type: "spring", stiffness: 300 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "white", color: "black" },
    tap: { scale: 0.9 },
    selected: { backgroundColor: "white", color: "black" },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bestSolutions">
      <motion.div
        className="bestSolutionsHeading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <p>Our Services Suite</p>
        <h1>Best solutions for you</h1>
      </motion.div>
      <motion.div
        className="solutionsContainer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        {["All", "CC Solutions", "CD Solutions", "DM Solutions", "WAD Solutions"].map(
          (item, index) => (
            <motion.h1
              key={index}
              id="myhover"
              style={{
                cursor: "pointer",
                color: nameMatch === item ? "black" : "white",
                backgroundColor: nameMatch === item ? "white" : "black",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
              onClick={() => handleEffect(item)}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={nameMatch === item ? "selected" : ""}
            >
              {item}
            </motion.h1>
          )
        )}
      </motion.div>

      <motion.div
        className="cardContainerSol"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <AnimatePresence>
          {filteredSolutions.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={index}
              whileHover={hoverEffect}
              layout
              style={{ position: "relative" }}
            >
              <SolutionsCard
                Highlight={item.Highlight}
                Title={item.title}
                imgLink={item.imgLink}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BestSolutions;