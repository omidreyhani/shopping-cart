import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Products from  './containers/Products';
import Cart from  './containers/Cart';


export default ()=>(
    <div className="container">
                <div className="row">
                    <Products/>
                </div>
                <div className="row">
                    <Cart/>
                </div>
            </div>);

