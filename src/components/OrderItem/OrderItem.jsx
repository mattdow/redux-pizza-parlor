import axios from 'axios';

function OrderItem({ order, showOrder, convertTime }) {
  const handleClick = (event) => {
    console.log(`in handleClick, id=`, order.id);
    // perform axios request
    axios
      .get(`/api/order/${order.id}`)
      .then((response) => {
        // handle the display in a modal in Admin
        showOrder(response.data);
      })
      .catch((err) => {
        console.log(
          'There was an error retrieving the order details from the server:',
          err
        );
      });
  };

  return (
    <tr id={order.id} onClick={handleClick}>
      <td>{order.customer_name}</td>
      <td>{convertTime(order.time)}</td>
      <td>{order.type}</td>
      <td>{order.total}</td>
    </tr>
  );
}

export default OrderItem;
