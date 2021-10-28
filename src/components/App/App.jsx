import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout.jsx';
import AdminComp from '../Admin/Admin.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import { Route, HashRouter as Router, Link} from 'react-router-dom';

function App() {

  return (
    <Router>

    <div className='App'>

      <Link to="/CustomerForm">Customer Info</Link>

      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <Route path ="/CustomerForm" exact>
        <CustomerForm />
      </Route>

      {/* <CustomerForm /> */}
      <Checkout />

      <AdminComp />
    </div>
    </Router>
  );
}

export default App;
