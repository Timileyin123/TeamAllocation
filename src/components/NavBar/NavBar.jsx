import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {

        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar nav me-auto  mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/TeamGrouped">Teams</Link>
                    </li>
                </ul>
            </nav>
            </>
        );
    
}
 
export default NavBar;