import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import headerImg from './images/header.jpg';
import logo from './images/UU_LOGO.png';
import Header from './components/Header';
import StartPage from './components/StartPage';
import SearchPage from './components/SearchPage';
import MoreInfo from './components/MoreInfo';
import BrowsePage from './components/BrowsePage';

class App extends Component {
  render() {
    return (
          <div className="App">
              <Router>
                  <Header headerImg={headerImg} logo={logo} />
                  <Route path="/" exact component={StartPage} />
                  <Route path="/Search" exact component={SearchPage} />
                  <Route path="/:type/:id" exact component={MoreInfo} />
                  <Route path="/browse" exact component={BrowsePage} />
                </Router>
            </div>
    );
  }
}

export default App;
