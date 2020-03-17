import React from 'react';
import './App.css';
import Logo from './components/Header/Logo';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/Products/ProductDetails';


function App() {
 

  return (
    <Router>
      <Logo/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <div className="shop-content mt-2 row m-auto">
            <Products/>
          </div>
        </Route>
        <Route path="/review">
          
        </Route>
        <Route path="/product/:id">
          <ProductDetails/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
      </Switch>

    </Router>
  );
}



export default App;
