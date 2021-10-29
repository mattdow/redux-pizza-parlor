import './Admin.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import OrderItem from '../OrderItem/OrderItem';

function Admin() {
  // set up local state to hold the orders
  const [orderList, setOrderList] = useState([]);

  // set up a useEffect to update the page once it is loaded
  useEffect(() => {
    fetchOrders();
  }, []);

  // fetch all orders from the server
  const fetchOrders = () => {
    axios
      .get('/api/order')
      .then((response) => {
        // the data is contained in response.data
        setOrderList(response.data);
      })
      .catch((err) => {
        // let the developer know something went wrong
        console.log(
          'There was an error retrieving the order list from the server:',
          err
        );
        // let the user know something went wrong
        alert('There was an error retrieving the pizza order list.');
      });
  };

  return (
    <>
      <table className="adminTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, i) => (
            <OrderItem key={i} order={order} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
