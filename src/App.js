import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import Books from './components/book/Books';
import Categories from './components/Categories';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
