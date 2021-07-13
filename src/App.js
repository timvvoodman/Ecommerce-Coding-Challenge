import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//Component Imports//
import Header from './components/Header/Header'
import Home from './components/Home/Home.js'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
