import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import HomePage from './HomePage'
import Play from './Play'

import { UserContext } from '../context/UserContext'

const Home = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    if (userInfo === undefined) {
        return <HomePage />
    } else {
        return <Play />
    }
}

export default Home
