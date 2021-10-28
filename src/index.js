import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// this is a redux reducer to keep track of the 
// pizzas in the current order
// we're assuming a payload of:
// {
//    id: id,
//    quantity: quantity
// }
const pizzaOrderList = (state = [], action) => {
// TODO: set up conditional
  if (action.type='ADD_PIZZA') {
    // at the moment, we're just adding a new pizza
    // this does not increase the quantity if this pizza is already in the order
    return [...state, action.payload];
  } else if (action.type='REMOVE_PIZZA') {
    // this will remove all the pizzas with an id equivalent to the id of the
    // pizza in the payload
    // the filter returns a new array, so it updates state
    // only pizzas that don't have that id gets added to the array returned by filter
    return state.filter(pizza => Number(state.pizza.id) !== Number(action.payload.id) );
  }
return state;
}

// this is a redux reducer to keep track of the
// current order's customer info 
const customerInfo = (state = {}, action) => {

}

// create a store
const store = createStore(
  combineReducers({
    pizzaOrderList
  }), applyMiddleware(logger);
)


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,

  document.getElementById('root')
);
