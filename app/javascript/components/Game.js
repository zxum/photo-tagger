import React from 'react'

function Game(props) {
  let image
  
  props.picture ? image = props.requestImageFiles('./' + props.picture.imgsrc) : image = ""


  return (
    <div className="main-box">
      <img onClick={props.handleClick} className="image" src={image} alt="" />
      <div id="test-box"></div>
    </div>
  )
}

export default Game
