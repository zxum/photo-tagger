import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GameSelection from './GameSelection'
import GamePage from './GamePage'
import Scoreboard from './Scoreboard'
import axios from 'axios'

function App() {

  return (
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={GameSelection}/>
          <Route path="/game/:id" component={GamePage} /> 
          <Route path="/scoreboard/:id" component={Scoreboard} />
        </Switch>
      </BrowserRouter>
  )
}

export default App
