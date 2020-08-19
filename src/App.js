import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './components/static/css/main.css';
// import logo from './logo.svg';
// import './App.css';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}  />
      </BrowserRouter>
    </div>
  );
}

export default App;
