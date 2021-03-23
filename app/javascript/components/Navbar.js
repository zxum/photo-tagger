import React, {useState} from 'react'
import Character from './Character'
import {Link} from 'react-router-dom'

function Navbar(props) {

  let characters, title, status, scoreboard

  let [hidden, setHidden] = useState(true)
  
  hidden === true ? status = "characters hidden" : status = "characters"

  props.characters ? characters = props.characters : characters = []

  if (props.picture)  {
    title = props.picture.title
    scoreboard = `/scoreboard/${props.picture.id}`
  } else {
    title = "Where in the ?"
    scoreboard = ''
  }

  let found = characters.filter(char => char.attributes.found === 't')
  
  const handleOpenSidebar = () => {
    setHidden(!hidden)
  }
  

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <div className="back-menu">
            <i className="fas fa-arrow-circle-left"></i>
          </div>
        </Link>
        <div className="timer">{props.minute}:{props.second}</div>
        
        <div className="title">{title}</div>
        
        <div onClick={handleOpenSidebar} className="char-found">{found.length}/{characters.length}</div>
        
        <Link to={scoreboard}>
          <div className="leaderboard">
            <i className="fas fa-trophy"></i>
          </div>
        </Link>
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
