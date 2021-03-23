import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GameSelection from './GameSelection'
import GamePage from './GamePage'
import Scoreboard from './Scoreboard'

function App() {

  let handlePlayerCreation = () => {
    let playerName = prompt("Please enter your name")
  }

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameSelection} />
          <Route path="/game/:id" 
                render={(props)=>(
                  <GamePage {...props} />
                )} /> 
          <Route path="/scoreboard/:id" component={Scoreboard} />
        </Switch>
      </BrowserRouter>
  )
}

export default App
