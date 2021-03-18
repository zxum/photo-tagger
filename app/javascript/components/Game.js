import React from 'react'

function Game() {

  const handleClick = (event) => {
    console.log(event)
    console.log(event.target.scrollHeight)
    console.log(event.target.scrollWidth)
  }
  
  let requestImageFiles = require.context('../../assets/images',true,/.jpg$/)
  let image = requestImageFiles('./most90spic.jpg')

  return (
    <div className="main-box">
      <img onClick={handleClick} className="image" src={image} alt="" />
      <div id="test-box"></div>
    </div>
  )
}

export default Game
