import React from 'react'

import Logo from './Logo'

const Nav = () => {
    return (
        <nav>
            <h2>Trivia King</h2>
            <Logo />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Leaderboards</li>
            </ul>
        </nav>
    )
}

export default Nav
