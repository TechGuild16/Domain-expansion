import React from 'react'

const LetsTalk = ({firstText,secondText,desc}) => {
  return (
    <div className='letsTalk'>
      <div className="talkDiv">
            <div className="talkDivheading">
                <h1>{firstText} <span className='boldpart'>{secondText}</span></h1>

                <p>{desc}</p>
                <div className="button">
                  <button>
                    Let's talk
                  </button>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default LetsTalk
