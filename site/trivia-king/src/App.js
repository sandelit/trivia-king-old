import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                {/* <Route path="/register" component={Register} /> */}
            </div>
        </Router>
    )
}

export default App
