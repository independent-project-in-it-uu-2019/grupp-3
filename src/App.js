import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import headerImg from './images/header.jpg';
import logo from './images/UU_LOGO.png';
import Header from './components/Header';
import StartPage from './components/StartPage';
import SearchPage from './components/SearchPage';
import MoreInfo from './components/MoreInfo';
import About from './components/About';
import Admin from './components/Admin';
import SmallInfoBox from './components/SmallInfoBox'
import SmallInfoTech from './components/InfoBoxTech'
import BrowsePage from './components/BrowsePage'

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
                    <Route path="/About" component={About}/>
                    <Route path="/Admin" component={Admin}/>
                  </Switch>
            </div>
                </Router>
    );
  }
}

export default App;
