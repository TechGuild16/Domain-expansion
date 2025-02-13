import React from 'react'
import arrow from '../../../../Assets/ServiceArrow.png'
const SuccessCard = ({ imageLink, serviceName, industry,utilizedService }) => {
    return (
        <div className='firstSuccessDiv'>
            <div className="d-flex serviceHeading align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-4">
                    <img src={imageLink} className='cardimagefix' alt="" />
                    <h3 className='uppercase'>{serviceName}</h3>
                </div>
                <div className="serviceCTA d-flex align-items-center gap-2">
                    <img src={arrow} alt="" />
                    <h4 className='uppercase'>Visit website</h4>
                </div>
            </div>
            <div className="d-flex align-items-center gap-2 industryUitldiv">
                <div className="d-flex items-cente labelIndustry">
                    <div className="industrycolor2">Industry</div>
                    <div className="dot"></div>
                    <div className='industrycolor'>{industry}</div>
                </div>
                <div className="d-flex items-cente labelIndustry">
                    <div className="industrycolor2">Service Utilized</div>
                    <div className="dot"></div>
                    <div className='industrycolor'>{utilizedService}</div>
                </div>
            </div>
        </div>
    )
}

export default SuccessCard
