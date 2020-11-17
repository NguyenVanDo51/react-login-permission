import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import App from "./todo/App"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './todo/reducers/index'

const store = createStore(counter)

const render = () => ReactDOM.render(
    <App value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById('root')
);

reportWebVitals();

render()
store.subscribe(render)