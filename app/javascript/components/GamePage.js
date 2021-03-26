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

  let [formActive, setFormActive] = useState(false)
  let [score, setScore] = useState('--:--')

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

        character.attributes.found = 't'
        setCharacters = [...characters, character]
        console.log(characters)
        let foundCharacters = characters.filter(char => char.attributes.found == 't')
        if (foundCharacters.length === 5) {
          handleWin() 
        }
      }

      setContextMenuHidden(!contextMenuHidden)

    } catch (error) {
      console.error(error)
    }
  }

  const handleWin = () => {
    setActive(false)
    setFormActive(true)
    setScore(`${minute}:${second}`)
  }

  

  const handleNameSubmit = (event) => {
    event.preventDefault()
    setFormActive(false)

    let name = event.target.firstChild.lastChild.value
    
    handlePlayerCreation(name)
    event.target.reset()
    
  }

  let handlePlayerCreation = async (name) => {
    let token = document.querySelector('[name=csrf-token]').content 

    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    axios.post(`/api/v1/scoreboards`,{ playername: name, score: `${score}`, picture_id: id  })
    .then(() => props.history.push(`/scoreboard/${id}`))
    .catch(error => console.log(error))
  }

  return (
    <div className="app-main">

      {formActive && (<div className="player-name-modal">
        <form onSubmit={handleNameSubmit} className ="player-form">
          <div className="form-control">
            <label htmlFor="player-name">Player Name:</label>
            <input type="text" id="player-name" />
          </div>
        </form>
      </div>
      )}

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
