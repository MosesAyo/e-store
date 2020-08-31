import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './components/static/css/main.css';
// import logo from './logo.svg';
// import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}  />
        <Route exact path="/product" component={Product}/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
