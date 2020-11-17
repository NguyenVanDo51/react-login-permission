import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

import configureStore from './app/store'
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

axios.defaults.baseURL = 'http://localhost:8001'

// get store, persistor
const { store, persistor } = configureStore();

// ---------------------------------------
const mapStateToProps = (state) => ({
  text: state.form.text,
  foo: state.form.foo,
  user: state.form.user,
});

const ConnectedApp = connect(mapStateToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
