import React, { Component } from 'react';
import '../css/startPage.css';

export class StartPageButtons extends Component {
    render() {
        return (
            <div role="group" aria-label="ButtonsFrontpage" align="center">
                <button type="button" className="startbutton">Search</button>
                <button type="button" className="startbutton">Browse</button>
            </div>
        );
    }
}

export default StartPageButtons;

