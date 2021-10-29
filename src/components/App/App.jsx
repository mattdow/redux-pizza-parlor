import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout.jsx';
import AdminComp from '../Admin/Admin.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/CustomerForm">Customer Info</Link> */}
        <div className="bodyContent">
          <Route path="/" exact>
            <Header displayTotal={true} />
            <PizzaList />
          </Route>

          <Route path="/CustomerForm" exact>
            <Header displayTotal={true} />
            <CustomerForm />
          </Route>

          <Route path="/checkout" exact>
            <Header displayTotal={true} />
            <Checkout />
          </Route>

          <Route path="/admin" exact>
            <Header displayTotal={false} />
            <AdminComp />
          </Route>
        </div>
        
        <div className="footerContent">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
