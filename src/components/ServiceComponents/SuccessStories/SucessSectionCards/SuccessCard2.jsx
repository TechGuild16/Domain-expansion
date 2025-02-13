import React from 'react'

const SuccessCard2 = ({desc}) => {
  return (
    <div className='secondSucessDiv'>
        <div className="buttons d-flex align-items-center gap-2">
            {["challenge","solution","results"].map((item,index)=>{
                return index === 1 ?  <button className='successButtons uitilityBtn uppercase' key={index}>
                    {item}
                </button> : <button className='successButtons uppercase' key={index}>
                    {item}
                </button> 
            })}
        </div>
        <div className="successSolutions">
            <h1 className='uppercase'>Solution</h1>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default SuccessCard2
