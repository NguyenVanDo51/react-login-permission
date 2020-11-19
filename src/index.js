import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

import configureStore from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import App from './containers/App'

axios.defaults.baseURL = 'http://localhost:8001'

// get store, persistor
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
