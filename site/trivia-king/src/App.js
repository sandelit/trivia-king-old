import React from 'react'
import { Broswer as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Register path="/register" component={Register} />
            </div>
        </Router>
    )
}

export default App
