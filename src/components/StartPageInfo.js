import React, { Component } from 'react';
import '../css/startPageInfo.css';
import '../css/circleImage.css';
import CircleImage from "./CircleImage";

export class StartPageInfo extends Component {

    constructor(props) {
        super(props);
        this.renderImageLeft = this.renderImageLeft.bind(this);
        this.renderImageRight = this.renderImageRight.bind(this);
    }

    renderImageRight() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-md-7">
                    <div className="col-md-6 d-md-none" align="center">
                        <CircleImage width={"50vw"} height={"50vw"} imageURL={require('../images/ananas.jpg')}/>
                    </div>
                    <h1>Headline</h1>
                    <p className="bodyText">N.E.F.T is your help to improve your lectures and classes by providing
                        tools to digitalize your content. It will make your classes more
                        available to students and let them consume the material in their own.
                        phase.</p>
                </div>
                <div className="col-md-2">
                    <div className="imgContainer d-none d-md-block float-left">
                        <CircleImage width={"14vw"} height={"14vw"} imageURL={require('../images/ananas.jpg')}/>
                    </div>
                </div>
            </div>
        )
    }

    renderImageLeft() {
        return(
            <div className="row justify-content-center align-items-center">
                <div className="col-md-2">
                    <div className="imgContainer d-none d-md-block float-center">
                        <CircleImage width={"14vw"} height={"14vw"} imageURL={require('../images/ananas.jpg')}/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="col-md-6 d-md-none" align="center">
                        <CircleImage width={"50vw"} height={"50vw"} imageURL={require('../images/ananas.jpg')}/>
                    </div>
                    <h1>Headline</h1>
                    <p className="bodyText">N.E.F.T is your help to improve your lectures and classes by providing
                        tools to digitalize your content. It will make your classes more
                        available to students and let them consume the material in their own.
                        phase.</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderImageLeft()}
                {this.renderImageRight()}
            </div>
        );
    }
}

export default StartPageInfo;