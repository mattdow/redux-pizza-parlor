import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PizzaItem.css';
import { useSelector, useDispatch } from 'react-redux';

function PizzaItem({ item }) {
  // define a variable equal to the current order number
  const currentOrder = useSelector((store) => store.orderReducer);
  const pizzaOrderList = useSelector((store) => store.pizzaOrderList);

  //define a dispatch variable
  const dispatch = useDispatch();

  // define a variable and setter to determine if we show an add button or delete button
  let [addDelete, setAddDelete] = useState(true);

  // define a quick function to toggle the addDelete parameter
  const toggleAddDelete = () => {
    // setting the toggle to it's opposite
    setAddDelete(!addDelete);
  };

  // define a function to dispatch a new pizza to the reducer
  const addPizza = () => {
    console.log('Adding pizza', item.name);
    dispatch({
      type: 'ADD_PIZZA',
      payload: {...item, quantity:1},
    });
  };

  // define a function to dispatch a delete pizza to the reducer
  const deletePizza = () => {
    console.log('Deleting pizza', item.name);
    dispatch({
      type: 'REMOVE_PIZZA',
      payload: item,
    });
  };

  const addAndToggle = () => {
    addPizza();
    toggleAddDelete();
  };

  const deleteAndToggle = () => {
    deletePizza();
    toggleAddDelete();
  };

  return (
    <div className="gallery-item">
      <img src={item.image_path} alt={item.name} width="150" height="150" />
      <h2 className="pizza-name">{item.name}</h2>
      <p className="pizza-description">{item.description}</p>
      <p className="pizza-price">{item.price}</p>
      {addDelete ? (
        <button className="add-btn" onClick={addAndToggle}>
          ADD
        </button>
      ) : (
        <button className="delete-btn" onClick={deleteAndToggle}>
          DELETE
        </button>
      )}
    </div> // end gallery item div
  );
} // end of PizzaItem function

export default PizzaItem;
