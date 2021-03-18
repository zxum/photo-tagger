import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Game from './Game'

function GamePage(props) {
  let id = props.match.params.id 

  let [picture, setPicture] = useState({})
  useEffect(()=>{
    {fetch(`../api/v1/pictures/${id}.json`)
      .then(response=> response.json())
      .then(data => setPicture({data})) 
    }
  },[])

  console.log({picture})

  return (
    <div className="app-main">
      <Navbar picture={picture}/> 
      <Game picture={picture}/>
    </div>
  )
}

export default GamePage
