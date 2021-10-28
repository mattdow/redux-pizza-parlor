import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout.jsx';
import AdminComp from '../Admin/Admin.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import Header from '../Header/Header.jsx';

function App() {
  return (

    <Router>
      <div className="App">
        {/* <Link to="/CustomerForm">Customer Info</Link> */}
        <Header/>

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/CustomerForm" exact>
          <CustomerForm />
        </Route>

        
        <Route path="/checkout" exact>
          <Checkout />
        </Route>

        <Route path="/admin" exact>
          <AdminComp />
        </Route>
      </div>
    </Router>
  );
}

export default App;
