import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        Bookstore CMS
      </li>
      <li>
        <NavLink to="/">Books</NavLink>
      </li>
      <li>
        <NavLink to="/categories">Categories</NavLink>
      </li>
      <li><FaUserCircle size={40} /></li>
    </ul>
  </nav>

);

export default Navbar;
