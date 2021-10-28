import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// this is a redux reducer to keep track of the
// pizzas in the current order
// we're assuming a payload of:
// {
//    id: id,
//    quantity: quantity
// }
const pizzaOrderList = (state = [], action) => {
  if ((action.type === 'ADD_PIZZA')) {
    // at the moment, we're just adding a new pizza (base mode requirement)
    // this does not increase the quantity if this pizza is already in the order
    return [...state, action.payload];
  } else if ((action.type === 'REMOVE_PIZZA')) {
    // this will remove all the pizzas with an id equivalent to the id of the
    // pizza in the payload
    // the filter returns a new array, so it updates state
    // only pizzas that don't have that id gets added to the array returned by filter
    // this will work for base mode
    return state.filter(
      (pizza) => Number(pizza.id) !== Number(action.payload.id)
    );
  } else if (action.type === 'RESET') {
    // this will reset the pizzaOrderList to its initial state
    return [];
  }
  return state;
};

// this is a redux reducer to keep track of the
// current order's customer info
// we're assuming a payload of
/*
{
  customer_name: name,
  street_address: address,
  city: city,
  total: total,
  type: pickup/delivery
}
*/
// we're not including the pizzas in this order since
// they're kept in pizzaOrderList already
const customerInfo = (state = {}, action) => {
  if (action.type === 'SET_CUSTOMER_INFO') {
    // there's only one customer at a time, so set the state to the new payload
    return action.payload;
  } else if (action.type === 'RESET') {
    // this will clear the customer info and reset state to its initial value
    return {};
  }
  return state;
};

// create a store
const store = createStore(
  combineReducers({
    pizzaOrderList,
    customerInfo,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
