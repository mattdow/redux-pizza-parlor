import './Admin.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import OrderItem from '../OrderItem/OrderItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// define the modal's style
// these are the defaults from mui
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Admin() {
  // set up local state to hold the orders
  const [orderList, setOrderList] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const showOrder = (order) => {
    setCurrentOrder(order);
    setModalIsOpen(true);
  };

  console.log(`currentOrder`, currentOrder);
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
            <OrderItem
              key={i}
              order={order}
              showOrder={showOrder}
              convertTime={convertTime}
            />
          ))}
        </tbody>
      </table>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order Details:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name: {currentOrder.customer_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Address: {currentOrder.street_address}, {currentOrder.zip}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Order Placed: {convertTime(currentOrder.time)}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Type: {currentOrder.type}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Admin;
