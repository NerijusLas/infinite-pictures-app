import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import picturesApp from './reducers';
import App from './App';

let store = createStore(picturesApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
