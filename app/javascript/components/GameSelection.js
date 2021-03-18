import React from 'react'
import {Link} from 'react-router-dom'

function GameSelection() {
  let requestImageFiles = require.context('../../assets/images',true,/.jpg$/) 
  let image90s = requestImageFiles('./most90spic.jpg')
  let image80s = requestImageFiles('./most80spic.jpg')

  return (
    <div className="game-selection-box">
      <div className="game-option" id="nineties">
        <h1>WHERE IN THE 90's?</h1>
        <Link to='/picture/1'>
          <img src={image90s} className="option-imgs"/>
        </Link>
        <Link to='/picture/1'>
          <p>SELECT</p>
        </Link>
      </div>
      <div className="game-option" id="eighties">
        <h1>WHERE IN THE 80's?</h1>
        <Link to='/picture/2'>
          <img src={image80s} className="option-imgs"/>
        </Link>
        <Link to='/picture/2'>
          <p>SELECT</p>
        </Link>
      </div>
    </div>
  )
}

export default GameSelection
