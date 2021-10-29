import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import './Checkout.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Checkout() {
  const pizzaOrderList = useSelector((store) => store.pizzaOrderList);
  const customerInfo = useSelector((store) => store.customerInfo);
  const orderTotal = useSelector((store) => store.orderTotal);

  const history = useHistory();
  const dispatch = useDispatch();

  const [currentOrder, setCurrentOrder] = useState({
    customer_name: customerInfo.customer_name,
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    type: customerInfo.type,
    total: orderTotal,
    pizzas: [...pizzaOrderList],
  });

  const handleCheckout = () => {
    const confirmation = confirm(`Are you sure you want to checkout?`);

    if (confirmation) {
      axios({
        method: `POST`,
        url: `/api/order`,
        data: currentOrder,
      })
        .then((response) => {
          //get request
          dispatch({ type: `RESET` });
          history.push('/');
        })
        .catch((error) => {
          console.log(`ERROR in /api/order POST`, error);
        });
    }
  };

  console.log(currentOrder);

  return (
    <>
      <h1>Step 3: Checkout</h1>
      <div className="customerInfo">
        <table className="customerTable">
          <tbody>
            <tr>
              <td>
                Name: {currentOrder.customer_name} <br />
                Address: {currentOrder.street_address}
                <br />
                City: {currentOrder.city} <br />
              </td>
              <td>Delivery/Pickup: {currentOrder.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pizzaDiv">
        <table className="pizzaTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {currentOrder.pizzas.map((item) => (
              <>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Total: {currentOrder.total}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </>
  );
}
export default Checkout;
