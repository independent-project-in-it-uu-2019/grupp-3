import React, { Component } from 'react';
import '../css/StartPageButtons.css';
import '../css/colors.css'
import {BrowserRouter as Router, Link} from "react-router-dom";

export class StartPageButtons extends Component {
    render() {
        return (
            <div className="col-md-12 buttonsdiv" role="group" aria-label="ButtonsFrontpage" align="center">
                <Link to={"/search"}>
                    <button type="button" className="startbutton"> Search </button>
                </Link>
                <Link to={"/browse"}>
                    <button type="button" className="startbutton"> Browse </button>
                </Link>
            </div>
        );
    }
}

export default StartPageButtons;

