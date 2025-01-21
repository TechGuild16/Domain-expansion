import React from 'react'
import './Footer.css'
import arrow from '../../../Assets/serviceArrow.png'
import MarqueeService from '../MarqueeService'
import BottomFooter from './bottomFooterSection/BottomFooter'
const Footer = () => {
  return (
    <div className='FooterSection'>
      <div className="footerHeading d-flex align-items-center justify-content-between">
        <div className="">
        <h3 className='uppercase'>Ready to Transform Your Digital<br/> Presence?</h3>
        <p>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
        </div>
        <div className="align-self-end">
            <button className='uppercase justify-content-center footerButton d-flex align-items-center gap-2'>Get in Touch <img src={arrow} alt="" /></button>
        </div>
      </div>
      <div className='footermarquee'>
        <MarqueeService />
      </div>
      <BottomFooter />
    </div>
  )
}

export default Footer
