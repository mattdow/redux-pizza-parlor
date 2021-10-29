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

  const showOrder = (order) => {
    console.log(`in Admin showOrder with order`, order);
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
            <OrderItem key={i} order={order} showOrder={showOrder} />
          ))}
        </tbody>
      </table>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Order Details:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentOrder.customer_name}
            {currentOrder.street_address}
            {currentOrder.zip}
            {currentOrder.time}
            {currentOrder.type}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Admin;
