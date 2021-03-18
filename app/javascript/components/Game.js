import React from 'react'

function Game(props) {
  
  let image 
  if(Object.keys(props.picture).length !== 0){
    let picture = props.picture.data.data.attributes
    let requestImageFiles = require.context('../../assets/images',true,/.jpg$/)
    image = requestImageFiles('./' + picture.imgsrc)
  } else {
    image = ""
  }
  
  const handleClick = (event) => {
    console.log(event)
    console.log(event.target.scrollHeight)
    console.log(event.target.scrollWidth)
  }


  return (
    <div className="main-box">
      <img onClick={handleClick} className="image" src={image} alt="" />
      <div id="test-box"></div>
    </div>
  )
}

export default Game
