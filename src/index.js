import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import './index.css';


// import { store } from './configureStore'
// import { selectCell, clearGrid } from './actions'

console.log(JSON.stringify(store.getState(), null, 2))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
