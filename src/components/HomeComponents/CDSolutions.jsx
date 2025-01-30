import React from 'react'
import computer from '../../Assets/computer.png'
import printDesign from '../../Assets/printDesign.png'
import webApp from '../../Assets/webApp.png'
import bulb from '../../Assets/bulb.png'
const CDSolutions = () => {
    const cards = [
        {
            cardImg: computer,
            cardTitle : "Social Media Graphics",
            cardDesc : "Our Social Media Graphics service is dedicated to creating custom graphics that enhance your social media presence. We ensure that your social media posts and profiles maintain a cohesive and professional look across all platforms."
        },
        {
            cardImg: printDesign,
            cardTitle : "Print Design",
            cardDesc : "Our Print Design service covers various marketing materials such as brochures, business cards, flyers, and banners. We ensure that these materials align with your brand identity and messaging."
        },
        {
            cardImg: webApp,
            cardTitle : "Website and App Design",
            cardDesc : "Our Website and App Design service focuses on creating user-friendly, visually appealing interfaces that enhance user engagement and conversion rates. We design with your audience in mind."
        },
        {
            cardImg: bulb,
            cardTitle : "Branding and Identity Design",
            cardDesc : "Our Branding and Identity Design service goes beyond logos to create a cohesive visual identity for your brand. This includes defining color schemes, typography, and style guidelines, ensuring a strong and recognizable brand presence."
        },
        {
            cardImg: computer,
            cardTitle : "Logo Design",
            cardDesc : "Our Logo Design service is all about crafting a unique visual representation of your brand. We create logos that not only look great but also embody your brand’s identity, making a memorable impression on your audience."
        },
    ]
  return (
    <div className='CDsolutions'>
      <div className="heroPart ">
            <h1>CD Solutions</h1>
      </div>
      <div className="solutionsDetail">
        <p>Stand out in the digital landscape with captivating visuals.</p>
        <p>Our Graphic and Creative Designing Services (CDS) package is all about creating eye-catching visuals that leave a lasting impression. We understand that design is not just about aesthetics; it’s about conveying your brand’s message effectively. Our services include:</p>
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

export default CDSolutions
