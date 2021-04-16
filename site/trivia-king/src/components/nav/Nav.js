import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

import UserNav from './UserNav'
import GuestNav from './GuestNav'

const Nav = () => {
    const [userInfo] = useContext(UserContext)

    if (userInfo !== undefined) {
        return <UserNav />
    } else {
        return <GuestNav />
    }
}

export default Nav
