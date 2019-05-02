import React, { Component } from 'react';
import StartPageButtons from './startPage';

export class StartPage extends Component {
    render() {
        return (
            <div>
                <StartPageButtons/>
                <StartPageButtons/>
            </div>
        );
    }
}

export default StartPage;