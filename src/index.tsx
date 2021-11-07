import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import {rootReducer} from "./store/AppState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,

  document.getElementById('root')
);
