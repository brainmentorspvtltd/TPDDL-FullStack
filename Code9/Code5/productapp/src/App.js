import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductApp } from './container/ProductApp';
import {Uploader} from './components/Uploader'
import { Login } from './components/Login';
class App extends Component {
  render() {
    return (
      <div>
        <Login/>
      {/* <Uploader/>
        <ProductApp/> */}
        </div>
    );
  }
}

export default App;
