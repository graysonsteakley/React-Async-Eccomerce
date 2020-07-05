import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import styled from 'styled-components'
import Nav from './components/Nav'
import Default from './components/Default'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div className="container-fluid">
      <Nav/>
      <Switch>
        <Route exact path="/" component = {ProductList}/>
        <Route exact path="/cart" component = {Cart} />
        <Route exact to="/details" component = {ProductDetails} />
        <Route component = {Default}/>     
      </Switch>
    </div>
  );
}

export default App;
