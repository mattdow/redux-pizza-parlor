import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
// import Picker from 'react-picker';

function CustomerForm() {

    const [newCustomer, setNewCustomer] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_CUSTOMER',
            payload: newCustomer
        })

        setNewCustomer('');
    }

    return (


        <form onSubmit={handleSubmit}>
            <h2>Step 2: Customer Information</h2>
            <label>PickUp or Delivery</label>
            <input
            type ="text"
            placeholder="Name"
            Value={newCustomer}
            onChange={event => setNewCustomer(event.target.value)}
            />
            <input
            type ="text"
            placeholder="Street Address"
            Value={newCustomer}
            onChange={event => setNewCustomer(event.target.value)}
            />
            <input
            type ="text"
            placeholder="City"
            Value={newCustomer}
            onChange={event => setNewCustomer(event.target.value)}
            />
            <input
            type ="text"
            placeholder="Zip"
            Value={newCustomer}
            onChange={event => setNewCustomer(event.target.value)}
            />
            <button>Pick Up</button>
            <button>Delivery</button>

            <button type="next">NEXT</button>
        </form>
    )
}

export default CustomerForm;