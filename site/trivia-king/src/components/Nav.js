import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

const Nav = () => {
    return (
        <nav>
            <h2>Trivia King</h2>
            <Logo />
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/About">
                    <li>About</li>
                </Link>
                <Link to="/Login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
