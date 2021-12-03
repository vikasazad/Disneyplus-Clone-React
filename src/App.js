import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Detail from './components/Detail'
import Login from './components/Login'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'


const App = () => {
  return (
    <div> 
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
