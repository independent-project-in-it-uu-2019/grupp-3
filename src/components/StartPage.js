import React, { Component } from 'react';
import StartPageButtons from './StartPageButtons';
import StartPageInfo from "./StartPageInfo";

export default class StartPage extends Component {
    render() {
        return (
            <div>
                <StartPageButtons/>
                <StartPageInfo/>
                <div style={{height:40}}></div>
            </div>
        );
    }
}
