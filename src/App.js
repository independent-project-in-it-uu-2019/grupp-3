import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import headerImg from './images/header.jpg';
import logo from './images/UU_LOGO.png';
import Header from './components/Header';
import StartPage from './components/StartPage';
import SearchPage from './components/SearchPage';
import MoreInfo from './components/MoreInfo';
import BrowsePage from './components/BrowsePage';

//FELET LIGGER NOG I :TYPE/ID
class App extends Component {
  render() {
    return (
      <Router>
            <div className="App">
                  <Header headerImg={headerImg} logo={logo} />
                  <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/browse" component={BrowsePage} />
                    <Route path="/:type/:id" exact component={MoreInfo} />
                  </Switch>
            </div>
                </Router>
    );
  }
}

//       <Route path="/:type/:id" exact component={MoreInfo} />

export default App;
