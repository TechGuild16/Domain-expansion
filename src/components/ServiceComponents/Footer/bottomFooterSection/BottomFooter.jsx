import React from 'react'
import '../Footer.css'
import arrow from '../../../../Assets/serviceArrow.png'
import FooterCard from '../FooterSectionCard/FooterCard'
import instaLogo from '../../../../Assets/instagram.png'
import twitterLogo from '../../../../Assets/twitter.png'
import dribbleLogo from '../../../../Assets/dribble.png'
import behanceLogo from '../../../../Assets/behance.png'
import { Link } from 'react-router-dom'
const BottomFooter = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-6   footerContainerFirst">
                    <div className="row gap-3">
                        <div className="col-md-3  footerLinks"><FooterCard logo={instaLogo} platformName="Instagram" platformDesc="Share visually appealing snippets of our latest web projects." /></div>
                        <div className="col-md-3  footerLinks"><FooterCard logo={twitterLogo} platformName="twitter" platformDesc="Tweet about interesting coding challenges you've overcome." /></div>
                    </div>
                    <div className="row gap-3 mt-3">
                        <div className="col-md-3  footerLinks"><FooterCard logo={dribbleLogo} platformName="dribble" platformDesc="Showcase design elements of our web projects." /></div>
                        <div className="col-md-3  footerLinks"><FooterCard logo={behanceLogo} platformName="Behance" platformDesc="Create detailed presentations for our projects." /></div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 footerContainerSecond">
                    <div className="row">
                        <div className="col-md-12  footerLinksPart2">
                            <div className="row footerLinksShowcase">
                                <div className="col-6 col-md-3  footerLinkStructure">
                                    <h4>Home</h4>
                                    <div className="links">
                                        <Link>Why Us</Link>
                                        <Link>About Us</Link>
                                        <Link>Testimonials</Link>
                                        <Link>FAQ's</Link>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3  footerLinkStructure">
                                    <h4>Services</h4>
                                    <div className="links">
                                        <Link>Web Development</Link>
                                        <Link>App Development</Link>
                                        <Link>Web Design</Link>
                                        <Link>Digital Marketing</Link>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3  footerLinkStructure ">
                                    <h4>Projects</h4>
                                    <div className="links">
                                        <Link>Klothink</Link>
                                        <Link>Zenith</Link>
                                        <Link>Novus</Link>
                                        <Link>Apex</Link>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3  footerLinkStructure   structurelast ">
                                    <h4>Blogs</h4>
                                    <div className="links">
                                        <Link>Business</Link>
                                        <div className='banner'>Design <p className='soonBaner'>Soon</p></div>
                                        <div className='banner'>Development <p className='soonBaner2'>Soon</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12  footerLinksPart3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="newsletter">
                                    <p className='uppercase'>newsletter</p>
                                    <h4 className='uppercase'>Subscribe To our Newsletter</h4>
                                </div>
                                <div className="FooterEmail  d-flex align-items-center gap-2">
                                    <input type="text" placeholder='Enter your email' className='p-1' />
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12  footerLinksPart4">
                            <div className="d-flex align-items-center justify-content-between">
                                <p>© 2024 NextGen. All rights reserved.</p>
                                <div className="d-flex gap-2 align-items-center">
                                    <p>Terms & Conditions</p>
                                    <p>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter
