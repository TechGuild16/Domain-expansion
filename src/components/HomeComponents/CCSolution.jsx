import React from 'react'
import computer from '../../Assets/computer.png'
import printDesign from '../../Assets/printDesign.png'
import webApp from '../../Assets/webApp.png'
import bulb from '../../Assets/bulb.png'
const CCSolution = () => {
     const cards = [
            {
                cardImg: computer,
                cardTitle : "Product Descriptions",
                cardDesc : "Our Product Descriptions service focuses on crafting captivating descriptions that highlight product features and benefits, ultimately helping you sell more effectively."
            },
            {
                cardImg: computer,
                cardTitle : "Social Media Copy",
                cardDesc : "Our Social Media Copy service focuses on developing captivating social media captions and content that encourage interaction, sharing, and brand loyalty."
            },
            {
                cardImg: computer,
                cardTitle : "Blog and Article Writing",
                cardDesc : "Our Blog and Article Writing service focuses on creating informative and engaging content that showcases your expertise, attracts traffic, and enhances your website’s SEO."
            },
            {
                cardImg: computer,
                cardTitle : "Website Content",
                cardDesc : "Our Website Content service is all about creating or refining the content on your website. We focus on effectively communicating your brand’s unique value, captivating visitors, and encouraging them to take action."
            },
        ]
  return (
    <div className='CDsolutions'>
      <div className="heroPart ">
            <h1>CC Solutions</h1>
      </div>
      <div className="solutionsDetail">
        <p>Words that resonate, stories that engage.</p>
        <p>In our Content and Copywriting Services (CWS) package, we focus on crafting compelling narratives and messages that connect with your audience on a personal level. We avoid marketing jargon and opt for clear, authentic communication. Our services include:</p>
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

export default CCSolution
