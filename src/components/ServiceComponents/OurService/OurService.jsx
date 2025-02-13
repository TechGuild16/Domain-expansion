import React from 'react'
import '../OurService/OurService.css'
import ServiceCard from '../ServiceCards/ServiceCard'
import Cardimg from '../../../Assets/serviceCardIcon.png'
import mobilelogo from '../../../Assets/mobilelogo.png'
import webd from '../../../Assets/webDevelopmentIcon.png'
import dgMarketing from '../../../Assets/digitalMarketingIcon.png'
import SerivceCardSecond from '../ServiceCards/SerivceCardSecond'
import project1 from '../../../Assets/serviceProject1.png'
import project2 from '../../../Assets/serviceProject2.png'
import project3 from '../../../Assets/serviceProject3.png'
import project4 from '../../../Assets/serviceProject4.png'
import project5 from '../../../Assets/serviceProject5.png'
import project6 from '../../../Assets/serviceProject6.png'
import project7 from '../../../Assets/serviceProject7.png'
import project8 from '../../../Assets/serviceProject8.png'
const OurService = () => {
  return (
    <div className='OurServiceMainDiv'>
        <div className="OurServiceHeading">
          <h1 className='uppercase'>Our Services</h1>
        </div>
        <div className="structure">
          <div className="row d-flex gap-3 ">
            <div className="col-md-6 col-12  firstStructurediv">
              <ServiceCard imageLink={Cardimg} serviceName= "web design" description='Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.' price="Starts From $1,500" />
            </div>
            <div className="col-md-5 col-12  secondStructurediv">
              <SerivceCardSecond imageLink={Cardimg} serviceName= "web design projects" proj1img={project1} proj2img={project2} />
            </div>
          </div>
          <div className="row d-flex gap-3 mt-3">
            <div className="col-md-6 col-12  firstStructurediv">
              <ServiceCard imageLink={mobilelogo} serviceName= "Mobile App Development" description='With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.' price="Starts From $2,500" />
            </div>
            <div className="col-md-5 col-12  secondStructurediv">
              <SerivceCardSecond imageLink={Cardimg} serviceName= "Mobile App Development Projects" proj1img={project3} proj2img={project4} />
            </div>
          </div>

          <div className="row d-flex gap-3 mt-3">
            <div className="col-md-6 col-12  firstStructurediv">
              <ServiceCard imageLink={webd} serviceName= "Web Development" description='Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.' price="Starts From $1,800" />
            </div>
            <div className="col-md-5 col-12  secondStructurediv">
              <SerivceCardSecond imageLink={Cardimg} serviceName= "Mobile App Development Projects" proj1img={project5} proj2img={project6} />
            </div>
          </div>
          <div className="row d-flex gap-3 mt-3">
            <div className="col-md-6 col-12  firstStructurediv">
              <ServiceCard imageLink={dgMarketing} serviceName= "Digital Marketing" description="In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility." price="Starts From $1,200" />
            </div>
            <div className="col-md-5 col-12  secondStructurediv">
              <SerivceCardSecond imageLink={Cardimg} serviceName= "Digital Marketing Projects" proj1img={project7} proj2img={project8} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurService
