import React from 'react'
import printDesign from '../../Assets/printDesign.png'
import webApp from '../../Assets/webApp.png'
import computer from '../../Assets/computer.png'
import bulb from '../../Assets/bulb.png'
const WADSolutions = () => {
     const cards = [
                    {
                        cardImg: computer,
                        cardTitle : "Maintenance and Support",
                        cardDesc : "Our Maintenance and Support service is dedicated to ensuring your digital assets remain secure, up-to-date, and optimized for peak performance. We provide ongoing assistance to keep your online presence running smoothly."
                    },
                    {
                        cardImg: computer,
                        cardTitle : "Custom Web Applications",
                        cardDesc : "Our Custom Web Applications service focuses on creating tailored web applications that streamline your business processes, enhance efficiency, and address specific operational needs."
                    },
                    {
                        cardImg: computer,
                        cardTitle : "Mobile App Development",
                        cardDesc : "Our Mobile App Development service is all about creating mobile applications for iOS and Android platforms. We design, develop, and optimize apps that meet your specific business needs."
                    },
                    {
                        cardImg: computer,
                        cardTitle : "E-Commerce Development",
                        cardDesc : "Our E-Commerce Development service is dedicated to building online stores that offer secure payment processing, efficient inventory management, and a seamless shopping experience for your customers."
                    },
                    {
                        cardImg: computer,
                        cardTitle : "Website Development",
                        cardDesc : "Our Website Development service focuses on creating custom websites that deliver an exceptional online experience. We ensure responsive design, user-friendly navigation, and optimal functionality, all tailored to your unique needs."
                    },
                ]
  return (
    <div className='CDsolutions'>
      <div className="heroPart ">
            <h1>WAD Solutions</h1>
      </div>
      <div className="solutionsDetail">
        <p>Seamless digital experiences, built from scratch.</p>
        <p>Our Web and App Development (WAD) package is all about turning your digital vision into a reality. We build user-friendly, high-performing websites and applications that align with your business goals. Our services include:</p>
        <div className="AllSolCard">
            {cards.map((item,index)=>{
                return <div key={index} className='allsolcard'>
                    <div className="">
                        <img src={item.cardImg} alt="" />
                    </div>
                    <div className="cardTitle">
                        <h1>{item.cardTitle}</h1>
                        <p>{item.cardDesc}</p>
                    </div>
                    <div className="arrow">
                        <p>&#x2192;</p>
                    </div>
                </div>
                
            })
            }
        </div>
      </div>
    </div>
  )
}

export default WADSolutions
