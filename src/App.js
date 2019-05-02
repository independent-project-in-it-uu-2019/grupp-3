import React, {Component} from 'react';
import './App.css';
import headerImg from './images/header.jpg'
import logo from './images/UU_LOGO.png'
import Header from './components/Header'
import StartPage from './components/startPage';
import SearchPage from './components/SearchPage';
import StartPageInfo from './components/StartPageInfo';
import MoreInfo from './components/MoreInfo';
import SmallInfoBox from './components/smallInfoBox'
import SmallInfoTech from './components/infoBoxTech'
import {BrowserRouter as Router, Route} from "react-router-dom";
import BackgroundImageCircle from './images/ananas.jpg'

class App extends Component {
    render() {
        return (
            <div className="App">
            <Header headerImg={headerImg} logo={logo}/>
            <SmallInfoBox Title="asdkasldasdasdas" Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <SmallInfoBox Title="asdkasldasdasdas" Text="asdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasd sadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafe stqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgreg erasdasdsadkhrelkweröqmdasafestqewqewqeqwt rwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregera sdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregera sdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröq mdasafestqewqewqeqwtrwgregerasdasdsadkhrelkw eröqmdasafestqewqewqeqwtrwgreger"/>
            <SmallInfoBox Title="asdkasldasdasdas" Text="asdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasds adkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasaf estqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgreg erasdasdsadkhrelkweröqmdasafestqewqewqeqwt rwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregera sdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregera sdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröq mdasafestqewqewqeqwtrwgregerasdasdsadkhrelkw eröqmdasafestqewqewqeqwtrwgreger"/>
            <SmallInfoBox Title="asdkasldasdasdas" Text="asdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasds adkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasa estqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgrege rasdasdsadkhrelkweröqmdasafestqewqewqeqwtrw gregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregeras dasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmdasafestqewqewqeqwtrwgregerasdasdsadkhrelkweröqmd asafestqewqewqeqwtrwgregerasdasdsadkhrelkw eröqmdasafestqewqewqeqwtrwgreger"/>
            </div>
        );
    }
}


/*
                <Header headerImg={headerImg} logo={logo}/>
                <Router>
                    <Route path="/" exact component={StartPage}/>
                    <Route path="/search" exact component={SearchPage}/>
                    <Route path="/more" exact component={MoreInfo}/>
                </Router>
*/

export default App;
