import React from 'react'
import check from '../../Assets/check.svg'

const BrandDetail = ({mainHeading,check1,check2,check3,check4,imgLink,check5}) => {
  return (
    <div className='brandDetail'>
    <div className="d-flex justify-content-center responsivedetail">
        <div className="brandDetailBox1">
            <h1 style={{fontStyle: "italic"}}>{mainHeading}</h1>
            <div className="checkboxesBrand">
                <div className="mydivver">
                    <img src={check} className='checkBox' alt="" />
                    <p>{check1}</p>
                </div>
                <div className="mydivver divver2">
                    <img src={check} className='checkBox' alt="" />
                    <p>{check2}</p>
                </div>
                <div className="mydivver divver2">
                    <img src={check} className='checkBox' alt="" />
                    <p>{check3}</p>
                </div>
                {check4 && (<div className='mydivver divver2'>
                    <img src={check} className='checkBox' alt="" />
                    <p>{check4}</p>
                </div>)}
                {check5 && (<div className='mydivver divver2'>
                    <img src={check} className='checkBox' alt="" />
                    <p>{check5}</p>
                </div>)}
                <div className="button " id="homebutton3">
              <button>
                Know More
              </button>
            </div>
            </div>
        </div>
        <div className="brandDetailBox2 pr-">
            <div className="innerbox2">
                <div className="upInnerBox">
                        <img src={imgLink} alt="" />
                </div>
                <div className="button " id="homebutton2">
              <button>
                Know More
              </button>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BrandDetail
