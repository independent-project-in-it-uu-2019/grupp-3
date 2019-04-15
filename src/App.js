import React, { Component } from 'react';
import './App.css';
import SmallInfoBox from './components/smallInfoBox'
import EntryBackground from './images/EntryBackground.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmallInfoBox EntryBackground={EntryBackground}/>
      </div>
    );
  }
}

export default App;
