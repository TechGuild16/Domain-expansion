import React from 'react'
import arrow from '../../../Assets/ServiceArrow.png'
import arrow2 from '../../../Assets/arrow.png'
const SerivceCardSecond = ({imageLink, serviceName,proj1img,proj2img}) => {
  return (
    <div className='serviceCard'>
      <div className="d-flex serviceHeading align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-4">
                <h3 className='uppercase'>{serviceName}</h3>
              </div>
              <div className="serviceCTA d-flex align-items-center gap-2">
                  <img src={arrow}  alt="" />
                  <h4 className='uppercase'>View All</h4>
              </div>
            </div>
            <div className="row responsiveDirectionColumn d-flex gap-3">
                <div className="col-4 ServiceBox relative">
                    <img src={proj1img} className='projectimagefix ' alt="" />
                    <div className="bottomCardDiv d-flex align-items-center gap-2">
                        <img src={arrow2} alt="" />
                        <h5 className='uppercase '>open project</h5>
                    </div>
                </div>
                <div className="col-4 ServiceBox">
                    <img src={proj2img} className='projectimagefix'  alt="" />
                    <div className="bottomCardDiv d-flex align-items-center gap-2">
                        <img src={arrow2} alt="" />
                        <h5 className='uppercase '>open project</h5>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SerivceCardSecond
