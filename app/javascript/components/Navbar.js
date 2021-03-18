import React, {useState} from 'react'
import Character from './Character'
import {Link} from 'react-router-dom'

function Navbar(props) {

  let [hidden, setHidden] = useState(true)

  const handleOpenSidebar = () => {
    setHidden(!hidden)
  }

  let status 
  hidden === true ? status = "characters hidden" : status = "characters"

  let title 
  if(Object.keys(props.picture).length !== 0){
    let picture = props.picture.data.data.attributes
    title = picture.title
  } else {
    title = "Where in the ?"
  }

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
