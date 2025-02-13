import React from 'react'
import printDesign from '../../Assets/printDesign.png'
import webApp from '../../Assets/webApp.png'
import computer from '../../Assets/computer.png'
import bulb from '../../Assets/bulb.png'
const DMSolution = () => {
     const cards = [
                {
                    cardImg: computer,
                    cardTitle : "Analytics and Reporting",
                    cardDesc : "We provide detailed reports on the performance of your digital marketing efforts and adjust strategies for optimal results."
                },
                {
                    cardImg: webApp,
                    cardTitle : "Email Marketing",
                    cardDesc : "We design and execute effective email marketing campaigns to nurture leads and retain customers."
                },
                {
                    cardImg: bulb,
                    cardTitle : "Performance Marketing",
                    cardDesc : "We design and manage PPC campaigns on platforms like Google Ads and social media. This helps you reach your target audience with precision and get a strong ROI."
                },
                {
                    cardImg: computer,
                    cardTitle : "Social Media Management",
                    cardDesc : "We handle your social media profiles, curating content, engaging with your audience, and growing your online presence."
                },
                {
                    cardImg: bulb,
                    cardTitle : "Content Marketing",
                    cardDesc : "We create valuable, engaging content that resonates with your audience, establishes your authority, and drives leads."
                },
                {
                    cardImg: webApp,
                    cardTitle : "Search Engine Optimization",
                    cardDesc : "Our SEO strategy includes keyword research, on-page optimization, backlink building, and regular performance analysis."
                },
            ]
  return (
    <div className='CDsolutions'>
      <div className="heroPart ">
            <h1>DM Solutions</h1>
      </div>
      <div className="solutionsDetail">
        <p>Unlock the true potential of your business online.</p>
        <p>In our Digital Marketing Services (DMS) package, we leverage the power of the digital landscape to help your business grow. We focus on real, tangible results rather than empty marketing buzzwords. Our services include:</p>
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

export default DMSolution
