import React from 'react';
import { motion } from 'framer-motion';
import backgroundCard from '../../Assets/backgroundCard.jpg';
import backgroundCard2 from '../../Assets/backgroundCard2.jpg';
import backgroundCard3 from '../../Assets/backgroundCard3.jpg';
import backgroundCard4 from '../../Assets/backgroundCard4.jpg';

const PowerFulBrand = ({ boldText }) => {
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div className="powerfulbrand">
      <motion.div
        className="powerfulBrandHeading"
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: true, amount: 0.5 }} 
      >
        <h1>
          Why Craft a <span>{boldText}</span>
        </h1>
      </motion.div>
      <div className="container-fluid pt-5">
        <div className="row myflexrow justify-content-center gap-4">
          {[
            { img: backgroundCard, title: 'Brand Strength' },
            { img: backgroundCard2, title: 'Market Trust' },
            { img: backgroundCard3, title: 'Customer Loyalty' },
            { img: backgroundCard4, title: 'Identity' },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3 brandBox"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.5 }} 
              whileHover="hover"
            >
              <div className="cardContent">
                <div className="cardFront">
                  <img src={card.img} alt="Front Side" />
                </div>
                <div className="cardBack">
                  <h1>{card.title}</h1>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerFulBrand;