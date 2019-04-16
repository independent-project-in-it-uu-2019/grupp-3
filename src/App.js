import React, { Component } from 'react';
import './App.css';
import headerImg from './images/header.jpg'
import logo from './images/UU_LOGO.png'

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header headerImg={headerImg} logo={logo}/>
      </div>
    );
  }
}

export default App;
