import { Link } from 'react-router-dom'
import Logo from '../Logo'

const UserNav = () => {
    return (
        <nav>
            <h2>USER</h2>
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

export default UserNav
