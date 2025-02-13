import React from 'react'
import arrow from '../../../Assets/ServiceArrow.png'
import './SucessStory.css'
import SuccessCard from './SucessSectionCards/SuccessCard'
import klonthink from '../../../Assets/klonthink.png'
import fitnessTracker from '../../../Assets/fitnessTracker.png'
import SuccessCard2 from './SucessSectionCards/SuccessCard2'
const SucessStory = () => {
  return (
    <div className='SuccessStoriesDiv'>
    <div className="OurServiceHeading d-flex align-items-center justify-content-between">
      <h1 className='uppercase'>Sucess Stories</h1>
      <div className="d-flex align-items-center gap-3 ">
            <img src={arrow} alt="" />
            <h4 className='uppercase text-adjusted'>View All</h4>
      </div>
    </div>
    <div className="SucessCardDiv">
        <div className="row gap-3">
            <div className="col-md-5  ">
                <SuccessCard  imageLink={klonthink} serviceName="Klothink" industry="E-commerce" utilizedService="Design & Development"/>
                
            </div>
            <div className="col-md-5  ">
                <SuccessCard2 desc="Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout." />
            </div>
        </div>
    </div>
    <div className="SucessCardDiv">
        <div className="row gap-3">
            <div className="col-md-5  ">
                <SuccessCard  imageLink={fitnessTracker} serviceName="Fitness Tracker App" industry="Health & Fitness" utilizedService="Mobile App Development"/>
                
            </div>
            <div className="col-md-5  ">
                <SuccessCard2 desc="everaging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media." />
            </div>
        </div>
    </div>
    </div>
  )
}

export default SucessStory
