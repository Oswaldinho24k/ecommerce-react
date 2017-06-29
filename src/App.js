import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';

import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
