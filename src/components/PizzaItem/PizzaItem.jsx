import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PizzaItem.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
    <Card variant="outlined" sx={{ maxWidth: 300 }}> 
        <CardHeader title={item.name}/> 
          <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    width="250"
                    image={item.image_path}
                />
                <CardContent height="400" width="300">
                    <div className="item-text">
                        <Typography className="pizza-description" gutterBottom variant="body2" color="GrayText.secondary">
                            {item.description}
                        </Typography>
                        <Typography className="pizza-price" gutterBottom variant="body1" color="GrayText.primary" >
                            ${item.price}
                        </Typography>

                    </div>
                    

                </CardContent>
          </CardActionArea>
          
            
            {/* Button to delete card */}
            {addDelete ? (
        <Button variant="outlined" size="large" color="primary" onClick={addAndToggle}>
          ADD
        </Button>
      ) : (
        <Button variant="outlined" size= "large" className="delete-btn" color="error" onClick={deleteAndToggle}>
          DELETE
        </Button>
      )}
            
           
    </Card>
    </div>

    // <div className="gallery-item">
    //   <img src={item.image_path} alt={item.name} width="150" height="150" />
    //   <h2 className="pizza-name">{item.name}</h2>
    //   <p className="pizza-description">{item.description}</p>
    //   <p className="pizza-price">{item.price}</p>
    //   {addDelete ? (
    //     <button className="add-btn" onClick={addAndToggle}>
    //       ADD
    //     </button>
    //   ) : (
    //     <button className="delete-btn" onClick={deleteAndToggle}>
    //       DELETE
    //     </button>
    //   )}
    // </div> // end gallery item div
  );
} // end of PizzaItem function

export default PizzaItem;
