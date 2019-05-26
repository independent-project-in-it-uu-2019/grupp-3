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
            <div classname="imgright">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    <div className="col-md-6 d-md-none" align="center">
                        <CircleImage width={"50vw"} height={"50vw"} imageURL={require('../images/pic2.jpg')}/>
                    </div>
                    <h1>Learning should be fun</h1>
                    <p className="bodyText">There are references to research literature and
                    educational resources available. Aswell as how to get hold of the TLT tools and instructional
                    material for learning how to use and get the most out of each technology.
                    Feel free to browse the site to see what is available, or use the search function to a specific tools or teaching
                    methodologies. This does not only get education more effective. It also makes it more fun!</p>
                </div>
                <div className="col-md-2">
                    <div className="imgContainer d-none d-md-block float-left">
                        <CircleImage width={"14vw"} height={"14vw"} imageURL={require('../images/pic2.jpg')}/>
                    </div>
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
                        <CircleImage width={"14vw"} height={"14vw"} imageURL={require('../images/pic1.jpg')}/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="col-md-6 d-md-none" align="center">
                        <CircleImage width={"50vw"} height={"50vw"} imageURL={require('../images/pic1.jpg')}/>
                    </div>
                    <h1>What is T.L.T?</h1>
                    <p className="bodyText">T.L.T. - Teaching and Learning Technology is a website at
                    the Faculty of Science and Technology at Uppsala University.
                    The idea behind this website is to provide a source of information and
                    inspiration for all teachers at the faculty about technological tools and
                    teaching methods that can help enhance student learning.</p>
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
