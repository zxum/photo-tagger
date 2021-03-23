import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Scoreboard(props) {
  let [scores,setScores] = useState([])
  let id = props.match.params.id
  let title 
  id === 1 ? title = "Where in the 90's?" : title = "Where in the 80's?"

  useEffect(()=>{
    axios.get(`../api/v1/scoreboards/${id}`)
          .then(response => {
            setScores(response.data.data)
          })
  },[])

  let list = scores.map((score,index )=> {
    return (
      <div key={index} className="flex-row">
        <div className="player-name-rank">{index+1}. {score.attributes.playername}</div>
        <div className="player-score">{score.attributes.score}</div>
      </div>)
  })

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
        <p>{title}</p>
        <h1>
          HIGH SCORES
        </h1>
        
        {list}
      </div>
    </div>
  )
}

export default Scoreboard
