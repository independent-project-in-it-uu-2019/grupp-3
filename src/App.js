import React, {Component} from 'react';
import './App.css';
import headerImg from './images/header.jpg'
import logo from './images/UU_LOGO.png'
import Header from './components/Header'
import StartPage from './components/StartPage';
import SearchPage from './components/SearchPage';
import StartPageInfo from './components/StartPageInfo';
import MoreInfo from './components/MoreInfo';
import SmallInfoBox from './components/SmallInfoBox'
import SmallInfoTech from './components/InfoBoxTech'
import {BrowserRouter as Router, Route} from "react-router-dom";
import BrowsePage from './components/BrowsePage'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header headerImg={headerImg} logo={logo}/>
                <Router>
                    <Route path="/" exact component={StartPage}/>
                    <Route path="/search" exact component={SearchPage}/>
                    <Route path="/tool/:id" exact component={MoreInfo}/>
                    <Route path="/browse" exact component={BrowsePage}/>
                    <Route path="/method/:id" exact component={MoreInfo}/>
                </Router>

            </div>
        );
    }
}

export default App;
