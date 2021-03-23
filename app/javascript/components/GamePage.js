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
  
  let [second, setSecond] = useState('00')
  let [minute, setMinute] = useState('00')
  let [isActive, setActive] = useState(false)
  let [counter, setCounter] = useState(0)
 
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])

  useEffect(()=>{
    {fetch(`../api/v1/pictures/${id}.json`)
      .then(response=> response.json())
      .then(data => {
        setPicture(data.data.attributes)
        setCharacters(data.included)
        setActive(true)
      }) 
    }
  },[])

  const handleImageClick = (event) => {
    let offset
    (id == 1 ? offset = 4 : offset = 7)
    console.log(offset)
    event.preventDefault()
    // console.log(event)
    let {pageX,pageY} = event
    let {scrollHeight,scrollWidth} = event.target
    let xposPercent = pageX/scrollWidth * 100 
    let yposPercent = (pageY/scrollHeight * 100) - offset
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
                      let foundCharacters = data.filter(char => char.attributes.found == 't')
                      console.log(characters)
                      console.log(foundCharacters)
                      if (foundCharacters.length === 5) {
                        handleWin() 
                      }
                    })
      }

      setContextMenuHidden(!contextMenuHidden)

    } catch (error) {
      console.error(error)
    }
  }

  const handleWin = async () => {
    setActive(false)
    await axios.patch(`/api/v1/scoreboard/${id}`, { score: `${minute}:${second}`}) 
                .then(response => {
                  console.log(response)
                })
  }

  return (
    <div className="app-main">
      <Navbar picture={picture} 
              characters={characters} 
              requestImageFiles={requestImageFiles}
              second={second}
              minute={minute}/> 
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
