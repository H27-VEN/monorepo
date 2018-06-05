import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './header-component/src/App';
import Footer from './footer-component/src/App';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
