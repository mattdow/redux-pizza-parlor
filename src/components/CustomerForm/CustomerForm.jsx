import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';

function CustomerForm() {
  const [newCustomer, setNewCustomer] = useState({
    customer_name: '',
    street_address: '',
    city: '',
    zip: '',
    type: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'SET_CUSTOMER_INFO',
      payload: newCustomer,
    });

    setNewCustomer({
      customer_name: '',
      street_address: '',
      city: '',
      zip: '',
      type: '',
    });

    history.push(`/checkout`);
  };

  console.log(`newCustomer`, newCustomer);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Customer Information</h2>
      <label>PickUp or Delivery</label>
      <input
        type="text"
        placeholder="Name"
        value={newCustomer.customer_name}
        onChange={(event) =>
          setNewCustomer({ ...newCustomer, customer_name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Street Address"
        value={newCustomer.street_address}
        onChange={(event) =>
          setNewCustomer({ ...newCustomer, street_address: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={newCustomer.city}
        onChange={(event) =>
          setNewCustomer({ ...newCustomer, city: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Zip"
        value={newCustomer.zip}
        onChange={(event) =>
          setNewCustomer({ ...newCustomer, zip: event.target.value })
        }
      />

      <input
        type="radio"
        name="type"
        value="Pickup"
        id="pickup"
        onClick={() => setNewCustomer({ ...newCustomer, type: 'Pickup' })}
      />
      <label htmlFor="pickup">Pick up</label>
      <input
        type="radio"
        name="type"
        value="Delivery"
        id="delivery"
        onClick={() => setNewCustomer({ ...newCustomer, type: 'Delivery' })}
      />
      <label htmlFor="delivery">Delivery</label>

      <div>
        <button onClick={() => history.push(`/`)}>PREVIOUS</button>
        <button type="submit">NEXT</button>
      </div>
    </form>
  );
}

export default CustomerForm;
