import React from 'react';

const PortfolioCard = ({ title, image, description }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-image-container">
        <img src={image} alt="put image here" className="portfolio-image" />
        <div className="image-overlay"></div>
      </div>
      <div className="portfolio-content">
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-description">{description}</p>
        <button className="portfolio-button">View Portfolio</button>
      </div>
    </div>
  );
};

export default PortfolioCard;
