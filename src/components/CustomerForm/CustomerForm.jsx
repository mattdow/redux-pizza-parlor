import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

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
            <input
                type="text"
                placeholder="Name"
                Value={newCustomer}
                onChange={event => setNewCustomer(event.target.value)}
            />
            <input
                type="text"
                placeholder="Street Address"
                Value={newCustomer}
                onChange={event => setNewCustomer(event.target.value)}
            />
                        <input
                type="text"
                placeholder="City"
                Value={newCustomer}
                onChange={event => setNewCustomer(event.target.value)}
            />
            <input
                type="text"
                placeholder="Zip"
                Value={newCustomer}
                onChange={event => setNewCustomer(event.target.value)}
            />
        </form>
    )
}

export default CustomerForm;