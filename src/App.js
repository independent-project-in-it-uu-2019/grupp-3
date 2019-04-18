import React, {Component} from 'react';
import './App.css';
import headerImg from './images/header.jpg'
import logo from './images/UU_LOGO.png'
import Header from './components/Header'
import StartPage from './components/startPage';
import SearchPage from './components/SearchPage';
import MoreInfo from './components/MoreInfo';
import SmallInfoBox from './components/smallInfoBox'
import SmallInfoTech from './components/infoBoxTech'
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header headerImg={headerImg} logo={logo}/>
                <Router>
                    <Route path="/" exact component={StartPage}/>
                    <Route path="/search" exact component={SearchPage}/>
                    <Route path="/more" exact component={MoreInfo}/>
                </Router>
            </div>
        );
    }
}

export default App;
