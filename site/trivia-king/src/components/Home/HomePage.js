import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'

const HomePage = () => {
    return (
        <div>
            <Link to="/">
                <Button text="Login" />
            </Link>
            <Link to="/">
                <Button text="Continue as guest" />
            </Link>
        </div>
    )
}

export default HomePage
