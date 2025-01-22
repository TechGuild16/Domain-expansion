import React from 'react';
import backgroundCard from '../../Assets/backgroundCard.jpg';
import backgroundCard2 from '../../Assets/backgroundCard2.jpg';
import backgroundCard3 from '../../Assets/backgroundCard3.jpg';
import backgroundCard4 from '../../Assets/backgroundCard4.jpg';

const PowerFulBrand = ({boldText}) => {
  return (
    <div className="powerfulbrand">
      <div className="powerfulBrandHeading">
        <h1>
          Why Craft a <span>{boldText}</span>
        </h1>
      </div>
      <div className="container-fluid pt-5">
      <div className="row myflexrow justify-content-center gap-4">
  <div className="col-6 col-md-3 brandBox">
    <div className="cardContent">
      <div className="cardFront">
        <img src={backgroundCard} alt="Front Side" />
      </div>
      <div className="cardBack">
        <h1>Brand Strength</h1>
      </div>
    </div>
  </div>
  <div className="col-6 col-md-3 brandBox">
    <div className="cardContent">
      <div className="cardFront">
        <img src={backgroundCard2} alt="Front Side" />
      </div>
      <div className="cardBack">
        <h1>Market Trust</h1>
      </div>
    </div>
  </div>
  <div className="col-6 col-md-3 brandBox">
    <div className="cardContent">
      <div className="cardFront">
        <img src={backgroundCard3} alt="Front Side" />
      </div>
      <div className="cardBack">
        <h1>Customer Loyalty</h1>
      </div>
    </div>
  </div>
  <div className="col-6 col-md-3 brandBox">
    <div className="cardContent">
      <div className="cardFront">
        <img src={backgroundCard4} alt="Front Side" />
      </div>
      <div className="cardBack">
        <h1>Identity</h1>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default PowerFulBrand;
