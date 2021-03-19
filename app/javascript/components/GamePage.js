import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Game from './Game'

function GamePage(props) {
  let id = props.match.params.id 

  let [picture, setPicture] = useState()
  let [characters, setCharacters] = useState()
  let requestImageFiles = require.context('../../assets/images',true,/.jpg$/)

  useEffect(()=>{
    {fetch(`../api/v1/pictures/${id}.json`)
      .then(response=> response.json())
      .then(data => {
        setPicture(data.data.attributes)
        setCharacters(data.included)
      }) 
    }
  },[])

  const handleClick = (event) => {
    console.log(event)
    console.log(event.target.scrollHeight)
    console.log(event.target.scrollWidth)
    /* pageX pageY scrollHeight scrollWidth */ 
  }



  return (
    <div className="app-main">
      <Navbar picture={picture} 
              characters={characters} 
              requestImageFiles={requestImageFiles}/> 
      <Game picture={picture} 
            requestImageFiles={requestImageFiles}
            handleClick={handleClick}/>
    </div>
  )
}

export default GamePage
