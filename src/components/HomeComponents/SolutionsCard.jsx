import React from 'react'
import { Link } from 'react-router-dom'

const SolutionsCard = ({ Highlight, Title, imgLink }) => {
  const firstPart = Highlight.split(" ")[0];
  const Titelink = Title.split(" ")[0];
  
  return (
    <div className='solutionsCard'>
      <img src={imgLink} id='solcarimg' alt="" />
      <div className="contentboxsol">
        <Link to={`/${firstPart}`} style={{textDecoration:"none"}}>
          <h6 style={{cursor: "pointer", color:"white"}}>{Highlight}</h6>
        </Link>
        <Link to={`/SolContent/:${Title}`} style={{textDecoration:"none"}}>
        <h4 style={{cursor: "pointer", color:"white"}}>{Title}</h4>
        </Link>
      </div>
    </div>
  )
}

export default SolutionsCard
