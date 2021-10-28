import PizzaItem from '../PizzaItem/PizzaItem';
import {useSelector} from 'react-redux';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function PizzaList() {
    // define and initialize our array of pizza menu items
    let [pizzaMenu, setPizzaMenu] = useState([]);

    // define a function to GET the pizza menu from the route /api/pizza

    const getPizzaMenu = () => {
        console.log('In getPizzaMenu');
        axios
          .get('/api/pizza')
          .then((response) => {
              console.log('Pizza menu is ', response.data);
              // use the set state function to load the array of pizza items
              setPizzaMenu(response.data);
          }).catch((err) => {
              console.log('Error getting pizza menu', err);
          })
    } // end of getPizzaMenu
    useEffect(() => {
        getPizzaMenu();
    }, []);
    return (
        <div className="menu-container">
            {pizzaMenu.map((item) => (
                <PizzaItem
                    item={item}
                    key={item.id}
                />
            ))}
        </div>
    )
}
export default PizzaList;