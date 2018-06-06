import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './header-component/src/App';
import Footer from './footer-component/src/App';

class App extends Component {
  render() {
    let Component;

    if (window.component === 'Header') {
      Component = Header
    } else {
      Component = Footer
    } 
    return (
      <div className="App">
        <Component />
      </div>
    );
  }
}

export default App;
