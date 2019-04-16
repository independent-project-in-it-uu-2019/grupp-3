import React, { Component } from 'react';
import './App.css';
import SmallInfoBox from './components/smallInfoBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmallInfoBox
          Title="Tool Title"
          Text="At vero eos et accusamus et iusto odio dignissimos ducimus qu blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate nonprovident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        />
      </div>
    );
  }
}

export default App;
