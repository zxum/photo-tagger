import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Game from './Game'
import ContextMenu from './ContextMenu'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function GamePage(props) {
  let id = props.match.params.id 

  let [picture, setPicture] = useState()
  let [characters, setCharacters] = useState()
  let [menuPos, setMenuPos] = useState({x:0,y:0})
  let [selectionPos, setSelectionPos] = useState({x:0,y:0})
  let [offsetPer, setOffsetPer] = useState({offset:0})
  let [contextMenuHidden, setContextMenuHidden] = useState(false)
  let requestImageFiles = require.context('../../assets/images',true,/.jpg$/)
  
  let [second, setSecond] = useState('00')
  let [minute, setMinute] = useState('00')
  let [isActive, setActive] = useState(false)
  let [counter, setCounter] = useState(0)

  let [formActive, setFormActive] = useState(false)
  let [score, setScore] = useState('--:--')

  let navRef = React.createRef()

  // Create Timer for Scoreboard 
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

  // Get data about game image 
  useEffect(() => {
    {fetch(`../api/v1/pictures/${id}.json`)
      .then(response=> response.json())
      .then(data => {
        setPicture(data.data.attributes)
        setCharacters(data.included)
        setActive(true)
      })
    }
  },[])

  // Checks whether a page click matches an image
  const handleImageClick = (event) => {
    event.preventDefault()

    /* pageX pageY scrollHeight scrollWidth */
    let {pageX,pageY} = event
    let {scrollHeight,scrollWidth} = event.target
    let navHeight = navRef.current.clientHeight  // Get the height of the navbar

    let offsetPercent = (navHeight/(scrollHeight + navHeight)) * 100
    let xposPercent = pageX/scrollWidth * 100 
    let yposPercent = (pageY/(scrollHeight + navHeight) * 100)

    let xpos = pageY
    let ypos = pageX

    setSelectionPos({x:xposPercent, y:yposPercent})
    setMenuPos({x:xpos, y: ypos})
    setContextMenuHidden(!contextMenuHidden)
    setOffsetPer({offset:offsetPercent})
  }

  // Select which character player thinks it is and check position
  const handleMenuClick = async (id, x, y, offset) => {
    try{
      let character = characters.find(char => {
        return char.id === id})
      let {left, top, width, height} = character.attributes 
      let xMin = left 
      let xMax = left + width
      let yMin = top 
      let yMax = top + height + offset
      

      if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        toast.success(`You found ${character.attributes.name}`)
        character.attributes.found = 't'
        setCharacters = [...characters, character]
        let foundCharacters = characters.filter(char => char.attributes.found == 't')
        if (foundCharacters.length === 5) {
          handleWin() 
        }
      } else {
        toast.error('Try Again!')
      }

      setContextMenuHidden(!contextMenuHidden)

    } catch (error) {
      console.error(error)
    }
  }

  // Triggers Name Input and Sets final score 
  const handleWin = () => {
    setActive(false)
    setFormActive(true)
    setScore(`${minute}:${second}`)
  }

  // Sends name input to scoreboard
  const handleNameSubmit = (event) => {
    event.preventDefault()
    setFormActive(false)

    let name = event.target.firstChild.lastChild.value
    
    handlePlayerCreation(name)
    event.target.reset()
    
  }

  // Posts name and score to scoreboard 
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
              minute={minute}
              ref={navRef} /> 
      {contextMenuHidden && (
        <ContextMenu 
              xPos={menuPos.x} 
              yPos={menuPos.y} 
              xPer={selectionPos.x}
              yPer={selectionPos.y}
              offsetPer={offsetPer.offset}
              characters={characters}
              handleMenuClick={handleMenuClick}/>
      )}
      <div className="image-div" onClick={handleImageClick}>
        <Game picture={picture} 
            characters={characters}
            requestImageFiles={requestImageFiles}
            handleMenuClick={handleMenuClick}/>
      </div>
      <ToastContainer hideProgressBar/>
    </div>
  )
}

export default GamePage
