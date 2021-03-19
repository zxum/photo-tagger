import React, {useState} from 'react'
import Character from './Character'
import {Link} from 'react-router-dom'

function Navbar(props) {

  let characters
  let title

  props.characters ? characters = props.characters : characters = []
  props.picture ? title = props.picture.title : title = "Where in the ?"

  const handleOpenSidebar = () => {
    setHidden(!hidden)
  }

  let [hidden, setHidden] = useState(true)
  let status 
  hidden === true ? status = "characters hidden" : status = "characters"



  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <div className="back-menu"><i className="fas fa-arrow-circle-left"></i></div>
        </Link>
        <div className="timer">0:00</div>
        <div className="title">{title}</div>
        <div onClick={handleOpenSidebar} className="found">3/5</div>
        <div className="leaderboard"><i className="fas fa-trophy"></i></div>
      </div>

      <div className={status} id="sidebar">
        <Character character={characters[0]} requestImageFiles={props.requestImageFiles} />
        <Character character={characters[1]} requestImageFiles={props.requestImageFiles} />
        <Character character={characters[2]} requestImageFiles={props.requestImageFiles} />
        <Character character={characters[3]} requestImageFiles={props.requestImageFiles} />
        <Character character={characters[4]} requestImageFiles={props.requestImageFiles} />
      </div>
      
    </nav>
  )
}

export default Navbar
