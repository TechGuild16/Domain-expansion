import React, { useState } from 'react';
import img1 from '../../Assets/brandImg1.jpg';
import img2 from '../../Assets/brandImg2.jpg';
import img3 from '../../Assets/brandImg3.jpg';
import img4 from '../../Assets/brandImg4.jpg';

const BrandSolutions = ({firstText, secondText,thirdText,fourthText}) => {
  const [clickedDiv, setClickedDiv] = useState(null);

  const handleClick = (div) => {
    setClickedDiv(clickedDiv === div ? null : div); 
  };

  return (
    <div className='brandSolutions'>
      <div className="solutionsHeading">
        <h1>Our Growing <span>Suite of Solutions</span></h1>
        <p>Our solutions cover all aspects of your digital journey.</p>
      </div>
      <div className="animatedPhotosdiv">
        <div 
          className={`firstdiv ${clickedDiv === 'first' ? 'expanded' : ''}`}
          onClick={() => handleClick('first')}
        >
          <img src={img1} alt="" />
          <div className="blackopacdiv">
            <h1>{firstText}</h1>
          </div>
        </div>
        <div 
          className={`secondDiv ${clickedDiv === 'second' ? 'expanded' : ''}`}
          onClick={() => handleClick('second')}
        >
          <img src={img2} alt="" />
          <div className="blackopacdiv">
            <h1>{secondText}</h1>
          </div>
        </div>
        <div 
          className={`thirdDiv ${clickedDiv === 'third' ? 'expanded' : ''}`}
          onClick={() => handleClick('third')}
        >
          <img src={img3} alt="" />
          <div className="blackopacdiv">
            <h1>{thirdText}</h1>
          </div>
        </div>
        <div 
          className={`fourthDiv ${clickedDiv === 'fourth' ? 'expanded' : ''}`}
          onClick={() => handleClick('fourth')}
        >
          <img src={img4} alt="" />
          <div className="blackopacdiv">
            <h1>{fourthText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSolutions;
