import axios from 'axios';

function OrderItem({ order }) {
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

  const handleClick = (event) => {
    console.log(`in handleClick, id=`, order.id);
    // perform axios request
    axios
      .get(`/api/order/${order.id}`)
      .then((response) => {
        // handle the display in a modal in Admin
        console.log(response.data);
        // showOrder(response.data);f
      })
      .catch((err) => {
        console.log(
          'There was an error retrieving the order details from the server:',
          err
        );
      });
  };

  console.log('display?');
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
