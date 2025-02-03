import React from "react";
import LetsTalk from "../../components/PortfolioComponent/LetsTalk";
import "./Portfolio.css";
import ParticleBackgroundNext from "../../components/particlecomponent/ParticleBackgroundNext";
import PortfolioShowcase from "../../components/PortfolioComponent/PortfolioShowcase";
const Portfolio = () => {
 
  return (
    <div className="portfolio">
      <div className="BrandingHerosec container-fluid portfolioherosec">
        <div className="particles-wrapper2">
          <ParticleBackgroundNext />
        </div>
        <div className="row portContainer">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="BrandHeading portfolioheading">
              <h1>A Glimpse Into Our Domain</h1>
              <p>
                Design creates culture. Culture shapes values. Values determine
                the future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PortfolioShowcase />
      <LetsTalk
        firstText="Let's redefine your brand together"
        secondText="We cover it all"
        desc="Ready to transform your brand narrative? Let’s do it."
      />
    </div>
  );
};

export default Portfolio;
