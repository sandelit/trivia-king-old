import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/nav/Nav'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

import { UserProvider } from './components/context/UserContext'

const App = () => {
    return (
        <Router>
            <UserProvider>
                <div className="App">
                    <Nav />
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    {/* <Route path="/register" component={Register} /> */}
                </div>
            </UserProvider>
        </Router>
    )
}

export default App
