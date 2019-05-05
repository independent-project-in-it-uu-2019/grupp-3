import React, { Component } from 'react';
import '../css/StartPageButtons.css';
import '../css/colors.css'

export class StartPageButtons extends Component {
    render() {
        return (
            <div className="col-md-12 buttonsdiv" role="group" aria-label="ButtonsFrontpage" align="center">
                <button type="button" className="startbutton">Search</button>
                <button type="button" className="startbutton">Browse</button>
            </div>
        );
    }
}

export default StartPageButtons;

