import React from 'react'

const BrandingHeroSec = () => {
  return (
    <div className='BrandingHerosec container-fluid'>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="BrandHeading">
                    <h1>Beauty Does Not Lie In The<br/>
                    Eyes Of The Beholder</h1>
                    <p>Your brand deserves to stand out, and we’re here to make that happen</p>
                </div>
        </div>
      </div>
      <div className="row AboutBrand d-flex align-items-center gap-5 ">
        <div className="col-md-6">
            <h1>Where Ideas Take Shape,<br/><span className='boldpart'>Brands Take Flight.</span> </h1>
            <div className="d-flex align-items-center pt-4 gap-2">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="col-md-5 detailBrand">
            <p>Unleash the power of your brand with our comprehensive suite of<br/> services. From strategic planning to captivating design, we bring your brand to life, making it memorable and impactful.</p>
        </div>
      </div>
    </div>
  )
}

export default BrandingHeroSec
