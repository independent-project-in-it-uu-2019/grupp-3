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
                <Router>
                <Header headerImg={headerImg} logo={logo}/>
                    <Route path="/" exact component={StartPage}/>
                    <Route path="/Search" exact component={SearchPage}/>
                    <Route path="/:type/:id" exact component={MoreInfo}/>
                    <Route path="/Browse" exact component={BrowsePage}/>
                </Router>

            </div>
        );
    }
}

export default App;
