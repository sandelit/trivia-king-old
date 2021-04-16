import React from 'react'

const Button = (props) => {
    const { text, clickHandler } = props
    return <button onClick={clickHandler}>{text}</button>
}

export default Button
