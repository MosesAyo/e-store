import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './components/static/css/main.css';
// import logo from './logo.svg';
// import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import Address from './components/Address';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}  />
        <Route exact path="/product" component={Product}/>
        <Route exact path="/cart" component={ShoppingCart} />
        <Route exact path="/address" component={Address} />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
