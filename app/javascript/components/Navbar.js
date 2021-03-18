import React from 'react'
import Character from './Character'

function Navbar() {

  

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="timer">0:00</div>
        <div className="title">Where in the 80's?</div>
        <div className="found">3/5</div>
      </div>

      <div className="characters hidden">
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
      </div>
    </nav>
  )
}

export default Navbar
