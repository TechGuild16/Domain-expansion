import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ imglink }) => {
  return (
    <motion.div 
      className="modernBlogCard" 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="imageOverlay">
        <img src={imglink} alt="Blog" className="imageSection" />
      </div>

      <div className="cardContent">
        <h3 className="cardTitle"> Blog Title</h3>
        <p className="cardDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ut.</p>
        <button className="readMoreButton">Read More</button>
      </div>
    </motion.div>
  );
}

export default BlogCard;
