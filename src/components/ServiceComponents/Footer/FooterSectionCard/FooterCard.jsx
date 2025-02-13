import React from 'react'
import arrow from '../../../../Assets/serviceArrow.png'
const FooterCard = ({logo,platformName,platformDesc}) => {
  return (
    <div className='footerCard'>
    <div className="upperPart d-flex align-items-center justify-content-between">
        <img src={logo} alt="" />
        <img src={arrow} alt="" />
    </div>
    <div className="details ">
        <h4 className='uppercase'>{platformName}</h4>
        <p>{platformDesc}</p>
    </div>
    </div>
  )
}

export default FooterCard
