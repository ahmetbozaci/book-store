import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar container">
    <ul className="container">
      <li className="navbar-brand">
        Bookstore CMS
      </li>
      <li className="navbar-link">
        <NavLink to="/">Books</NavLink>
      </li>
      <li className="navbar-link">
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
    <div className="user-icon"><FaUserCircle size={20} /></div>
  </nav>

);

export default Navbar;
