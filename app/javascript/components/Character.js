import React from 'react'

function Character() {
  let requestImageFiles = require.context('../../assets/images',true,/.jpg$/) 
  let image = requestImageFiles('./falkor.jpg')

  return (
    <div className="flex-wrapper">
      <img src={image} alt="" className="character-icon"/>
      <div className="wrapper">
        <p className="character-name">Falkor</p>
        <p className="character-title">The NeverEnding Story</p>  
      </div>
    </div>
  )
}

export default Character
