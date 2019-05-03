import React, { Component } from 'react';
import StartPageButtons from './StartPageButtons';
import StartPageInfo from "./StartPageInfo";

export class StartPage extends Component {
    render() {
        return (
            <div>
                <StartPageInfo/>

                <StartPageButtons/>
            </div>
        );
    }
}

export default StartPage;