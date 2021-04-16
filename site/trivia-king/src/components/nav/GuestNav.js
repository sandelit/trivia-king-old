import { Link } from 'react-router-dom'
import Logo from '../Logo'

const GuestNav = () => {
    return (
        <nav>
            <h2>GUEST</h2>
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

export default GuestNav
