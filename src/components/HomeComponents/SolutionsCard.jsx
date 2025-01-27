import React from 'react'

const SolutionsCard = ({Highlight,Title,imgLink}) => {
  return (
    <div className='solutionsCard'>
        <img src={imgLink} id='solcarimg' alt="" />
        <div className="contentboxsol">
        <h6>{Highlight}</h6>
        <h4>{Title}</h4>
        </div>
    </div>
  )
}

export default SolutionsCard
