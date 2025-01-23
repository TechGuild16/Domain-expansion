import React from "react";
import LetsTalk from "../../components/PortfolioComponent/LetsTalk";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="BrandingHerosec container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="BrandHeading">
              <h1>A Glimpse Into Our Domain</h1>
              <p>
                Design creates culture. Culture shapes values. Values determine
                the future.
              </p>
            </div>
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
