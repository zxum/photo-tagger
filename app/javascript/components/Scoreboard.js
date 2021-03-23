import React from 'react'
import {Link} from 'react-router-dom'


function Scoreboard(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/">
            <div className="back-menu">
              <i className="fas fa-arrow-circle-left"></i>
            </div>
          </Link>
        </div>
      </nav>

      <div className="scoreboard-wrapper">
        <h1>
          HIGH SCORES
        </h1>
        <div className="flex-row">
          <div className="player-name-rank">1. Someone</div>
          <div className="player-score">0:00</div>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
