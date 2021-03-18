import React from 'react'
import Navbar from './Navbar'
import Game from './Game'

function GamePage(props) {
  return (
    <div className="app-main">
      <Navbar /> 
      <Game />
    </div>
  )
}

export default GamePage
