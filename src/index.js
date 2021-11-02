import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';

import App from './App';

// const foodReducer = (state = 'elma') => state;

// const store = createStore(foodReducer);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
