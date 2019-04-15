import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './startPage.css';

export class StartPage extends Component {
    render() {
        return (
            <div class="buttongroup" role="group" aria-label="ButtonsFrontpage" align="center">
                <button type="button" className="startbutton">Search</button>
                <button type="button" className="startbutton">Browse</button>
            </div>
        );
    }
}

export default StartPage;