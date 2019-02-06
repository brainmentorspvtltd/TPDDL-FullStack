import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Shop } from './container/Shop';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Spa App</h1>
        <Shop/>
      </div>);
  }
}

export default App;
