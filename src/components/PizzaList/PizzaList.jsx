import PizzaItem from '../PizzaItem/PizzaItem';
import {useSelector} from 'react-redux';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';

function PizzaList() {
    // define and initialize our array of pizza menu items
    let [pizzaMenu, setPizzaMenu] = useState([]);

    // define a function to GET the pizza menu from the route /api/pizza

    const history = useHistory();

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

    const handleClick = () => {
        history.push(`/CustomerForm`);
    }


    return (<>
        <h2>Step 1: Select your pizza</h2>

        <div className="menu-container">
            {pizzaMenu.map((item) => (
                <PizzaItem
                    item={item}
                    key={item.id}
                />
            ))}
        </div>

        <div align="right" className="button-bar">
            <Button  variant="contained" onClick={handleClick}>NEXT</Button>
        </div>

        
    </>)
}
export default PizzaList;