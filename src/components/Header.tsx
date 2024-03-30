import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo';

function Header() {
    return (
        <header className="header">
            <div className='logo-wrapper'>
                <img alt="logo of website" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png" />
            </div>
            <nav className='nav-bar-container'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/profiles">Profiles</NavLink></li>
                </ul>
            </nav>
            <div className="user-info-wrapper">
                <UserInfo />
            </div>
        </header>
    );
}

export default Header;
