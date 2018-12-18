import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from 'header-component';

console.log('Header :', Header);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        This is the main APP
      </div>
    );
  }
}

export default App;
