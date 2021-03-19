import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Game from './Game'
import ContextMenu from './ContextMenu'

function GamePage(props) {
  let id = props.match.params.id 

  let [picture, setPicture] = useState()
  let [characters, setCharacters] = useState()
  let [menuPos, setMenuPos] = useState({x:0,y:0})
  let [selectionPos, setSelectionPos] = useState({x:0,y:0})
  let [contextMenuHidden, setContextMenuHidden] = useState(false)
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

  const handleImageClick = (event) => {
    event.preventDefault()
    
    let {pageX,pageY} = event
    let {scrollHeight,scrollWidth} = event.target
    let xposPercent = pageX/scrollWidth * 100
    let yposPercent = pageY/scrollHeight * 100 
    let xpos = pageY
    let ypos = pageX

    setSelectionPos({x:xposPercent, y:yposPercent})
    setMenuPos({x:xpos, y: ypos})
    setContextMenuHidden(!contextMenuHidden)
    /* pageX pageY scrollHeight scrollWidth */ 
  
  }

  const handleMenuClick = async ( x, y ) => {
    try{

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="app-main">
      <Navbar picture={picture} 
              characters={characters} 
              requestImageFiles={requestImageFiles}/> 
      {contextMenuHidden && (
        <ContextMenu 
              xPos={menuPos.x} 
              yPos={menuPos.y} 
              characters={characters}/>
      )}
      <div className="image-div" onClick={handleImageClick}>
      <Game picture={picture} 
            characters={characters}
            requestImageFiles={requestImageFiles}
            handleMenuClick={handleMenuClick}/>
      </div>
    </div>
  )
}

export default GamePage
