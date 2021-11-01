import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Books from './Books';
import Categories from './Categories';

const Navbar = () => (
  <Router>
    <nav>
      <ul>
        <li>
          Bookstore CMS
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li><FaUserCircle size={40} /></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default Navbar;
