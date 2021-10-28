import './Admin.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        console.log(
          'There was an error retrieving the order list from the server:',
          err
        );
        alert('There was an error retrieving the pizza order list.');
      });
  };

  const convertTime = (time) => {
    const t = new Date(time);
    // the month is 0-indexed, so we need to add 1!
    const newDate = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`;
    console.log(`newDate`, newDate);
    return newDate;
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
          {orderList.map((person, i) => (
            <tr>
              <td>{person.customer_name}</td>
              <td>{convertTime(person.time)}</td>
              <td>{person.type}</td>
              <td>{person.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
