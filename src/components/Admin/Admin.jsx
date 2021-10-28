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
        // let the developer know something went wrong
        console.log(
          'There was an error retrieving the order list from the server:',
          err
        );
        // let the user know something went wrong
        alert('There was an error retrieving the pizza order list.');
      });
  };

  const convertTime = (time) => {
    // convert the time from the server into a js object
    const t = new Date(time);
    // the month is 0-indexed, so we need to add 1!
    let month = t.getMonth() + 1;
    let dayInMonth = t.getDate();
    let year = t.getFullYear();
    // change the hours from military time to am / pm
    let hours;
    let amOrPm = 'am';
    hours = t.getHours();
    if (hours > 12) {
      // set this to am and pm time
      hours = hours - 12;
      // in this case it's pm
      amOrPm = 'pm';
    }
    // set the minutes to display correctly, adding a 0 if less than 10
    let minutes = String(t.getMinutes());
    if (minutes.length === 1) {
      // add a zero in front if the length of minutes, as a string, is 1
      minutes = '0' + minutes;
    }
    // return all of the above in a nice string using template literals
    return `${month}/${dayInMonth}/${year} at ${hours}:${minutes}${amOrPm} `;
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
