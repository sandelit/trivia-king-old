import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [userInfo, setUserInfo] = useState(undefined)

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            {props.children}
        </UserContext.Provider>
    )
}
