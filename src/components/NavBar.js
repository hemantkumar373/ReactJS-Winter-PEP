import { Link } from 'react-router-dom';
import './NavBar.css'; // Importing the CSS file for NavBar styling

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-links">
                <Link to="/home" className="navbar-link">Home</Link>
                <Link to="/FormAction" className="navbar-link">FormAction</Link>
            </div>
        </div>
    );
}

export default NavBar;
