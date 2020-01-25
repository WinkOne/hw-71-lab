import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import {Provider} from 'react-redux';
import reducer from "./store/reducer";
import thunk from "redux-thunk";
import reducerOrders from "./store/dishes/reducerOrders";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    orderReducer: reducerOrders,
    mainReducer: reducer
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

