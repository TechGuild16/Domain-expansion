import React from 'react'
import BrandingHeroSec from '../../components/BrandingComponents/BrandingHeroSec'
import './WebApp.css'
import PowerFulBrand from '../../components/BrandingComponents/PowerFulBrand'
import BrandSolutions from '../../components/BrandingComponents/BrandSolutions'
import LetsTalk from '../../components/BrandingComponents/LetsTalk'
const WebAppDev = () => {
  return (
    <div>
    <div className='BrandingHerosec container-fluid'>
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="BrandHeading">
                    <h1>Crafting Digital Dreams,<br/>
                    One Code at a Time</h1>
                    <p>Turning Ideas into Seamless Experiences: Your Vision, Our Code.</p>
                </div>
        </div>
      </div>
      <div className="row AboutBrand d-flex align-items-center gap-5 ">
        <div className="col-md-6">
            <h1>You Dream It,<br/><span className='boldpart'>We Make It.</span> </h1>
            <div className="d-flex align-items-center pt-4 gap-2">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="col-md-5 detailBrand">
            <p>In the vast world of the internet and mobile apps, we’re like digital architects, bringing your ideas to life. We don’t just write code; we craft experiences that are easy and enjoyable for people to use. Whether it’s designing beautiful interfaces or making sure everything works seamlessly, we’re here to make your digital dreams a reality. Our goal is to go beyond your expectations, creating a digital world where what you imagine becomes a part of everyday life. Think of us as the builders of a space where your ideas come alive through technology.</p>
        </div>
      </div>
    </div>
    <PowerFulBrand boldText="Digital Presence?" />
    <div className='caseStudy'>
      <div className="Caseheading">
        <h1>Ready to <span className='boldpart'>Create</span> your digital presence?</h1>
      </div>
      <div className="whypickus">
        <h1>Why Pick <span>Us</span> to <span>Boost Digital Presence?</span></h1>
        <p>We’re not just tech-savvy developers; we’re creators of engaging online experiences. We take your ideas and turn them into user-friendly websites and apps that people love to use. Our focus is on bringing your vision to life, making sure your digital footprint is not only functional but also captivating. With us, it’s about more than just code; it’s about creating a digital space that truly represents you and captivates your audience. Your journey to digital success begins here with us.</p>
      </div>
    </div>
    <BrandSolutions firstText="Website Development" secondText="Mobile App Development" thirdText="E-commerce Solutions" fourthText="Custom Application development" />
    <LetsTalk firstText="Ready to" secondText="Transform Your Digital Presence?"  desc="Let’s Build Something Extraordinary Together. Get Started Now!"/>
    </div>
  )
}

export default WebAppDev
