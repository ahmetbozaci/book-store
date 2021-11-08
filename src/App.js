/** @format */

import { Provider } from 'react-redux';
import './App.scss';
import Navbar from './components/Navbar';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Navbar />
  </Provider>
);

export default App;
