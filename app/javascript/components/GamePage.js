import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Game from './Game'
import ContextMenu from './ContextMenu'
import axios from 'axios'

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
    // console.log(event)
    let {pageX,pageY} = event
    let {scrollHeight,scrollWidth} = event.target
    let xposPercent = pageX/scrollWidth * 100 
    let yposPercent = (pageY/scrollHeight * 100) - 4 
    let xpos = pageY
    let ypos = pageX

    console.log({xposPercent,yposPercent})

    setSelectionPos({x:xposPercent, y:yposPercent})
    setMenuPos({x:xpos, y: ypos})
    setContextMenuHidden(!contextMenuHidden)
    /* pageX pageY scrollHeight scrollWidth */ 
  
  }

  const handleMenuClick = async ( id, x, y ) => {
    try{
      let character = characters.find(char => {
        return char.id === id})
      let {left, top, width, height} = character.attributes 
      let xMin = left 
      let xMax = left + width 
      let yMin = top 
      let yMax = top + height

      if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        await axios.patch(`/api/v1/characters/${id}`,{ found: 't' })
                    .then(response => {
                      let data = response.data.data 
                      setCharacters(data)
                      
                    })
      }

      setContextMenuHidden(!contextMenuHidden)
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
              xPer={selectionPos.x}
              yPer={selectionPos.y}
              characters={characters}
              handleMenuClick={handleMenuClick}/>
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
