import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GameSelection from './GameSelection'
import GamePage from './GamePage'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameSelection} />
          <Route path="/game/:id" 
                render={(props)=>(
                  <GamePage {...props} />
                )} /> 
        </Switch>
      </BrowserRouter>
  )
}

export default App
