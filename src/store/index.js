import {createStore, combineReducers, applyMiddleware} from 'redux';
import {cartReducer} from '../reducers/cart';
import {productReducer} from '../reducers/product';

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
const middleware = [thunk, createLogger()];

const reducers = combineReducers({cart:cartReducer,products:productReducer})
console.log(middleware);

const store =  createStore(reducers,{products:[{id:1}],cart:[]}, applyMiddleware(...middleware));

//store.dispatch({prodcuts:[{id:'1',name:'Book1', price:40}]});

export default store;
